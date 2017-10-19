(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
setTimeout(function () {
	$('#opacity').removeClass('loader-wrapper');
	$('body').addClass('o');
}, 1800);

setTimeout(function () {
	$('#reveal').addClass('is-reveal');
}, 1900);
setTimeout(function () {
	$('#reveal-text').addClass('is-reveal');
}, 2000);

setTimeout(function () {
	$('#reveal-1').addClass('is-reveal-1');
}, 1800);

setTimeout(function () {
	$('#reveal-text-2').addClass('is-reveal-2');
}, 1800);

setTimeout(function () {
	$('#reveal-button').addClass('is-reveal-button');
}, 1800);

$('.open-contact').click(function () {
	$("body").toggleClass("is-contact-open");
});

$('.close-contact').click(function () {
	$("body").removeClass("is-contact-open");
});

$('.menu-trigger').click(function () {
	$("body").toggleClass("is-mobile-menu-open");
});

$('.close-trigger').click(function () {
	$("body").removeClass("is-mobile-menu-open");
});

$('#test').click(function () {
	$("body").addClass("is-works-open");
	$("#shapes-mask").addClass("filterblur");
	$("#logo-mask").addClass("filterblur");
	$(".nav-logo").addClass("filterblur");
	$(".nav-links").addClass("filterblur");
	$(".social-vertical-stripe").addClass("filterblur");
	$(".main-hero-text").addClass("filterblur");
});

$('.works-index-close').click(function () {
	$("body").removeClass("is-works-open");
	$("#shapes-mask").removeClass("filterblur");
	$("#logo-mask").removeClass("filterblur");
	$(".nav-logo").removeClass("filterblur");
	$(".nav-links").removeClass("filterblur");
	$(".social-vertical-stripe").removeClass("filterblur");
	$(".main-hero-text").removeClass("filterblur");
});

$('.experi').click(function () {
	$("body").addClass("is-testing-open");
	$("#shapes-mask").addClass("filterblur");
	$("#logo-mask").addClass("filterblur");
	$(".nav-logo").addClass("filterblur");
	$(".nav-links").addClass("filterblur");
	$(".social-vertical-stripe").addClass("filterblur");
	$(".main-hero-text").addClass("filterblur");
});

$('.testing-close').click(function () {
	$("body").removeClass("is-testing-open");
	$("#shapes-mask").removeClass("filterblur");
	$("#logo-mask").removeClass("filterblur");
	$(".nav-logo").removeClass("filterblur");
	$(".nav-links").removeClass("filterblur");
	$(".social-vertical-stripe").removeClass("filterblur");
	$(".main-hero-text").removeClass("filterblur");
});

$('.exptrigger').click(function () {
	$("body").addClass("is-expe-open");
	$("#shapes-mask").addClass("filterblur");
	$("#logo-mask").addClass("filterblur");
	$(".nav-logo").addClass("filterblur");
	$(".nav-links").addClass("filterblur");
	$(".social-vertical-stripe").addClass("filterblur");
	$(".main-hero-text").addClass("filterblur");
});

$('.expe-close').click(function () {
	$("body").removeClass("is-expe-open");
	$("#shapes-mask").removeClass("filterblur");
	$("#logo-mask").removeClass("filterblur");
	$(".nav-logo").removeClass("filterblur");
	$(".nav-links").removeClass("filterblur");
	$(".social-vertical-stripe").removeClass("filterblur");
	$(".main-hero-text").removeClass("filterblur");
});

},{}]},{},[1]);
