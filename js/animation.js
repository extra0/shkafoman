$(function(){

	var doorsVal = 3, // кол-во жверей
		depthVal = 50, // значение глубины
		widthVal = 60, // значение ширины
		heightVal = 2400, // значенеи высоты
		nextImg = $('[next-img]'), // следующее подгружаемое изображение 
		imgs = $('[current-img], [next-img]'), // текущее и следующее изображение
		materialSelect = $('.calculation__filter-select'), // select выбора материала
		materialImg = $('.calculation__material-holder-img'), // picture-holder для материалов
		

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


	materialSelect.on('change', function(){
		var materialDoorNumber = $(this).attr('item-door-number'), // номер двери по порядку слева направо
			materialDoor = $(this).find('option:selected').attr('item-door-material'); // материал двери

		if (materialDoor == 'none') {
			materialImg.eq(materialDoorNumber-1).fadeOut(400);
			setTimeout(function(){
				materialImg.eq(materialDoorNumber-1).removeAttr('style');
				materialImg.eq(materialDoorNumber-1).attr('src', '');
			}, 500);
		} else {
			materialImg.eq(materialDoorNumber-1).fadeOut(200);
			setTimeout(function(){
				materialImg.eq(materialDoorNumber-1).attr('src', 'img/items/'+ doorsVal +'-doors/'+ materialDoor +'/'+ materialDoor +'_'+ materialDoorNumber +'_sec2_w'+ widthVal +'_h'+ heightVal / 10 +'.png');
				materialImg.eq(materialDoorNumber-1).fadeIn(300);
			}, 300);
			
		}
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




	var stepSection = $('.calculation__filter-step'),
		stepBlock = $('.calculation__filter-block');


	// переход на следующий шаг калькулятора по кнопке
	$('.calculation__filter-btn').on('click', function(){

		if ($('[step-btn].active').attr('step-btn') == 1) {

			stepSection.eq(1).show(); // показываем блоки второго шага (фикс перехода по шагам 3-1-2)

			// убираем блоки 1-го шага
			var i = 1,
				timer = setInterval(function(){
				if (i <= stepSection.eq(0).find('.calculation__filter-block').length) {
					stepSection.eq(0).find(stepBlock.eq(i-1)).addClass('slideOut');
					++i;
				} else {
					clearInterval(timer); // убираем зацикливание
				}
			}, 200);

			stepOne.removeClass('active');
			stepOne.addClass('done');
			stepOne.prev().find('img').addClass('done');
			stepTwo.addClass('active');
			stepTwo.prop('disabled', false);

			// показываем блоки второго шага
			setTimeout(function(){

				var i = 1,
				 	timer = setInterval(function(){
					if (i <= stepSection.eq(1).find('.calculation__filter-block').length) {
						stepSection.eq(1).find('.calculation__filter-block:nth-child('+i+')').removeClass('slideOut');
						++i;
					} else {
						clearInterval(timer); // убираем зацикливание
					}
				}, 200);
			 	stepSection.eq(0).hide(); // убираем блоки первого шага
			}, 1300);



		} else if ($('[step-btn].active').attr('step-btn') == 2) {

			// убираем блоки 2-го шага
			var i = 1,
				timerwe = setInterval(function(){
				if (i <= stepSection.eq(1).find('.calculation__filter-block').length) {
					stepSection.eq(1).find('.calculation__filter-block:nth-child('+i+')').addClass('slideOut');
					++i;
				} else {
					clearInterval(timerwe); // убираем зацикливание
				}
			}, 200);

			stepTwo.removeClass('active');
			stepTwo.addClass('done');
			stepTwo.prev().find('img').addClass('done');
			stepThree.addClass('active');
			stepThree.prop('disabled', false);

			// показываем блоки 3-го шага
			setTimeout(function(){
				stepSection.eq(1).hide(); // убираем блоки второго шага

				// показываем блоки третьего шага
				var i = 1,
				 	timer = setInterval(function(){
					if (i <= stepSection.eq(2).find('.calculation__filter-block').length) {
						stepSection.eq(2).find('.calculation__filter-block:nth-child('+i+')').removeClass('slideOut');
						++i;
					} else {
						clearInterval(timer); // убираем зацикливание
					}
				}, 200);
			}, 1000);
		}
	});

	// переход на предыдущие шаги
	var stepBtn = $('[step-btn]');

	$('[step-btn]').click(function(){

		var stepNumber = $(this).attr('step-btn');

		// если кликаем на 1-й шаг калькулятора
		if (stepNumber == 1) {
			$('[step-btn]').removeClass('active done');
			stepTwo.prop('disabled', true);
			stepThree.prop('disabled', true);
			stepBtn.prev().find('img').removeClass('done');

			var i = 1,
			 	timer = setInterval(function(){
				if (i <= stepSection.find('.calculation__filter-block').length) {
					stepSection.find('.calculation__filter-block:nth-child('+i+')').addClass('slideOut');
					++i;
				} else {
					clearInterval(timer); // убираем зацикливание
				}
			}, 200);

			// показываем блоки первого шага
			setTimeout(function(){
				stepSection.eq(0).show();
				var i = 1,
					timer = setInterval(function(){
					if (i <= stepSection.eq(0).find('.calculation__filter-block').length) {
						stepSection.eq(0).find(stepBlock.eq(i-1)).removeClass('slideOut');
						++i;
					} else {
						clearInterval(timer); // убираем зацикливание
					}
				}, 200);
			}, 1000);
			
		// клик по 2-му шагу
		} else if ($(this).attr('step-btn') == 2) {
			stepThree.prop('disabled', true);
			stepTwo.removeClass('done');
			stepTwo.prev().find('img').removeClass('done');
		}

		$(this).addClass('active');
	});

});