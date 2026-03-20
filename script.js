// Smooth scroll
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Typing effect
const text = "Yagneshwar Gangoni";
let index = 0;

function typeEffect(){
    if(index < text.length){
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}

window.onload = typeEffect;

// Form submit alert
document.querySelector(".contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message sent successfully!");
});

// Navbar color change on scroll
window.addEventListener("scroll", function(){
    const nav = document.querySelector(".navbar");
    nav.style.background = window.scrollY > 50 ? "#000" : "transparent";
});

// Reveal animation
const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const pos = card.getBoundingClientRect().top;
        if(pos < window.innerHeight){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});