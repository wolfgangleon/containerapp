$(document).ready(function(){

	//Start Button Show panels	
	$("#app-btn").on('click', function(){
		if ( $(".app-panel").hasClass('open') ) {
			$(this).addClass('transition closed');
			$(".app-panel").removeClass('open').addClass('transition closed');
			$("#app-btn i").removeClass('rotate');
			$("#app-btn i").addClass(' transition');		
		} else if ( $(".app-panel").hasClass('closed') ) {
			$(this).removeClass('closed').addClass('transition')
			$('.app-panel').removeClass('closed').addClass('transition open');
			$("#app-btn i").addClass(' transition rotate');
		}else {
			$(this).addClass('transition');
			$(".app-panel").addClass('transition open');
			$("#app-btn i").addClass(' transition rotate');
		}	
	});
	//End button show panel

	$('table tbody').click(function(){

		$(this).each(function(){
			//Volume
			var totalVol = 0;
			$(this).find('.item-vol').each(function(i,n){	

				totalVol += parseInt($(n).val(),10)
			});

			$('#total-volume').html( totalVol );

			//Quantity
			var totalQty = 0;
			$(this).find(".item-qty").each(function(i,n){

				totalQty += parseInt( $(n).val(),10)
			});

			$('#total-qty').val( totalQty );

		});

	});

});

	