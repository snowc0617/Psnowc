// src/scripts/menu.js
document.addEventListener('astro:page-load', () => {
    // 雖然現在還沒用到 View Transitions，但養成好習慣
    // 這裡放原本的邏輯
});

// 因為這是簡單專案，我們先直接寫：
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('expanded');
});
