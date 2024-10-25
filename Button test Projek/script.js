function generiereRandomZahl() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  document.getElementById("ausgabe").textContent = randomNumber
}
