$('#input_text').keyup(function(e) {
  //alert(e.keyCode);
  if(e.keyCode == 13) {
    //Laat invoerveld verdwijnen en lader en antwoord verschijnen
      $(".invoergeheel").css('visibility', 'hidden');
      $(".loader").css('visibility', 'visible');

      $(".antwoord").css('display', 'visible');
      $(".loader").show();
		setTimeout(function() { $(".loader").hide(); }, 6000);
	  $("h3").hide();
		setTimeout(function() { $("h3").show(); }, 6000);


    //Neem invoertekst

    var inputtext = $('#input_text').val();
    $("#toevoeging").append(inputtext);
  }
});



