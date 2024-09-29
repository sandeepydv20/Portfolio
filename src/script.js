function menubar(){
    document.getElementById("menu").classList.toggle('h-[100vh]');
    document.getElementById("menu").classList.toggle('h-16');
    document.querySelector('ul').classList.toggle('mt-[8rem]');
    document.querySelector('ul').classList.toggle("opacity-100");
    document.querySelector('ul').classList.toggle("w-[49.5%]");
    document.querySelector('ul').classList.toggle("item-center");
    // document.querySelector('ul').classList.toggle("text-md");
    document.getElementById("mode").classList.toggle('hidden');
    

    document.getElementById('line_1').classList.toggle('rotate-45')
    document.getElementById('line_1').classList.toggle('mt-[16px]')
    document.getElementById('line_2').classList.toggle('rotate-[-45deg]')
    document.getElementById('line_2').classList.toggle('mt-[-5px]')
    document.getElementById('line_3').classList.toggle('hidden')
}

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        const navbar = document.getElementById('menu');
        navbar.classList.remove('active'); // Close nav on link click
    });
});


function Mode(){
    document.getElementById('mode').classList.toggle('bg-silver-100');
    document.getElementById('mode_icon').classList.toggle('text-black');
    document.querySelector('body').classList.toggle('bg-white');
    document.getElementById('dark').classList.toggle('text-gray-900');
    document.getElementById('dark_1').classList.toggle('text-gray-900');
    document.getElementById('dark_2').classList.toggle('text-gray-900');
    document.getElementById('dark_3').classList.toggle('text-gray-900');
    document.getElementById('dark_4').classList.toggle('text-gray-900');
    document.getElementById('dark_5').classList.toggle('text-gray-900');
    document.getElementById('dark_6').classList.toggle('text-gray-900');
    document.getElementById('dark_7').classList.toggle('text-gray-900');
}

gsap.from("#logo",{
    x:-200,
    opacity:0,
    duration:1,
    ease:''
}
)
// // section part-1

gsap.from("#dark",{
    x:-200,
    opacity:0,
    duration:2,
    
})
gsap.from("#image_1",{
    x:200,
    opacity:0,
    duration:2,
    
})
// // section part-1 end

// // section part-2

gsap.from("#dark_2",{
    x:200,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#dark_2",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    }
    
})
gsap.from("#image_2",{
    x:-200,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#image_2",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    } 
})
// // section part-2 end

// // section part-3
gsap.from("#services_1",{
    x:-200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#services_1",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    }
    
})
gsap.from("#services_2",{
    x:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#services_2",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    }
})
// // section part-3 end

// // section part-4

gsap.from("#services_card_1",{
    y:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#services_card_1",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    }
})


// // section part-4 end

// portfolio part

gsap.from("#portfolio_1",{
    x:-200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#portfolio_1",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    }
    
})
gsap.from("#portfolio_2",{
    x:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#portfolio_2",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    }
})

// portfolio part end

// portfolio card 1 part 

gsap.from("#portfolio_card_1",{
    x:-200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#portfolio_card_1",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    }  
})
gsap.from("#portfolio_card_2",{
    y:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#portfolio_card_2",
        scroller:"body",
        // markers:true,
        start:"top 70%"
    }  
})
gsap.from("#portfolio_card_3",{
    x:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#portfolio_card_3",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    }  
})

// portfolio card 1 part end

// portfolio card 2 part 
 
gsap.from("#portfolio_card_4",{
    x:-200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#portfolio_card_4",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    }  
})
gsap.from("#portfolio_card_5",{
    y:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#portfolio_card_5",
        scroller:"body",
        // markers:true,
        start:"top 70%"
    }  
})
gsap.from("#portfolio_card_6",{
    x:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#portfolio_card_6",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    }  
})
// portfolio card 2 part  end

//blogs part

gsap.from("#blogs_1",{
    x:-200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#blogs_1",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    }
    
})
gsap.from("#blogs_2",{
    x:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#blogs_2",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    }
})
//blogs part end

//blogs card
gsap.from("#blogs_card_1",{
    x:-200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#blogs_card_1",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    }  
})
gsap.from("#blogs_card_2",{
    y:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#blogs_card_2",
        scroller:"body",
        // markers:true,
        start:"top 70%"
    }  
})
gsap.from("#blogs_card_3",{
    x:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#blogs_card_3",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    }  
})
//blogs card end

//contact part

gsap.from("#contact_1",{
    x:-200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#contact_1",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    }
    
})
gsap.from("#contact_2",{
    x:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#contact_2",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    }
})
//contact part end
//contact_me part end
gsap.from("#contact_me",{
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger:"#contact_me",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    }  
})
//contact_me part end

//link part
gsap.from("#link_1",{
    y:-200,
    ease:"bounce",
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#link_1",
        scroller:"body",
        // markers:true,
        
    }  
})
gsap.from("#link_2",{
    y:-200,
    ease:"bounce",
    delay:.5,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#link_2",
        scroller:"body",
        // markers:true,
        
    }  
})
gsap.from("#link_3",{
    y:-200,
    ease:"bounce",
    delay:1,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#link_3",
        scroller:"body",
        // markers:true,
        
    }  
})
gsap.from("#link_4",{
    y:-200,
    ease:"bounce",
    delay:1.5,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#link_4",
        scroller:"body",
        // markers:true,
        
    }  
})
//link part end