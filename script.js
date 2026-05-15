// Fade animation on scroll

const fadeElements = document.querySelectorAll(
  ".research-card, .finding, .feature, .motif-card, .question"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

fadeElements.forEach((el) => {
  el.classList.add("fade-up");
  observer.observe(el);
});

// Smooth Section Reveal

window.addEventListener("scroll", () => {
  document.body.style.setProperty(
    "--scroll",
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
  );
});