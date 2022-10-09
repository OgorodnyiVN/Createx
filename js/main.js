// Фильтер
filterSelection("all")
function filterSelection(c) {
var x, i;
x = document.getElementsByClassName("blog__list-items");
if (c == "all") c = "";
  // Добавить класс "show" (display:block) к отфильтрованным элементам и удалите класс "show" из элементов, которые не выбраны
for (i = 0; i < x.length; i++) {
	w3RemoveClass(x[i], "blog__list-items--show");
	if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "blog__list-items--show");
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
var btnContainer = document.getElementById("blog__filter-box");
var btns = btnContainer.getElementsByClassName("blog__filter-btn");
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
	var current = document.getElementsByClassName("blog__filter-btn--active");
	current[0].className = current[0].className.replace(" blog__filter-btn--active", "");
	this.className += " blog__filter-btn--active";
});
}

$(function () {
		// СЛАЙДЕР НОМЕР 2
		$('.customers__slider').slick({
			arrows: false,
			slidesToShow: 2,
			isFinite: true,
			draggable: false,
			waitForAnimate: false,
			dots: true,
			appendDots: $('.customers__dots'),
			responsive:
			[
			{
				breakpoint: 1000,
				settings: {
				slidesToShow:1,
				},
			},
			]
		
		})
		
		$('.customers__arrows-left').on('click', function (e) {
			e.preventDefault()
			$('.customers__slider').slick('slickPrev')
		})
		$('.customers__arrows-right').on('click', function (e) {
			e.preventDefault()
			$('.customers__slider').slick('slickNext')
		})

		// Аккардеон
	$('.questions__accordeon-link').on('click', function (e) {
		e.preventDefault()
		if ($(this).hasClass('questions__accordeon-link--active')) {
		$(this).removeClass('questions__accordeon-link--active')
		$(this).children('.questions__accordeon-text').slideUp()
		} else {
		$('.questions__accordeon-link').removeClass('questions__accordeon-link--active')
		$('.questions__accordeon-text').slideUp()
		$(this).addClass('questions__accordeon-link--active')
		$(this).children('.questions__accordeon-text').slideDown()
		}
	})

		// Плавное перемещение к секции
	$(".header__nav-list a, .footer__bottom-nav-list a").on("click", function (e) {
		e.preventDefault()
		var id = $(this).attr('href'),
		top = $(id).offset().top
		$('body,html').animate({ scrollTop: top }, 900)
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


// Крестик меню
function myFunction(x) {
	x.classList.toggle("change");
  }