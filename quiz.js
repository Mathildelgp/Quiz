var numbQuest     = document.getElementById('numbQuestion');
var quest         = document.getElementById('question');
var answerA       = document.getElementById('answerA');
var answerB       = document.getElementById('answerB');
var answerC       = document.getElementById('answerC');
var answerD       = document.getElementById('answerD');
var answersButton = document.querySelectorAll('.answer')
var prev 	  	  = document.getElementById('prev');
var next      	  = document.getElementById('next');
var result    	  = document.getElementById('result');
var finalScore    = document.getElementById('finalScore');
var restart 	  = document.getElementById('restart');
var score = 0;
var questArray      = [{
	question: "A quel &eacute;crivain doit-on le personnage de Boule-de-Suif ?",
	answered : false,
	answers: [{
		value: "Honor&eacute; De Balzac",
		selected: false,
		correct: false,
	}, {
		value: "Guy De Maupassant",
		selected: false,
		correct: true,
	}, {
		value: "Emile Zola",
		selected: false,
		correct: false,
	}, {
		value: "Victor Hugo",
		selected: false,
		correct: false,
	}]
}, {
	question: "Avec quel chanteur Carole Fredericks et Michael Jones ont-il form&eacute; un trio ?",
	answered : false,
	answers: [{
		value: "Jean-Jacques Goldman",
		selected: false,
		correct: true
	}, {
		value: "Pascal Obispo",
		selected: false,
		correct: false
	}, {
		value: "Florent Pagny",
		selected: false,
		correct: false
	}, {
		value: "Serge Lama",
		selected: false,
		correct: false
	}]
}, {
	question: "Comment se pr&eacute;nommait la soeur, sculptrice, de Paul Claudel ?",
	answered : false,
	answers: [{
		value: "Carole",
		selected: false,
		correct: false
	}, {
		value: "Carmen",
		selected: false,
		correct: false
	}, {
		value: "Clara",
		selected: false,
		correct: false
	}, {
		value: "Camille",
		selected: false,
		correct: true
	}]
},
{
	question: "A quel pape a succ&eacute;d&eacute; Jean-Paul II ?",
	answered : false,
	answers: [{
		value: "Benoît XVI",
		selected: false,
		correct: false
	}, {
		value: "Jean-Paul Ier",
		selected: false,
		correct: true
	}, {
		value: "François",
		selected: false,
		correct: false
	}, {
		value: "Paul VI",
		selected: false,
		correct: false
	}]
},
{
	question: "De quel pays Tirana est-elle la capitale ?",
	answered : false,
	answers: [{
		value: "Albanie",
		selected: false,
		correct: true
	}, {
		value: "Mont&eacute;n&eacute;gro",
		selected: false,
		correct: false
	}, {
		value: "L&eacute;tonie",
		selected: false,
		correct: false
	}, {
		value: "Bosnie",
		selected: false,
		correct: false
	}]
},
{
	question: "Dans quel jeu t&eacute;l&eacute;vis&eacute; intervenaient Barjabule et Mironton ?",
	answered : false,
	answers: [{
		value: "Qui est qui ?",
		selected: false,
		correct: false
	}, {
		value: "La roue de la fortune",
		selected: false,
		correct: false
	}, {
		value: "Pyramide",
		selected: false,
		correct: true
	}, {
		value: "Question pour un champion",
		selected: false,
		correct: false
	}]
},
{
	question: "Dans quelle ville se d&eacute;roule chaque ann&eacute;e le Festival interceltique ?",
	answered : false,
	answers: [{
		value: "Rennes",
		selected: false,
		correct: false
	}, {
		value: "Nante",
		selected: false,
		correct: false
	}, {
		value: "Brest",
		selected: false,
		correct: false
	}, {
		value: "Lorient",
		selected: false,
		correct: true
	}]
},
{
	question: "De quel groupe Jim Morrison &eacute;tait-il le chanteur ? ",
	answered : false,
	answers: [{
		value: "The Doors",
		selected: false,
		correct: true
	}, {
		value: "Red Hot Chilli Peppers",
		selected: false,
		correct: false
	}, {
		value: "The Rolling Stone",
		selected: false,
		correct: false
	}, {
		value: "The Beattles",
		selected: false,
		correct: false
	}]
},
{
	question: "En g&eacute;om&eacute;trie, combien de côt&eacute;s poss	&egrave;de un losange ?",
	answered : false,
	answers: [{
		value: "5",
		selected: false,
		correct: false
	}, {
		value: "4",
		selected: false,
		correct: true
	}, {
		value: "3",
		selected: false,
		correct: false
	}, {
		value: "6",
		selected: false,
		correct: false
	}]
},
{
	question: "Dans quelle ville française se trouve la Cit&eacute; de l'espace ?",
	answered : false,
	answers: [{
		value: "Toulouse",
		selected: false,
		correct: true
	}, {
		value: "Bordeaux",
		selected: false,
		correct: false
	}, {
		value: "Montpellier",
		selected: false,
		correct: false
	}, {
		value: "Marseille",
		selected: false,
		correct: false
	}]
},
{
	question: "Si ce n'est pas un fruit, qu'est-ce qu'un kiwi ?",
	answered : false,
	answers: [{
		value: "Un l&eacute;gume",
		selected: false,
		correct: false
	}, {
		value: "Un poisson",
		selected: false,
		correct: false
	}, {
		value: "Un oiseau",
		selected: false,
		correct: true
	}, {
		value: "Une fleur",
		selected: false,
		correct: false
	}]
},
{
	question: "Où le g&eacute;n&eacute;ral de Gaulle prononce-t-il son fameux : 'Je vous ai compris' ? ",
	answered : false,
	answers: [{
		value: "Londre",
		selected: false,
		correct: false
	}, {
		value: "Alger",
		selected: false,
		correct: true
	}, {
		value: "Paris",
		selected: false,
		correct: false
	}, {
		value: "Aix-en-Provence",
		selected: false,
		correct: false
	}]
},
{
	question: "Quelle travers&eacute;e Louis Bl&eacute;riot a-t-il r&eacute;ussie en avion le 25 juillet 1909 ?",
	answered : false,
	answers: [{
		value: "La mer M&eacute;dit&eacute;rran&eacute;e",
		selected: false,
		correct: false
	}, {
		value: "La mer Noire",
		selected: false,
		correct: false
	}, {
		value: "La mer Morte",
		selected: false,
		correct: false
	}, {
		value: "La manche",
		selected: false,
		correct: true
	}]
},
{
	question: "Qu'est-ce que la 'Licorne' dont Tintin perce le secret ? ",
	answered : false,
	answers: [{
		value: "Une voiture",
		selected: false,
		correct: false
	}, {
		value: "Un château",
		selected: false,
		correct: false
	}, {
		value: "Un bateau",
		selected: false,
		correct: true
	}, {
		value: "Une forêt",
		selected: false,
		correct: false
	}]
},
{
	question: "Dans les bras de quel dieu grec se retrouve-t-on en s'endormant ?",
	answered : false,
	answers: [{
		value: "Morph&eacute;e",
		selected: false,
		correct: true
	}, {
		value: "Zeus",
		selected: false,
		correct: false
	}, {
		value: "Athena",
		selected: false,
		correct: false
	}, {
		value: "Appolon",
		selected: false,
		correct: false
	}]
},
{
	question: "De quelle couleur sont les Simpson dans le c&eacute;l&egrave;bre dessin anim&eacute; ?",
	answered : false,
	answers: [{
		value: "Vert",
		selected: false,
		correct: false
	}, {
		value: "Bleu",
		selected: false,
		correct: false
	}, {
		value: "Jaune",
		selected: false,
		correct: true
	}, {
		value: "Rouge",
		selected: false,
		correct: false
	}]
},
{
	question: "De quelle saga cin&eacute;matographique fait partie le film 'L'Oeil du tigre' ?",
	answered : false,
	answers: [{
		value: "Terminator",
		selected: false,
		correct: false
	}, {
		value: "Rocky",
		selected: false,
		correct: true
	}, {
		value: "Spiderman",
		selected: false,
		correct: false
	}, {
		value: "Die Hard",
		selected: false,
		correct: false
	}]
},
{
	question: "Quel est le pr&eacute;nom de la fianc&eacute;e de Popeye ?",
	answered : false,
	answers: [{
		value: "Cerise",
		selected: false,
		correct: false
	}, {
		value: "Cl&eacute;mentine",
		selected: false,
		correct: false
	}, {
		value: "Olive",
		selected: false,
		correct: true
	}, {
		value: "Banane",
		selected: false,
		correct: false
	}]
},
{
	question: "En quelle ann&eacute;e Angela Merkel a-t-elle &eacute;t&eacute; nomm&eacute;e chanceli&egrave;re d'Allemagne ?",
	answered : false,
	answers: [{
		value: "2004",
		selected: false,
		correct: false
	}, {
		value: "2005",
		selected: false,
		correct: true
	}, {
		value: "2006",
		selected: false,
		correct: false
	}, {
		value: "2007",
		selected: false,
		correct: false
	}]
},
{
	question: "Dans quel livre Harry Potter rencontre pour la première fois son parrain ?",
	answered : false,
	answers: [{
		value: "Harry Potter et la chambre des secrets",
		selected: false,
		correct: false
	}, {
		value: "Harry Potter et le prisonnier d'Azkaban",
		selected: false,
		correct: true
	}, {
		value: "Harry Potter et l'ordre du phoenix",
		selected: false,
		correct: false
	}, {
		value: "Harry Potter et les reliques de la mort",
		selected: false,
		correct: false
	}]
}
];


var currentIndex = 0;

var update = () => {
	numbQuestion.innerHTML = "QUESTION " + (currentIndex + 1) + "/20";

	var currentQuestion = questArray[currentIndex];
	result.innerHTML = score;
	quest.innerHTML = currentQuestion.question;

	answersButton.forEach((answerButton, answerIndex) => {
		var answer = currentQuestion.answers[answerIndex];
		answerButton.innerHTML = answer.value;

		answerButton.className = 'answer';
		
		if(answer.selected) {
			answerButton.classList.add(answer.correct ? 'right' : 'wrong');
		}
		if (currentQuestion.answered && answer.correct) {
			answerButton.classList.add('right');
		}
		
		answerButton.onclick = () => {
			if(currentQuestion.answered){
				return;
			}
			currentQuestion.answered = true;
			answer.selected = true;
			if(answer.correct){
				score += 3;
			}
			else score -= 1;						
			update();
			setTimeout(() => {
				currentIndex += 1;
				if (currentIndex === 20) {
					window.location.href="./finalScore.html?score="+score;
				}
				update();
				console.log(questArray)
			}, 1000);
		};
	});
};

update();

prev.onclick = function(){
	if(currentIndex === 0){
		return;
	}
	currentIndex -= 1;
	update();
}

next.onclick = function(){
	if(currentIndex === 19){
		return;
	}
	currentIndex += 1;
	update();
}
