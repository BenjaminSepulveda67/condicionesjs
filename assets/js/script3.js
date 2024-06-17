document.getElementById("submit").addEventListener("click", function () {
  const digit1 = document.getElementById("digito1").value;
  const digit2 = document.getElementById("digito2").value;
  const digit3 = document.getElementById("digito3").value;
  const password = digit1 + digit2 + digit3;

  const result = document.getElementById("result");

  if (password === "911") {
    result.textContent = "Password 1 correcto";
    alert("Password correcto");
  } else if (password === "714") {
    result.textContent = "Password 2 correcto";
    alert("Password correcto");
  } else {
    result.textContent = "Password incorrecto";
    alert("Password incorrecto");
  }
});
