console.log("網站已載入完成！");

const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("mouseenter", () => card.style.backgroundColor = "#f8f5e8");
  card.addEventListener("mouseleave", () => card.style.backgroundColor = "rgba(255, 250, 240, 0.9)");
});

const fills = document.querySelectorAll('.skill-fill');

fills.forEach(fill => {
  const width = fill.style.width;
  fill.style.width = '0%';
  setTimeout(() => {
    fill.style.width = width;
  }, 500);
});