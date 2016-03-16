$(function(){

	var doorsVal = parseInt($('.calculation__filter-radio:checked').val()), // кол-во дверей = отмеченному радиобаттону в html
		depthVal = 50, // начальное значение глубины
		widthVal = 60, // начальное значение ширины
		heightVal = 2400, // начальное значение высоты

		nextImg = $('[next-img]'), // следующее подгружаемое изображение 
		imgs = $('[current-img], [next-img]'), // текущее и следующее изображение
		materialSelect = $('.calculation__filter-select'), // select выбора материала
		materialImg = $('.calculation__material-holder-img'), // picture-holder для материалов
		stepSection = $('.calculation__filter-step'), // секция шага
		stepBlock = $('.calculation__filter-block'), // блоки секции шага
		stepOne = $('[step-btn="1"]'), // шаги переходов 
		stepTwo = $('[step-btn="2"]'),
		stepThree = $('[step-btn="3"]');

	imgChanger(); // вызов функции замены при загрузке
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

	// меняем материалы дверей
	materialSelect.on('change', function(){
		var materialDoorNumber = $(this).attr('item-door-number'), // номер двери по порядку слева направо
			materialDoor = $(this).find('option:selected').attr('item-door-material'); // материал двери

		if (materialDoor == 'none') {
			materialImg.eq(materialDoorNumber-1).addClass('fadeOut');
			setTimeout(function(){
				materialImg.eq(materialDoorNumber-1).attr('src', '');
			}, 500);
		} else {
			materialImg.eq(materialDoorNumber-1).removeClass('fadeOut'); 
			materialImg.eq(materialDoorNumber-1).addClass('change'); // запускаем анимацию

			// удаляем класс запуска анимации по окончанию замены
			setTimeout(function(){ 
				materialImg.eq(materialDoorNumber-1).removeClass('change');
			}, 1000);

			// меняем кратинку двери на 50% работы анимации
			setTimeout(function(){ 
				materialImg.eq(materialDoorNumber-1).attr('src', 'img/items/'+ doorsVal +'-doors/'+ materialDoor +'/'+ materialDoor +'_'+ materialDoorNumber +'_sec2_w'+ widthVal +'_h'+ heightVal / 10 +'.png');
			},300)
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
			}, 160);

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
				}, 160);
			 	stepSection.eq(0).hide(); // убираем блоки первого шага
			}, 1100);



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
			}, 160);

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
				}, 160);
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

			// убираем картинки материалов
			materialImg.addClass('fadeOut');
			setTimeout(function(){
				materialImg.attr('src', '');
				materialImg.removeClass('fadeOut');
			}, 600);
			//ставим на селекты дефолтные значения
			materialSelect.find('option:nth-child(1)').prop('selected', true);

		// клик по 2-му шагу
		} else if ($(this).attr('step-btn') == 2) {
			stepThree.prop('disabled', true);
			stepTwo.removeClass('done');
			stepTwo.prev().find('img').removeClass('done');
		}

		var i = 1,
		 	timer = setInterval(function(){
			if (i <= stepSection.find('.calculation__filter-block').length) {
				stepSection.find('.calculation__filter-block:nth-child('+i+')').addClass('slideOut');
				++i;
			} else {
				clearInterval(timer); // убираем зацикливание
			}
		}, 160);

		// показываем блоки первого шага
		setTimeout(function(){
			stepSection.eq(stepNumber-1).show();
			var i = 1,
				timer = setInterval(function(){
				if (i <= stepSection.eq(stepNumber-1).find('.calculation__filter-block').length) {
					stepSection.eq(stepNumber-1).find('.calculation__filter-block:nth-child('+i+')').removeClass('slideOut');
					++i;
				} else {
					clearInterval(timer); // убираем зацикливание
				}
			}, 160);
		}, 1000);

		$(this).addClass('active');
	});

});