var finalScore    = document.getElementById('finalScore');
var restart 	  = document.getElementById('restart');
var url 		  = new URL(window.location.href);
var score 		  = parseInt(url.searchParams.get('score'), 10);

if(score === 60){
	 finalScore.innerHTML = "Bravo !!! Tu as tout bon !!! "
}
else if( score >= 45 && score <= 59){
	finalScore.innerHTML = "Bravo, tu as " + score + " points !"
}
else if( score >= 25 && score <= 39 ){
	finalScore.innerHTML = "Tu peux encore t'am&eacute;liorer, tu as " + score + " points !"
}
else if( score >= 0 && score <= 24 ){
	finalScore.innerHTML = "Tu as " + score + " points."
}
else if(score < 0){
	finalScore.innerHTML = "Bof bof bof..."
}

