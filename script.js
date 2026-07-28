// ===============================
// SolarSync Website Script
// ===============================

// Fade-in animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

document.querySelectorAll("section,.card,.benefits div").forEach(el=>{
    el.classList.add("hidden");
    observer.observe(el);
});

// Navbar shadow while scrolling
window.addEventListener("scroll",()=>{

    const nav=document.querySelector("nav");

    if(window.scrollY>40){
        nav.style.boxShadow="0 8px 25px rgba(0,0,0,.15)";
    }else{
        nav.style.boxShadow="0 3px 10px rgba(0,0,0,.08)";
    }

});

// Hero typing effect
const title=document.querySelector(".hero h1");

const text="Harness. Store. Power.";

title.innerHTML="";

let i=0;

function type(){

    if(i<text.length){
        title.innerHTML+=text.charAt(i);
        i++;
        setTimeout(type,90);
    }

}

type();

// Floating solar particles
for(let i=0;i<20;i++){

    const sun=document.createElement("div");

    sun.innerHTML="☀️";

    sun.className="particle";

    sun.style.left=Math.random()*100+"vw";

    sun.style.animationDuration=(6+Math.random()*8)+"s";

    sun.style.fontSize=(18+Math.random()*18)+"px";

    document.body.appendChild(sun);

}

// Scroll progress bar
const progress=document.createElement("div");

progress.id="progress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const total=document.documentElement.scrollHeight-window.innerHeight;

    const progressValue=(window.scrollY/total)*100;

    progress.style.width=progressValue+"%";

});

// Button glow
const btn=document.querySelector(".btn");

setInterval(()=>{

    btn.style.boxShadow="0 0 30px rgba(24,165,88,.8)";

    setTimeout(()=>{

        btn.style.boxShadow="0 10px 25px rgba(24,165,88,.35)";

    },700);

},1800);

// Smooth hover tilt
document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateY=(x-rect.width/2)/18;

        const rotateX=-(y-rect.height/2)/18;

        card.style.transform=`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="rotateX(0) rotateY(0)";

    });

});

// Console easter egg
console.log("%c☀️ Welcome to SolarSync!","color:green;font-size:22px;font-weight:bold;");
