//Hamburger Menu for smaller screens
const menuIcon = document.getElementById('hamburger-menu');
menuIcon.addEventListener('click', function () {
    var navItems = document.getElementById('nav-links');
    navItems.classList.toggle('show');
    
    // if (navItems.classList.contains('show')) {
    //     menuIcon.src = 'images/icons8-x-100.png';
    //     console.log("Changed");
    // } else {
    //     menuIcon.src = 'images/icons8-menu-48.png'; // Assuming this is the original menu icon
    // }
});


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

//Intro Animation
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

tl2.fromTo (
    ".shape-container",
    {
        y:1,
    },
    {
        y:70,
        duration:2,
        repeat: -1, // Repeat indefinitely
        yoyo: true  // Reverse on each repeat
    },
    "<20%"
);

ScrollTrigger.create({
    trigger: '.hero-wave',
    start: 'center 20px',
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
    start: 'top 400px',
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
    start: "top 400px",
    animation: tl5,

});

// Form animations
const containers = document.querySelectorAll(".input-container");
const form = document.querySelector("form");

const tl6 = gsap.timeline({defualts: {duration:1}});

//Line animation
const start =  "M0.975952 1.85319C0.975952 1.85319 89.1399 1.79705 147.5 1.85318C206.62 1.91004 300.976 1.85319 300.976 1.85319";
const end = "M0.975952 1.85318C0.975952 1.85318 91.6399 12.9439 150 13C209.12 13.0569 300.976 1.85318 300.976 1.85318";

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


