
function menubar(){ 
    navslide();
    hamburger();
    var navLinks = document.querySelectorAll('.nav-link')
    navLinks.forEach(e => {
        e.addEventListener('click',() => {      
           menubar()  
        })
        }) 

}

function navslide(){
    document.getElementById("menu").classList.toggle('h-screen');
    document.querySelector('ul').classList.toggle("opacity-100");
    document.getElementById("mode-changer").classList.toggle('hidden');
}

 function hamburger(){
    document.getElementById('line_1').classList.toggle('rotate-45')
    document.getElementById('line_1').classList.toggle('mt-[16px]')
    document.getElementById('line_2').classList.toggle('rotate-[-45deg]')
    document.getElementById('line_2').classList.toggle('mt-[-5px]')
    document.getElementById('line_3').classList.toggle('hidden')
 }
 

   





function Mode(){
   
    document.getElementById('menu-1').classList.toggle('backdrop-blur-2xl');
    document.querySelector('div').classList.toggle('bg-[silver]/90');
    document.querySelector('div').classList.toggle('text-[black]');
    document.getElementById('hemClick').classList.toggle('border-[black]');
    document.getElementById('line_1').classList.toggle('bg-[black]');
    document.getElementById('line_2').classList.toggle('bg-[black]');
    document.getElementById('line_3').classList.toggle('bg-[black]');
  let changecolor = document.getElementsByClassName('bg-[#1C2326]');
   for (const change of changecolor) {
    change.classList.toggle('bg-[grey]');
   } 
}

const name =document.getElementById('name');
 Name = (e) => {
e.name.v
}

const form = document.getElementById('contact_me');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
// const message = document.getElementById('message');
const errorname = document.getElementById('errorname');
const erroremail = document.getElementById('erroremail');
const errorsubject = document.getElementById('errorsubject');

form.addEventListener('submit',function(e){
    e.preventDefault();
    
    const name =nameInput.value.trim();

    const nameRegex =/^[A-Za-z\s]+$/;

    if (name==='' || !nameRegex.test(name)) {
        errorname.classList.remove('hidden');
    }
    else{
        errorname.classList.add('hidden');
      
    }

    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (email==='' || !emailRegex.test(email)) {
        erroremail.classList.remove('hidden');
    }
    else{
        erroremail.classList.add('hidden');
    }

    const subject= subjectInput.value.trim();
    if (subject==='') {
        errorsubject.classList.remove('hidden');
    }
    else{
        errorsubject.classList.add('hidden');
      
         
    }
    if (name && email && subject) {
        alert('Your request succesfully registered: Mr/Mrs  '+ name);
    }
    else{
        alert('Your request not registered: !!! ,Please fill your detail...');
    }
   
})



gsap.from("#logo",{
    y:-200,
    x:100,
    opacity:0,
    duration:2,
    ease:'bounce'
}
)
// // // section part-1

gsap.from("#dark",{
    y:40,
    opacity:0,
    duration:2,
    
})
gsap.from("#image_1",{
    y:200,
    opacity:0,
    duration:2,
    
})
// // section part-1 end

// // section part-2

gsap.from("#dark_2",{
    y:200,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#dark_2",
        scroller:"body",
        // markers:true,
        start:"top 85%"
    }
    
})
gsap.from("#image_2",{
    y:200,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#image_2",
        scroller:"body",
        // markers:true,
        start:"top 85%"
    } 
})
// // section part-2 end

// // section part-3
gsap.from("#services_1",{
    y:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#services_1",
        scroller:"body",
        // markers:true,
        start:"top 85%"
    }
    
})
gsap.from("#services_2",{
    y:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#services_2",
        scroller:"body",
        // markers:true,
        start:"top 85%"
    }
})
// // section part-3 end

// // // section part-4

gsap.from("#services_card_1",{
    y:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#services_card_1",
        scroller:"body",
        // markers:true,
        start:"top 85%"
    }
})
gsap.from("#services_card_2",{
    y:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#services_card_2",
        scroller:"body",
        // markers:true,
        start:"top 85%"
    }
})
gsap.from("#services_card_3",{
    y:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#services_card_3",
        scroller:"body",
        // markers:true,
        start:"top 85%"
    }
})


// // // section part-4 end

// // portfolio part

gsap.from("#portfolio_1",{
    y:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#portfolio_1",
        scroller:"body",
        // markers:true,
        start:"top 85%"
    }
    
})
gsap.from("#portfolio_2",{
    y:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#portfolio_2",
        scroller:"body",
        // markers:true,
        start:"top 85%"
    }
})

// // portfolio part end

// // portfolio card 1 part 

gsap.from("#portfolio_card_1",{
    y:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#portfolio_card_1",
        scroller:"body",
        // markers:true,
        start:"top 85%"
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
        start:"top 85%"
    }  
})
gsap.from("#portfolio_card_3",{
    y:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#portfolio_card_3",
        scroller:"body",
        // markers:true,
        start:"top 85%"
    }  
})

// // portfolio card 1 part end

// // portfolio card 2 part 
 
gsap.from("#portfolio_card_4",{
    y:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#portfolio_card_4",
        scroller:"body",
        // markers:true,
        start:"top 85%"
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
        start:"top 85%"
    }  
})
gsap.from("#portfolio_card_6",{
    y:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#portfolio_card_6",
        scroller:"body",
        // markers:true,
        start:"top 85%"
    }  
})
// portfolio card 2 part  end

// //blogs part

gsap.from("#blogs_1",{
    y:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#blogs_1",
        scroller:"body",
        // markers:true,
        start:"top 85%"
    }
    
})
gsap.from("#blogs_2",{
    y:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#blogs_2",
        scroller:"body",
        // markers:true,
        start:"top 85%"
    }
})
//blogs part end

//blogs card
gsap.from("#blogs_card_1",{
    y:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#blogs_card_1",
        scroller:"body",
        // markers:true,
        start:"top 85%"
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
        start:"top 85%"
    }  
})
gsap.from("#blogs_card_3",{
    y:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#blogs_card_3",
        scroller:"body",
        // markers:true,
        start:"top 85%"
    }  
})
gsap.from("#blogs_card_4",{
    y:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#blogs_card_4",
        scroller:"body",
        // markers:true,
        start:"top 85%"
    }  
})
//blogs card end

// //contact part

gsap.from("#contact_1",{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#contact_1",
        scroller:"body",
        // markers:true,
        start:"top 85%"
    }
    
})
gsap.from("#contact_2",{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#contact_2",
        scroller:"body",
        // markers:true,
        start:"top 85%"
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
        start:"top 85%"
    }  
})
//contact_me part end

//link part
// gsap.from("#link_1",{
//     y:-200,
//     ease:"bounce",
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#link_1",
//         scroller:"body",
//         // markers:true,
        
//     }  
// })
// gsap.from("#link_2",{
//     y:-200,
//     ease:"bounce",
//     delay:.5,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#link_2",
//         scroller:"body",
//         // markers:true,
        
//     }  
// })
// gsap.from("#link_3",{
//     y:-200,
//     ease:"bounce",
//     delay:1,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#link_3",
//         scroller:"body",
//         // markers:true,
        
//     }  
// })
// gsap.from("#link_4",{
//     y:-200,
//     ease:"bounce",
//     delay:1.5,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:"#link_4",
//         scroller:"body",
//         // markers:true,
        
//     }  
// })
//link part end
