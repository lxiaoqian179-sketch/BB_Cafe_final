document.addEventListener("DOMContentLoaded", () => {
    const observed = document.querySelectorAll('.about-text, .about-images');

    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('animate');
        });
    }, { threshold: 0.2 });

    observed.forEach(el => io.observe(el));
});


window.addEventListener("load", () => {
    document.querySelector(".logo img").classList.add("show");
});


// Menu卡片自動輪播 + 手動左右切換
const track = document.querySelector(".slider-track");
const cards = document.querySelectorAll(".card");
let index = 0;

function updateSlider() {
    track.style.transform = `translateX(${-index * 300}px)`;
    // 260px 卡片 + 40px gap = 300px
}

/* 自動輪播 */
setInterval(() => {
    index = (index + 1) % cards.length;
    updateSlider();
}, 3000);

/* 左右按鈕控制 */
document.querySelector(".prev").onclick = () => {
    index = (index - 1 + cards.length) % cards.length;
    updateSlider();
};

document.querySelector(".next").onclick = () => {
    index = (index + 1) % cards.length;
    updateSlider();
};


document.addEventListener("DOMContentLoaded", () => {

    // ===== 回到 Popular 區 =====
    window.scrollToPopularTop = function () {
        const target = document.getElementById("popularTop");
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    // ===== Back to Top 顯示控制（Hero 以下才出現）=====
    const topBtn = document.querySelector(".back-to-top");
    const heroSection = document.querySelector(".hero");

    if (topBtn && heroSection) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                // Hero 在畫面中 → 隱藏
                // Hero 離開畫面 → 顯示
                topBtn.classList.toggle("show", !entry.isIntersecting);
            });
        }, {
            threshold: 0.1
        });

        observer.observe(heroSection);
    }

});



    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });




