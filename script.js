 gsap.set(".ab",{y:10,opacity:0})
gsap.set("#feel",{x:-30,y:70})
gsap.set(".ll",{opacity:0})
gsap.set("#ings",{x:30,y:-70})
gsap.set("#text p",{ y:20,opacity:0})
gsap.set("#fti i",{y:20,opacity:0})
gsap.set("#ba",{x:-30,y:70})
gsap.set("#bes",{x:30,y:-70})

var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
main.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x-15+"px"
    cursor.style.top = dets.y-15+"px"
})

gsap.to(".a", 3,{ 
    css:{ rotation:360 },
});
setTimeout(function(){
    gsap.to("#m",{
        top:"50%",
        left:"45%",
        fontSize: "20px"
    })
    gsap.to("#s",{
        top:"50%",
        left:"618px",
        fontSize: "20px"
    })
    gsap.to("#g",{
        top:"50%",
        left:"654px",
        fontSize: "20px"
    })
    gsap.to("#i",{
        top:"50%",
        left:"662px",
        fontSize: "20px"
    })
    gsap.to("#e",{
        top:"50%",
        left:"775px",
        fontSize: "20px"
    })
},2500)
setTimeout(function(){
    gsap.to(".opa",{
        opacity: "1",
        ease: Expo.easeInOut,
        duration:1,
    })
},3000)
setTimeout(function(){
    gsap.to("#circle",{
        width:"350px",
        height:"350px",
        ease: Bounce,
        duration:1
    })
},500)
setTimeout(function(){
    gsap.to("#circle",{
        width:"2000px",
        height:"2000px",
        ease: Bounce,
        duration:2
    })
},1700)

setTimeout(function(){
    gsap.to("#circle2",{
        width:"2000px",
        height:"2000px",
        duration:2
    })
},4500)

setTimeout(function(){
   document.querySelector("#page2").style.display="initial"
},5400)
setTimeout(function(){
    gsap.to(".ab",{
        y:0,
        opacity:1,
        stagger:0.25,
        duration:2
    })
    gsap.to("#photo1",{
        top:"0%",
        duration:3,
        rotate:360,
        ease:Expo.easeInOut,
        delay:-1
    })
    gsap.to("#photo2",{
        bottom:"0%",
        duration:3,
        rotate:360,
        ease:Expo.easeInOut,
        delay:-1
    })
    gsap.to("#list h4",{
        opacity:"1",
        stagger:0.2,
        duration:1.5
    })
    gsap.to("#circle3",{
        width:"430px",
        height:"430px",
        duration:2,
        top:"50%",
        right:"-11%",
        ease:Expo.easeInOut,
    })
    gsap.to(".ll",{
        opacity:1,
        duration:1,
        ease:Expo.easeInOut,
        stagger:0.2,
        delay:0.5
    })
    gsap.to("#feel",{
        x:0,
        y:0,
        delay:-2,
        duration:4,
        ease:Expo.easeInOut
    })
    gsap.to("#add h1",{
        rotateY:720,
        duration:2,
        ease:Bounce
    })
    gsap.to("#ings",{
        x:0,
        y:0,
        delay:-2,
        duration:4,
        ease:Expo.easeInOut
    })
    gsap.to("#btm",{
        bottom:"-58%",
        duration:2.5,
        ease:Expo.easeInOut
    })
    gsap.to("#text p",{
        y:0,
        opacity:1,
        duration:2,
        delay: 1,
        ease:Expo.easeInOut
    })
    gsap.to("#fti i",{
        y:0,
        opacity:1,
        duration:3,
        stagger:0.3,
        ease:Bounce
    })
    gsap.to("#how",{
        duration:4,
        rotation:"360",
        repeat: -1,
        ease:Linear.easeNone,
    })
},5500)

document.querySelector("#click").addEventListener("click",function(){
    console.log("kkkk");
    gsap.to("#circle3",{
        width:"2000px",
        height:"2000px",
        top:"50%",
        right:"-100%",
        duration:1,
        ease:Expo.easeInOut
    })
    gsap.to("#photo1",{
        top:"-100%",
        duration:3,
        rotate:360,
        ease:Expo.easeInOut,
        delay:-0.5
    }) 
    gsap.to("#photo2",{
        bottom:"-100%",
        duration:3,
        rotate:360,
        ease:Expo.easeInOut,
        delay:-0.5
    })
    gsap.to("#circle4",{
        width:"2000px",
        height:"2000px",
        top:"50%",
        right:"-100%",
        duration:3,
        delay:0.3,
        ease:Expo.easeInOut
    })
    gsap.to("#jao",{
        y:20,
        opacity:0,
        ease:Expo.easeInOut,
        duration:1
    })
    gsap.to("#aoo",{
        top:"30px",
        opacity:1,
        delay:0.5,
        ease:Expo.easeInOut,
        duration:1
    })
    gsap.to("#how",{
        bottom: "-100%",
        duration:2,
        delay:1
    })
    gsap.to("#text",{
        y:70,
        delay:1
    })
    setTimeout(function(){
        document.querySelector("#circle3").style.opacity=0
        document.querySelector("#circle4").style.opacity=0
        gsap.to("#photo3",{
            top:"0%",
            duration:3,
            rotate:360,
            ease:Expo.easeInOut,
            delay:-0.9
        })
        gsap.to("#photo4",{
            bottom:"0%",
            duration:3,
            rotate:360,
            ease:Expo.easeInOut,
            delay:-0.9
        })
        gsap.to("#circle5",{
            width:"430px",
            height:"430px",
            duration:2,
            top:"50%",
            right:"-11%",
            ease:Expo.easeInOut,
        })
        gsap.to("#feel",{
            x:-30,
            y:70,
            opacity:0,
            delay:-2,
            duration:4,
            ease:Expo.easeInOut
        })
        gsap.to("#ings",{
            x:30,
            y:-70,
            delay:-2,
            duration:4,
            opacity:0,
            ease:Expo.easeInOut
        })
        gsap.to("#add h1",{
            rotateY:360,
            duration:2,
            ease:Bounce
        })
        gsap.to("#ba",{
            x:0,
            y:0,
            delay:-2,
            duration:4,
            ease:Expo.easeInOut
        })
        gsap.to("#add2 h1",{
            rotateY:720,
            duration:2,
            ease:Bounce,
            opacity:1
        })
        gsap.to("#bes",{
            x:0,
            y:0,
            delay:-2,
            duration:4,
            ease:Expo.easeInOut
        })
        gsap.to("#text2 h1",{
            opacity:1,
            duration:3,
            delay:1,
            stagger:3,
            ease:Expo.easeInOut
        })
        gsap.to("#effort",{
            bottom:"-23%",
        })
        gsap.to("#effort",{
            rotation:"360",
            duration:4,
            repeat: -1,
            ease:Linear.easeNone,
        })
        gsap.to("#text",{
            y:0,
            duration:2,
        })
    },2000)
})
