/* ============================================================
   אייקונים — SVG מוטבע, שומר על סגנון אחיד לכל האתר.
   כל אייקון חדש שנוסיף כאן זמין אוטומטית לכרטיסי מכונה חדשים.
   ============================================================ */
const ICONS = {
  popcorn: `<svg viewBox="0 0 64 64" fill="none"><path d="M18 24h28l-4 32a4 4 0 0 1-4 3.6H26a4 4 0 0 1-4-3.6L18 24Z" fill="#FF6B4A"/><path d="M20 24c0-5 4-9 9-9 2 0 3.8.9 5 2.3C35.2 15.9 37 15 39 15c5 0 9 4 9 9" stroke="#241433" stroke-width="2.5" stroke-linecap="round"/><circle cx="27" cy="33" r="3" fill="#fff"/><circle cx="37" cy="38" r="3" fill="#fff"/><circle cx="30" cy="45" r="3" fill="#fff"/></svg>`,
  cottonCandy: `<svg viewBox="0 0 64 64" fill="none"><rect x="30" y="38" width="4" height="18" rx="2" fill="#8B5E3C"/><circle cx="26" cy="24" r="14" fill="#FF9FCB"/><circle cx="38" cy="20" r="12" fill="#B7E7FF"/><circle cx="34" cy="32" r="12" fill="#FFD1E8"/></svg>`,
  waffle: `<svg viewBox="0 0 64 64" fill="none"><rect x="10" y="10" width="44" height="44" rx="10" fill="#FFB84D"/><path d="M10 27h44M10 40h44M27 10v44M40 10v44" stroke="#E85A3B" stroke-width="3"/><circle cx="18" cy="18" r="1.6" fill="#fff"/><circle cx="46" cy="46" r="1.6" fill="#fff"/></svg>`,
  pancake: `<svg viewBox="0 0 64 64" fill="none"><ellipse cx="32" cy="46" rx="20" ry="6" fill="#E8A33D"/><ellipse cx="32" cy="38" rx="18" ry="6" fill="#F2B94E"/><ellipse cx="32" cy="30" rx="16" ry="6" fill="#FFCB66"/><path d="M28 24c3-4 8-4 10 0s0 8-4 8-9-4-6-8Z" fill="#D6246B"/></svg>`,
  hotdog: `<svg viewBox="0 0 64 64" fill="none"><rect x="8" y="26" width="48" height="16" rx="8" fill="#F2C879"/><rect x="12" y="29" width="40" height="10" rx="5" fill="#E85A3B"/><path d="M16 24c4-3 8-3 10 0M38 24c4-3 8-3 10 0" stroke="#241433" stroke-width="2" stroke-linecap="round"/></svg>`,
  ice: `<svg viewBox="0 0 64 64" fill="none"><rect x="14" y="14" width="36" height="36" rx="8" fill="#BFEAFE"/><path d="M14 22h36M22 14v36" stroke="#fff" stroke-width="3"/><path d="M30 26l4 4-4 4" stroke="#2E9BD6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  price: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 12V5a2 2 0 0 1 2-2h7l9 9-9 9-9-9Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="8" cy="8" r="1.6" fill="currentColor"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 20s-8-5-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-8 11-8 11 0 0-2-1-2-1Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`,
  soldier: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2l2.6 5.6L21 8.5l-4.5 4 1.3 6.4L12 15.8 6.2 18.9l1.3-6.4L3 8.5l6.4-.9L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`,
  youth: `<svg viewBox="0 0 24 24" fill="none"><circle cx="8" cy="8" r="3" stroke="currentColor" stroke-width="2"/><circle cx="17" cy="9" r="2.4" stroke="currentColor" stroke-width="2"/><path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-2.5 1.8-4.6 4-5.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  support: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 13v-1a8 8 0 0 1 16 0v1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="2.5" y="13" width="5" height="7" rx="2" stroke="currentColor" stroke-width="2"/><rect x="16.5" y="13" width="5" height="7" rx="2" stroke="currentColor" stroke-width="2"/><path d="M20 20c0 1.7-2 3-5 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  clean: `<svg viewBox="0 0 24 24" fill="none"><path d="M5 3v4M3 5h4M18 3v3M16.5 4.5h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M12 5 3 21h18L12 5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9.5 15.5l1.7 1.8 3.3-3.6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.3 0-.5 0-.1-.6-1.5-.9-2-.2-.5-.5-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.5-.3Z"/><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2c-1.7 0-3.4-.5-4.9-1.3l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Z"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 5c0-1.1.9-2 2-2h2.2c.5 0 .9.3 1 .8l.9 3.6c.1.4 0 .8-.3 1.1L8.3 10c1 2.5 3.2 4.7 5.7 5.7l1.5-1.5c.3-.3.7-.4 1.1-.3l3.6.9c.5.1.8.5.8 1V18c0 1.1-.9 2-2 2h-1C9.8 20 4 14.2 4 6V5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3.5 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  mapPin: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="2"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" stroke-width="2"/><path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 7h11v9H3z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M14 10h4l3 3v3h-7z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="7" cy="18" r="1.8" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="18" r="1.8" stroke="currentColor" stroke-width="2"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  arrowLeft: `<svg viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>`,
  quote: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.6 3C5.9 4.4 4 7.4 4 11.3c0 2.7 1.6 4.7 3.9 4.7 1.9 0 3.3-1.4 3.3-3.2 0-1.7-1.2-3-2.9-3-.2 0-.4 0-.6.1.3-2 1.7-3.6 3.6-4.3L9.6 3Zm9 0c-3.7 1.4-5.6 4.4-5.6 8.3 0 2.7 1.6 4.7 3.9 4.7 1.9 0 3.3-1.4 3.3-3.2 0-1.7-1.2-3-2.9-3-.2 0-.4 0-.6.1.3-2 1.7-3.6 3.6-4.3L18.6 3Z"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`,
};

const money = (n) => `${n.toLocaleString('he-IL')} ₪`;


/* ============================================================
   WhatsApp helpers
   ============================================================ */
function waLink(message){
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/* ============================================================
   INIT — הכל רץ אחרי טעינת ה-DOM
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  setupContactLinks();
  setupHeader();
  renderAdvantages();
  renderMachines();
  renderSteps();
  setupCalculator();
  renderGallery();
  renderTestimonials();
  renderFaq();
  setupContactForm();
  setupReveal();
});

/* ---- header: sticky shadow + mobile nav ---- */
function setupHeader(){
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 12);
  });
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.innerHTML = open ? ICONS.close : ICONS.menu;
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
    toggle.innerHTML = ICONS.menu;
  }));
}

/* ---- fill every whatsapp / phone link on the page from BUSINESS config ---- */
function setupContactLinks(){
  document.querySelectorAll('[data-wa-link]').forEach(el => {
    const msg = el.getAttribute('data-wa-link') || `היי, אשמח לפרטים על השכרת מכונות מ${BUSINESS.name} 🙂`;
    el.href = waLink(msg);
    el.target = '_blank';
    el.rel = 'noopener';
  });
  document.querySelectorAll('[data-phone-link]').forEach(el => { el.href = `tel:${BUSINESS.phoneHref}`; });
  document.querySelectorAll('[data-phone-text]').forEach(el => { el.textContent = BUSINESS.phoneDisplay; });
}

/* ---- advantages ---- */
function renderAdvantages(){
  const wrap = document.getElementById('advantages-grid');
  wrap.innerHTML = ADVANTAGES.map(a => `
    <div class="advantage-card" data-reveal>
      <div class="advantage-icon">${ICONS[a.icon] || ''}</div>
      <h3>${a.title}</h3>
      <p>${a.text}</p>
    </div>`).join('');
}

/* ---- machine cards ---- */
const MACHINE_BG = ['#FFE3D9','#FFE0EF','#FFF1CE','#FFE7D1','#FFE3D9','#DCF3FF'];
function renderMachines(){
  const wrap = document.getElementById('machines-grid');
  wrap.innerHTML = MACHINES.map((m, i) => `
    <article class="machine-card" data-reveal>
      <div class="machine-media" style="background:${MACHINE_BG[i % MACHINE_BG.length]}">
        ${ICONS[m.icon] || ''}
      </div>
      <div class="machine-body">
        <div>
          <h3>${m.name}</h3>
          <p class="machine-tagline">${m.tagline}</p>
        </div>
        <p class="machine-desc">${m.description}</p>
        <div class="machine-tags">${m.suitableFor.map(t => `<span class="machine-tag">${t}</span>`).join('')}</div>
        <div class="machine-footer">
          <div class="ticket machine-price"><b>${m.price}₪</b>&nbsp;<small>/ יום</small></div>
          <a class="machine-details-btn" data-wa-link="${`היי, אשמח לפרטים נוספים על ${m.name} 🙂`}" href="#">
            לפרטים ${ICONS.arrowLeft}
          </a>
        </div>
      </div>
    </article>`).join('');
  setupContactLinks();
}

/* ---- how it works ---- */
function renderSteps(){
  const wrap = document.getElementById('steps-grid');
  wrap.innerHTML = STEPS.map((s, i) => `
    <div class="step" data-reveal>
      <div class="step-num">${i + 1}</div>
      <h3>${s.title}</h3>
      <p>${s.text}</p>
    </div>`).join('');
}

/* ============================================================
   CALCULATOR
   ============================================================ */
let calcDelivery = false; // false = pickup (free), true = delivery (fee)

function setupCalculator(){
  const list = document.getElementById('calc-list');
  list.innerHTML = MACHINES.map(m => `
    <label class="calc-item">
      <input type="checkbox" value="${m.id}" data-price="${m.price}" data-name="${m.name}">
      <div class="calc-item-icon">${ICONS[m.icon] || ''}</div>
      <div class="calc-item-info"><b>${m.name}</b><span>${money(m.price)} ליום</span></div>
      <div class="calc-item-price">${money(m.price)}</div>
    </label>`).join('');

  const pickupBtn = document.getElementById('calc-pickup');
  const deliveryBtn = document.getElementById('calc-delivery');
  pickupBtn.addEventListener('click', () => { calcDelivery = false; updateCalcToggles(); updateCalcTotal(); });
  deliveryBtn.addEventListener('click', () => { calcDelivery = true; updateCalcToggles(); updateCalcTotal(); });
  updateCalcToggles();

  list.addEventListener('change', updateCalcTotal);
  updateCalcTotal();

  document.getElementById('calc-cta').addEventListener('click', (e) => {
    e.preventDefault();
    const checked = [...list.querySelectorAll('input:checked')];
    if(!checked.length){
      alert('נא לבחור לפחות מכונה אחת כדי לקבל הצעת מחיר.');
      return;
    }
    const machinesText = checked.map(c => `- ${c.dataset.name} (${money(+c.dataset.price)})`).join('\n');
    const deliveryText = calcDelivery ? `משלוח (${money(BUSINESS.deliveryFee)})` : 'איסוף עצמי (חינם)';
    const total = calcTotalValue(checked);
    const msg = `היי! אשמח להצעת מחיר עבור:\n${machinesText}\n\n${deliveryText}\nסה"כ משוער: ${money(total)}\n\nפרטי האירוע: `;
    window.open(waLink(msg), '_blank', 'noopener');
  });
}

function updateCalcToggles(){
  document.getElementById('calc-pickup').classList.toggle('active', !calcDelivery);
  document.getElementById('calc-delivery').classList.toggle('active', calcDelivery);
}

function calcTotalValue(checked){
  const machinesTotal = checked.reduce((sum, c) => sum + (+c.dataset.price), 0);
  return machinesTotal + (calcDelivery ? BUSINESS.deliveryFee : 0);
}

function updateCalcTotal(){
  const checked = [...document.querySelectorAll('#calc-list input:checked')];
  const machinesTotal = checked.reduce((sum, c) => sum + (+c.dataset.price), 0);
  const deliveryCost = calcDelivery ? BUSINESS.deliveryFee : 0;
  const total = machinesTotal + deliveryCost;

  document.getElementById('calc-total').textContent = money(total);
  const breakdown = document.getElementById('calc-breakdown');
  breakdown.innerHTML = `
    <div><span>מכונות (${checked.length})</span><span>${money(machinesTotal)}</span></div>
    <div><span>${calcDelivery ? 'משלוח' : 'איסוף עצמי'}</span><span>${calcDelivery ? money(BUSINESS.deliveryFee) : 'חינם'}</span></div>
    <div><span>פיקדון (מוחזר)</span><span>${money(BUSINESS.deposit)}</span></div>
  `;
  const cta = document.getElementById('calc-cta');
  cta.toggleAttribute('disabled', checked.length === 0);
}

/* ============================================================
   GALLERY (illustrated placeholder tiles — see README to swap for real photos)
   ============================================================ */
const GALLERY_ITEMS = [
  { icon: 'popcorn', label: 'עמדת פופקורן באירוע חברה', bg: '#FF6B4A' },
  { icon: 'cottonCandy', label: 'שערות סבתא ביום הולדת', bg: '#D6246B' },
  { icon: 'waffle', label: 'עמדת וופל בלגי בחתונה', bg: '#FFB84D' },
  { icon: 'pancake', label: 'פינת פנקייק בבת מצווה', bg: '#2E9BD6' },
  { icon: 'hotdog', label: 'נקניקיות בפעילות תנועת נוער', bg: '#1FB88F' },
  { icon: 'ice', label: 'תחנת קרח ומשקאות', bg: '#5B4A70' },
];
function renderGallery(){
  const wrap = document.getElementById('gallery-grid');
  wrap.innerHTML = GALLERY_ITEMS.map(g => `
    <div class="gallery-item" style="background:${g.bg}" data-icon="${g.icon}" data-label="${g.label}" data-reveal>
      ${ICONS[g.icon]}
      <span>${g.label}</span>
    </div>`).join('');
  wrap.querySelectorAll('.gallery-item').forEach(el => el.addEventListener('click', () => openLightbox(el.dataset.icon, el.dataset.label)));
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox').addEventListener('click', (e) => { if(e.target.id === 'lightbox') closeLightbox(); });
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeLightbox(); });
}
function openLightbox(icon, label){
  const box = document.getElementById('lightbox-content');
  box.innerHTML = ICONS[icon];
  document.getElementById('lightbox-label').textContent = label;
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox(){ document.getElementById('lightbox').classList.remove('open'); }

/* ============================================================
   TESTIMONIALS SLIDER
   ============================================================ */
let testiIndex = 0;
function renderTestimonials(){
  const track = document.getElementById('testi-slides');
  track.innerHTML = TESTIMONIALS.map(t => `
    <div class="testi-slide">
      <div class="testi-card">
        ${ICONS.quote.replace('<svg', '<svg class="testi-quote"')}
        <p class="testi-text">${t.text}</p>
        <p class="testi-name">${t.name}</p>
      </div>
    </div>`).join('');
  const dotsWrap = document.getElementById('testi-dots');
  dotsWrap.innerHTML = TESTIMONIALS.map((_, i) => `<button class="testi-dot${i === 0 ? ' active' : ''}" aria-label="ביקורת ${i+1}"></button>`).join('');
  dotsWrap.querySelectorAll('.testi-dot').forEach((dot, i) => dot.addEventListener('click', () => goToTesti(i)));
  document.querySelector('.testi-arrow.next').addEventListener('click', () => goToTesti(testiIndex + 1));
  document.querySelector('.testi-arrow.prev').addEventListener('click', () => goToTesti(testiIndex - 1));
  setInterval(() => goToTesti(testiIndex + 1), 6000);
}
function goToTesti(i){
  const len = TESTIMONIALS.length;
  testiIndex = ((i % len) + len) % len;
  document.getElementById('testi-slides').style.transform = `translateX(${testiIndex * 100}%)`;
  document.querySelectorAll('.testi-dot').forEach((d, idx) => d.classList.toggle('active', idx === testiIndex));
}

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
function renderFaq(){
  const wrap = document.getElementById('faq-list');
  wrap.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" data-reveal>
      <button class="faq-q" aria-expanded="false" aria-controls="faq-a-${i}">
        <span>${f.q}</span>${ICONS.plus}
      </button>
      <div class="faq-a" id="faq-a-${i}"><p>${f.a}</p></div>
    </div>`).join('');
  wrap.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      wrap.querySelectorAll('.faq-item.open').forEach(other => {
        other.classList.remove('open');
        other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        other.querySelector('.faq-a').style.maxHeight = null;
      });
      if(!isOpen){
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });
}

/* ============================================================
   CONTACT FORM -> WhatsApp
   ============================================================ */
function setupContactForm(){
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fields = {
      name: form.querySelector('#f-name'),
      phone: form.querySelector('#f-phone'),
      eventType: form.querySelector('#f-event-type'),
      date: form.querySelector('#f-date'),
      message: form.querySelector('#f-message'),
    };
    let valid = true;
    Object.entries(fields).forEach(([key, el]) => {
      const wrapEl = el.closest('.field');
      const required = el.hasAttribute('required');
      const ok = !required || el.value.trim().length > 0;
      wrapEl.classList.toggle('invalid', !ok);
      if(!ok) valid = false;
    });
    if(!valid) return;

    const msg = `היי, שמי ${fields.name.value}.\nסוג אירוע: ${fields.eventType.value}\nתאריך: ${fields.date.value || 'גמיש'}\nטלפון: ${fields.phone.value}\n\n${fields.message.value || ''}`;
    window.open(waLink(msg), '_blank', 'noopener');
  });

  form.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('input', () => el.closest('.field').classList.remove('invalid'));
  });
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function setupReveal(){
  const els = document.querySelectorAll('[data-reveal], [data-reveal-stagger]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
}
