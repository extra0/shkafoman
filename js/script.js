$(function(){

	// вызов фенсибокса
	$('[fancybox]').fancybox();

	// слайдер глубины
	$('#depth').slider({
		range: "min",
		value: 40,
		step: 10,
		min: 40,
		max: 60
	}).slider("pips", {
		rest: "label",
		suffix: " см"
	});

	// слайдер ширины
	$('#width').slider({
		range: "min",
		value: 40,
		step: 10,
		min: 40,
		max: 80
	}).slider("pips", {
		rest: "label",
		suffix: " см"
	});

	// слайдер высоты
	$('#height').slider({
		range: "min",
		value: 2300,
		step: 100,
		min: 2300,
		max: 2600
	}).slider("pips", {
		rest: "label",
		suffix: " см"
	});

});