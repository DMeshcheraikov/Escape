/*
	selector (css selector)
	default: [href^:'#anchor']
	Селектор на ссылку для клика

	speed (number)
	default: 500
	Скорость анимации прокрутки

	beforeScroll (callback)
	Функция, которая будет выполнена, перед анимацией

	afterScroll (callback)
	Функция, которая будет выполнена, после анимации





*/


function toAnchor (param) {
	var options = {
		selector: '[href^="#anchor"]',
		speed: 500,
		beforScroll: function() {

		},
		afterScroll: function() {

		}
	};

	for ( let key in param ) {
		options[key] = param[key];
	}


	$(options.selector).click(function() {
		event.preventDefault();

		var id = $(this).attr('href'),
			docTop = $(id).offset().top - 50;


			options.beforScroll();

			$('html, body').animate({
				scrollTop: docTop
			}, options.speed);

			setTimeout(options.afterScroll, options.speed);

	});

}

toAnchor();

/*
	selector (css selector)
	default: .nav-toggle
	Селектор кнопки переключателя для клика

	toggleClass (string)
	default: nav-toggle_active
	Переключатель класса для кнопки

	selectorNav (css selector)
	default: .nav
	Селектор блока навигации

	toggleClassNav (string)
	default: nav_active
	Переключатель класса для блока навигации

	selectorLink (css selector)
	default: [href^:'#anchor']
	Селектор ссылки для клика

	blockScroll (boolean)
	default: false
	Блокирует прокрутку станицы при открытом меню



*/

function toggleNav(param) {
	var options = {
		selector: '.nav-toggle',
		toggleClass: 'nav-toggle_active',
		selectorNav: '.nav',
		toggleClassNav: 'nav_active',
		selectorLink: '[href^="#anchor"]',
		blockSroll: false,
		activeState: false
	};

	for (let key in param) {
		options[key] = param[key];
	}

	$(`${options.selector}, ${options.selectorLink}`).click(function() {
		options.activeState = !options.activeState;

		if (options.toggleClass ) {
			$(this).toggleClass( options.toggleClass );
		}

		if ( options.toggleClassNav ) {
			$(options.selectorNav).toggleClass( options.toggleClassNav );
		}

		if ( options.blockSroll ) {
			if (options.activeState ) {
				$('body').css('overflow', 'hidden');
				$('.header-menu').css('opacity', '1');
			} else {
				$('body').removeAttr('style');
				$('.header-menu').css('opacity', '.9');
			}
		}

	});
}

toggleNav ({
	blockSroll: true
});