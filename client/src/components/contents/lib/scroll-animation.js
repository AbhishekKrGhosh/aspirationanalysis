import gsap from "gsap";

export const scrollAnimation = (position, target, onUpdate) => {
    const tl = gsap.timeline()
    tl.to(position, {
        x: 0.0433574192,
        y: 0.9640819897,
        z: 9.9533243719,
        scrollTrigger:{
            trigger: '.button-sign',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
        onUpdate
    })
    .to(target, {
        x: 0.52,
        y: -1.0,
        z: -5.08,
        scrollTrigger:{
            trigger: '.button-sign',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        }
    })
    .to(position, {
        x: 1.56,
        y: 100.0,
        z: 0.01,
        scrollTrigger:{
            trigger: '.video',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false,
        },
        onUpdate
    })
    .to(target, {
        x: -0.55,
        y: 15.32,
        z: 0.0,
        scrollTrigger:{
            trigger: '.video',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        }
    })
    
}