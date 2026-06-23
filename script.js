/* =====================================================
   INDIA LICS 2026
   MAIN SCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initRevealAnimations();
    initActiveNavigation();
    initParallax();

});

/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

function initNavbar() {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");
        }
    });
}

/* =====================================================
   MOBILE MENU
===================================================== */

function initMobileMenu() {

    const toggle = document.querySelector(".mobile-toggle");

    if (!toggle) return;

    const menu = document.createElement("div");

    menu.className = "mobile-menu";

    menu.innerHTML = `
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#tracks">Theme</a>
        <a href="#dates">Dates</a>
        <a href="#committee">Committee</a>
        <a href="#contact">Contact</a>
    `;

    document.body.appendChild(menu);

    toggle.addEventListener("click", () => {

        menu.classList.toggle("active");
    });

    menu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");
        });
    });

    document.addEventListener("click", (e) => {

        if (
            !menu.contains(e.target) &&
            !toggle.contains(e.target)
        ) {

            menu.classList.remove("active");
        }
    });
}

/* =====================================================
   SMOOTH SCROLL
===================================================== */

function initSmoothScroll() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            e.preventDefault();

            window.scrollTo({

                top: target.offsetTop - 110,
                behavior: "smooth"
            });
        });
    });
}

/* =====================================================
   REVEAL ANIMATION
===================================================== */

function initRevealAnimations() {

    const sections = document.querySelectorAll(
        ".section-heading, .glance-card, .track-card, .timeline-item, .org-card, .contact-grid > div, .registration-box"
    );

    sections.forEach(item => {

        item.classList.add("reveal");
    });

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");
                }
            });

        },
        {
            threshold: 0.15
        }
    );

    sections.forEach(item => observer.observe(item));
}

/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

function initActiveNavigation() {

    const sections = document.querySelectorAll("section[id], header[id]");

    const navLinks = document.querySelectorAll(
        ".nav-center a"
    );

    if (!sections.length || !navLinks.length) return;

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === `#${current}`) {

                link.classList.add("active");
            }
        });
    });
}

/* =====================================================
   HERO PARALLAX
===================================================== */

function initParallax() {

    const heroImage =
        document.querySelector(".hero-image");

    if (!heroImage) return;

    window.addEventListener("scroll", () => {

        const scroll = window.scrollY;

        heroImage.style.transform =
            `translateY(${scroll * 0.25}px)`;
    });
}

/* =====================================================
   OPTIONAL HELPER
===================================================== */

window.scrollToTop = function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"
    });
};