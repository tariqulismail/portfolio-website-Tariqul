let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// Navbar JavaScript
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
}


// Scroll Animation
const sr = ScrollReveal({
    origin: 'top',
    distance:'85px',
    duration:2000,
    reset: true
})


sr.reveal ('.home-text',{})
sr.reveal ('.home-img',{delay:200})
sr.reveal ('.social',{delay:200})

sr.reveal ('.about-img',{})
sr.reveal ('.heading',{})
sr.reveal ('.about-text',{delay:200})


sr.reveal ('.skills-text',{})
sr.reveal ('.skills-box',{delay:200})
sr.reveal ('.skills-img',{delay:200})


sr.reveal ('.portfolio-content',{delay:200})



sr.reveal ('.app h1',{})
sr.reveal ('.app',{delay:200})

sr.reveal ('form input',{})
sr.reveal ('form textarea',{})