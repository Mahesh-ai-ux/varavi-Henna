/* about.js */
document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('js-img');
  if (img) { img.src = SITE.images.about; img.alt = SITE.business.artistName; }
  document.getElementById('js-h').innerHTML       = `The Artist Behind <em>Every Glow</em>`;
  document.getElementById('js-sig').textContent   = SITE.business.artistName;
  document.getElementById('js-brides').textContent= SITE.business.brides;
  document.getElementById('js-bio').textContent   = SITE.business.bio;
  document.getElementById('js-bio2').textContent  = SITE.business.bio2;

  const hl = document.getElementById('js-highlights');
  if (hl) hl.innerHTML = [
    {icon:'🎓', title:'Certified Artist',    text:'Formally trained in bridal & editorial makeup artistry'},
    {icon:'🌿', title:'Natural Products',    text:'Premium skin-safe brands for every tone and type'},
    {icon:'💐', title:'South Asian Expert',  text:'Deep knowledge of traditional wedding aesthetics'},
    {icon:'✨', title:'Long-Lasting Looks',  text:'Tested for 12+ hour wear in South Indian climates'},
  ].map(i => `<div class="hl-item"><span class="hl-icon">${i.icon}</span><div><span class="hl-title">${i.title}</span><span class="hl-text">${i.text}</span></div></div>`).join('');

  const st = document.getElementById('js-stats');
  if (st) st.innerHTML = [
    {n: SITE.business.brides,       l: 'Brides Served'},
    {n: SITE.business.events,       l: 'Events Completed'},
    {n: SITE.business.experience,   l: 'Years of Artistry'},
    {n: SITE.business.rating + '★', l: 'Average Rating'},
  ].map(i => `<div class="stat-item s-item"><div class="stat-big">${i.n}</div><div class="stat-lbl">${i.l}</div></div>`).join('');

  const why = document.getElementById('js-why');
  if (why) why.innerHTML = [
    {icon:'🎨', title:'Personalised Artistry',  desc:'Every look designed for your face, skin tone, and style — never a template.'},
    {icon:'⏱️', title:'Always Punctual',        desc:'We arrive early, work calmly, and finish with time to spare.'},
    {icon:'🌸', title:'Trial Included',         desc:'A full trial so you walk into your wedding day with total confidence.'},
    {icon:'💎', title:'Premium Products Only',  desc:'High-end, long-lasting, skin-safe makeup — nothing less for your special day.'},
    {icon:'🤝', title:'End-to-End Support',     desc:'From first consultation to final touch-up, we are with you every step.'},
    {icon:'📸', title:'Photo-Ready Finish',     desc:'Every look crafted to photograph beautifully indoors and outdoors.'},
  ].map(i => `<article class="why-card s-item"><span class="why-icon">${i.icon}</span><h3 class="why-title">${i.title}</h3><p class="why-desc">${i.desc}</p></article>`).join('');

  const proc = document.getElementById('js-process');
  if (proc) proc.innerHTML = SITE.process.map(p => `
    <div class="process-step s-item">
      <div class="process-num">${p.num}</div>
      <span class="process-icon">${p.icon}</span>
      <h3 class="process-title">${p.title}</h3>
      <p class="process-desc">${p.desc}</p>
    </div>`).join('');
});
