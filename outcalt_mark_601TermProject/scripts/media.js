$(function() {
		var heightRel = $(window).height() * 0.95;
		var widthRel = $(window).width() * 0.95;

		$( ".dialogVail, .dialogBreck, .dialogKeystone, .dialogWildCatNH"  ).dialog({
				      autoOpen: false,
				      height: heightRel,
			 		  width: widthRel,
			 		  modal: true,
				      show: {
				        effect: "fade",
				        duration: 600
				      },
				      hide: {
				        effect: "fade",
				        duration: 600
				      }
		});
				 
		$( ".thumbVail" ).click(function() {
			$(".dialogVail").dialog( "open" );
		});
		$( ".thumbBreck" ).click(function() {
			$(".dialogBreck").dialog( "open" );
		});
		$( ".thumbKeystone" ).click(function() {
			$(".dialogKeystone").dialog( "open" );
		});
		$( ".thumbWildCatNH" ).click(function() {
			$(".dialogWildCatNH").dialog( "open" );
		});

});