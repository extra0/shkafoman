$(function(){

	$('.calculation__filter-btn').on('click', function(){
		$('[current-img], [next-img]').addClass('change');

		setTimeout(function(){
			// $('[current-img], [next-img]').removeClass('change');
			$('[current-img]').attr('src', $('[next-img]').attr('src'));
		}, 500);

	});




});