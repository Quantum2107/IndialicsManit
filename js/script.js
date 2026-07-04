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