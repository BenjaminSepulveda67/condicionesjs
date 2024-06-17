document.addEventListener("DOMContentLoaded", function () {
  const img = document.querySelector("#imagen");

  img.addEventListener("click", function () {
    if (img.style.border) {
      img.style.border = "";
    } else {
      img.style.border = "2px solid red";
    }
  });
});
