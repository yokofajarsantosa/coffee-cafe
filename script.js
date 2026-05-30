/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */
window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(0,0,0,.75)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    } else {

        navbar.style.background = "rgba(0,0,0,.35)";
        navbar.style.backdropFilter = "blur(15px)";
        navbar.style.boxShadow = "none";

    }

});


/* ==========================================
   HERO ANIMATION
========================================== */
window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-content");

    if (hero) {
        hero.classList.add("hero-visible");
    }

});


/* ==========================================
   SCROLL ANIMATION
========================================== */
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".coffee-card, .contact-item, .section-title, .footer-content"
).forEach(el => {

    observer.observe(el);

});


/* ==========================================
   STAGGER MENU CARD
========================================== */
document.querySelectorAll(".coffee-card").forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.15}s`;

});


/* ==========================================
   SMOOTH SCROLL
========================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* ==========================================
   ACTIVE NAVBAR LINK
========================================== */
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});