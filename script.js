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
        scale: 1.3
    },
    {
        opacity:1,
        scale: 1,
        duration: 1.5,
        ease: "elastic.out(1.5,1)"
    }
);

// tl.fromTo (
//     "#nav-bar",
//     {
//         opacity:0,
//     },
//     {
//         opacity:1,
//         duration: 2,

//     },
//     "<10%"
// );

// tl.fromTo (
//     "button",
//     {
//         scale:0.8,
//     },
//     {
//         scale:1,
//         duration: 1,
//         // repeat:1,
//         ease: "elastic.out(1.5,1)"

//     },
//     "<10%"
// );