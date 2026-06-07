/**
 * main.js — Shared across ALL pages
 * Nav · Footer · WhatsApp float · Scroll progress · Reveal animations
 */
document.addEventListener('DOMContentLoaded', () => {
  injectNav();
  injectFooter();
  injectWhatsApp();
  initProgress();
  initNavScroll();
  initReveal();
});

/* ── NAV ── */
function injectNav() {
  const page  = location.pathname.split('/').pop() || 'index.html';
  const links = SITE.nav.map(n =>
    `<li><a href="${n.href}"${page===n.href?' class="active"':''}>${n.label}</a></li>`
  ).join('');
  const mobileLinks = SITE.nav.map(n =>
    `<a href="${n.href}" class="drawer-link">${n.label}</a>`
  ).join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <div id="progress-bar"></div>
    <nav id="navbar">
      <a href="index.html" class="logo">
        <span class="logo-name">${SITE.business.shortName}</span>
        <span class="logo-sub">by ${SITE.business.artistName}</span>
      </a>
      <ul class="nav-links">${links}</ul>
      <a href="contact.html" class="nav-cta">Book Now</a>
      <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div class="drawer" id="drawer" aria-hidden="true">
      <button class="drawer-close" id="drawerClose" aria-label="Close menu">✕</button>
      ${mobileLinks}
      <a href="contact.html" class="drawer-cta">Book a Consultation</a>
    </div>
  `);

  const ham    = document.getElementById('hamburger');
  const drawer = document.getElementById('drawer');
  const open   = () => { drawer.classList.add('open'); ham.setAttribute('aria-expanded','true'); document.body.style.overflow='hidden'; };
  const close  = () => { drawer.classList.remove('open'); ham.setAttribute('aria-expanded','false'); document.body.style.overflow=''; };
  ham.addEventListener('click', open);
  document.getElementById('drawerClose').addEventListener('click', close);
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}

/* ── FOOTER ── */
function injectFooter() {
  const svcLinks = SITE.services.map(s=>`<li><a href="services.html#${s.id}">${s.title}</a></li>`).join('');
  const navLinks = SITE.nav.map(n=>`<li><a href="${n.href}">${n.label}</a></li>`).join('');
  document.body.insertAdjacentHTML('beforeend', `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <span class="footer-name">${SITE.business.name}</span>
            <span class="footer-by">by ${SITE.business.artistName}</span>
            <p class="footer-about">${SITE.business.tagline}. Serving brides across Chennai and beyond.</p>
            <div class="footer-socials">
              <a href="https://instagram.com/${SITE.contact.instagram}" target="_blank" rel="noopener" aria-label="Instagram" class="fsoc">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://wa.me/${SITE.contact.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp" class="fsoc">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </a>
              <a href="mailto:${SITE.contact.email}" aria-label="Email" class="fsoc">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>
          <div class="footer-col"><h4>Services</h4><ul>${svcLinks}</ul></div>
          <div class="footer-col"><h4>Navigate</h4><ul>${navLinks}</ul></div>
          <div class="footer-col"><h4>Contact</h4><ul>
            <li><a href="tel:${SITE.contact.phone}">${SITE.contact.phone}</a></li>
            <li><a href="mailto:${SITE.contact.email}">${SITE.contact.email}</a></li>
            <li><a href="${SITE.contact.mapLink}" target="_blank" rel="noopener">${SITE.contact.location}</a></li>
            <li><span>${SITE.contact.hours}</span></li>
          </ul></div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} ${SITE.business.name}. All rights reserved.</span>
          <span>Made with ♥ for Varalakshmi</span>
        </div>
      </div>
    </footer>
  `);
}

/* ── WHATSAPP ── */
function injectWhatsApp() {
  const msg = encodeURIComponent("Hi Varalakshmi! I'd like to enquire about your services.");
  document.body.insertAdjacentHTML('beforeend', `
    <a href="https://wa.me/${SITE.contact.whatsapp}?text=${msg}" target="_blank" rel="noopener"
       class="wa-btn" aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      <span class="wa-tip">Chat on WhatsApp</span>
    </a>
  `);
}

/* ── PROGRESS BAR ── */
function initProgress() {
  window.addEventListener('scroll', () => {
    const bar = document.getElementById('progress-bar');
    if (bar) bar.style.width = (scrollY / (document.body.scrollHeight - innerHeight) * 100) + '%';
  }, { passive: true });
}

/* ── NAV SCROLL STATE ── */
function initNavScroll() {
  const toggle = () => document.getElementById('navbar')?.classList.toggle('scrolled', scrollY > 60);
  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
}

/* ── REVEAL ON SCROLL ── */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('visible');
      if (e.target.dataset.stagger !== undefined) {
        e.target.querySelectorAll('.s-item').forEach((c, i) =>
          setTimeout(() => c.classList.add('visible'), i * 120));
      }
      io.unobserve(e.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal, .reveal-l, .reveal-r, [data-stagger]').forEach(el => io.observe(el));
}

/* ── UTILITY ── */
function stars(n) { return '★'.repeat(n) + '☆'.repeat(5 - n); }
