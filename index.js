
var t1=gsap.timeline(); // one by code runs

t1.from("#input",{
    y:-50,
    // rotate:45,
    opacity:0,
    duration:1,
    delay:0.5,
})

t1.from("button",{
    y:-50,      // from top when negative
    opacity: 0,     // is opacity
    delay: 0.4,     // taime to start animation 
   duration: 1,     // animation time to run
   stagger:0.1   // one by one heading appear at 0.3 sec on screen
})

























let input = document.getElementById( 'input' );
let button = document.querySelectorAll( 'button' );

// button.forEach(element =>{
//     element.addEventListener("click",(e)=>{
//         console.log(e.target.textContent)
//         if("C"=== e.target.textContent){
//             input.innerHTML=" ";
//         }

//         else{
//             input.innerHTML+= e.target.textContent;
//         }
//     })
// })

button.forEach(element =>{
    element.addEventListener("click",(e)=>{
        console.log(e.target.textContent)

        if("C" === e.target.textContent){
            input.innerHTML=""
        }

        else if("<"===e.target.textContent){
            input.innerHTML=input.innerHTML.slice(0,-1);
        }

        else if("="===e.target.textContent){
            input.innerHTML=eval(input.innerHTML);
        }

        else{
            input.innerHTML=input.innerHTML+e.target.textContent;
        }

        input.scrollLeft = input.scrollWidth;
    })
})