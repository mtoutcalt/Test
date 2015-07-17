$(function() {

	$("#showAll").click(function() {
		$("img").show();
	});


	$("#showPets").click(function() {
		$(".pet").show();
		$(".photo").not(".pet").hide();
	});


	$("#showPeople").click(function() {
		$(".person").show();
		$(".photo").not(".person").hide();
	});

	$("#showCat").click(function() {
		$(".cat").show();
		$(".photo").not(".cat").hide();
	});

	$("#showDog").click(function() {
		$(".dog").show();
		$(".photo").not(".dog").hide();
	});
});






