// ====== PRODUCT DATA ======
const products = [
  { name: "Mild Steel Cable Suspension Clamp", price: "₹ 65", unit: "/Piece", specs: "High-strength MS clamp for cable suspension applications", icon: "fa-link", category: "clamp" },
  { name: "Mild Steel Bed Joint Clamp", price: "₹ 80", unit: "/Kg", specs: "Durable bed joint clamp for structural fittings", icon: "fa-link", category: "clamp" },
  { name: "Mild Steel Low Tension Clamp", price: "₹ 200", unit: "/Piece", specs: "Reliable LT clamp for power distribution lines", icon: "fa-link", category: "clamp" },
  { name: "Mild Steel High Tension Clamp", price: "₹ 200", unit: "/Piece", specs: "Heavy-duty HT clamp for high voltage lines", icon: "fa-link", category: "clamp" },
  { name: "CI Metal Casting", price: "₹ 550", unit: "/Piece", specs: "Cast iron metal casting for industrial use", icon: "fa-gear", category: "casting" },
  { name: "Aluminium Metal Casting", price: "₹ 550", unit: "/Kg", specs: "Lightweight, corrosion-resistant aluminium casting", icon: "fa-gear", category: "casting" },
  { name: "Brass Metal Castings", price: "₹ 1,200", unit: "/Kg", specs: "Premium brass castings for precision components", icon: "fa-gear", category: "casting" },
  { name: "Mild Steel Electrical Junction Box", price: "₹ 2,500", unit: "/Piece", specs: "IP55 rated, robust MS enclosure for electrical wiring", icon: "fa-plug-circle-bolt", category: "junction electrical" },
  { name: "Polycarbonate Electrical Junction Box", price: "₹ 2,500", unit: "/Piece", specs: "Weatherproof polycarbonate junction box", icon: "fa-plug-circle-bolt", category: "junction electrical" },
  { name: "ABS Electrical Junction Box", price: "₹ 2,500", unit: "/Piece", specs: "Impact-resistant ABS enclosure, IP rated", icon: "fa-plug-circle-bolt", category: "junction electrical" },
  { name: "WBSEDCL Approved RDSS LT Distribution Box", price: "₹ 450", unit: "/Piece", specs: "433V, 200A current rating, IP55, pole mount", icon: "fa-plug-circle-bolt", category: "junction electrical" },
  { name: "Double Wheel Barrow Trolley (Angle Patti)", price: "₹ 3,000", unit: "/Piece", specs: "150L tray, 200kg load capacity, solid rubber wheels", icon: "fa-truck-pickup", category: "trolley" },
  { name: "500Kg Synthetic Rubber Wheelbarrow Trolley", price: "₹ 1,800", unit: "/Piece", specs: "120L tray, 500kg load capacity, single wheel", icon: "fa-truck-pickup", category: "trolley" },
  { name: "Galvanized Iron Earthing Pipe", price: "₹ 340", unit: "/Piece", specs: "40mm dia, 3m length, heavy duty class", icon: "fa-bolt", category: "electrical" },
  { name: "Porcelain Industrial Electrical Insulators", price: "₹ 350", unit: "/Piece", specs: "33kV disc insulator, 120mm creepage distance", icon: "fa-bolt", category: "electrical" },
  { name: "33kV Porcelain Isolator", price: "₹ 15,000", unit: "/Piece", specs: "Pantograph type, 1250A current rating, outdoor", icon: "fa-bolt", category: "electrical" },
  { name: "11kV Disc Insulator Hardware Fitting", price: "₹ 195", unit: "/Piece", specs: "MS fitting, 100 sqmm conductor size", icon: "fa-bolt", category: "electrical" },
  { name: "11kV Drop Out Fuse", price: "₹ 1,300", unit: "/Set", specs: "100A, porcelain insulator, expulsion fuse link", icon: "fa-bolt", category: "electrical" },
  { name: "Rubber Conveyor Belt", price: "₹ 1,000", unit: "/Meter", specs: "Heavy-duty vulcanised rubber conveyor belting", icon: "fa-arrows-left-right", category: "rubber" },
  { name: "Rubber Endless Conveyor Belt", price: "₹ 20,000", unit: "/Piece", specs: "Continuous loop conveyor belt for heavy loads", icon: "fa-arrows-left-right", category: "rubber" },
  { name: "Gym Rubber Floor Mat", price: "₹ 300", unit: "/Piece", specs: "Shock-absorbent mat for gym & industrial flooring", icon: "fa-square", category: "rubber" },
  { name: "Cow Rubber Floor Mat", price: "₹ 2,800", unit: "/Piece", specs: "Durable rubber matting for cattle sheds", icon: "fa-square", category: "rubber" },
  { name: "UHMWPE Trolley Wheels", price: "₹ 450", unit: "/Piece", specs: "Ultra high molecular weight PE, wear resistant", icon: "fa-circle-dot", category: "wheel" },
  { name: "PU Trolley Wheel", price: "₹ 240", unit: "/Piece", specs: "Polyurethane wheel, smooth & quiet operation", icon: "fa-circle-dot", category: "wheel" },
  { name: "E-UHMW Hard Polymer Wheel", price: "₹ 128", unit: "/Piece", specs: "High load capacity hard polymer wheel", icon: "fa-circle-dot", category: "wheel" },
  { name: "Plastic Polymer Wheels", price: "₹ 65", unit: "/Piece", specs: "Lightweight, cost-effective polymer wheels", icon: "fa-circle-dot", category: "wheel" }
];

// ====== PRODUCTS GRID (only on pages that have it) ======
const grid = document.getElementById('productsGrid');
function renderProducts(filter='all'){
  if(!grid) return;
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
  requestAnimationFrame(() => {
    document.querySelectorAll('.product-card.aos').forEach(el => el.classList.add('show'));
  });
}
renderProducts();

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const active = document.querySelector('.filter-btn.active');
    if(active) active.classList.remove('active');
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  });
});

// Enquire button
function enquireProduct(name){
  const contactEl = document.getElementById('contact');
  if(contactEl) contactEl.scrollIntoView({behavior:'smooth'});
  const select = document.getElementById('product');
  if(select){
    for (let opt of select.options){
      if (name.toLowerCase().includes(opt.text.toLowerCase().split(' ')[0].toLowerCase())) {
        select.value = opt.value;
        break;
      }
    }
  }
  const msg = document.getElementById('message');
  if(msg) msg.value = `I am interested in: ${name}. Please share more details and pricing for bulk order.`;
}

// ====== YOUTUBE VIDEO ======
function loadVideo(){
  const placeholder = document.getElementById('videoPlaceholder');
  if(!placeholder) return;
  const wrap = placeholder.parentElement;
  const videoId = 'Ko43tvT1RNs';
  wrap.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}?autoplay=1" title="JK Allied Industries Factory Tour" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius:12px;min-height:360px;"></iframe>`;
}

function loadVideo2(){
  const placeholder = document.getElementById('videoPlaceholder2');
  if(!placeholder) return;
  const wrap = placeholder.parentElement;
  const videoId = 'Ko43tvT1RNs';
  wrap.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}?autoplay=1" title="JK Allied Industries Factory Tour Part 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius:12px;min-height:360px;"></iframe>`;
}

// ====== HEADER SCROLL ======
const header = document.getElementById('header');
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if(header) header.classList.toggle('scrolled', window.scrollY > 40);
  if(backToTopBtn) backToTopBtn.classList.toggle('show', window.scrollY > 500);
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
if(hamburger && nav){
  hamburger.addEventListener('click', () => nav.classList.toggle('open'));
  document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

// ====== Back to top ======
if(backToTopBtn){
  backToTopBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
}

// ====== Scroll reveal ======
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('show'); });
}, {threshold:0.15});
document.querySelectorAll('.about-content, .about-visual, .why-card, .review-card, .contact-info, .contact-form, .section-head').forEach(el => {
  el.classList.add('aos');
  observer.observe(el);
});

// ====== Contact form ======
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const note = document.getElementById('formNote');
    if(note) note.textContent = 'Thank you! Your enquiry has been noted. We will contact you shortly.';
    this.reset();
    setTimeout(() => { if(note) note.textContent = ''; }, 6000);
  });
}

// ====== Preloader ======
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if(preloader) preloader.classList.add('hide');
});

// ====== Topbar marquee ======
(function(){
  const inner = document.querySelector('.topbar-inner');
  if(inner){ inner.innerHTML += inner.innerHTML; }
})();

// ====== Cookie banner ======
function acceptCookies(){
  const banner = document.getElementById('cookieBanner');
  if(banner) banner.classList.add('hide');
  try { localStorage.setItem('jk_cookie','1'); } catch(e){}
}
try { if(localStorage.getItem('jk_cookie')) acceptCookies(); } catch(e){}

// ====== Animated counters ======
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
    if(entry.isIntersecting){ animateCounter(entry.target); counterObserver.unobserve(entry.target); }
  });
}, {threshold:0.1, rootMargin:'0px 0px -50px 0px'});
const countEls = document.querySelectorAll('.count');
countEls.forEach(el => {
  el.textContent = '0';
  counterObserver.observe(el);
});
window.addEventListener('load', () => {
  countEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight) animateCounter(el);
  });
});

// ====== AI CHAT ======
const botReplies = [
  { keys: ['gang','ab switch','air break'], reply: '⚡ <b>Gang AB Switch</b><br>Available in 11kV and 33kV. Gang operated 3-phase switch for overhead HT lines. WBSEDCL approved.<br><br>📞 Call/WhatsApp: <a href="https://wa.me/917980276522">+91 79802 76522</a>' },
  { keys: ['do fuse','drop out','fuse set','fuse'], reply: '🔌 <b>11kV DO Fuse Set</b><br>Complete Drop Out Fuse Set with polymer/porcelain insulator. Price: ₹1,300/set. Bulk orders welcome!<br><br>📞 <a href="https://wa.me/917980276522">WhatsApp for bulk quote</a>' },
  { keys: ['isolator','porcelain isolator'], reply: '🔩 <b>Porcelain Isolator</b><br>Available in 11kV and 33kV. Price: ₹15,000 for 33kV.<br><br>📞 <a href="https://wa.me/917980276522">+91 79802 76522</a>' },
  { keys: ['disc insulator','disc'], reply: '💿 <b>Porcelain Disc Insulator</b><br>Price: ₹350/disc. Disc hardware at ₹195.<br><br>📞 <a href="https://wa.me/917980276522">WhatsApp for bulk order</a>' },
  { keys: ['clamp','lt clamp','ht clamp'], reply: '🔧 <b>MS Clamps</b><br>LT Clamp: ₹200 | HT Clamp: ₹200 | Suspension: ₹65<br><br>📞 <a href="https://wa.me/917980276522">Call for bulk pricing</a>' },
  { keys: ['smc','distribution box','lt box','rdss'], reply: '📦 <b>Distribution Boxes</b><br>RDSS LT Box: ₹450 | MS/PC/ABS Junction Box: ₹2,500<br><br>📞 <a href="https://wa.me/917980276522">+91 79802 76522</a>' },
  { keys: ['casting','metal casting','ci','aluminium','brass'], reply: '🏭 <b>Metal Castings</b><br>CI: ₹550/kg | Aluminium: ₹550/kg | Brass: ₹1,200/kg<br><br>📞 <a href="https://wa.me/917980276522">WhatsApp for quote</a>' },
  { keys: ['trolley','wheelbarrow','wheel barrow'], reply: '🛒 <b>Trolleys</b><br>Double Wheel Barrow: ₹3,000 | 500Kg Rubber: ₹1,800<br><br>📞 <a href="https://wa.me/917980276522">+91 79802 76522</a>' },
  { keys: ['wheel','uhmwpe','pu wheel','polymer wheel'], reply: '⚙️ <b>Trolley Wheels</b><br>UHMWPE: ₹450 | PU: ₹240 | Hard Polymer: ₹128 | Plastic: ₹65<br><br>📞 <a href="https://wa.me/917980276522">WhatsApp for bulk</a>' },
  { keys: ['rubber','conveyor belt','gym mat','cow mat'], reply: '♾️ <b>Rubber Products</b><br>Conveyor Belt: ₹1,000/m | Endless Belt: ₹20,000 | Gym Mat: ₹300 | Cow Mat: ₹2,800<br><br>📞 <a href="https://wa.me/917980276522">+91 79802 76522</a>' },
  { keys: ['price','cost','rate','how much','pricing'], reply: '💰 <b>Our Price List</b><br>DO Fuse: ₹1,300 | RDSS LT Box: ₹450 | Clamp: ₹200 | Disc Insulator: ₹350 | Wheelbarrow: ₹3,000<br><br>For bulk: <a href="https://wa.me/917980276522">WhatsApp us</a>' },
  { keys: ['bulk','wholesale','large order','quantity'], reply: '📦 <b>Bulk Orders Welcome!</b><br>Special bulk pricing for DISCOMs, contractors & engineers.<br><br>📞 <a href="https://wa.me/917980276522">+91 79802 76522</a>' },
  { keys: ['location','address','where','howrah','bankra'], reply: '📍 <b>Our Location</b><br>Bankra, Howrah, West Bengal – 711403<br><br>📞 <a href="https://wa.me/917980276522">+91 79802 76522</a>' },
  { keys: ['hello','hi','hey','namaste'], reply: '👋 <b>Hello! Welcome to JK Allied Industries!</b><br>What are you looking for today?' },
  { keys: ['thank','thanks','ok','okay'], reply: '😊 Happy to help! <a href="https://wa.me/917980276522">WhatsApp: +91 79802 76522</a>' },
  { keys: ['delivery','shipping','pan india','supply'], reply: '🚚 <b>Pan-India Delivery</b><br>Fast dispatch from Bankra, Howrah to all states.<br><br>📞 <a href="https://wa.me/917980276522">+91 79802 76522</a>' },
];
const defaultReply = '🤝 For the fastest response, WhatsApp our team directly.<br><br>📞 <a href="https://wa.me/917980276522" target="_blank">+91 79802 76522</a><br>📧 jkalliedindustries@gmail.com';

function getSmartReply(msg) {
  const lower = msg.toLowerCase();
  for (const item of botReplies) {
    if (item.keys.some(k => lower.includes(k))) return item.reply;
  }
  return defaultReply;
}

function addMsg(text, sender){
  const messages = document.getElementById('aiMessages');
  if(!messages) return;
  const div = document.createElement('div');
  div.className = 'ai-msg ' + sender;
  div.innerHTML = `<div class="ai-bubble">${text}</div>`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function showTyping(){
  const messages = document.getElementById('aiMessages');
  if(!messages) return;
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
  if(!input) return;
  const val = input.value.trim();
  if(!val) return;
  addMsg(val, 'user');
  input.value = '';
  showTyping();
  const reply = getSmartReply(val);
  setTimeout(() => { removeTyping(); addMsg(reply, 'bot'); }, 600);
}

function quickAsk(question){
  const input = document.getElementById('aiInput');
  if(input){ input.value = question; sendAiMsg(); }
}

function toggleChat(){
  const chat = document.getElementById('aiChat');
  const badge = document.getElementById('chatBadge');
  if(chat) chat.classList.toggle('open');
  if(badge) badge.classList.add('hide');
}
