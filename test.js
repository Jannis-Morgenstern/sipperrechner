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
console.log(sipperrechner(3));
