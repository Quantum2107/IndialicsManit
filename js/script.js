/*==========================================
    MOBILE MENU
==========================================*/

const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

// Toggle Menu
menuBtn.addEventListener("click", function (e) {

    e.stopPropagation();

    navMenu.classList.toggle("active");
    menuBtn.classList.toggle("active");

});

// Prevent closing when clicking inside menu
navMenu.addEventListener("click", function (e) {

    e.stopPropagation();

});

// Close when clicking anywhere outside
document.addEventListener("click", function () {

    navMenu.classList.remove("active");
    menuBtn.classList.remove("active");

});

// Close menu after clicking a nav link
document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");
        menuBtn.classList.remove("active");

    });

});


/*==========================================
    STICKY NAVBAR
==========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/*==========================================
    SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});
document.querySelectorAll(".speaker-card").forEach(card => {
    card.addEventListener("click", function(){
        if(window.innerWidth <= 768){
            this.classList.toggle("active");
        }
    });
});

/* ==========================================
   MOBILE SPEAKER CARD FLIP
========================================== */

document.querySelectorAll(".speaker-card").forEach(card => {

    card.addEventListener("click", function(){

        if(window.innerWidth <= 768){

            this.classList.toggle("active");

        }

    });

});
// ==========================================
// ACTIVE NAVIGATION ON SCROLL
// ==========================================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});