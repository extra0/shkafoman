$(function(){

	var doorsVal = 2,
		depthVal = 40,
		widthVal = 40,
		heightVal = 2300;

	$('.calculation__filter-radio').on('change', function(){
		doorsVal = parseInt($(this).val());
		imgChanger();
	});

	// слайдер глубины
	$('#depth').slider({
		range: "min",
		value: 40,
		step: 10,
		min: 40,
		max: 60,
		slide: function( event, ui ) {
			depthVal = ui.value;
			imgChanger();
		}
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
		max: 80,
		slide: function( event, ui ) {
			widthVal = ui.value;
			imgChanger();
		}
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
		max: 2600,
		slide: function( event, ui ) {
			heightVal = ui.value;
			imgChanger();
		}
	}).slider("pips", {
		rest: "label",
		suffix: " см"
	});

	// функция замены изображения
	function imgChanger() {

		var nextImg = $('[next-img]');


		// проверка на подстановку картинок
		switch(true) {
			case (doorsVal == 2 && depthVal == 40 && widthVal == 40 && heightVal == 2300):
				nextImg.attr('src', '/img/items/5_1.jpg');
				break;
			case (doorsVal == 3 && depthVal == 40 && widthVal == 40 && heightVal == 2300):
				nextImg.attr('src', '/img/items/5_2.jpg');
				break;
			case (doorsVal == 4 && depthVal == 40 && widthVal == 40 && heightVal == 2300):
				nextImg.attr('src', '/img/items/5_3.jpg');
				break;
		}


		// анимация замены
		$('[current-img], [next-img]').addClass('change'); // добавляем класс на смену изображений

		setTimeout(function(){
			$('[current-img], [next-img]').removeClass('change'); // убираем класс анимации
			$('[current-img]').attr('src', $('[next-img]').attr('src')); // делаем замену нового изображения на текущее
		}, 400);

	}

	console.log(doorsVal);
	console.log(widthVal);
	console.log(heightVal);
	console.log(depthVal);


});