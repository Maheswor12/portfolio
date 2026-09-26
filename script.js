(function () {
  "use strict";

  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navBar = document.querySelector(".site-nav-bar");
  const MOBILE_NAV_BREAKPOINT = 1024;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function closeNav() {
    if (!navLinks || !navToggle) return;
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
    document.body.style.overflow = "";
  }

  function openNav() {
    if (!navLinks || !navToggle) return;
    navLinks.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close menu");
    document.body.style.overflow = "hidden";
  }

  navToggle?.addEventListener("click", () => {
    navLinks.classList.contains("is-open") ? closeNav() : openNav();
  });

  navLinks?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });

  document.addEventListener("click", (e) => {
    if (!navLinks?.classList.contains("is-open")) return;
    const target = e.target;
    if (target instanceof Node && !navLinks.contains(target) && !navToggle?.contains(target)) {
      closeNav();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > MOBILE_NAV_BREAKPOINT) closeNav();
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#" || href === "#top") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const navHeight = navBar?.offsetHeight ?? 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;
      window.scrollTo({
        top,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
      history.pushState(null, "", href);

      if (href === "#main-content" || target.id === "main-content") {
        target.focus({ preventScroll: true });
      } else if (target.tabIndex === -1) {
        target.focus({ preventScroll: true });
      }
    });
  });

  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  contactForm?.addEventListener("submit", (e) => {
    const action = contactForm.getAttribute("action") || "";
    if (action.includes("YOUR_FORM_ID")) {
      e.preventDefault();
      if (formStatus) {
        formStatus.textContent =
          "Contact form is not configured yet. Replace YOUR_FORM_ID in index.html, or email Mahesworrajshrestha@gmail.com directly.";
        formStatus.classList.add("is-error");
      }
    }
  });
})();
