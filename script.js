// Wait until full page loads
window.addEventListener("DOMContentLoaded", function(){

    // Smooth scroll
    function scrollToSection(id){
        document.getElementById(id).scrollIntoView({
            behavior:"smooth"
        });
    }
    window.scrollToSection = scrollToSection;

    // Typing effect
    const text = "Yagneshwar Gangoni";
    let i = 0;

    function type(){
        if(i < text.length){
            document.getElementById("typing").innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 80);
        }
    }
    type();

    // ✅ Initialize EmailJS
    emailjs.init("r2FDOqYcGdp1lHQVd");  

    // ✅ Form submit
    const form = document.getElementById("contact-form");

    if(form){  // safety check
        form.addEventListener("submit", function(e){
            e.preventDefault();

            emailjs.sendForm("service_inxk95r", "template_xbcpmqw", this)
            .then(function(){
                alert("✅ Message sent successfully!");
                form.reset();
            })
            .catch(function(error){
                alert("❌ Failed to send message");
                console.log("ERROR:", error);
            });
        });
    }

});