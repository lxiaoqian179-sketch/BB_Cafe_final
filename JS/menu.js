// 取得按鈕與分類區塊
const tabs = document.querySelectorAll(".menu-tabs button");
const sections = document.querySelectorAll(".menu-section");

tabs.forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.dataset.target;

        // 更新按鈕樣式
        tabs.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // 控制顯示分類
        sections.forEach(sec => {
            if (target === "all") {
                sec.classList.add("active");  // 全部都顯示
            } else if (sec.dataset.category === target) {
                sec.classList.add("active");
            } else {
                sec.classList.remove("active");
            }
        });
    });
});


// 預設載入顯示所有品項
document.querySelector("button[data-target='all']").click();


// 平滑捲動到頂部分類按鈕區
function scrollToMenuTop() {
    document.getElementById("menuTop")
        .scrollIntoView({ behavior: "smooth" });
}


document.addEventListener("DOMContentLoaded", () => {

    const topBtn = document.querySelector(".back-to-top");
    const menuPage = document.querySelector(".menu-page");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                topBtn.classList.add("show");   // 顯示按鈕
            } else {
                topBtn.classList.remove("show"); // 隱藏按鈕
            }
        });
    }, {
        threshold: 0.1   // menu-page 有 10% 出現在畫面就觸發
    });

    observer.observe(menuPage);

});

document.querySelector(".hamburger").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".mobile-menu").classList.toggle("active");
});






