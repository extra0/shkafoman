$(function() {

	var doorsVal = parseInt($('.calculation__filter-radio:checked').val()), // кол-во дверей = отмеченному радиобаттону в html
		depthVal = 50, // начальное значение глубины
		widthVal = 70, // начальное значение ширины
		heightVal = 2400, // начальное значение высоты
		radioBtn = $('.calculation__filter-radio'), // радиокнопка выбора дверей
		nextImg = $('[next-img]'), // следующее подгружаемое изображение 
		imgs = $('[current-img], [next-img]'), // текущее и следующее изображение
		materialSelect = $('.ui-selectmenu-button'), // select выбора материала
		materialImg = $('.calculation__material-holder-img'), // picture-holder для материалов
		stepSection = $('.calculation__filter-step'), // секция шага
		stepBlock = $('.calculation__filter-block'), // блоки секции шага
		stepOne = $('[step-btn="1"]'), // шаги переходов 
		stepTwo = $('[step-btn="2"]'),
		stepThree = $('[step-btn="3"]'),
		master = $('.calculation__master'), // картинка мастера на калькуляторе
		price = $('[price]'), // цена общая без скидки
		totalPrice = $('[total-price]'), // цена со скидкой
		materialSum = 0; // сумма материалов дверей
	sum = 0; // сумма калькулятора

	// изменяем количество дверей радиокнопкой
	radioBtn.on('change load', function() {
		doorsVal = parseInt($(this).val());
		$('.ui-selectmenu-button').removeClass('show'); // снимаем класс отображения selectov
		selectShow(); // функция показа selectov
		imgChanger(); // функция смены изображения шкафа
		calculation(); // функция просчета
	});

	// слайдер глубины
	$('#depth').slider({
		range: "min",
		value: 50,
		step: 10,
		min: 40,
		max: 60,
		slide: function(event, ui) {
			depthVal = ui.value;
			imgChanger();
			calculation(); // функция просчета
		}
	}).slider("pips", {
		rest: "label",
		suffix: " см"
	});

	// слайдер ширины
	$('#width').slider({
		range: "min",
		value: 70,
		step: 10,
		min: 40,
		max: 80,
		slide: function(event, ui) {
			widthVal = ui.value;
			imgChanger();
			calculation(); // функция просчета
			materialPrice(); // устанавливаем цены на материалы
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
		slide: function(event, ui) {
			heightVal = ui.value;
			imgChanger();
			calculation(); // функция просчета
		}
	}).slider("pips", {
		rest: "label",
		suffix: " см"
	});

	// добавление картинок к пунктам кастомного селекта
	$.widget("select.iconselectmenu", $.ui.selectmenu, {
		_renderItem: function(ul, item) {
			var li = $("<li>", {
				text: item.label
			});

			if (item.disabled) {
				li.addClass("ui-state-disabled");
			}

			$("<span>", {
					style: item.element.attr("data-style"),
					"class": "ui-icon " + item.element.attr("data-class")
				})
				.appendTo(li);

			return li.appendTo(ul);
		}
	});


	// ================  АНИМАЦИЯ КАЛЬКУЛЯТОРА

	// вызов кастомного селекта и его постобработка
	$("select")
		.iconselectmenu({
			width: 280,
			change: function(event, ui) {
				var materialDoorNumber = $(this).attr('item-door-number'), // номер двери по порядку слева направо
					materialDoor = $(this).find('option:selected').attr('item-door-material'); // материал двери

				if (materialDoor == 'none') {
					materialImg.eq(materialDoorNumber - 1).addClass('fadeOut');
					setTimeout(function() {
						materialImg.eq(materialDoorNumber - 1).attr('src', '');
					}, 500);
				} else {
					materialImg.eq(materialDoorNumber - 1).addClass('fadeOut'); // добавляем плавное пропадание

					setTimeout(function() {
						materialImg.eq(materialDoorNumber - 1).removeClass('fadeOut');
						materialImg.eq(materialDoorNumber - 1).addClass('change'); // запускаем анимацию
					}, 500);

					// удаляем класс запуска анимации по окончанию замены
					setTimeout(function() {
						materialImg.eq(materialDoorNumber - 1).removeClass('change');
					}, 1000);

					// меняем кратинку двери
					setTimeout(function() {
						materialImg.eq(materialDoorNumber - 1).attr('src', 'img/items/material/' + materialDoor + '/' + materialDoor + '_' + materialDoorNumber + '_sec' + doorsVal + '_w' + widthVal + '_h' + heightVal / 10 + '.png');
					}, 400)
				}

				// меняем изображение материалов в селектах (выбранных пунктах)
				$(this).next().find('.ui-selectmenu-text').removeClass('none bamboo mirror oracal picture wood mirror-flat');
				$(this).next().find('.ui-selectmenu-text').addClass($(this).find('option:selected').attr('data-class'));

				// просчет цены на двери
				var k = 0;
				$('.calculation__filter-select').each(function() {
					materialSum = 0;
					k += parseInt($(this).find('option:selected').attr('data-price'));
					materialSum += k;
					console.log(materialSum);
				});

				calculation();
			},
			// функция показа selectov при загрузке
			create: function(event, ui) {
				selectShow();
			}
		})
		.iconselectmenu("menuWidget")
		.addClass("ui-menu-icons customicons");


	imgChanger(); // вызов функции замены при загрузке
	materialPrice(); // внесение цен на option select
	calculation(); // расчитываем начальные значения


	// функция показа selectov материала
	function selectShow() {
		for (var i = 0; i < doorsVal; ++i) {
			$('.ui-selectmenu-button').eq(i).addClass('show');
		}
	}

	// функция замены изображения шкафа
	function imgChanger() {
		nextImg.attr('src', 'img/items/' + doorsVal + '-doors/Wardrobe_sec' + doorsVal + '_w' + widthVal + '_h' + heightVal / 10 + '_d' + depthVal + '.png');

		// анимация замены
		imgs.addClass('change'); // добавляем класс на смену изображений

		setTimeout(function() {
			imgs.removeClass('change'); // убираем класс анимации
			$('[current-img]').attr('src', $('[next-img]').attr('src')); // делаем замену нового изображения на текущее
		}, 400);
	}


	// переход на следующий шаг калькулятора по кнопке
	$('.calculation__filter-btn').on('click', function() {

		var actualStep = parseInt($('[step-btn].active').attr('step-btn'));

		// замена картинки мастера
		if ($('[step-btn].active').attr('step-btn') != 3) {
			master.fadeOut(400);
			setTimeout(function() {
				master.removeClass('step-' + actualStep);
				master.addClass('step-' + (actualStep + 1));
				master.attr('src', 'img/sh-st-' + (actualStep + 1) + '.png');
				master.fadeIn(400);
			}, 1000);
		}


		if ($('[step-btn].active').attr('step-btn') == 1) {

			setTimeout(function() {
				stepSection.eq(1).show(); // показываем блоки второго шага (фикс перехода по шагам 3-1-2)
				stepSection.eq(1).removeClass('hidden');
			}, 1200);


			stepOne.prop('disabled', true);
			setTimeout(function() {
				stepOne.prop('disabled', false);
			}, 1000);


			// убираем блоки 1-го шага
			var i = 1,
				timer = setInterval(function() {
					if (i <= stepSection.eq(0).find('.calculation__filter-block').length) {
						stepSection.eq(0).find(stepBlock.eq(i - 1)).addClass('slideOut');
						++i;
					} else {
						clearInterval(timer); // убираем зацикливание
					}
				}, 130);

			stepOne.removeClass('active');
			stepOne.addClass('done');
			stepOne.prev().find('img').addClass('done');
			stepTwo.addClass('active');
			stepTwo.prop('disabled', false);

			// показываем блоки второго шага
			setTimeout(function() {

				var i = 1,
					timer = setInterval(function() {
						if (i <= stepSection.eq(1).find('.calculation__filter-block').length) {
							stepSection.eq(1).find('.calculation__filter-block:nth-child(' + i + ')').removeClass('slideOut');
							++i;
						} else {
							clearInterval(timer); // убираем зацикливание
						}
					}, 130);
				stepSection.eq(0).hide(); // убираем блоки первого шага
			}, 1100);



		} else if ($('[step-btn].active').attr('step-btn') == 2) {

			setTimeout(function() {

				stepSection.eq(2).removeClass('hidden');
			}, 1000);


			// убираем блоки 2-го шага
			var i = 1,
				timerwe = setInterval(function() {
					if (i <= stepSection.eq(1).find('.calculation__filter-block').length) {
						stepSection.eq(1).find('.calculation__filter-block:nth-child(' + i + ')').addClass('slideOut');
						++i;
					} else {
						clearInterval(timerwe); // убираем зацикливание
					}
				}, 130);

			stepTwo.removeClass('active');
			stepTwo.addClass('done');
			stepTwo.prev().find('img').addClass('done');
			stepThree.addClass('active');
			stepThree.prop('disabled', false);

			// показываем блоки 3-го шага
			setTimeout(function() {
				stepSection.eq(1).hide(); // убираем блоки второго шага

				// показываем блоки третьего шага
				var i = 1,
					timer = setInterval(function() {
						if (i <= stepSection.eq(2).find('.calculation__filter-block').length) {
							stepSection.eq(2).find('.calculation__filter-block:nth-child(' + i + ')').removeClass('slideOut');
							++i;
						} else {
							clearInterval(timer); // убираем зацикливание
						}
					}, 130);
			}, 1000);
		}
	});

	// переход на предыдущие шаги
	var stepBtn = $('[step-btn]');

	$('[step-btn]').click(function() {

		var stepNumber = parseInt($(this).attr('step-btn'));

		// замена картинки мастера
		master.fadeOut(400);
		setTimeout(function() {
			master.removeClass('step-2 step-1 step-3');
			master.addClass('step-' + (stepNumber));
			master.attr('src', 'img/sh-st-' + (stepNumber) + '.png');
			master.fadeIn(400);
		}, 1000);

		setTimeout(function() {
			stepSection.eq(1).addClass('hidden');
			stepSection.eq(2).addClass('hidden');
		}, 1000);

		// если кликаем на 1-й шаг калькулятора
		if (stepNumber == 1) {
			$('[step-btn]').removeClass('active done');
			stepTwo.prop('disabled', true);
			stepThree.prop('disabled', true);
			stepBtn.prev().find('img').removeClass('done');

			// убираем картинки материалов
			materialImg.addClass('fadeOut');
			setTimeout(function() {
				materialImg.attr('src', '');
				materialImg.removeClass('fadeOut');
				stepSection.eq(0).removeClass('hidden');

				materialSum = 0;
				calculation();
			}, 600);
			//ставим на селекты дефолтные значения
			materialSelect.find('option:nth-child(1)').prop('selected', true); // устанавливаем дефолтное значение на селект
			
			$('.calculation__filter-select-block select + span').each(function(i){
				switch (i+1) {
					case 1:
						$(this).find('.ui-selectmenu-text').html('Материал I двери');
						break;
					case 2:
						$(this).find('.ui-selectmenu-text').html('Материал II двери');
						break;
					case 3:
						$(this).find('.ui-selectmenu-text').html('Материал III двери');
						break;
					case 4:
						$(this).find('.ui-selectmenu-text').html('Материал IV двери');
						break;
				}
			});
			$('.ui-selectmenu-text').removeClass('none bamboo mirror oracal picture wood');

			// клик по 2-му шагу
		} else if ($(this).attr('step-btn') == 2) {
			stepThree.prop('disabled', true);
			stepTwo.removeClass('done');
			stepTwo.prev().find('img').removeClass('done');
			stepOne.prop('disabled', true);
			setTimeout(function() {
				stepOne.prop('disabled', false);
				stepSection.eq(1).removeClass('hidden');
			}, 1000);
		}

		var i = 1,
			timer = setInterval(function() {
				if (i <= stepSection.find('.calculation__filter-block').length) {
					stepSection.find('.calculation__filter-block:nth-child(' + i + ')').addClass('slideOut');
					++i;
				} else {
					clearInterval(timer); // убираем зацикливание
				}
			}, 130);

		// показываем блоки первого шага
		setTimeout(function() {
			stepSection.eq(stepNumber - 1).show();
			var i = 1,
				timer = setInterval(function() {
					if (i <= stepSection.eq(stepNumber - 1).find('.calculation__filter-block').length) {
						stepSection.eq(stepNumber - 1).find('.calculation__filter-block:nth-child(' + i + ')').removeClass('slideOut');
						++i;
					} else {
						clearInterval(timer); // убираем зацикливание
					}
				}, 130);
		}, 1000);

		$(this).addClass('active');
	});

	// ================  Конец АНИМАЦИЯ КАЛЬКУЛЯТОРА


	// ================ Расчеты калькулятора
	function calculation() {
		var wVal = widthVal / 100 * doorsVal,
			hVal = heightVal / 100,
			dVal = depthVal / 100;
		switch (doorsVal) {
			case 2:
				sum = (((wVal * 2) + (hVal - 0.5 * 1) + (wVal / 2 * 4)) * (dVal - 0.1)) * 1650;
				break;
			case 3:
				sum = (((wVal * 2) + (hVal - 0.5 * 2) + (wVal / 3 * 4)) * (dVal - 0.1)) * 1650;
				break;
			case 4:
				sum = (((wVal * 2) + (hVal - 0.5 * 3) + (wVal / 4 * 8)) * (dVal - 0.1)) * 1650;
				break;
		}

		sum += materialSum;

		console.log('Общая сумма = ' + sum);

		price.html((sum).toFixed(0));
		totalPrice.html((sum - (sum * 0.05)).toFixed(0));

		// ф-я разбивки на разряды
		function numberWithCommas(x) {
			return x.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g, "\$1 ");
		}
		$('[replaced-number]').each(function() {
			$(this).html(numberWithCommas($(this).html()));
		});
	}

	function materialPrice() {
		// порядок цен - без материала/Бамбук/Зеркало с узором/Оракал/Фотопечать/Дсп/Зеркало (как последовательность select в HTML)
		var fourTy = ['0', '18700', '13500', '13860', '16000', '9300', '11500'],
			fifTy = ['0', '18700', '13500', '13860', '16000', '9300', '11500'],
			sixTy = ['0', '18700', '13500', '15100', '16000', '9760', '11500'],
			sevenTy = ['0', '18700', '13500', '16324', '16000', '10214', '11500'],
			eightTy = ['0', '18700', '13830', '17570', '16000', '10670', '11830'];

		switch (widthVal) {
			case 40:
				$('.calculation__filter-select').each(function() {
					$(this).children('option').each(function(i) {
						$(this).attr('data-price', fourTy[i]);
					});
				});
				break;
			case 50:
				$('.calculation__filter-select').each(function() {
					$(this).children('option').each(function(i) {
						$(this).attr('data-price', fifTy[i]);
					});
				});
				break;
			case 60:
				$('.calculation__filter-select').each(function() {
					$(this).children('option').each(function(i) {
						$(this).attr('data-price', sixTy[i]);
					});
				});
				break;
			case 70:
				$('.calculation__filter-select').each(function() {
					$(this).children('option').each(function(i) {
						$(this).attr('data-price', sevenTy[i]);
					});
				});
				break;
			case 80:
				$('.calculation__filter-select').each(function() {
					$(this).children('option').each(function(i) {
						$(this).attr('data-price', eightTy[i]);
					});
				});
				break;
		}
	}

});