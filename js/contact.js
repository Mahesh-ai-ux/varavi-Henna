/* contact.js */
document.addEventListener('DOMContentLoaded', () => {
  // Contact details
  const d = document.getElementById('js-details');
  if (d) d.innerHTML = [
    {icon:'📞', lbl:'Phone / WhatsApp', val: SITE.contact.phone,    href:`tel:${SITE.contact.phone}`},
    {icon:'✉️', lbl:'Email',            val: SITE.contact.email,    href:`mailto:${SITE.contact.email}`},
    {icon:'📍', lbl:'Location',         val: SITE.contact.location, href: SITE.contact.mapLink},
    {icon:'⏰', lbl:'Working Hours',    val: SITE.contact.hours,    href: null},
  ].map(i=>`
    <div class="c-detail">
      <div class="c-detail-icon">${i.icon}</div>
      <div>
        <span class="c-detail-lbl">${i.lbl}</span>
        <span class="c-detail-val">${i.href?`<a href="${i.href}"${i.href.startsWith('http')?' target="_blank" rel="noopener"':''}>${i.val}</a>`:i.val}</span>
      </div>
    </div>`).join('');

  // Socials
  const s = document.getElementById('js-socials');
  const msg = encodeURIComponent("Hi Varalakshmi! I'd like to enquire about your services.");
  if (s) s.innerHTML = `
    <div class="c-social-links">
      <a href="https://instagram.com/${SITE.contact.instagram}" target="_blank" rel="noopener" class="soc-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg>
        Instagram
      </a>
      <a href="https://wa.me/${SITE.contact.whatsapp}?text=${msg}" target="_blank" rel="noopener" class="soc-btn soc-btn-wa">
        <svg viewBox="0 0 24 24" fill="currentColor" width="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        WhatsApp
      </a>
    </div>`;

  // Map
  const mh = document.getElementById('js-map-h'), ml = document.getElementById('js-map-link');
  if (mh) mh.innerHTML = `Visit Us in <em>${SITE.contact.location}</em>`;
  if (ml) ml.href = SITE.contact.mapLink;

  // Pre-fill service from URL
  const param = new URLSearchParams(location.search).get('service');
  if (param) { const sel = document.getElementById('f-service'); if(sel) sel.value = param; }

  // Form validation
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    const clr = () => form.querySelectorAll('.form-group').forEach(g=>g.classList.remove('has-error'));
    const err = (id, msg) => { const el=document.getElementById(id); if(el){ el.textContent=msg; el.closest('.form-group').classList.add('has-error'); ok=false; } };
    clr();
    if (!form.querySelector('#f-name').value.trim())    err('err-name','Please enter your name');
    if (!form.querySelector('#f-phone').value.trim())   err('err-phone','Please enter your phone number');
    const em = form.querySelector('#f-email').value;
    if (em && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em))  err('err-email','Please enter a valid email');
    if (!form.querySelector('#f-service').value)        err('err-service','Please select a service');
    if (!ok) return;
    const btn = document.getElementById('js-submit');
    btn.disabled = true; btn.textContent = 'Sending…';
    setTimeout(() => {
      btn.hidden = true;
      document.getElementById('js-success').hidden = false;
      form.reset();
    }, 1400);
  });
  form.querySelectorAll('.form-inp,.form-sel,.form-txt').forEach(f =>
    f.addEventListener('input', () => f.closest('.form-group').classList.remove('has-error'))
  );
});
