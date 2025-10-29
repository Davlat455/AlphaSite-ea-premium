// Alpha-ea Premium Final — light interactions
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('navLinks');
  if(navToggle){
    navToggle.addEventListener('click', ()=>{
      if(nav.style.display === 'flex') nav.style.display = '';
      else nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '10px';
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' }); }
    });
  });

  // simple gallery lazy reveal
  const imgs = document.querySelectorAll('.gallery-grid img');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(ent=>{
      if(ent.isIntersecting){ ent.target.style.opacity = 1; ent.target.style.transform = 'translateY(0)'; io.unobserve(ent.target); }
    });
  }, {threshold:0.15});
  imgs.forEach(img=>{ img.style.opacity=0; img.style.transform='translateY(18px)'; img.style.transition='all 600ms cubic-bezier(.2,.9,.2,1)'; io.observe(img); });
});
