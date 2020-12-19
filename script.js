const inputElement = document.querySelector('#treffer');
const formElement = document.querySelector('#trefferform');
const schluckeElement = document.querySelector('#schlucke');
let schlucke = 0;

const sipperrechner = trefferAnz => {
	let schlucke = 0;
	trefferAnz = trefferAnz - 1;

	while (trefferAnz > 0) {
		schlucke += Math.pow(2, trefferAnz);
		trefferAnz = trefferAnz - 1;
	}
	schlucke += Math.pow(2, trefferAnz);

	return schlucke;
};

const changeHandler = event => {
	schlucke = sipperrechner(Number(event.target.value));
};

const submitHandler = event => {
	event.preventDefault();
	console.log(schlucke);
	schluckeElement.innerHTML = schlucke + ' Schlucke';
};

inputElement.addEventListener('change', changeHandler);
formElement.addEventListener('submit', submitHandler);
