var isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
	},
};

$(function () {
	if ($(".functionHeight").length) {
		var windowH = $(window).height();
		console.log("windowH " + windowH);

		var headerH = $(".site__header").outerHeight();
		console.log("headerH " + headerH);

		var centerH = $(".site__center").outerHeight();
		console.log("centerH " + centerH);

		var footerH = $(".site__footer").outerHeight();
		console.log("footerH " + footerH);

		var siteH = headerH + centerH + footerH;
		console.log("siteH " + siteH);

		if (siteH < windowH) {
			var difH = windowH - siteH;
			var newCenterH = centerH + difH;
			$(".site__center").css("height", newCenterH);
			console.log(newCenterH);
		}
	}

	if (!isMobile.any()) {
		var hh = $(".header__area").outerHeight();
		var nlh = $(".navLine__area").outerHeight();
		$(window).scroll(function () {
			if ($(this).scrollTop() > hh) {
				$(".navLine__area").css({ position: "fixed", left: "0", top: "0" });
				$(".site__center").css({ paddingTop: nlh + "px" });
			} else {
				$(".navLine__area").css({ position: "relative", left: "auto", top: "auto" });
				$(".site__center").css({ paddingTop: "0" });
			}
		});
	}

	if ($(".pagControlForm").length) {
		$(".pagControl").change(function () {
			var go = $(".pagControl").val();
			$(".goSelect").text(go);
			// console.log(go);
			$(".pagControlForm").submit();
		});
	}

	if ($(".swiper-container1").length) {
		var swiper = new Swiper(".swiper-container1", {
			pagination: {
				el: ".swiper-pagination1",
				clickable: true,
			},
			paginationClickable: true,
			autoplay: 7500,
			spaceBetween: 0,
			loop: true,
			effect: "slide",
		});
	}

	if ($(".tovar__slider").length) {
		var galleryThumbs = new Swiper(".gallery-thumbs", {
			spaceBetween: 5,
			loop: false,
			effect: "slide",
			slidesPerView: 4,
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		});
		var galleryTop = new Swiper(".gallery-top", {
			nextButton: ".swiper-button-next2",
			prevButton: ".swiper-button-prev2",
			spaceBetween: 5,
			loop: false,
			effect: "slide",
			navigation: {
				nextEl: ".swiper-button-next2",
				prevEl: ".swiper-button-prev2",
			},
			thumbs: {
				swiper: galleryThumbs,
			},
		});
	}

	if ($(".smartSearch__areaJS").length) {
		$(".smartSearch__title").on("click", function (e) {
			if ($(this).hasClass("open")) {
				$(this).removeClass("open");
				$(".smartSearch").slideUp();
				setTimeout(function () {
					$(".smartSearch__title").removeClass("smartSearch__title_open");
				}, 400);
			} else {
				$(this).addClass("open");
				$(".smartSearch").slideDown();
				setTimeout(function () {
					$(".smartSearch__title").addClass("smartSearch__title_open");
				}, 400);
			}
		});
	}

	if ($(".tovarSklad__area").length) {
		$(".tovarSklad__title").on("click", function (e) {
			if ($(this).hasClass("open")) {
				$(this).removeClass("open");
				$(".tovarSklad__contentArea").slideUp();
			} else {
				$(this).addClass("open");
				$(".tovarSklad__contentArea").slideDown();
			}
		});
	}

	if ($(".blog__masonry").length) {
		$(".blog__masonry").masonry({
			// options
			itemSelector: ".blog__itemOuter",
		});
	}

	$(".menuButton").on("click", function (e) {
		if ($(this).hasClass("open")) {
			$(this).removeClass("open");
			$(".topMenu__area").removeClass("topMenu__area_open");
		} else {
			$(this).addClass("open");
			$(".topMenu__area").addClass("topMenu__area_open");
		}
	});

	$(".closeBtn").on("click", function (e) {
		$(".menuButton").removeClass("open");
		$(".topMenu__area").removeClass("topMenu__area_open");
	});

	$(".minus").click(function () {
		var $input = $(this).parent().find("input");
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$(".plus").click(function () {
		var $input = $(this).parent().find("input");
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	$(".cardTovar__buy").on("click", function (e) {
		var cart = $(".cart1__area ");
		var imgtodrag = $(this).closest(".catalog__item").find("img");

		if (imgtodrag) {
			var imgclone = imgtodrag
				.clone()
				.offset({
					top: imgtodrag.offset().top,
					left: imgtodrag.offset().left,
				})
				.css({
					opacity: "0.5",
					position: "absolute",
					height: "150px",
					width: "150px",
					"z-index": "9999",
				})
				.appendTo($("body"))
				.animate(
					{
						top: cart.offset().top + 10,
						left: cart.offset().left + 10,
						width: 75,
						height: 75,
					},
					1000
				);

			imgclone.animate(
				{
					width: 0,
					height: 0,
				},
				function () {
					$(this).detach();
				}
			);
		}
	});

	$(".tovar__addToCart").on("click", function (e) {
		var cart = $(".cart1__area ");
		var imgtodrag = $(this).closest(".tovar__area").find(".swiper-slide-active img");

		if (imgtodrag) {
			var imgclone = imgtodrag
				.clone()
				.offset({
					top: imgtodrag.offset().top,
					left: imgtodrag.offset().left,
				})
				.css({
					opacity: "0.5",
					position: "absolute",
					height: "150px",
					width: "150px",
					"z-index": "9999",
				})
				.appendTo($("body"))
				.animate(
					{
						top: cart.offset().top + 10,
						left: cart.offset().left + 10,
						width: 75,
						height: 75,
					},
					1000
				);

			imgclone.animate(
				{
					width: 0,
					height: 0,
				},
				function () {
					$(this).detach();
				}
			);
		}
	});

	$(".phoneZ1").mask("+7 (999) 999-9999");
	$(".phone1").mask("+7 (999) 999-9999");

	$(".content table").wrap('<div class="table_outer"></div>');

	$(".toTop").hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$(".toTop").fadeIn();
		} else {
			$(".toTop").fadeOut();
		}
	});
	$(".toTop").click(function () {
		$("body,html").animate({ scrollTop: 0 }, 400);
		return false;
	});

	$("a[data-fancybox]").fancybox({
		closeBtn: false,
		arrows: true,
		keyboard: true,
		nextClick: true,
		infobar: true,
		protect: true,
		nextEffect: "elastic",
		prevEffect: "elastic",
		padding: 0,
		loop: true,
		animationEffect: "zoom-in-out",
		transitionEffect: "slide",
		touch: {
			vertical: true,
			momentum: true,
		},
	});

	$(".form1").on("click", ".submit1", function (e) {
		e.preventDefault();
		var name = $(".name1").val();
		var phone = $(".phone1").val();
		var email = $(".email1").val();
		var workemail = $(".work_email1").val();
		var message = $(".message1").val();
		var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
		if (name === "") {
			swal({ title: "Поле Имя пустое", text: "Заполните поле имя", type: "error", confirmButtonText: "ок" });
			$(".name1").addClass("error");
			setTimeout(function () {
				$(".name1").removeClass("error");
			}, 3000);
		} else if (phone === "") {
			swal({ title: "Поле Телефон пустое", text: "Заполните поле телефон", type: "error", confirmButtonText: "ок" });
			$(".phone1").addClass("error");
			setTimeout(function () {
				$(".phone1").removeClass("error");
			}, 3000);
		} else if (email === "") {
			swal({ title: "Ошибка Email", text: "Заполните поле Email", type: "error", confirmButtonText: "ок" });
			$(".email1").addClass("error");
			setTimeout(function () {
				$(".email1").removeClass("error");
			}, 3000);
		} else if (!r.test(email)) {
			swal({ title: "Ошибка", text: "Корректно заполните поле e-mail", type: "error", confirmButtonText: "ок" });
			$(".email1").addClass("error");
			setTimeout(function () {
				$(".email1").removeClass("error");
			}, 3000);
		} else if (message === "") {
			swal({ title: "Пустое сообщение", text: "Заполните текст сообщения", type: "error", confirmButtonText: "ок" });
			$(".message1").addClass("error");
			setTimeout(function () {
				$(".message1").removeClass("error");
			}, 3000);
		} else if (workemail !== "") {
			swal({ title: "Ах ты жулик", text: "Уберите робота от компьютера", type: "error", confirmButtonText: "ок" });
		} else {
			$.post(
				"mail.php",
				{
					subj: "Сообщение из формы на сайте",
					name: name,
					phone: phone,
					email: email,
					message: message,
				},
				function () {
					swal({ title: "Спасибо", text: "Ваше сообщение отправлено", type: "success", confirmButtonText: "ок" });
					$(".name1").val("").removeClass("error");
					$(".phone1").val("").removeClass("error");
					$(".email1").val("").removeClass("error");
					$(".message1").val("").removeClass("error");
				}
			);
		}
	});

	$(".jsbtn__Z1").click(function (e) {
		e.preventDefault();
		e.stopPropagation();
		var self = $(this);
		if (self.hasClass("js_active")) {
			self.removeClass("js_active");
			$(".js_containerZ1").addClass("bounceOutUp").removeClass("bounceInDown").fadeOut(600);
			$(".overlay").fadeOut(200);
		} else {
			self.addClass("js_active");
			$(".js_containerZ1").removeClass("bounceOutUp").addClass("bounceInDown").fadeIn(200);
			$(".overlay").fadeIn(200);
		}
	});
	$(".overlay").click(function (e) {
		e.preventDefault();
		$(".js_containerZ1").addClass("bounceOutUp").removeClass("bounceInDown").fadeOut(600);
		$(".jsbtn__Z1").removeClass("js_active");

		$(".overlay").fadeOut(600);
	});
	$(".formClose").click(function (e) {
		e.preventDefault();
		$(".js_containerZ1").addClass("bounceOutUp").removeClass("bounceInDown").fadeOut(600);
		$(".jsbtn__Z1").removeClass("js_active");
		$(".overlay").fadeOut(600);
	});
	$(".formZ1").on("click", ".submitZ1", function (e) {
		e.preventDefault();
		var name = $(".nameZ1").val();
		var phone = $(".phoneZ1").val();
		var workemail = $(".work_emailZ1").val();
		var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
		if (name === "") {
			swal({ title: "Поле Имя пустое", text: "Заполните поле имя", type: "error", confirmButtonText: "ок" });
			$(".nameZ1").addClass("error");
			setTimeout(function () {
				$(".nameZ1").removeClass("error");
			}, 3000);
		} else if (phone === "") {
			swal({
				title: "Поле Телефон пустое",
				text: "Заполните поле телефон",
				type: "error",
				confirmButtonText: "ок",
			});
			$(".phoneZ1").addClass("error");
			setTimeout(function () {
				$(".phoneZ1").removeClass("error");
			}, 3000);
		} else if (workemail !== "") {
			swal({ title: "Ах ты жулик", text: "Уберите робота от компьютера", type: "error", confirmButtonText: "ок" });
		} else {
			$.post(
				"mail.php",
				{
					subj: "заказ обратного звонка",
					name: name,
					phone: phone,
				},
				function () {
					swal({ title: "Спасибо", text: "Ваше сообщение отправлено", type: "success", confirmButtonText: "ок" });
					$(".nameZ1").val("").removeClass("error");
					$(".phoneZ1").val("").removeClass("error");
					$(".jsbtn__Z1").removeClass("js_active");
					$(".js_containerZ1").addClass("bounceOutUp").removeClass("bounceInDown").fadeOut(600);
					$(".overlay").fadeOut(200);
				}
			);
		}
	});

	$(".modelFaq_js").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		var self = $(this);
		if (self.hasClass("js_active")) {
			self.removeClass("js_active");
			$(".modelFaqContainer_js").addClass("bounceOutUp").removeClass("bounceInDown").fadeOut(600);
			$(".overlay").fadeOut(200);
		} else {
			self.addClass("js_active");
			$(".modelFaqContainer_js").removeClass("bounceOutUp").addClass("bounceInDown").fadeIn(200);
			$(".overlay").fadeIn(200);
		}
	});
	$(".overlay").on("click", function (e) {
		e.preventDefault();
		$(".modelFaqContainer_js").addClass("bounceOutUp").removeClass("bounceInDown").fadeOut(600);
		$(".modelFaq_js").removeClass("js_active");

		$(".overlay").fadeOut(600);
	});
	$(".formClose").on("click", function (e) {
		e.preventDefault();
		$(".modelFaqContainer_js").addClass("bounceOutUp").removeClass("bounceInDown").fadeOut(600);
		$(".modelFaq_js").removeClass("js_active");
		$(".overlay").fadeOut(600);
	});
	$(".mf").on("click", ".submit-mf", function (e) {
		e.preventDefault();
		var model = $(".mf_subj").text();
		var subj = "Вопрос о модели " + model;
		var name = $(".name-mf").val();
		var phone = $(".phone-mf").val();
		var email = $(".email-mf").val();
		var message = $(".message-mf").val();
		var workemail = $(".work_email-mf").val();
		var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
		if (name === "") {
			swal({ title: "Поле Имя пустое", text: "Заполните поле имя", type: "error", confirmButtonText: "ок" });
			$(".name-mf").addClass("error");
			setTimeout(function () {
				$(".name-mf").removeClass("error");
			}, 3000);
		} else if (phone === "") {
			swal({ title: "Поле Телефон пустое", text: "Заполните поле телефон", type: "error", confirmButtonText: "ок" });
			$(".phone-mf").addClass("error");
			setTimeout(function () {
				$(".phone-mf").removeClass("error");
			}, 3000);
		} else if (email === "") {
			swal({ title: "Ошибка Email", text: "Заполните поле Email", type: "error", confirmButtonText: "ок" });
			$(".email-mf").addClass("error");
			setTimeout(function () {
				$(".email-mf").removeClass("error");
			}, 3000);
		} else if (!r.test(email)) {
			swal({ title: "Ошибка", text: "Корректно заполните поле e-mail", type: "error", confirmButtonText: "ок" });
			$(".email-mf").addClass("error");
			setTimeout(function () {
				$(".email-mf").removeClass("error");
			}, 3000);
		} else if (message === "") {
			swal({ title: "Пустое сообщение", text: "Напишите свой вопрос", type: "error", confirmButtonText: "ок" });
			$(".message-mf").addClass("error");
			setTimeout(function () {
				$(".message-mf").removeClass("error");
			}, 3000);
		} else if (workemail !== "") {
			swal({ title: "Ах ты жулик", text: "Уберите робота от компьютера", type: "error", confirmButtonText: "ок" });
		} else {
			$.post(
				"mail.php",
				{
					subj: subj,
					name: name,
					phone: phone,
					email: email,
					message: message,
				},
				function () {
					swal({ title: "Спасибо", text: "Ваше сообщение отправлено", type: "success", confirmButtonText: "ок" });
					$(".name-mf").val("").removeClass("error");
					$(".phone-mf").val("").removeClass("error");
					$(".email-mf").val("").removeClass("error");
					$(".message-mf").val("").removeClass("error");
					$(".modelFaqContainer_js").addClass("bounceOutUp").removeClass("bounceInDown").fadeOut(600);
					$(".overlay").fadeOut(200);
					$(".modelFaq_js").removeClass("js_active");
				}
			);
		}
	});

	$(".modelXs_js").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		var self = $(this);
		if (self.hasClass("js_active")) {
			self.removeClass("js_active");
			$(".modelXsContainer_js").addClass("bounceOutUp").removeClass("bounceInDown").fadeOut(600);
			$(".overlay").fadeOut(200);
		} else {
			self.addClass("js_active");
			$(".modelXsContainer_js").removeClass("bounceOutUp").addClass("bounceInDown").fadeIn(200);
			$(".overlay").fadeIn(200);
		}
	});
	$(".overlay").on("click", function (e) {
		e.preventDefault();
		$(".modelXsContainer_js").addClass("bounceOutUp").removeClass("bounceInDown").fadeOut(600);
		$(".modelXs_js").removeClass("js_active");
		$(".overlay").fadeOut(600);
	});
	$(".formClose").on("click", function (e) {
		e.preventDefault();
		$(".modelXsContainer_js").addClass("bounceOutUp").removeClass("bounceInDown").fadeOut(600);
		$(".modelFaq_js").removeClass("js_active");
		$(".overlay").fadeOut(600);
	});
	$(".xs").on("click", ".submit-xs", function (e) {
		e.preventDefault();
		var model = $(".xs_subj").text();
		var subj = "Запрос спец-цены " + model;
		var name = $(".name-xs").val();
		var phone = $(".phone-xs").val();
		var email = $(".email-xs").val();
		var message = $(".message-xs").val();
		var workemail = $(".work_email-xs").val();
		var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
		if (name === "") {
			swal({ title: "Поле Имя пустое", text: "Заполните поле имя", type: "error", confirmButtonText: "ок" });
			$(".name-xs").addClass("error");
			setTimeout(function () {
				$(".name-xs").removeClass("error");
			}, 3000);
		} else if (phone === "") {
			swal({ title: "Поле Телефон пустое", text: "Заполните поле телефон", type: "error", confirmButtonText: "ок" });
			$(".phone-xs").addClass("error");
			setTimeout(function () {
				$(".phone-xs").removeClass("error");
			}, 3000);
		} else if (email === "") {
			swal({ title: "Ошибка Email", text: "Заполните поле Email", type: "error", confirmButtonText: "ок" });
			$(".email-xs").addClass("error");
			setTimeout(function () {
				$(".email-xs").removeClass("error");
			}, 3000);
		} else if (!r.test(email)) {
			swal({ title: "Ошибка", text: "Корректно заполните поле e-mail", type: "error", confirmButtonText: "ок" });
			$(".email-xs").addClass("error");
			setTimeout(function () {
				$(".email-xs").removeClass("error");
			}, 3000);
		} else if (message === "") {
			swal({ title: "Пустое сообщение", text: "Напишите свой вопрос", type: "error", confirmButtonText: "ок" });
			$(".message-xs").addClass("error");
			setTimeout(function () {
				$(".message-xs").removeClass("error");
			}, 3000);
		} else if (workemail !== "") {
			swal({ title: "Ах ты жулик", text: "Уберите робота от компьютера", type: "error", confirmButtonText: "ок" });
		} else {
			$.post(
				"mail.php",
				{
					subj: subj,
					name: name,
					phone: phone,
					email: email,
					message: message,
				},
				function () {
					swal({ title: "Спасибо", text: "Ваше сообщение отправлено", type: "success", confirmButtonText: "ок" });
					$(".name-xs").val("").removeClass("error");
					$(".phone-xs").val("").removeClass("error");
					$(".email-xs").val("").removeClass("error");
					$(".message-xs").val("").removeClass("error");
					$(".modelXsContainer_js").addClass("bounceOutUp").removeClass("bounceInDown").fadeOut(600);
					$(".overlay").fadeOut(200);
					$(".modelXs_js").removeClass("js_active");
				}
			);
		}
	});
});

//################ likeBlock

var share_url = window.location;
var share_title = document.getElementsByTagName("title")[0].innerHTML;
var share_desc = "Главная";
var share_image = "";
var share_text = "Главная";
var share_popup_width = 650;
var share_popup_height = 450;

// var share_links_container = document.getElementById('my_share');

var share_links_container = $(".likeBlock");

if (share_links_container != "NULL") {
	if (typeof share_popup_width != "number" || typeof share_popup_height != "number") {
		share_popup_width = 626;
		share_popup_height = 436;
	}

	share = {
		twitter: function (purl, ptitle) {
			url = "http://twitter.com/share?";
			url += "text=" + encodeURIComponent(ptitle);
			url += "&url=" + encodeURIComponent(purl);
			url += "&counturl=" + encodeURIComponent(purl);
			share.popup(url);
			return false;
		},
		gp: function (purl, ptitle, pimg, text) {
			url = "https://plus.google.com/share?";
			url += "url=" + encodeURIComponent(purl);
			share.popup(url);
			return false;
		},
		mail: function (purl, ptitle, pimg, text) {
			url = "http://connect.mail.ru/share?";
			url += "url=" + encodeURIComponent(purl);
			url += "&title=" + encodeURIComponent(ptitle);
			url += "&description=" + encodeURIComponent(text);
			url += "&imageurl=" + encodeURIComponent(pimg);
			share.popup(url);
			return false;
		},
		vk: function (purl, ptitle, pimg, text) {
			url = "http://vkontakte.ru/share.php?";
			url += "url=" + encodeURIComponent(purl);
			url += "&title=" + encodeURIComponent(ptitle);
			url += "&description=" + encodeURIComponent(text);
			url += "&image=" + encodeURIComponent(pimg);
			url += "&noparse=true";
			share.popup(url);
			return false;
		},
		ok: function (purl, text) {
			url = "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1";
			url += "&st.comments=" + encodeURIComponent(text);
			url += "&st._surl=" + encodeURIComponent(purl);
			share.popup(url);
			return false;
		},
		fb: function (purl, ptitle, pimg, text) {
			url = "http://www.facebook.com/sharer.php?s=100";
			url += "&p[title]=" + encodeURIComponent(ptitle);
			url += "&p[summary]=" + encodeURIComponent(text);
			url += "&p[url]=" + encodeURIComponent(purl);
			url += "&p[images][0]=" + encodeURIComponent(pimg);
			share.popup(url);
			return false;
		},

		popup: function (url, width, height) {
			window.open(url, "", "toolbar=0,status=0,width=" + share_popup_width + ",height=" + share_popup_height);
			return false;
		},
	};
}

if ($(".map__area").length) {
	ymaps.ready(init);

	function init() {
		var mapCoordX = $(".mapCoordX").text();
		var mapCoordY = $(".mapCoordY").text();
		var mapBaloonTop = $(".mapBaloonTop").text();
		var mapBaloonDesc = $(".mapBaloonDesc").text();
		var mapTown = $(".mapTown").text();
		var mapAddress = $(".mapAddress").text();
		console.log(mapCoordX);
		console.log(mapCoordY);
		console.log(mapBaloonTop);
		console.log(mapBaloonDesc);
		console.log(mapTown);
		console.log(mapAddress);

		var myMap = new ymaps.Map("map", {
			center: [mapCoordX, mapCoordY],
			zoom: 15,
			controls: ["zoomControl"],
		});

		myMap.behaviors.disable("scrollZoom");
		if (isMobile.any()) {
			myMap.behaviors.disable("drag");
		}

		var myGeoObjects = [];

		myGeoObjects[0] = new ymaps.Placemark(
			[mapCoordX, mapCoordY],
			{
				balloonContentHeader:
					'<div class="baloon__top">' +
					mapBaloonTop +
					"</div>" +
					'<div class="baloon__description">' +
					mapBaloonDesc +
					"</div>",

				balloonContentBody: '<div class="baloon__content"><img src="assets/img/logo1.png"></div>',

				balloonContentFooter: '<div class="baloon__footer">' + mapTown + " " + mapAddress + "</div>",

				clusterCaption: mapBaloonTop,

				hintContent: '<div class="baloon__top">' + mapBaloonTop + "</div>",
			},
			{
				iconLayout: "default#image",
				iconImageHref: "assets/img/marker.png",
				iconImageSize: [31, 50],
				iconImageOffset: [-15, -50],
			}
		);

		var clusterIcons = [
			{
				href: "/images/pointer.png",
				size: [29, 46],
				offset: [0, 0],
			},
		];

		var clusterer = new ymaps.Clusterer({
			clusterDisableClickZoom: false,
			clusterOpenBalloonOnClick: false,
			clusterBalloonContentLayout: "cluster#balloonCarousel",
			clusterBalloonPanelMaxMapArea: 0,
			clusterBalloonContentLayoutWidth: 300,
			clusterBalloonContentLayoutHeight: 200,
			clusterBalloonPagerSize: 5,
			clusterBalloonPagerType: "marker",
		});

		clusterer.add(myGeoObjects);
		myMap.geoObjects.add(clusterer);
	}
}
