// 🔥 Анимация появления блоков
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

// подключаем ко всем элементам
document.querySelectorAll(".scroll-anim").forEach(el => {
  observer.observe(el);
});


// 📱 Мобильное меню
const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
