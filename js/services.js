/* services.js */
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('js-services-list');
  if (container) container.innerHTML = SITE.services.map((s,i) => `
    <section class="svc-section" id="${s.id}">
      <div class="container">
        <div class="svc-layout ${i%2!==0?'flip':''} reveal">
          <div class="svc-photo">
            <img src="${s.image}" alt="${s.title}" loading="lazy"/>
            ${s.badge?`<div class="svc-photo-tag"><span>${s.badge}</span></div>`:''}
          </div>
          <div class="svc-info">
            ${s.badge?`<span class="svc-badge-top">${s.badge}</span>`:''}
            <span class="svc-big-icon">${s.icon}</span>
            <h2 class="svc-big-title">${s.title.split(' ').slice(0,-1).join(' ')} <em>${s.title.split(' ').slice(-1)}</em></h2>
            <div class="divider"></div>
            <p class="svc-big-desc">${s.desc}</p>
            <p class="includes-lbl">What's Included</p>
            <ul class="includes-list">${s.includes.map(x=>`<li>${x}</li>`).join('')}</ul>
            <a href="contact.html?service=${s.id}" class="btn btn-gold">Book This Service</a>
          </div>
        </div>
      </div>
    </section>`).join('');

  const rev = document.getElementById('js-reviews');
  if (rev) rev.innerHTML = SITE.testimonials.map(r=>`
    <article class="svc-rev s-item">
      <div class="svc-rev-stars">${stars(r.stars)}</div>
      <blockquote class="svc-rev-text">${r.text}</blockquote>
      <div class="svc-rev-name">${r.name}</div>
      <div class="svc-rev-event">${r.event}</div>
    </article>`).join('');

  if (location.hash) setTimeout(()=>{ const el=document.querySelector(location.hash); if(el) el.scrollIntoView({behavior:'smooth'}); },600);
});
