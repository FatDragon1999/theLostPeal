jQuery(document).ready(function($) {

			if ($.fn.fsvs) {
				var slider = $.fn.fsvs({
					speed: 1000,
					nthClasses: 4,
					mouseDragEvents: false
				});
			}

			if ($.fn.flare) {
				var flares = $('.flare').flare();
				for (var flare in flares) {
					//flares[flare].reset();
				}
			}

			var sectionHeight = $('#fsvs-body > .slide:eq(0)').height();
			$('#fsvs-body > .slide').each(function() {
				var section = $(this),
					item = $('.item', section),
					demo = $('.demo', section),
					itemHeight = item.outerHeight(),
					demoHeight = demo.outerHeight();
				item.css({
					marginTop: ((sectionHeight - itemHeight) / 2) + 'px'
				});
				demo.css({
					marginTop: ((sectionHeight - demoHeight) / 2) + 'px'
				});

			});

			$(window).load(function() {
				
			});
			$(function() {
				$('.menu1').click(function() {
					if ($(".menu1").next().is(':hidden')) {
						$(".menu1").next().show();
						
						
						$(".menu2").next().hide();
						$(".menu3").next().hide();
						$(".menu1").attr("src", 'img/close.png');
					} else {
						$(".menu1").next().hide();
						$(".menu1").attr("src", 'img/menu.png');
					}
				})
				$('.menu2').click(function() {
					if ($(".menu2").next().is(':hidden')) {
						$(".menu2").next().show();
						$(".menu1").next().hide();
						$(".menu3").next().hide();
						$(".menu2").attr("src", 'img/close.png');
					} else {
						$(".menu2").next().hide();
						$(".menu2").attr("src", 'img/menu.png');
					}
				})
				$('.menu3').click(function() {
					if ($(".menu3").next().is(':hidden')) {
						$(".menu3").next().show();
						$(".menu2").next().hide();
						$(".menu1").next().hide();
						$(".menu3").attr("src", 'img/close.png');
					} else {
						$(".menu3").next().hide();
						$(".menu3").attr("src", 'img/menu.png');
					}
				})
			})
});


