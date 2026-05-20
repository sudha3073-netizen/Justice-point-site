const menu = document.querySelector(".menu");
const links = document.querySelector(".links");

menu?.addEventListener("click", () => {
  links?.classList.toggle("open");
});

document.querySelectorAll(".links a").forEach((link) => {
  link.addEventListener("click", () => links?.classList.remove("open"));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
