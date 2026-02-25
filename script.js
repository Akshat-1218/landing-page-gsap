function page1Animation(){
    var tl = gsap.timeline()

tl.from("nav h1, nav h4,nav button",{
    y:-40,
    duration:0.7,
    delay:0.35,
    opacity:0,
    stagger:0.2
})
tl.from(".center1 h1",{
    opacity:0,
    x:-300,
    duration:0.5
})
tl.from(".center1 p",{
    opacity:0,
    x:-200,
    duration:0.4
})
tl.from(".center1 button",{
    opacity:0,
    duration:0.4
})
tl.from(".center2 img",{
    opacity:0,
    duration:0.5
},"-=0.5")
tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    duration:0.5,
    stagger:0.15
})
}
page1Animation()

function page2Animation(){
    var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 75%",
        end:"top 0",
        scrub:2
    }
})

tl2.from(".services",{
    y:30,
    opacity:0,
    duration:0.5
})
tl2.from(".line1.left",{
    x:-300,
    duration:1,
    opacity:0,
    ease: "power2.out",
},"anim1")
tl2.from(".line1.right",{
    x:300,
    duration:1,
    opacity:0,
    ease: "power2.out",
},"anim1")
tl2.from(".line2.left",{
    x:-300,
    duration:1,
    opacity:0,
    ease: "power2.out",
},"anim2")
tl2.from(".line2.right",{
    x:300,
    duration:1,
    opacity:0,
    ease: "power2.out",
},"anim2")
}
page2Animation()

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section3",
        scroller:"body",
        start:"top 75%",
        end:"top 0",
        scrub:2
    }
})
tl2.from(".box1 h1",{
    x:-100,
    duration:0.7,
    opacity:0,
    ease: "power2.out",
})
tl2.from(".box1 p",{
    x:-100,
    duration:0.7,
    opacity:0,
    ease: "power2.out",
})
tl2.from(".box1 button",{
    duration:0.7,
    opacity:0,
    ease: "power2.out",
})
tl2.from(".box2 img",{
    y:-50,
    duration:0.7,
    opacity:0,
    ease: "power2.out",
},"-=1.5")
tl2.from(".case-study h1",{
    x:-200,
    duration:0.7,
    opacity:0,
    ease: "power2.out",
},"-=1.5")
tl2.from(".case-study p",{
    y:-100,
    duration:0.7,
    opacity:0,
    ease: "power2.out",
},"-=1.5")
