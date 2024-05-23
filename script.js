//Hero Animation

const tl = gsap.timeline ({
    defaults: {duration:0.75, ease: "Power3.easeOut"},
});


tl.fromTo (
    ".hero-caption",
        {
            opacity:0,
            y:300
        },
        {
            opacity:1,
            y:0,
            duration:1.5
        }
);

tl.fromTo (
    ".img-hero, #nav-bar",
    {
        opacity:0,
        scale: 1.1
    },
    {
        opacity:1,
        scale: 1,
        duration: 1.5,
        ease: "elastic.out(1.5,1)"
    }
);

//
gsap.registerPlugin(ScrollTrigger);

const tl2 = gsap.timeline({
    defaults : { duration:0.75, ease:"Power3.easeOut" }
});

tl2.fromTo(
    ".shape-left",
    {
        opacity:0,
        y:-300
    },
    {
        opacity:1,
        y:1,
        duration:1
    }
);

tl2.fromTo(
    ".shape-right",
    {
        opacity:0,
        y:300
    },
    {
        opacity:1,
        y:1,
        duration:1
    },
    "<20%"
);

ScrollTrigger.create({
    trigger: '.wave',
    start: 'top 20px',
    animation: tl2,
    once: true
});

// About and Services section animations
const tl3 = gsap.timeline({
    defaults : { duration:0.75, ease:"Power3.easeOut" }
});

tl3.fromTo(
    ".about-left",
    {
        opacity:0,
        x:-50
    },
    {
        opacity:1,
        x:1,
        duration:1
    }
);

tl3.fromTo(
    ".about-right",
    {
        opacity:0,
        x:50
    },
    {
        opacity:1,
        x:1,
        duration:1
    },
    "<20%"
);

ScrollTrigger.create({
    trigger: '#about',
    start: 'top 200px',
    animation: tl3,
    once: true
});


const tl4 = gsap.timeline({
    defaults : { duration:0.75, ease:"Power3.easeOut" }
});

tl4.fromTo(
    ".services-left",
    {
        opacity:0,
        x:-50
    },
    {
        opacity:1,
        x:1,
        duration:1
    }
);

tl4.fromTo(
    ".services-right",
    {
        opacity:0,
        x:50
    },
    {
        opacity:1,
        x:1,
        duration:1
    },
    "<20%"
);

ScrollTrigger.create({
    trigger: '#services',
    start: 'top 200px',
    animation: tl4,
    once: true
});

// Testimonials animations
const tl5 = gsap.timeline({
    defaults : { duration:0.75, ease:"Power3.easeOut" }
});

tl5.fromTo(
    ".a, .c",
    {
        opacity:0,
        y:-200
    },
    {
        opacity:1,
        y:1,
        duration:1.5
    }
);

tl5.fromTo(
    ".b",
    {
        opacity:0,
        y:200
    },
    {
        opacity:1,
        y:1,
        duration:1.5
    },
    "<20%"
);

ScrollTrigger.create({
    trigger: '#testimonials',
    start: "top 300px",
    animation: tl5,

});

// Form animations
const containers = document.querySelectorAll(".input-container");
const form = document.querySelector("form");

const tl6 = gsap.timeline({defualts: {duration:1}});

//Line animation
const start =  "M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512";
const end = "M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512";

containers.forEach(container =>{
    const input = container.querySelector('.input');
    const line  = container.querySelector('.elastic-line');
    const placeholder = container.querySelector('.placeholder');

    input.addEventListener('focus', ()=>{
        if(!input.value){
            tl6.fromTo(
                line,
                {
                    attr:{d: start}
                },
                {
                    attr:{d: end},
                    duration: 0.75,
                    ease: 'Power2.easeOut'
                }
            );

            tl6.to(
                line, 
                {
                    attr:{d: start},
                    ease: "elastic.out(8,1.5)"
                },
                "<50%"
            );

            // Placeholder shift animation
            tl6.to(
                placeholder,
                {
                    top:-15,
                    scale: 0.7,
                    duration: 0.5,
                    ease: "Power2.easeOut"
                },
                "<10%"
            )
        }
    });
});


