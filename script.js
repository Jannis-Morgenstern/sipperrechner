// DOM Elemente werden selcted
const inputElement = document.querySelector("#treffer");
const formElement = document.querySelector("#trefferform");
const schluckeContainer = document.querySelector(".schluckeContainer");
const button = document.querySelector("#addone");
// Neues DOM Element wird erstellt
const schluckeElement = document.createElement("p");

// Globale Anzahl der Schlucke
let schlucke = 0;
let treffer = 0;

// Logik für den Schluckerechner
const sipperrechner = (trefferAnz) => {
  let schlucke = 0;
  trefferAnz = trefferAnz - 1;

  while (trefferAnz > 0) {
    schlucke += Math.pow(2, trefferAnz);
    trefferAnz = trefferAnz - 1;
  }
  schlucke += Math.pow(2, trefferAnz);

  return schlucke;
};

// Funktion, die beim input change event ausgeführt wird
const changeHandler = (event) => {
  treffer = Number(event.target.value);
  let output = sipperrechner(treffer);
  inputElement.value = treffer;
};

const addHandler = () => {
  treffer++;
  let output = sipperrechner(treffer);
  inputElement.value = treffer;
};

// Funktion, die beim form submit event ausgeführt wird
const submitHandler = (event) => {
  // Default action für submit: refresh page -> wird prevented
  event.preventDefault();

  // Schlucke Element wird die ID schlucke zugewiesen
  schluckeElement.className = "output";

  // Text vom DOM Element mit der ID schlucke wird gesetzt
  schluckeElement.innerHTML = output + " Schlucke";

  // Dem schluckeContainer Element wird das schlucke Element als Child zugewiesen
  schluckeContainer.appendChild(schluckeElement);
};

// Register change event listener für input element
inputElement.addEventListener("change", changeHandler);

// Register submit event listener für form element
formElement.addEventListener("submit", submitHandler);

button.addEventListener("click", addHandler);
