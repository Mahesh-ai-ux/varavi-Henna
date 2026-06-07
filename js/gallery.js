/* gallery.js */
let visible=[], idx=0;
document.addEventListener('DOMContentLoaded', () => {
  render('all');
  document.querySelectorAll('.filter-btn').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    render(b.dataset.filter);
  }));
  initLightbox();
  const h=document.getElementById('js-ig-handle'), l=document.getElementById('js-ig-link');
  if(h) h.textContent=SITE.contact.instagram;
  if(l) l.href=`https://instagram.com/${SITE.contact.instagram}`;
});

function render(filter) {
  const grid=document.getElementById('js-gallery');
  if(!grid) return;
  visible = filter==='all' ? SITE.gallery : SITE.gallery.filter(i=>i.category===filter);
  grid.innerHTML = visible.map((item,i)=>`
    <article class="g-card${item.span==='wide'?' wide':''}" data-index="${i}" tabindex="0" role="button" aria-label="View ${item.title}">
      <img src="${item.image}" alt="${item.title}" loading="lazy"/>
      <div class="g-overlay"><div class="g-title">${item.title}</div><div class="g-cat">${item.category}</div></div>
      <div class="g-zoom">🔍</div>
    </article>`).join('');
  const c=document.getElementById('js-count');
  if(c) c.textContent=`Showing ${visible.length} ${filter==='all'?'works':filter+' works'}`;
  grid.querySelectorAll('.g-card').forEach(card=>{
    card.addEventListener('click', ()=>openLb(+card.dataset.index));
    card.addEventListener('keydown', e=>{ if(e.key==='Enter') openLb(+card.dataset.index); });
  });
}

function openLb(i) {
  idx=i;
  const lb=document.getElementById('lightbox'), img=document.getElementById('lb-img'), cap=document.getElementById('lb-caption'), item=visible[i];
  if(!lb||!item) return;
  img.src=item.image; img.alt=item.title;
  if(cap) cap.textContent=`${item.title}  ·  ${item.category}`;
  lb.hidden=false; document.body.style.overflow='hidden';
}
function closeLb(){ const lb=document.getElementById('lightbox'); if(lb) lb.hidden=true; document.body.style.overflow=''; }
function nav(d){ idx=(idx+d+visible.length)%visible.length; openLb(idx); }
function initLightbox(){
  document.getElementById('lb-close')?.addEventListener('click',closeLb);
  document.getElementById('lb-prev') ?.addEventListener('click',()=>nav(-1));
  document.getElementById('lb-next') ?.addEventListener('click',()=>nav(+1));
  document.getElementById('lightbox')?.addEventListener('click',e=>{ if(e.target.id==='lightbox') closeLb(); });
  document.addEventListener('keydown',e=>{
    const lb=document.getElementById('lightbox'); if(!lb||lb.hidden) return;
    if(e.key==='Escape') closeLb();
    if(e.key==='ArrowLeft') nav(-1);
    if(e.key==='ArrowRight') nav(+1);
  });
}
