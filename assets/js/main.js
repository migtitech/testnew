(function () {
  var header = document.querySelector(".header");
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("site-nav");

  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        btn.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        btn.focus();
      }
    });
  }

  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
