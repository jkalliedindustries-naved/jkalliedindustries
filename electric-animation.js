// ===== ELECTRIC LIGHTNING ANIMATION =====
(function(){
  const canvas = document.createElement('canvas');
  canvas.id = 'electricCanvas';
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.18;';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let W, H;

  function resize(){
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Color themes for page color shift
  const themes = [
    { bg: '#0a0a1a', accent: '#00eaff' },
    { bg: '#0a1a0a', accent: '#00ff88' },
    { bg: '#1a0a0a', accent: '#ff6600' },
    { bg: '#0a0a2a', accent: '#aa00ff' },
    { bg: '#1a1a00', accent: '#ffcc00' },
  ];
  let themeIdx = 0;
  let lastThemeSwitch = 0;
  const THEME_INTERVAL = 4000;

  // Lightning bolt generator
  function lightning(x1, y1, x2, y2, roughness, depth){
    if(depth === 0){
      ctx.lineTo(x2, y2);
      return;
    }
    const mx = (x1+x2)/2 + (Math.random()-0.5)*roughness;
    const my = (y1+y2)/2 + (Math.random()-0.5)*roughness;
    lightning(x1,y1,mx,my,roughness/2,depth-1);
    lightning(mx,my,x2,y2,roughness/2,depth-1);
  }

  function drawBolt(x1,y1,x2,y2,color,alpha,width){
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.shadowColor = color;
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    lightning(x1,y1,x2,y2,120,6);
    ctx.stroke();
    // bright core
    ctx.lineWidth = width*0.3;
    ctx.strokeStyle = '#ffffff';
    ctx.globalAlpha = alpha*0.6;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    lightning(x1,y1,x2,y2,80,5);
    ctx.stroke();
    ctx.restore();
  }

  // Wire nodes
  const nodes = [];
  for(let i=0;i<8;i++){
    nodes.push({
      x: Math.random()*W,
      y: Math.random()*H,
      vx: (Math.random()-0.5)*0.4,
      vy: (Math.random()-0.5)*0.4,
    });
  }

  // Active bolts
  let bolts = [];
  let flashAlpha = 0;
  let lastBolt = 0;

  function spawnBolt(){
    const i = Math.floor(Math.random()*nodes.length);
    let j = Math.floor(Math.random()*nodes.length);
    while(j===i) j = Math.floor(Math.random()*nodes.length);
    const theme = themes[themeIdx];
    bolts.push({
      x1: nodes[i].x, y1: nodes[i].y,
      x2: nodes[j].x, y2: nodes[j].y,
      life: 1, decay: 0.04 + Math.random()*0.06,
      color: theme.accent,
      width: 1 + Math.random()*2,
    });
    flashAlpha = 0.08;
  }

  // Page color shift
  const heroEl = document.querySelector('.hero');
  const heroOverlay = document.querySelector('.hero-bg-overlay');

  function animate(ts){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,W,H);

    // Theme switch
    if(ts - lastThemeSwitch > THEME_INTERVAL){
      themeIdx = (themeIdx+1) % themes.length;
      lastThemeSwitch = ts;
      // Flash effect
      flashAlpha = 0.15;
    }

    // Spawn bolt
    if(ts - lastBolt > 600 + Math.random()*800){
      spawnBolt();
      if(Math.random()<0.3) spawnBolt(); // double bolt
      lastBolt = ts;
    }

    // Move nodes
    nodes.forEach(n=>{
      n.x += n.vx; n.y += n.vy;
      if(n.x<0||n.x>W) n.vx*=-1;
      if(n.y<0||n.y>H) n.vy*=-1;
    });

    // Draw wire connections (dim)
    nodes.forEach((a,i)=>{
      nodes.forEach((b,j)=>{
        if(j<=i) return;
        const d = Math.hypot(a.x-b.x,a.y-b.y);
        if(d < 300){
          ctx.save();
          ctx.globalAlpha = (1-d/300)*0.06;
          ctx.strokeStyle = themes[themeIdx].accent;
          ctx.lineWidth = 0.5;
          ctx.setLineDash([4,8]);
          ctx.beginPath();
          ctx.moveTo(a.x,a.y);
          ctx.lineTo(b.x,b.y);
          ctx.stroke();
          ctx.restore();
        }
      });
    });

    // Draw nodes
    nodes.forEach(n=>{
      ctx.save();
      ctx.globalAlpha = 0.25;
      ctx.fillStyle = themes[themeIdx].accent;
      ctx.shadowColor = themes[themeIdx].accent;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(n.x,n.y,2.5,0,Math.PI*2);
      ctx.fill();
      ctx.restore();
    });

    // Draw bolts
    bolts = bolts.filter(b => b.life > 0);
    bolts.forEach(b=>{
      drawBolt(b.x1,b.y1,b.x2,b.y2,b.color,b.life*0.8,b.width);
      b.life -= b.decay;
    });

    // Flash overlay on hero
    if(flashAlpha > 0){
      if(heroOverlay){
        heroOverlay.style.background = `rgba(0,200,255,${flashAlpha*0.3})`;
      }
      flashAlpha = Math.max(0, flashAlpha - 0.005);
    } else {
      if(heroOverlay) heroOverlay.style.background = '';
    }
  }

  requestAnimationFrame(animate);

  // Crackle on scroll into hero
  document.addEventListener('scroll', ()=>{
    if(window.scrollY < window.innerHeight){
      if(Math.random()<0.15) spawnBolt();
    }
  });

  // Extra bolt on click anywhere in hero
  if(heroEl){
    heroEl.addEventListener('click', e=>{
      const theme = themes[themeIdx];
      for(let i=0;i<3;i++){
        const tx = e.clientX + (Math.random()-0.5)*200;
        const ty = e.clientY + (Math.random()-0.5)*200;
        bolts.push({
          x1:e.clientX, y1:e.clientY,
          x2:tx, y2:ty,
          life:1, decay:0.03,
          color:theme.accent,
          width:2+Math.random()*2,
        });
      }
      flashAlpha = 0.2;
    });
  }
})();
