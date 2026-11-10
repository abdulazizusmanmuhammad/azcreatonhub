
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
        const referenceInput = contactForm.querySelector("#contact-references");
        const referenceList = contactForm.querySelector("#selected-reference-files");

        if (!referenceInput || !referenceList) {
            throw new Error("Contact form reference-file controls are missing from the page.");
        }

        referenceInput.addEventListener("change", () => {
            const fileNames = Array.from(referenceInput.files, (file) => file.name);
            referenceList.textContent = fileNames.length
                ? `Selected: ${fileNames.join(", ")}`
                : "";
            referenceList.hidden = fileNames.length === 0;
        });

        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const formData = new FormData(contactForm);
            const phone = formData.get("phone")?.toString().trim();
            const name = formData.get("name")?.toString().trim();
            const email = formData.get("email")?.toString().trim();
            const interest = formData.get("interest")?.toString();
            const formMessage = formData.get("message")?.toString().trim();
            const referenceFiles = Array.from(referenceInput.files, (file) => file.name);

            const message = [
                `Hello AZ Creation Hub! My name is ${name}.`,
                `Email: ${email}`,
                `Phone: ${phone}`,
                `I'm interested in: ${interest}`,
                `Message: ${formMessage}`,
                ...(referenceFiles.length
                    ? [`Reference files to attach: ${referenceFiles.join(", ")}`]
                    : [])
            ].join("\n");

            const whatsappLink = document.querySelector("#send-whatsapp");
            const emailLink = document.querySelector("#send-email");
            const sendOptions = document.querySelector("#contact-send-options");

            if (!whatsappLink || !emailLink || !sendOptions) {
                throw new Error("Contact form send options are missing from the page.");
            }

            whatsappLink.href =
                `https://wa.me/2347077909619?text=${encodeURIComponent(message)}`;

            const subject = `Project inquiry from ${name}`;
            const recipient = "abdulazizusmanaum01@mail.com";
            const gmailUrl = new URL("https://mail.google.com/mail/");
            gmailUrl.searchParams.set("view", "cm");
            gmailUrl.searchParams.set("fs", "1");
            gmailUrl.searchParams.set("to", recipient);
            gmailUrl.searchParams.set("su", subject);
            gmailUrl.searchParams.set("body", message);
            emailLink.href = gmailUrl.toString();

            const emailAppLink = document.querySelector("#send-email-app");
            if (!emailAppLink) {
                throw new Error("Email app fallback is missing from the contact form.");
            }
            emailAppLink.href =
                `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

            sendOptions.hidden = false;
            sendOptions.querySelector(".form-note").textContent = referenceFiles.length
                ? "Attach your selected reference files in WhatsApp or email before sending."
                : "Choose how you’d like to send your message:";
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
