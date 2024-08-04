var cursor = document.querySelector(".cursor");
var cursorb = document.querySelector(".cursorb");

document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + 25 + "px";
    cursor.style.top = dets.y + "px";
    cursorb.style.left = dets.x - 250 + "px";
    cursorb.style.top = dets.y - 250 + "px";
})
gsap.to(".nav", {
    backgroundColor: "black",
    duration: 0.5,
    height: "120px",

    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 2.5
    },

})

gsap.to(".main", {
    backgroundColor: "black",

    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers:true,
        start: "top -30%",
        end: "top -70%",
        scrub: 2.5,
    }
})
let h4all = document.querySelectorAll('.nav h4');
h4all.forEach(function (ele) {
    ele.addEventListener('mouseenter', function () {
        cursor.style.scale = 3;
        cursor.style.border = '1px solid white'
        cursor.style.backgroundColor = 'transparent'

    })
    ele.addEventListener('mouseleave', function () {
        cursor.style.scale = 1;
        cursor.style.backgroundColor = '#95c11e';
        cursor.style.border = '1px solid #95c11e'

    })
})

gsap.from(".aboutus img , .aboutus .content", {
    y: 50,
    opacity: 0,
    duration: 1,



    scrollTrigger: {
        trigger: ".aboutus",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 50%",
        scrub: 2,
    },

})


gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers:false,
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    },

});

gsap.from("#img1p3", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#img1p3",
        scroller: "body",
        // markers:false,
        start: "top 70%",
        end: "top 65%",
        scrub: 3,
    },

});

gsap.from("#img2p3", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#img1p3",
        scroller: "body",
        // markers:false,
        start: "top 70%",
        end: "top 65%",
        scrub: 3,
    },

});

gsap.from(".page4 h5", {
    y: 20,
    scrollTrigger: {
        trigger: ".page4 h5",
        scroller: "body",
        // markers:true,
        start: "top 75%",
        end: "top 70%",
        scrub: 2,
    },
})

let box1 = document.querySelectorAll('.page4 .box');
box1.forEach(function (ele1) {
    console.log(ele1)

    ele1.addEventListener('mouseenter', function () {
        cursor.style.scale = 3;
        cursor.style.border = '1px solid white'
        cursor.style.backgroundColor = 'transparent'

    })
    ele1.addEventListener('mouseleave', function () {
        cursor.style.scale = 1;
        cursor.style.backgroundColor = '#95c11e';
        cursor.style.border = '1px solid #95c11e'

    })
})
