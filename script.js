// ====== PRODUCT DATA (from JK Allied Industries IndiaMART catalog) ======
const products = [
  {
    name: "Mild Steel Cable Suspension Clamp",
    price: "₹ 65", unit: "/Piece",
    specs: "High-strength MS clamp for cable suspension applications",
    icon: "fa-link", category: "clamp"
  },
  {
    name: "Mild Steel Bed Joint Clamp",
    price: "₹ 80", unit: "/Kg",
    specs: "Durable bed joint clamp for structural fittings",
    icon: "fa-link", category: "clamp"
  },
  {
    name: "Mild Steel Low Tension Clamp",
    price: "₹ 200", unit: "/Piece",
    specs: "Reliable LT clamp for power distribution lines",
    icon: "fa-link", category: "clamp"
  },
  {
    name: "Mild Steel High Tension Clamp",
    price: "₹ 200", unit: "/Piece",
    specs: "Heavy-duty HT clamp for high voltage lines",
    icon: "fa-link", category: "clamp"
  },
  {
    name: "CI Metal Casting",
    price: "₹ 550", unit: "/Piece",
    specs: "Cast iron metal casting for industrial use",
    icon: "fa-gear", category: "casting"
  },
  {
    name: "Aluminium Metal Casting",
    price: "₹ 550", unit: "/Kg",
    specs: "Lightweight, corrosion-resistant aluminium casting",
    icon: "fa-gear", category: "casting"
  },
  {
    name: "Brass Metal Castings",
    price: "₹ 1,200", unit: "/Kg",
    specs: "Premium brass castings for precision components",
    icon: "fa-gear", category: "casting"
  },
  {
    name: "Mild Steel Electrical Junction Box",
    price: "₹ 2,500", unit: "/Piece",
    specs: "IP55 rated, robust MS enclosure for electrical wiring",
    icon: "fa-plug-circle-bolt", category: "junction electrical"
  },
  {
    name: "Polycarbonate Electrical Junction Box",
    price: "₹ 2,500", unit: "/Piece",
    specs: "Weatherproof polycarbonate junction box",
    icon: "fa-plug-circle-bolt", category: "junction electrical"
  },
  {
    name: "ABS Electrical Junction Box",
    price: "₹ 2,500", unit: "/Piece",
    specs: "Impact-resistant ABS enclosure, IP rated",
    icon: "fa-plug-circle-bolt", category: "junction electrical"
  },
  {
    name: "WBSEDCL Approved RDSS LT Distribution Box",
    price: "₹ 450", unit: "/Piece",
    specs: "433V, 200A current rating, IP55, pole mount",
    icon: "fa-plug-circle-bolt", category: "junction electrical"
  },
  {
    name: "Double Wheel Barrow Trolley (Angle Patti)",
    price: "₹ 3,000", unit: "/Piece",
    specs: "150L tray, 200kg load capacity, solid rubber wheels",
    icon: "fa-truck-pickup", category: "trolley"
  },
  {
    name: "500Kg Synthetic Rubber Wheelbarrow Trolley",
    price: "₹ 1,800", unit: "/Piece",
    specs: "120L tray, 500kg load capacity, single wheel",
    icon: "fa-truck-pickup", category: "trolley"
  },
  {
    name: "Galvanized Iron Earthing Pipe",
    price: "₹ 340", unit: "/Piece",
    specs: "40mm dia, 3m length, heavy duty class",
    icon: "fa-bolt", category: "electrical"
  },
  {
    name: "Porcelain Industrial Electrical Insulators",
    price: "₹ 350", unit: "/Piece",
    specs: "33kV disc insulator, 120mm creepage distance",
    icon: "fa-bolt", category: "electrical"
  },
  {
    name: "33kV Porcelain Isolator",
    price: "₹ 15,000", unit: "/Piece",
    specs: "Pantograph type, 1250A current rating, outdoor",
    icon: "fa-bolt", category: "electrical"
  },
  {
    name: "11kV Disc Insulator Hardware Fitting",
    price: "₹ 195", unit: "/Piece",
    specs: "MS fitting, 100 sqmm conductor size",
    icon: "fa-bolt", category: "electrical"
  },
  {
    name: "11kV Drop Out Fuse",
    price: "₹ 1,300", unit: "/Set",
    specs: "100A, porcelain insulator, expulsion fuse link",
    icon: "fa-bolt", category: "electrical"
  },
  {
    name: "Rubber Conveyor Belt",
    price: "₹ 1,000", unit: "/Meter",
    specs: "Heavy-duty vulcanised rubber conveyor belting",
    icon: "fa-arrows-left-right", category: "rubber"
  },
  {
    name: "Rubber Endless Conveyor Belt",
    price: "₹ 20,000", unit: "/Piece",
    specs: "Continuous loop conveyor belt for heavy loads",
    icon: "fa-arrows-left-right", category: "rubber"
  },
  {
    name: "Gym Rubber Floor Mat",
    price: "₹ 300", unit: "/Piece",
    specs: "Shock-absorbent mat for gym & industrial flooring",
    icon: "fa-square", category: "rubber"
  },
  {
    name: "Cow Rubber Floor Mat",
    price: "₹ 2,800", unit: "/Piece",
    specs: "Durable rubber matting for cattle sheds",
    icon: "fa-square", category: "rubber"
  },
  {
    name: "UHMWPE Trolley Wheels",
    price: "₹ 450", unit: "/Piece",
    specs: "Ultra high molecular weight PE, wear resistant",
    icon: "fa-circle-dot", category: "wheel"
  },
  {
    name: "PU Trolley Wheel",
    price: "₹ 240", unit: "/Piece",
    specs: "Polyurethane wheel, smooth & quiet operation",
    icon: "fa-circle-dot", category: "wheel"
  },
  {
    name: "E-UHMW Hard Polymer Wheel",
    price: "₹ 128", unit: "/Piece",
    specs: "High load capacity hard polymer wheel",
    icon: "fa-circle-dot", category: "wheel"
  },
  {
    name: "Plastic Polymer Wheels",
    price: "₹ 65", unit: "/Piece",
    specs: "Lightweight, cost-effective polymer wheels",
    icon: "fa-circle-dot", category: "wheel"
  }
];

const grid = document.getElementById('productsGrid');

function renderProducts(filter='all'){
  grid.innerHTML = '';
  const filtered = filter === 'all' ? products : products.filter(p => p.category.split(' ').includes(filter));
  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card aos';
    card.style.transitionDelay = (i % 6) * 0.05 + 's';
    card.innerHTML = `
      <div class="product-img">
        <span class="product-tag">${p.unit.replace('/','Per ')}</span>
        <i class="fa-solid ${p.icon}"></i>
      </div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <p class="product-specs">${p.specs}</p>
        <div class="product-footer">
          <div class="product-price">${p.price}<span>${p.unit}</span></div>
          <button class="enquire-btn" onclick="enquireProduct('${p.name.replace(/'/g, "\\'")}')">Enquire</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  // Trigger animation
  requestAnimationFrame(() => {
    document.querySelectorAll('.product-card.aos').forEach(el => el.classList.add('show'));
  });
}
renderProducts();

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  });
});

// Enquire button -> scroll to contact & prefill
function enquireProduct(name){
  document.getElementById('contact').scrollIntoView({behavior:'smooth'});
  const select = document.getElementById('product');
  // Try to match category broadly
  for (let opt of select.options){
    if (name.toLowerCase().includes(opt.text.toLowerCase().split(' ')[0].toLowerCase())) {
      select.value = opt.value;
      break;
    }
  }
  const msg = document.getElementById('message');
  msg.value = `I am interested in: ${name}. Please share more details and pricing for bulk order.`;
}

// ====== YOUTUBE VIDEO ======
// To add your real video: replace the src below with your YouTube embed URL
// e.g. https://www.youtube.com/embed/YOUR_VIDEO_ID
function loadVideo(){
  const placeholder = document.getElementById('videoPlaceholder');
  const wrap = placeholder.parentElement;
  const videoId = 'Ko43tvT1RNs'; // JK Allied Industries factory video
  wrap.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}?autoplay=1" title="JK Allied Industries Factory Tour" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius:12px;min-height:360px;"></iframe>`;
}

function loadVideo2(){
  const placeholder = document.getElementById('videoPlaceholder2');
  const wrap = placeholder.parentElement;
  const videoId = 'Ko43tvT1RNs'; // JK Allied Industries factory video part 2
  wrap.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}?autoplay=1" title="JK Allied Industries Factory Tour Part 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius:12px;min-height:360px;"></iframe>`;
}


const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
  document.getElementById('backToTop').classList.toggle('show', window.scrollY > 500);

  // Active nav link
  const sections = document.querySelectorAll('section');
  let current = 'home';
  sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.id;
  });
  document.querySelectorAll('.nav a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// ====== Mobile menu ======
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// ====== Back to top ======
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({top:0, behavior:'smooth'});
});

// ====== Scroll reveal animations ======
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, {threshold:0.15});

document.querySelectorAll('.about-content, .about-visual, .why-card, .review-card, .contact-info, .contact-form, .section-head').forEach(el => {
  el.classList.add('aos');
  observer.observe(el);
});

// ====== Contact form ======
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const note = document.getElementById('formNote');
  note.textContent = 'Thank you! Your enquiry has been noted. We will contact you shortly.';
  this.reset();
  setTimeout(() => note.textContent = '', 6000);
});

// ====== Preloader ======
window.addEventListener('load', () => {
  document.getElementById('preloader').classList.add('hide');
});

// ====== TOPBAR duplicate for seamless marquee ======
(function(){
  const inner = document.querySelector('.topbar-inner');
  if(inner){ inner.innerHTML += inner.innerHTML; }
})();

// ====== COOKIE BANNER ======
function acceptCookies(){
  document.getElementById('cookieBanner').classList.add('hide');
  localStorage.setItem('jk_cookie','1');
}
if(localStorage.getItem('jk_cookie')) acceptCookies();

// ====== ANIMATED COUNTERS ======
function animateCounter(el){
  if(el.dataset.animated) return;
  el.dataset.animated = '1';
  const target = +el.dataset.target;
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if(current >= target){ current = target; clearInterval(timer); }
    if(target === 88) el.textContent = Math.floor(current) + '%';
    else if(target === 1000) el.textContent = Math.floor(current).toLocaleString() + '+';
    else el.textContent = Math.floor(current).toLocaleString();
  }, 16);
}
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, {threshold:0.1, rootMargin:'0px 0px -50px 0px'});
const countEls = document.querySelectorAll('.count');
countEls.forEach(el => {
  el.textContent = '0'; // Reset to 0 so animation is visible
  counterObserver.observe(el);
});
// Also trigger on load in case counters are already in viewport
window.addEventListener('load', () => {
  countEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight) animateCounter(el);
  });
});

// ====== AI CHAT (Powered by Claude API) ======
const JK_SYSTEM_PROMPT = `You are the JK Allied Industries AI assistant. You help customers with product enquiries, pricing, and orders. Be concise, friendly and professional. Always respond in under 3 sentences unless listing products.

Company info:
- Name: JK Allied Industries
- Location: Bankra, Howrah, West Bengal – 711403
- Proprietor: N Khan
- Phone/WhatsApp: +91 79802 76522
- Email: jkalliedindustries@gmail.com
- ISO 9001:2015 certified, GST registered
- Supplies pan-India to DISCOMs, contractors, engineers

Products & Prices:
HT Equipment: 11kV Drop Out Fuse ₹1,300/set, 33kV Porcelain Isolator ₹15,000, 11kV Disc Hardware ₹195, Porcelain Disc Insulator ₹350, GI Earthing Pipe ₹340
Clamps: Cable Suspension ₹65, Bed Joint ₹80/kg, LT Clamp ₹200, HT Clamp ₹200
Castings: CI ₹550, Aluminium ₹550/kg, Brass ₹1200/kg
Junction Boxes: MS/PC/ABS ₹2500, WBSEDCL RDSS LT Box ₹450
Trolleys: Double Wheel Barrow ₹3000, 500Kg Rubber Trolley ₹1800
Rubber: Conveyor Belt ₹1000/m, Endless Belt ₹20,000, Gym Mat ₹300, Cow Mat ₹2800
Wheels: UHMWPE ₹450, PU ₹240, Hard Polymer ₹128, Plastic ₹65

Always encourage customers to WhatsApp or call for bulk pricing and custom orders.`;

let chatHistory = [];

async function getAIReply(userMsg) {
  chatHistory.push({ role: 'user', content: userMsg });
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        system: JK_SYSTEM_PROMPT,
        messages: chatHistory
      })
    });
    const data = await response.json();
    const reply = data.content && data.content[0] ? data.content[0].text : aiKnowledge.default;
    chatHistory.push({ role: 'assistant', content: reply });
    return reply;
  } catch(e) {
    return aiKnowledge.default;
  }
}

// Fallback keyword replies (used if API fails)
const aiKnowledge = {
  "default": "Thanks for your question! For the most accurate answer, please WhatsApp or call us at +91 79802 76522. Our team will get back to you promptly."
};

function addMsg(text, sender){
  const messages = document.getElementById('aiMessages');
  const div = document.createElement('div');
  div.className = 'ai-msg ' + sender;
  div.innerHTML = `<div class="ai-bubble">${text}</div>`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function showTyping(){
  const messages = document.getElementById('aiMessages');
  const div = document.createElement('div');
  div.className = 'ai-msg bot'; div.id = 'typingIndicator';
  div.innerHTML = '<div class="ai-typing"><span></span><span></span><span></span></div>';
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function removeTyping(){
  const t = document.getElementById('typingIndicator');
  if(t) t.remove();
}

async function sendAiMsg(){
  const input = document.getElementById('aiInput');
  const val = input.value.trim();
  if(!val) return;
  addMsg(val, 'user');
  input.value = '';
  showTyping();
  const reply = await getAIReply(val);
  removeTyping();
  addMsg(reply, 'bot');
}

function quickAsk(question){
  document.getElementById('aiInput').value = question;
  sendAiMsg();
}

function toggleChat(){
  const chat = document.getElementById('aiChat');
  const badge = document.getElementById('chatBadge');
  chat.classList.toggle('open');
  badge.classList.add('hide');
}
