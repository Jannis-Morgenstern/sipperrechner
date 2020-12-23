const inputElementM = document.querySelector("#amount");
const inputElementG = document.querySelector("#gewicht");
const inputElementP = document.querySelector("#prz");
const formElement = document.querySelector("#prmform");
const prmElement = document.createElement("p");
const schluckeContainer = document.querySelector(".schluckeContainer");

const promillerechner = (ml, kg, prz) => {
  let promille = ((ml / 100) * prz * 0.8) / (kg * 0.7);
  return promille;
};
let menge = 0;
let gewicht = 0;
let prozent = 0;
const ChangeHandlerM = (event) => {
  menge = Number(event.target.value);
};

const ChangeHandlerG = (event) => {
  gewicht = Number(event.target.value);
};

const ChangeHandlerP = (event) => {
  prozent = Number(event.target.value);
};

const submitHandler = (event) => {
  event.preventDefault();
  let output = promillerechner(menge, gewicht, prozent);
  prmElement.className = "output";
  prmElement.innerHTML = output + " Promille";
  schluckeContainer.appendChild(prmElement);
};

inputElementM.addEventListener("change", ChangeHandlerM);
inputElementG.addEventListener("change", ChangeHandlerG);
inputElementP.addEventListener("change", ChangeHandlerP);
formElement.addEventListener("submit", submitHandler);
