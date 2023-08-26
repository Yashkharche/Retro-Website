
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var tl=gsap.timeline()


tl.to(".page1",{
    y:"100vh",
    duration:0,
    scale:0.6,
    
})
tl.to(".page1",{
    y:"top 10%",
    duration:0.5,
    delay:0.5
})
tl.to(".page1",{
    y:"0vh",
    duration:1,
    delay:0.5,
    rotate:360,
    scale:1
    
    
})



