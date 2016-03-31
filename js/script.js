$(function() {

	// вызов фенсибокса
	$('[fancybox]').fancybox({
		closeBtn: false
	});

	// закрываем модальное
	$('.modal__close').click(function(){
		$.fancybox.close();
	});

	//  маска на телефон
	$('[mask]').mask('+7 (999) 999-99-99');

	// слайдер отзывов
	$('.feedback__slider').bxSlider({
		pager: false,
		mode: 'fade',
		infiniteLoop: false,
		hideControlOnEnd: true,
		speed: 500,
		onSlideBefore() {
			$('.feedback__gallery, .feedback__slider-value, .feedback__slider-description').addClass('active');
			setTimeout(function(){
				$('.feedback__gallery, .feedback__slider-value, .feedback__slider-description').removeClass('active');
			},500);
		}
	});

	// яндекс карта 
	ymaps.ready(function() {
		var myMap = new ymaps.Map('map', {
				center: [55.751574, 37.573856],
				zoom: 10,
				controls: []
			}, {
				searchControlProvider: 'yandex#search'
			}),
			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [28, 40],
				iconImageOffset: [-3, -40]
			});
		myMap.behaviors.disable('scrollZoom');

		myMap.geoObjects
			.add(new ymaps.Placemark([55.684758, 37.738521], {
	        }, {
	            iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [28, 40],
				iconImageOffset: [-3, -40]
	        }))
	        .add(new ymaps.Placemark([55.833436, 37.715175], {
	        }, {
	            iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [28, 40],
				iconImageOffset: [-3, -40]
	        }))
	        .add(new ymaps.Placemark([55.687086, 37.529789], {
	        }, {
	            iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [28, 40],
				iconImageOffset: [-3, -40]
	        }))
	        .add(new ymaps.Placemark([55.782392, 37.614924], {
	        }, {
	            iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [28, 40],
				iconImageOffset: [-3, -40]
	        }))
	        .add(new ymaps.Placemark([55.642063, 37.656123], {
	        }, {
	            iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [28, 40],
				iconImageOffset: [-3, -40]
	        }))
	        .add(new ymaps.Placemark([55.826479, 37.487208], {
	        }, {
	            iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [28, 40],
				iconImageOffset: [-3, -40]
	        }))
	        .add(new ymaps.Placemark([55.694843, 37.435023], {
	        }, {
	            iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [28, 40],
				iconImageOffset: [-3, -40]
	        }))
	        .add(new ymaps.Placemark([55.790139, 37.814052], {
	        }, {
	            iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [28, 40],
				iconImageOffset: [-3, -40]
	        }))


		myMap.geoObjects.add(myPlacemark);
	});

	// скролл к якорю
	$("[anchor-trigger]").on("click", function(event) {

		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({
			scrollTop: top + 100
		}, 750);
	});

	// смена фактов
	var i = 1,
		text = $('.fact__text'),
		extraText = $('.fact__extra-text'),
		numText = text.length,
		numExtraText = extraText.length;

	$('.fact__changer').click(function(event) {
		if (i < numText && i < numExtraText) {
			text.eq(i - 1).fadeOut(400);
			extraText.eq(i - 1).fadeOut(400);
			setTimeout(function(){
				text.eq(i - 1).fadeIn(400);
				extraText.eq(i - 1).fadeIn(400);
			}, 550);
			i++;
		} else {
			i = 1;
			text.eq(-1).fadeOut(400);
			extraText.eq(-1).fadeOut(400);
			setTimeout(function(){
				text.eq(0).fadeIn(400);
				extraText.eq(0).fadeIn(400);
			}, 550);
		}
		return false;
	});

	// ф-я разбивки на разряды
	function numberWithCommas(x) { return x.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g, "\$1 ");}
	$('[replaced-number]').each(function(){	$(this).html(numberWithCommas($(this).html()));	});

});