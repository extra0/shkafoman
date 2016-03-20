$(function() {

	// вызов фенсибокса
	$('[fancybox]').fancybox();

	//  маска на телефон
	$('[mask]').mask('+7 (999) 999-99-99');

	// яндекс карта 
	ymaps.ready(function() {
		var myMap = new ymaps.Map('map', {
				center: [55.751574, 37.573856],
				zoom: 9,
				controls: []
			}, {
				searchControlProvider: 'yandex#search'
			}),
			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			});
		myMap.behaviors.disable('scrollZoom');

		myMap.geoObjects
			.add(new ymaps.Placemark([55.777697023347606, 37.70197299999995], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.6701370232536, 37.77420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.6701370232536, 37.57420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([54.6701370232536, 37.77420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.6701370232536, 37.77440299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.6501370232536, 37.77420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.6401370232536, 37.77420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.81326802337879, 37.48407599999996], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.6701370232536, 37.77440299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.1501370232536, 37.77420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.5501370232536, 37.77420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.51326802337879, 37.48407599999996], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))



		.add(new ymaps.Placemark([54.777697023347606, 37.70197299999995], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([54.5701370232536, 37.77420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.6701370232536, 36.57420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([54.6701370232536, 36.23420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([54.6701370232536, 34.77440299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.0501370232536, 37.17420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.4401370232536, 37.47420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.86326802337879, 37.68407599999996], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.6301370232536, 37.87440299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.6601370232536, 37.17420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.2201370232536, 37.17420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.71326802337879, 37.45407599999996], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))

		myMap.geoObjects.add(myPlacemark);
	});

	// скролл к якорю
	$("[anchor-trigger]").on("click", function (event) {

		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

});