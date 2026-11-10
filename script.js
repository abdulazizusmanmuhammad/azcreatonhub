
/* =================================
   AZ CREATION HUB
   Main JavaScript
================================= */

document.addEventListener("DOMContentLoaded", () => {

    // 1. PAGE LOADER
    const loader = document.querySelector("#page-loader");

    if (loader) {
        const hideLoader = () => {
            loader.classList.add("loader-hidden");

            window.setTimeout(() => {
                loader.remove();
            }, 700);
        };

        if (document.readyState === "complete") {
            hideLoader();
        } else {
            window.addEventListener("load", hideLoader, { once: true });
        }
    }

    // 2. ACTIVE NAVIGATION LINK
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach((link) => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        } else {
            link.classList.remove("active");
            link.removeAttribute("aria-current");
        }
    });

    // 3. HEADER SCROLL EFFECT
    const header = document.querySelector(".header");

    if (header) {
        const updateHeader = () => {
            header.classList.toggle("scrolled", window.scrollY > 50);
        };

        updateHeader();

        window.addEventListener("scroll", updateHeader, {
            passive: true
        });
    }

    // 4. AUTOMATIC FOOTER YEAR
    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 5. MOBILE HAMBURGER MENU
    const menuToggle = document.querySelector("#menu-toggle");
    const navList = document.querySelector(".nav-links");

    if (menuToggle && navList) {

        const closeMenu = () => {
            navList.classList.remove("show");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        };

        menuToggle.addEventListener("click", () => {
            const isOpen = navList.classList.toggle("show");

            menuToggle.classList.toggle("active", isOpen);
            menuToggle.setAttribute("aria-expanded", String(isOpen));

            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );
        });

        navList.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        });
    }

    // 6. CONTACT FORM
    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const formData = new FormData(contactForm);
            const phone = formData.get("phone")?.toString().trim();

            const message = [
                `Hello AZ Creation Hub! My name is ${formData.get("name")}.`,
                `Email: ${formData.get("email")}`,
                `Phone: ${phone}`,
                `I'm interested in: ${formData.get("interest")}`,
                `Message: ${formData.get("message")}`
            ].join("\n");

            const whatsappUrl =
                `https://wa.me/2347077909619?text=${encodeURIComponent(message)}`;

            window.open(
                whatsappUrl,
                "_blank",
                "noopener,noreferrer"
            );
        });
    }

});

// 7. WHATSAPP POPUP
function toggleWhatsApp() {
    const popup = document.querySelector("#whatsappPopup");

    if (popup) {
        popup.classList.toggle("active");
    }
}
