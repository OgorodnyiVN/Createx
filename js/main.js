// Фильтер
filterSelection("all")
function filterSelection(c) {
var x, i;
x = document.getElementsByClassName("directions__list-items");
if (c == "all") c = "";
  // Добавить класс "show" (display:block) к отфильтрованным элементам и удалите класс "show" из элементов, которые не выбраны
for (i = 0; i < x.length; i++) {
	w3RemoveClass(x[i], "directions__list-items--show");
	if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "directions__list-items--show");
}
}

// Показать отфильтрованные элементы
function w3AddClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
	if (arr1.indexOf(arr2[i]) == -1) {
	element.className += " " + arr2[i];
	}
}
}

// Скрыть элементы, которые не выбраны
function w3RemoveClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
	while (arr1.indexOf(arr2[i]) > -1) {
arr1.splice(arr1.indexOf(arr2[i]), 1);
	}
}
element.className = arr1.join(" ");
}

// Добавить активный класс к текущей кнопке управления (выделите ее)
var btnContainer = document.getElementById("directions__filter-box");
var btns = btnContainer.getElementsByClassName("directions__filter-btn");
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
	var current = document.getElementsByClassName("directions__filter-btn--active");
	current[0].className = current[0].className.replace(" directions__filter-btn--active", "");
	this.className += " directions__filter-btn--active";
});
}

$(function () {
		// Слайдер Номер 1
	$(".team__slider").slick({
		arrows: false,
		slidesToShow: 4,
		infinite: true,
		draggable: false,
		waitFormAnimate: false,
		responsive:
		[
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3,
				} ,
			} ,
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 2,
				} ,
			} ,
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
					draggable: true,
					dots: true,
					appendDots: $('.team__dots'),
				} ,
			} ,
		]
	});
	$('.team__slider-prev').on('click', function (e) {
		e.preventDefault()
		$(".team__slider").slick('slickPrev')
	})

	$('.team__slider-next').on('click', function (e) {
		e.preventDefault()
		$(".team__slider").slick('slickNext')
	})

		// СЛАЙДЕР НОМЕР 2
	$('.testimonials__slider').slick({
		arrows: false,
		dots: true,
		appendDots: $('.testimonials__dots'),
		waitForAnimate: false,
		responsive:
		[
			{
				breakpoint: 700,
				settings: {
					
				} ,
			} ,
		]
	})

	$('.testimonials__prev').on('click', function (e) {
		e.preventDefault()
		$(".testimonials__slider").slick('slickPrev')
	})

	$('.testimonials__next').on('click', function (e) {
		e.preventDefault()
		$(".testimonials__slider").slick('slickNext')
	})

		// Аккардеон
	$('.program__accordeon-link').on('click', function (e) {
		e.preventDefault()
		if ($(this).hasClass('program__accordeon-link--active')) {
		$(this).removeClass('program__accordeon-link--active')
		$(this).children('.program__accordeon-text').slideUp()
		} else {
		$('.program__accordeon-link').removeClass('program__accordeon-link--active')
		$('.program__accordeon-text').slideUp()
		$(this).addClass('program__accordeon-link--active')
		$(this).children('.program__accordeon-text').slideDown()
		}
	})

		// Плавное перемещение к секции
	$(".header__nav-list a, .header__top-btn, .footer__go-top").on("click", function (e) {
		e.preventDefault()
		var id = $(this).attr('href'),
		top = $(id).offset().top -50
		$('body,html').animate({ scrollTop: top }, 800)
	})
	
		// Бургер и оверлей
	setInterval(() => {
		if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top-open') === false) {
		$('.burger').addClass('burger--follow')
		} else {
		$('.burger').removeClass('burger--follow')
		}
	}, 0)
	$('.burger, .overlay, .header__top a').on('click', function (e) {
		e.preventDefault()
		$('.header__top').toggleClass('header__top-open')
		$('.overlay').toggleClass('overlay--show')
	})

	// футер стар акардеон
	// $('.footer__top-title--slide').on('click', function () {
	// 	$(this).next().slideToggle()
	// })

})

// Новый акардеон футора

var toggler = document.getElementsByClassName("footer__top-title--arrow");
var i;

for (i = 0; i < toggler.length; i++) {
	toggler[i].addEventListener("click", function() {
    	this.parentElement.querySelector(".footer__top-list-nested").classList.toggle("footer__top-list-nested-active");
    	this.classList.toggle("footer__top-title--arrow-down");
	});
}

