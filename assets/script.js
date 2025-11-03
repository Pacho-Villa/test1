document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[href^='#']");
  for (let link of links) {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
      }
    });
  }
});