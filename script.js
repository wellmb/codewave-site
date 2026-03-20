document.addEventListener("DOMContentLoaded", () => {

  // 🔥 Анимация появления
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  document.querySelectorAll(".scroll-anim").forEach(el => {
    observer.observe(el);
  });

  // 📱 Мобильное меню
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("mobileMenu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }

  // 🔥 ПЕЧАТАЮЩИЙСЯ КОД
  const codeEl = document.getElementById("code");

  const text = `function createWebsite(client) {
  const design = "minimal + modern";
  const speed = "fast ⚡";
  const result = "high conversion 🚀";

  return {
    client: client,
    design,
    speed,
    result
  };
}

const site = createWebsite("YOU");
console.log(site);`;

  let i = 0;

  function type() {
    if (i < text.length) {
      codeEl.textContent += text.charAt(i);
      i++;
      setTimeout(type, 20);
    }
  }

  if (codeEl) {
    type();
  }

});