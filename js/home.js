/* home.js — Home page */
document.addEventListener('DOMContentLoaded', () => {
  // Hero
  const bg = document.getElementById('js-hero-bg');
  if (bg) { bg.style.backgroundImage = `url('${SITE.images.hero}')`; requestAnimationFrame(() => bg.classList.add('loaded')); }
  const words = SITE.business.tagline.split(' ');
  const mid   = Math.ceil(words.length / 2);
  const t     = document.getElementById('js-hero-title');
  if (t) t.innerHTML = `${words.slice(0,mid).join(' ')}<br><em>${words.slice(mid).join(' ')}</em>`;
  const sub = document.getElementById('js-hero-sub');
  if (sub) sub.textContent = SITE.services.map(s => s.title).join('  ·  ');
  const hs = document.getElementById('js-hero-stats');
  if (hs) hs.innerHTML = [
    {n: SITE.business.brides,       l: 'Happy Brides'},
    {n: SITE.business.rating + '★', l: 'Client Rating'},
    {n: SITE.business.experience,   l: 'Years Experience'},
  ].map(i => `<div class="hero-stat"><span class="hero-stat-n">${i.n}</span><span class="hero-stat-l">${i.l}</span></div>`).join('');

  // Strip
  const strip = document.getElementById('js-strip');
  if (strip) strip.innerHTML = [
    {icon:'📍', text: SITE.contact.location},
    {icon:'📞', text: SITE.contact.phone},
    {icon:'⏰', text: SITE.contact.hours},
    {icon:'⭐', text: `${SITE.business.rating} Rating · ${SITE.business.reviewCount} Reviews`},
  ].map(i => `<div class="strip-item"><span class="strip-icon">${i.icon}</span><span class="strip-text">${i.text}</span></div>`).join('');

  // About
  const ai = document.getElementById('js-about-img');
  if (ai) { ai.src = SITE.images.about; ai.alt = SITE.business.artistName; }
  const ah = document.getElementById('js-about-h');
  if (ah) ah.innerHTML = `Meet <em>${SITE.business.artistName}</em>`;
  const sig = document.getElementById('js-about-sig');
  if (sig) { sig.textContent = SITE.business.artistName; sig.style.cssText = 'margin:1.2rem 0 1.8rem'; }
  document.getElementById('js-about-yrs').textContent  = SITE.business.experience;
  document.getElementById('js-about-bio').textContent  = SITE.business.bio;
  document.getElementById('js-about-bio2').textContent = SITE.business.bio2;
  const ast = document.getElementById('js-about-stats');
  if (ast) ast.innerHTML = [
    {n: SITE.business.brides,     l: 'Happy Brides'},
    {n: SITE.business.events,     l: 'Events Done'},
    {n: SITE.business.experience, l: 'Years Active'},
  ].map(i => `<div class="a-stat s-item"><div class="a-stat-n">${i.n}</div><div class="a-stat-l">${i.l}</div></div>`).join('');

  // Services
  const sg = document.getElementById('js-svc-grid');
  if (sg) sg.innerHTML = SITE.services.map((s,i) => `
    <article class="svc-card ${s.featured?'featured':''} s-item">
      ${s.badge ? `<span class="svc-badge">${s.badge}</span>` : ''}
      <span class="svc-bg-n">0${i+1}</span>
      <span class="svc-icon">${s.icon}</span>
      <h3 class="svc-title">${s.title}</h3>
      <p class="svc-desc">${s.short}</p>
      <a href="services.html#${s.id}" class="svc-link">Learn More</a>
    </article>`).join('');

  // Gallery preview
  const gg = document.getElementById('js-gp-grid');
  if (gg) SITE.gallery.slice(0,7).forEach(item => {
    const d = document.createElement('article');
    d.className = `gp-item${item.span==='wide'?' wide':''} reveal`;
    d.innerHTML = `<img src="${item.image}" alt="${item.title}" loading="lazy"/><div class="gp-cap"><div class="gp-title">${item.title}</div><div class="gp-cat">${item.category}</div></div>`;
    gg.appendChild(d);
  });

  // Reviews
  const rg = document.getElementById('js-reviews');
  if (rg) rg.innerHTML = SITE.testimonials.map(r => `
    <article class="rv-card s-item">
      <div class="rv-stars">${stars(r.stars)}</div>
      <blockquote class="rv-text">${r.text}</blockquote>
      <footer class="rv-author">
        <div class="rv-avatar" style="background:${r.color}">${r.initials}</div>
        <div><div class="rv-name">${r.name}</div><div class="rv-event">${r.event}</div></div>
      </footer>
    </article>`).join('');

  // Instagram & WA links
  const igH = document.getElementById('js-ig-handle');
  const igL = document.getElementById('js-ig-link');
  const wa  = document.getElementById('js-wa-cta');
  const msg = encodeURIComponent("Hi Varalakshmi! I'd like to enquire about your services.");
  if (igH) igH.textContent = `@${SITE.contact.instagram}`;
  if (igL) igL.href = `https://instagram.com/${SITE.contact.instagram}`;
  if (wa)  wa.href  = `https://wa.me/${SITE.contact.whatsapp}?text=${msg}`;
});
