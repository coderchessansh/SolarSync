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

const modelCard=document.querySelector('.real-model-card');
if(modelCard && window.matchMedia('(pointer:fine)').matches){
  modelCard.addEventListener('mousemove',e=>{
    const r=modelCard.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    modelCard.style.transform=`perspective(900px) rotateX(${y*-3}deg) rotateY(${x*5}deg) rotate(1.5deg) translateY(-4px)`;
  });
  modelCard.addEventListener('mouseleave',()=>modelCard.style.transform='rotate(1.5deg)');
}

console.log('%cSolarSync — Real prototype. Real sunlight. Real impact.','color:#13a85a;font-size:18px;font-weight:bold');
