//Rode kleur aan postit

$(".redbutton").click(function(){
        $(".postit").css("background-color", "#fe2bb5");
        $(".knoppen").css('visibility', 'hidden');
        $(".tekst").css('visibility', 'visible');

});

//Groene kleur aan postit

$(".greenbutton").click(function(){
        $(".postit").css("background-color", "#7FFF00");
        $(".knoppen").css('visibility', 'hidden');
        $(".tekst").css('visibility', 'visible');
});

//Gele kleur aan postit

$(".yellowbutton").click(function(){
        $(".postit").css("background-color", "#ffff00");
        $(".knoppen").css('visibility', 'hidden');
        $(".tekst").css('visibility', 'visible');
});

//Voeg tekst toe aan postit

$('#input_text').keyup(function(e) {
  //alert(e.keyCode);
  if(e.keyCode == 13) {
    //Make postit visible
      $(".postit").css('visibility', 'visible');

    //Select input text 

    var inputtext = $('#input_text').val();
    $(".postit").append(inputtext);
    $(".tekst").css('visibility', 'hidden');
    $(".plek").css('visibility', 'visible');
  }
});

//Post it kan verschoven worden met muis
  $(function() {
    $( ".postit" ).draggable();
  });

$("#klaar").click(function(){
        $(".plek").css('visibility', 'hidden');
        $(".speld").css('visibility', 'visible');
});


//Pin op postit
$(".pinbutton").click(function(){
    	$(".pin").css('visibility', 'visible');
      $( ".postit" ).draggable("destroy");
      $(".postit").css('cursor', 'default');
      $(".speld").css('visibility', 'hidden');
});

