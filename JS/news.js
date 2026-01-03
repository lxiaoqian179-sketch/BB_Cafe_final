document.addEventListener("DOMContentLoaded", () => {

    // ===== 分類切換 =====
    const tabs = document.querySelectorAll(".news-tabs button");
    const sections = document.querySelectorAll(".news-section");

    tabs.forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.dataset.target;

            tabs.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            sections.forEach(sec => {
                if (target === "all" || sec.dataset.category === target) {
                    sec.classList.add("active");
                } else {
                    sec.classList.remove("active");
                }
            });
        });
    });

    // 預設顯示全部
    document.querySelector("button[data-target='all']")?.click();


    // ===== 回到分類頂端 =====
    window.scrollToNewsTop = function () {
        document.getElementById("newsTop")
            ?.scrollIntoView({ behavior: "smooth" });
    };


    // ===== Back to Top 顯示控制 =====
    const topBtn = document.querySelector(".back-to-top");
    const newsPage = document.querySelector(".news-page");

    if (topBtn && newsPage) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                topBtn.classList.toggle("show", entry.isIntersecting);
            });
        }, { threshold: 0.1 });

        observer.observe(newsPage);
    }

});


// 漢堡選單開關
document.querySelector(".hamburger").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".mobile-menu").classList.toggle("active");
});

