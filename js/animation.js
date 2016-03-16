$(function(){

	// задаем переменные = начальным параметрам характеристик фильтра
	var doorsVal = 3,
		depthVal = 50,
		widthVal = 60,
		heightVal = 2400;

	$('.calculation__filter-radio').on('change', function(){
		doorsVal = parseInt($(this).val());
		imgChanger();
	});

	// слайдер глубины
	$('#depth').slider({
		range: "min",
		value: 50,
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
		value: 60,
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
		value: 2400,
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

		var nextImg = $('[next-img]'),
			imgs = $('[current-img], [next-img]');

		// проверка на подстановку картинок
		switch(true) {
			// ========== 2-е двери
			case (doorsVal == 2 && widthVal == 40 && heightVal == 2300 && depthVal == 40):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w40_h230_d40.png');
				break;
			case (doorsVal == 2 && widthVal == 40 && heightVal == 2300 && depthVal == 50):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w40_h230_d50.png');
				break;
			case (doorsVal == 2 && widthVal == 40 && heightVal == 2300 && depthVal == 60):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w40_h230_d60.png');
				break;
			case (doorsVal == 2 && widthVal == 40 && heightVal == 2400 && depthVal == 40):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w40_h240_d40.png');
				break;
			case (doorsVal == 2 && widthVal == 40 && heightVal == 2400 && depthVal == 50):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w40_h240_d50.png');
				break;
			case (doorsVal == 2 && widthVal == 40 && heightVal == 2400 && depthVal == 60):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w40_h240_d60.png');
				break;
			case (doorsVal == 2 && widthVal == 40 && heightVal == 2500 && depthVal == 40):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w40_h250_d40.png');
				break;
			case (doorsVal == 2 && widthVal == 40 && heightVal == 2500 && depthVal == 50):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w40_h250_d50.png');
				break;
			case (doorsVal == 2 && widthVal == 40 && heightVal == 2500 && depthVal == 60):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w40_h250_d60.png');
				break;
			case (doorsVal == 2 && widthVal == 40 && heightVal == 2600 && depthVal == 40):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w40_h260_d40.png');
				break;
			case (doorsVal == 2 && widthVal == 40 && heightVal == 2600 && depthVal == 50):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w40_h260_d50.png');
				break;
			case (doorsVal == 2 && widthVal == 40 && heightVal == 2600 && depthVal == 60):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w40_h260_d60.png');
				break;
			case (doorsVal == 2 && widthVal == 50 && heightVal == 2300 && depthVal == 40):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w50_h230_d40.png');
				break;
			case (doorsVal == 2 && widthVal == 50 && heightVal == 2300 && depthVal == 50):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w50_h230_d50.png');
				break;
			case (doorsVal == 2 && widthVal == 50 && heightVal == 2300 && depthVal == 60):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w50_h230_d60.png');
				break;
			case (doorsVal == 2 && widthVal == 50 && heightVal == 2400 && depthVal == 40):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w50_h240_d40.png');
				break;
			case (doorsVal == 2 && widthVal == 50 && heightVal == 2400 && depthVal == 50):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w50_h240_d50.png');
				break;
			case (doorsVal == 2 && widthVal == 50 && heightVal == 2400 && depthVal == 60):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w50_h240_d60.png');
				break;
			case (doorsVal == 2 && widthVal == 50 && heightVal == 2500 && depthVal == 40):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w50_h250_d40.png');
				break;
			case (doorsVal == 2 && widthVal == 50 && heightVal == 2500 && depthVal == 50):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w50_h250_d50.png');
				break;
			case (doorsVal == 2 && widthVal == 50 && heightVal == 2500 && depthVal == 60):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w50_h250_d60.png');
				break;
			case (doorsVal == 2 && widthVal == 50 && heightVal == 2600 && depthVal == 40):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w50_h260_d40.png');
				break;
			case (doorsVal == 2 && widthVal == 50 && heightVal == 2600 && depthVal == 50):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w50_h260_d50.png');
				break;
			case (doorsVal == 2 && widthVal == 50 && heightVal == 2600 && depthVal == 60):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w50_h260_d60.png');
				break;
			case (doorsVal == 2 && widthVal == 60 && heightVal == 2300 && depthVal == 40):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w60_h230_d40.png');
				break;
			case (doorsVal == 2 && widthVal == 60 && heightVal == 2300 && depthVal == 50):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w60_h230_d50.png');
				break;
			case (doorsVal == 2 && widthVal == 60 && heightVal == 2300 && depthVal == 60):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w60_h230_d60.png');
				break;
			case (doorsVal == 2 && widthVal == 60 && heightVal == 2400 && depthVal == 40):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w60_h240_d40.png');
				break;
			case (doorsVal == 2 && widthVal == 60 && heightVal == 2400 && depthVal == 50):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w60_h240_d50.png');
				break;
			case (doorsVal == 2 && widthVal == 60 && heightVal == 2400 && depthVal == 60):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w60_h240_d60.png');
				break;
			case (doorsVal == 2 && widthVal == 60 && heightVal == 2500 && depthVal == 40):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w60_h250_d40.png');
				break;
			case (doorsVal == 2 && widthVal == 60 && heightVal == 2500 && depthVal == 50):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w60_h250_d50.png');
				break;
			case (doorsVal == 2 && widthVal == 60 && heightVal == 2500 && depthVal == 60):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w60_h250_d60.png');
				break;
			case (doorsVal == 2 && widthVal == 60 && heightVal == 2600 && depthVal == 40):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w60_h260_d40.png');
				break;
			case (doorsVal == 2 && widthVal == 60 && heightVal == 2600 && depthVal == 50):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w60_h260_d50.png');
				break;
			case (doorsVal == 2 && widthVal == 60 && heightVal == 2600 && depthVal == 60):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w60_h260_d60.png');
				break;
			case (doorsVal == 2 && widthVal == 70 && heightVal == 2300 && depthVal == 40):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w70_h230_d40.png');
				break;
			case (doorsVal == 2 && widthVal == 70 && heightVal == 2300 && depthVal == 50):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w70_h230_d50.png');
				break;
			case (doorsVal == 2 && widthVal == 70 && heightVal == 2300 && depthVal == 60):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w70_h230_d60.png');
				break;
			case (doorsVal == 2 && widthVal == 70 && heightVal == 2400 && depthVal == 40):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w70_h240_d40.png');
				break;
			case (doorsVal == 2 && widthVal == 70 && heightVal == 2400 && depthVal == 50):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w70_h240_d50.png');
				break;
			case (doorsVal == 2 && widthVal == 70 && heightVal == 2400 && depthVal == 60):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w70_h240_d60.png');
				break;
			case (doorsVal == 2 && widthVal == 70 && heightVal == 2500 && depthVal == 40):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w70_h250_d40.png');
				break;
			case (doorsVal == 2 && widthVal == 70 && heightVal == 2500 && depthVal == 50):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w70_h250_d50.png');
				break;
			case (doorsVal == 2 && widthVal == 70 && heightVal == 2500 && depthVal == 60):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w70_h250_d60.png');
				break;
			case (doorsVal == 2 && widthVal == 70 && heightVal == 2600 && depthVal == 40):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w70_h260_d40.png');
				break;
			case (doorsVal == 2 && widthVal == 70 && heightVal == 2600 && depthVal == 50):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w70_h260_d50.png');
				break;
			case (doorsVal == 2 && widthVal == 70 && heightVal == 2600 && depthVal == 60):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w70_h260_d60.png');
				break;
			case (doorsVal == 2 && widthVal == 80 && heightVal == 2300 && depthVal == 40):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w80_h230_d40.png');
				break;
			case (doorsVal == 2 && widthVal == 80 && heightVal == 2300 && depthVal == 50):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w80_h230_d50.png');
				break;
			case (doorsVal == 2 && widthVal == 80 && heightVal == 2300 && depthVal == 60):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w80_h230_d60.png');
				break;
			case (doorsVal == 2 && widthVal == 80 && heightVal == 2400 && depthVal == 40):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w80_h240_d40.png');
				break;
			case (doorsVal == 2 && widthVal == 80 && heightVal == 2400 && depthVal == 50):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w80_h240_d50.png');
				break;
			case (doorsVal == 2 && widthVal == 80 && heightVal == 2400 && depthVal == 60):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w80_h240_d60.png');
				break;
			case (doorsVal == 2 && widthVal == 80 && heightVal == 2500 && depthVal == 40):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w80_h250_d40.png');
				break;
			case (doorsVal == 2 && widthVal == 80 && heightVal == 2500 && depthVal == 50):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w80_h250_d50.png');
				break;
			case (doorsVal == 2 && widthVal == 80 && heightVal == 2500 && depthVal == 60):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w80_h250_d60.png');
				break;
			case (doorsVal == 2 && widthVal == 80 && heightVal == 2600 && depthVal == 40):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w80_h260_d40.png');
				break;
			case (doorsVal == 2 && widthVal == 80 && heightVal == 2600 && depthVal == 50):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w80_h260_d50.png');
				break;
			case (doorsVal == 2 && widthVal == 80 && heightVal == 2600 && depthVal == 60):
				nextImg.attr('src', 'img/items/2-doors/Wardrobe/Wardrobe_sec2_w80_h260_d60.png');
				break;
			// ======== 3и двери

		}


		// анимация замены
		imgs.addClass('change'); // добавляем класс на смену изображений

		setTimeout(function(){
			imgs.removeClass('change'); // убираем класс анимации
			$('[current-img]').attr('src', $('[next-img]').attr('src')); // делаем замену нового изображения на текущее
		}, 400);
	}


	var stepOne = $('[step-btn="1"]'),
		stepTwo = $('[step-btn="2"]'),
		stepThree = $('[step-btn="3"]');

	// переход на следующий шаг калькулятора
	$('.calculation__filter-btn').on('click', function(){
		var i = 1;
			
		setInterval(function(){
			if (i <= $('.calculation__filter-step:nth-child(1) .calculation__filter-block').length) {
				$('.calculation__filter-step:nth-child(1) .calculation__filter-block:nth-child('+ i +')').addClass('slideOut');
				++i;
			}
		}, 200);

		if ($('[step-btn].active').attr('step-btn') == 1) {
			stepOne.removeClass('active');
			stepOne.addClass('done');
			stepOne.prev().find('img').addClass('done');
			stepTwo.addClass('active');
			stepTwo.prop('disabled', false);
			console.log($('.calculation__filter-step:nth-child(2) .calculation__filter-block').length);
			setTimeout(function(){
				$('.calculation__filter-step:nth-child(1)').hide(); // убираем блоки первого шага

				// показываем блоки второго шага
				var i = 1;
				setInterval(function(){
					if (i <= $('.calculation__filter-step:nth-child(2) .calculation__filter-block').length) {
						$('.calculation__filter-step:nth-child(2) .calculation__filter-block:nth-child('+ i +')').removeClass('slideOut');
						++i;
					}
				}, 200);
			}, 1100);



		} else if ($('[step-btn].active').attr('step-btn') == 2) {
			stepTwo.removeClass('active');
			stepTwo.addClass('done');
			stepTwo.prev().find('img').addClass('done');
			stepThree.addClass('active');
			stepThree.prop('disabled', false);
		}
	});

	// кликаем на шаги 
	$('[step-btn]').click(function(){
		
		// если кликаем на 1-й шаг калькулятора
		if ($(this).attr('step-btn') == 1) {
			$('[step-btn]').removeClass('active done');
			stepTwo.prop('disabled', true);
			stepThree.prop('disabled', true);
			stepThree.prop('disabled', true);
			stepOne.prev().find('img').removeClass('done');

			var i = 1;
			setInterval(function(){
				if (i <= $('.calculation__filter-step:nth-child(2) .calculation__filter-block').length) {
					$('.calculation__filter-step:nth-child(2) .calculation__filter-block:nth-child('+ i +')').addClass('slideOut');
					++i;
				}
			}, 200);

			setTimeout(function(){
				$('.calculation__filter-step:nth-child(1)').show();
				var i = 1;
				setInterval(function(){
					if (i <= $('.calculation__filter-step:nth-child(1) .calculation__filter-block').length) {
						$('.calculation__filter-step:nth-child(1) .calculation__filter-block:nth-child('+ i +')').removeClass('slideOut');
						++i;
					}
				}, 200);
			}, 800);
			

		} else if ($(this).attr('step-btn') == 2) {
			stepThree.prop('disabled', true);
			stepTwo.removeClass('done');
			stepTwo.prev().find('img').removeClass('done');
		}

		$(this).addClass('active');
	});

});