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

    const productModal = document.getElementById("product-modal");
    const productOverlay = document.getElementById("product-modal-overlay");
    const productClose = productModal.querySelector(".modal-close");
    const productImage = document.getElementById("product-modal-image");
    const productTitleZh = productModal.querySelector(".modal-title-zh");
    const productTitleEn = productModal.querySelector(".modal-title-en");
    const productDescription = document.getElementById("product-modal-description");

    const productFeaturesDivider = productModal.querySelector("hr");
    const productFeaturesList = document.getElementById("product-modal-features");

    const openProductModal = (card) => {
        const itemZh = card.dataset.itemZh;
        const itemEn = card.dataset.itemEn;
        const imageSrc = card.dataset.image || card.querySelector("img").src;
        const description = card.dataset.description || "此商品可提供客製化服務。";

        productImage.src = imageSrc;
        productImage.alt = `${itemZh} ${itemEn}`;
        productTitleZh.textContent = itemZh;
        productTitleEn.textContent = itemEn;
        productDescription.textContent = description;

        const hasFeatures = card.dataset.features;
        productFeaturesDivider.style.display = hasFeatures ? "" : "none";
        productFeaturesList.style.display = hasFeatures ? "" : "none";

        productModal.classList.add("active");
        productModal.setAttribute("aria-hidden", "false");
    };

    const closeProductModal = () => {
        productModal.classList.remove("active");
        productModal.setAttribute("aria-hidden", "true");
    };

    document.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("click", () => openProductModal(card));
    });

    productOverlay.addEventListener("click", closeProductModal);
    productClose.addEventListener("click", closeProductModal);
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && productModal.classList.contains("active")) {
            closeProductModal();
        }
    });

});

document.querySelector(".hamburger").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".mobile-menu").classList.toggle("active");
});






