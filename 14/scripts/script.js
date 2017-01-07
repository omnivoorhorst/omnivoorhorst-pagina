
//Pick random words from arrays
var pickRandomWord = function () {
	var randomWord = allWords[Math.floor(Math.random() * allWords.length)];
	return randomWord;
};

//Add Hello string with random word to class helloSubject
$(".button").click(function(){
        $( ".helloSubject" ).empty();
        $(".helloSubject").append("Hallo " + pickRandomWord());
});

