$(function(){

	var doorsVal = 3, // кол-во жверей
		depthVal = 50, // значение глубины
		widthVal = 60, // значение ширины
		heightVal = 2400, // значенеи высоты
		nextImg = $('[next-img]'), // следующее подгружаемое изображение 
		imgs = $('[current-img], [next-img]'), // текущее и следующее изображение
		materialSelect = $('.calculation__filter-select'), // select выбора материала

		// шаги переходов 
		stepOne = $('[step-btn="1"]'),
		stepTwo = $('[step-btn="2"]'),
		stepThree = $('[step-btn="3"]');


	selectShow(); // функция показа selectov при загрузке

	$('.calculation__filter-radio').on('change', function(){
		doorsVal = parseInt($(this).val());

		materialSelect.removeClass('show'); // снимаем класс отображения selectov
		selectShow(); // функция показа selectov
		imgChanger(); // функция смены изображения шкафа

	});

	$('.calculation__filter-select').on('change', function(){
		console.log($(this).find('optgroup').attr('item-door-material'));
		console.log($(this).attr('item-door-number'));
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

	// функция показа selectov материала
	function selectShow() {
		for (var i = 0; i < doorsVal; ++i) { 
			materialSelect.eq(i).addClass('show');	
		}
	}

	// функция замены изображения шкафа
	function imgChanger() {
		nextImg.attr('src', 'img/items/'+ doorsVal +'-doors/Wardrobe/Wardrobe_sec2_w'+ widthVal +'_h'+ heightVal / 10 +'_d'+ depthVal +'.png');

		// анимация замены
		imgs.addClass('change'); // добавляем класс на смену изображений

		setTimeout(function(){
			imgs.removeClass('change'); // убираем класс анимации
			$('[current-img]').attr('src', $('[next-img]').attr('src')); // делаем замену нового изображения на текущее
		}, 400);
	}

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
			}, 1300);



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