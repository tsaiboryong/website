// JavaScript Document
$(function(){
	$('a.abgne_gotoheader').click(function(){
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: $('#header').offset().top
		}, 2000, 'easeOutBounce');
 
		return false;
	});
});