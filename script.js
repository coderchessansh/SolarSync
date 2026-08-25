const progress=document.getElementById('progress');
const menu=document.getElementById('menu');
const navLinks=document.getElementById('navLinks');

window.addEventListener('scroll',()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(max>0?(window.scrollY/max)*100:0)+'%';
});

menu.addEventListener('click',()=>navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>navLinks.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold:.12});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const card=document.querySelector('.product-card');
if(card && window.matchMedia('(pointer:fine)').matches){
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`rotateX(${y*-5}deg) rotateY(${x*7}deg) rotate(2deg)`;
  });
  card.addEventListener('mouseleave',()=>card.style.transform='rotate(2deg)');
}

console.log('%cSolarSync — Power that starts with sunlight.','color:#13a85a;font-size:18px;font-weight:bold');