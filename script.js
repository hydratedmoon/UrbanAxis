/* =========================================================
   URBAN AXIS
   INTERACTION
========================================================= */


/* CUSTOM CURSOR */

const cursor = document.querySelector(".cursor");

if (cursor) {

    document.addEventListener("mousemove", (event) => {

        cursor.style.left = event.clientX + "px";
        cursor.style.top = event.clientY + "px";

    });

}


/* SCROLL REVEAL */

const revealElements = document.querySelectorAll(
    ".intro-content, .product, .manifesto-text, .campaign-content, .social h2"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition =
        "opacity .8s ease, transform .8s cubic-bezier(.2,.8,.2,1)";

    revealObserver.observe(element);

});


/* HERO PARALLAX */

const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

    if (!heroImage) return;

    const scroll = window.scrollY;

    if (scroll < window.innerHeight) {

        heroImage.style.transform =
            `translateY(${scroll * 0.12}px)`;

    }

});


/* HOVER EFFECT */

document.querySelectorAll("a").forEach((link) => {

    link.addEventListener("mouseenter", () => {

        if (cursor) {
            cursor.style.transform =
                "translate(-50%, -50%) scale(2.5)";
        }

    });

    link.addEventListener("mouseleave", () => {

        if (cursor) {
            cursor.style.transform =
                "translate(-50%, -50%) scale(1)";
        }

    });

});