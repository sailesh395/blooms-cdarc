/* Blooms CDARC — minimal site JS. No dependencies. */
(function () {
  "use strict";
  var WA_NUMBER = "919790811793"; // WhatsApp business number (no +, no spaces)

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  // Current year in footer(s)
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Enquiry form -> open WhatsApp with a prefilled message (no backend needed).
  // ponytail: no server/email service; hands off to WhatsApp. Add a real form
  // backend (Formspree/Netlify Forms) later if you want email delivery too.
  var form = document.querySelector("[data-enquiry-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var msg =
        "Hello Blooms CDARC, I'd like to enquire.%0A%0A" +
        "Name: " + encodeURIComponent(d.get("name") || "") + "%0A" +
        "Phone: " + encodeURIComponent(d.get("phone") || "") + "%0A" +
        "Child's age: " + encodeURIComponent(d.get("age") || "") + "%0A" +
        "Service: " + encodeURIComponent(d.get("service") || "") + "%0A" +
        "Message: " + encodeURIComponent(d.get("message") || "");
      window.open("https://wa.me/" + WA_NUMBER + "?text=" + msg, "_blank", "noopener");
    });
  }
})();
