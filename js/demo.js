$(document).ready(function() {
	let speed = 3000;
	let run = setInterval('rotate()', speed);	
	let item_width = $('#slides li').outerWidth(); 
	let left_value = item_width * (-1); 
	$('#slides li:first').before($('#slides li:last'));
	$('#slides ul').css({'left' : left_value});
	$('#prev').click(function() {
		let left_indent = parseInt($('#slides ul').css('left')) + item_width;
			$('#slides ul:not(:animated)').animate({'left' : left_indent}, 200,function(){    
			$('#slides li:first').before($('#slides li:last'));           
			$('#slides ul').css({'left' : left_value});
		});
		return false;
	});
	$('#next').click(function() {
		let left_indent = parseInt($('#slides ul').css('left')) - item_width;
			$('#slides ul:not(:animated)').animate({'left' : left_indent}, 200, function () {
			$('#slides li:last').after($('#slides li:first'));                 	
			$('#slides ul').css({'left' : left_value});
		});
		return false;
	});        
	$('#slides').hover(
		function() {
			clearInterval(run);
		}, 
		function() {
			run = setInterval('rotate()', speed);	
		}
	); 
});

function rotate() {
	$('#next').click();
}
