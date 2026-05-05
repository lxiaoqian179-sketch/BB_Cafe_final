//Step 1：news.html的卡片加<a>連結<a href="news-detail.html?id=1">
//Step 2：建立資料（先用 mock）
const newsData = {
  1: {
    category: '最新活動 Latest Events',
    title: '冬日暖心優惠',
    date: '2025.12.01 – 2025.12.31',
    image: '../img/news/news-a.jpg',
    imageAlt: '冬日暖心優惠',
    items: [
      '活動品項：卡布奇諾、馥列白、美式咖啡',
      '活動折扣：享 <strong>75 折</strong> 優惠',
      '活動日期：2025/12/01 – 12/31',
      '活動地點：Brew &amp; Belle Café 全門市',
    ],
    paragraphs: [
      '寒冷的冬日，最需要一杯暖心好咖啡陪伴。本月特別推出三款人氣咖啡限時 75 折優惠，讓你每一天都能以實惠的價格享受職人手沖的溫暖滋味。',
      '無論是濃郁紮實的美式咖啡、綿密滑順的卡布奇諾，還是奶泡細緻的馥列白，都以最嚴選的豆子與最用心的沖煮，在每個冬日午後為你帶來一份屬於 Brew &amp; Belle 的溫暖。',
    ],
    note: '※ 本優惠不與其他活動合併使用。<br>※ 活動期間如有異動，以門市公告為準。',
  },
  2: {
    category: '最新活動 Latest Events',
    title: '溫情年末獻禮',
    date: '2025.12.01 – 2025.12.31',
    image: '../img/news/news-b.jpg',
    imageAlt: '溫情年末獻禮',
    items: [
      '活動內容：單筆消費滿 <strong>1,000 元</strong>，即享 <strong>100 元回饋券</strong>',
      '活動日期：2025/12/01 – 12/31',
      '活動地點：Brew &amp; Belle Café 全門市',
      '回饋券使用期限：2026/01/01 – 01/31',
    ],
    paragraphs: [
      '感謝每一位在這一年陪伴我們的你。年末特別推出消費回饋活動，只要單筆消費滿 1,000 元，即可獲得 100 元回饋券，留著在新的一年繼續享用。',
      '回饋券可於 2026 年 1 月整月內使用，不限品項、不限時段，是我們對每一位老朋友的一點心意，希望新的一年也能繼續在 Brew &amp; Belle 找到屬於你的那份美好。',
    ],
    note: '※ 回饋券每筆消費限用一張，不可折抵現金。<br>※ 活動期間如有異動，以門市公告為準。',
  },
  3: {
    category: '最新活動 Latest Events',
    title: '感謝這一年的相遇｜年末抽獎',
    date: '2025.11.01 – 2025.12.31',
    image: '../img/news/news-c.jpg',
    imageAlt: '感謝這一年的相遇｜年末抽獎',
    items: [
      '最高獎品價值：<strong>3,000 元</strong>',
      '參加方式：活動期間內消費，即自動取得抽獎資格',
      '活動日期：2025/11/01 – 12/31',
      '開獎日期：2026/01/10',
    ],
    paragraphs: [
      '感謝這一年來每一次相遇，每一杯咖啡、每一口甜點，都因為有你的陪伴而更加美好。為了表達我們最深的感謝，年末特別舉辦抽獎活動。',
      '活動期間內只要至門市消費，即可自動獲得抽獎資格。獎品包含 Brew &amp; Belle 精選禮盒、咖啡年票及消費回饋券，最高獎品價值達 3,000 元，希望為你的新年帶來一份驚喜。',
    ],
    note: '※ 每筆消費計一次抽獎資格，當月累計不上限。<br>※ 中獎名單將於 2026/01/10 公布於官方社群。<br>※ 活動期間如有異動，以門市公告為準。',
  },

  // ── 期間限定 Limited Menu ──
  4: {
    category: '期間限定 Limited Menu',
    title: '冬日限定系列｜櫻桃摩卡',
    date: '2025.12.01 – 2025.12.31',
    image: '../img/news/coffee-cherry mocha.jpg',
    imageAlt: '冬日限定系列｜櫻桃摩卡',
    items: [
      '限定品項：櫻桃摩卡（熱 / 冰 可選）',
      '供應期間：2025/12/01 – 12/31，售完為止',
      '供應門市：Brew &amp; Belle Café 全門市',
    ],
    paragraphs: [
      '冬日裡最迷人的滋味，莫過於酸甜果香與濃郁咖啡的相遇。本季限定「櫻桃摩卡」以新鮮櫻桃糖漿融入經典摩卡配方，莓果的酸甜完美托出巧克力與咖啡的深度，入口溫暖，回甘悠長。',
      '不論選擇熱飲暖胃，或冰飲清爽，每一口都是只有這個冬天才有的限定滋味。錯過就要再等一年，把握機會，趕快來試試吧。',
    ],
    note: '※ 本品項為限期供應，售完即止。<br>※ 供應期間如有異動，以門市公告為準。',
  },
  5: {
    category: '期間限定 Limited Menu',
    title: '冬日限定系列｜暮紫葡萄綻香',
    date: '2025.12.01 – 2025.12.31',
    image: '../img/news/drink-grape-cut.jpg',
    imageAlt: '冬日限定系列｜暮紫葡萄綻香',
    items: [
      '限定品項：暮紫葡萄綻香（冰飲）',
      '供應期間：2025/12/01 – 12/31，售完為止',
      '供應門市：Brew &amp; Belle Café 全門市',
    ],
    paragraphs: [
      '以深邃的暮色為靈感，「暮紫葡萄綻香」選用飽滿多汁的葡萄果汁，層疊清新花果香氣，色澤如薄暮時分的天空般優雅迷人，是這個冬日最詩意的一杯。',
      '每一口都帶著葡萄的天然甘甜與淡淡花香，清爽不膩，適合在午後靜靜品飲，讓時光慢下來，感受這份屬於冬日的浪漫。',
    ],
    note: '※ 本品項為限期供應，售完即止。<br>※ 供應期間如有異動，以門市公告為準。',
  },
  6: {
    category: '期間限定 Limited Menu',
    title: '冬日限定系列｜絲絨巧克力乳酪蛋糕',
    date: '2025.12.01 – 2025.12.31',
    image: '../img/news/dessert-wine cake.jpg',
    imageAlt: '冬日限定系列｜絲絨巧克力乳酪蛋糕',
    items: [
      '限定品項：絲絨巧克力乳酪蛋糕（單片）',
      '供應期間：2025/12/01 – 12/31，售完為止',
      '供應門市：Brew &amp; Belle Café 全門市',
    ],
    paragraphs: [
      '冬日最奢華的甜蜜獻禮——「絲絨巧克力乳酪蛋糕」以比利時黑巧克力與頂級奶油乳酪交疊製成，口感細膩如絲，入口即化，每一層都是濃郁而不失輕盈的享受。',
      '搭配一杯卡布奇諾或美式咖啡，是冬日午後最完整的幸福組合。限量供應，建議早點到店，以免向隅。',
    ],
    note: '※ 本品項為限期限量供應，售完即止。<br>※ 供應期間如有異動，以門市公告為準。',
  },

  // ── 媒體報導 Media Features ──
  7: {
    category: '媒體報導 Media Features',
    title: '《咖啡誌》專欄｜開業僅兩年，Brew & Belle Café 迅速受到矚目',
    date: '2025.09.15',
    image: '../img/news/media-a.jpg',
    imageAlt: '《咖啡誌》專欄',
    items: [
      '報導媒體：《咖啡誌》Café Magazine',
      '刊出日期：2025/09/15',
      '專欄主題：台中精品咖啡新勢力',
    ],
    paragraphs: [
      '《咖啡誌》本期專欄聚焦台中咖啡新浪潮，Brew &amp; Belle Café 以開業僅兩年便在業界口耳相傳的實力，獲邀進行深度品牌專訪。記者探訪了我們的選豆流程、手沖哲學，以及那份「讓每位客人感受到被認真對待」的核心理念。',
      '文章中特別提到，Brew &amp; Belle Café 不僅在咖啡工藝上精益求精，更以店內細膩的空間設計與溫暖服務，打造出讓人願意一再造訪的日常風景。感謝《咖啡誌》的報導，讓更多人認識我們。',
    ],
    note: '※ 本文轉載自《咖啡誌》，版權歸原媒體所有。',
  },
  8: {
    category: '媒體報導 Media Features',
    title: '聯名企劃｜Brew & Belle Café × 懶懶貓',
    date: '2025.10.20',
    image: '../img/news/media-b.jpg',
    imageAlt: '聯名企劃｜Brew & Belle Café × 懶懶貓',
    items: [
      '聯名對象：懶懶貓插畫品牌',
      '限定商品：聯名杯袋、聯名保溫杯',
      '販售期間：2025/10/20 起，售完為止',
      '購買地點：Brew &amp; Belle Café 全門市',
    ],
    paragraphs: [
      '這次與深受年輕族群喜愛的插畫品牌「懶懶貓」攜手合作，推出聯名限定商品系列！懶懶貓標誌性的軟萌風格與 Brew &amp; Belle Café 的溫暖品牌個性完美融合，打造出既實用又可愛的日常小物。',
      '聯名商品包含限定杯袋與保溫杯，每一件都是插畫師手繪原稿設計，數量有限，是收藏與日常使用兼具的甜美選擇。想把這份美好帶回家的你，快來門市搶先入手吧！',
    ],
    note: '※ 聯名商品數量有限，售完不補貨。<br>※ 商品圖片僅供參考，實物以門市現貨為準。',
  },
  9: {
    category: '媒體報導 Media Features',
    title: '《ELLE》專欄｜網紅爭相打卡的人氣據點',
    date: '2025.11.05',
    image: '../img/news/media-c.jpg',
    imageAlt: '《ELLE》專欄',
    items: [
      '報導媒體：《ELLE》台灣版',
      '刊出日期：2025/11/05',
      '專欄主題：台中最值得一訪的風格咖啡館',
    ],
    paragraphs: [
      '《ELLE》台灣版本期生活風格專欄，將 Brew &amp; Belle Café 列入「台中最值得一訪的風格咖啡館」名單。記者深入採訪了我們的空間設計理念、招牌飲品背後的故事，以及每天在這裡發生的溫暖日常。',
      '從挑高的木質空間、窗邊灑落的午後光線，到每一杯由職人手沖的精品咖啡，《ELLE》以文字與影像記錄下屬於 Brew &amp; Belle 的獨特氣質。感謝每一位來打卡、來停留的你，讓這裡的美好得以被更多人看見。',
    ],
    note: '※ 本文轉載自《ELLE》台灣版，版權歸原媒體所有。',
  },
};


//Step 3：讀取 URL 參數，找到對應的消息資料
(function () {
  const id = new URLSearchParams(window.location.search).get('id');
  const data = newsData[id];

  if (!data) {
    document.querySelector('.article-layout').innerHTML =
      '<p style="padding:60px;font-family:serif;color:#888;">找不到此消息，請返回最新消息頁面。</p>';
    return;
  }


  //Step 4：塞進畫面
  document.title = data.title + '｜Brew & Belle Café';
  document.getElementById('detail-image').src = data.image;
  document.getElementById('detail-image').alt = data.imageAlt;
  document.getElementById('detail-category').textContent = data.category;
  document.getElementById('detail-title').textContent = data.title;
  document.getElementById('detail-date').textContent = data.date;

  const body = document.getElementById('detail-body');

  const ul = document.createElement('ul');
  data.items.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = item;
    ul.appendChild(li);
  });
  body.appendChild(ul);

  data.paragraphs.forEach(text => {
    const p = document.createElement('p');
    p.innerHTML = text;
    body.appendChild(p);
  });

  const note = document.createElement('p');
  note.className = 'article-note';
  note.innerHTML = data.note;
  body.appendChild(note);
})();
