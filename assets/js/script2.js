document.addEventListener("DOMContentLoaded", function () {
  const calcularBtn = document.querySelector("#calcular");
  const resultadoP = document.querySelector("#resultado");

  calcularBtn.addEventListener("click", function () {
    const sticker1 = parseInt(document.querySelector("#sticker1").value) || 0;
    const sticker2 = parseInt(document.querySelector("#sticker2").value) || 0;
    const sticker3 = parseInt(document.querySelector("#sticker3").value) || 0;

    const total = sticker1 + sticker2 + sticker3;

    if (total <= 10) {
      resultadoP.textContent = `Llevas ${total} stickers`;
    } else {
      resultadoP.textContent = "¡Llevas demasiados stickers!";
    }
  });
});
