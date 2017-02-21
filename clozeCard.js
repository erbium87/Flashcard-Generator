var inquirer = require("inquirer");
var clozeQuestion = require("./cloze.json");
var counter = 0;
var correctAnswer = 0;

// var ClozeCard = function (question, answer){
// 	this.question = question;
// 	this.answer = answer;
// 	this.checkAnswer = function(){

// 	}
// }

// var questionOne = new ClozeCard ("How many days does a cat stay in heat?", 5);
// console.log(questionOne.question, questionOne.answer);

// var questionTwo = new ClozeCard ("What is allspice alternatively known as?", "Pimento");
// console.log(questionTwo.question, questionTwo.answer);

// var questionThree = new ClozeCard ("In the beginning of Shrek, what did he put in his glass?", "Eyeball");
// console.log(questionThree.question, questionThree.answer);

// var questionFour = new ClozeCard ("Whom does the dragon fall in love with?", "Donkey");
// console.log(questionFour.question, questionFour.answer);

// var questionFive = new ClozeCard ("What kind of creature is Shrek?", "Ogre");
// console.log(questionFive.question, questionFive.answer);



var demandQuestion = function () {
  if (counter < 5) {
	inquirer.prompt([
	{type: "input",
	name: "question",
	message: clozeQuestion[counter].cloze
	},
	]).then(function (userAnswer){
		var userInput = userAnswer.question.toLowerCase();
		if ( userInput === clozeQuestion[counter].answer) {
			console.log("\nYou are Correct!");
			correctAnswer ++;
		}
		else {
			console.log("\nYou is WRONG!");
		}

		console.log("Correct Answer: " + clozeQuestion[counter].fullAnswer + "\n<<<<<>>>>>\n");
		counter ++;
		demandQuestion();
		
		
		});//end of then 
	}//end of if for demandQuestion
	else {
		console.log("Game Over\nYour Score is: " + correctAnswer + " out of " + clozeQuestion.length);
		inquirer.prompt([
		  {type: "confirm",
		  name: "restart",
		  message: "Would you like to play again?"
	},
	]).then(function (playAgain){
		if (playAgain.restart === true){
			counter = 0;
			demandQuestion();
		}
		else {
			console.log("Come back later friends!");
		}
	});
	}//end of else statement for demandquestion
}//end of demandQuestion

demandQuestion();

