var inquirer = require("inquirer");
var basicQuestion = require("./basic.json");
var counter = 0;
var correctAnswer = 0;


var demandQuestion = function () {
  if (counter < basicQuestion.length) {
	inquirer.prompt([
	{type: "input",
	name: "question",
	message: basicQuestion[counter].front
	},
	]).then(function (userAnswer){
		var userInput = userAnswer.question.toLowerCase();
		if ( userInput === basicQuestion[counter].back) {
			console.log("\nYou are Correct!");
			correctAnswer ++;
		}
		else {
			console.log("\nYou is WRONG!");
		}

		console.log("Correct Answer: " + basicQuestion[counter].fullAnswer + "\n<<<<<>>>>>\n");
		counter ++;
		demandQuestion();
		
		
		});//end of then 
	}//end of if for demandQuestion
	else {
		console.log("Game Over\nYour Score is: " + correctAnswer + " out of " + basicQuestion.length);
		inquirer.prompt([
		  {type: "confirm",
		  name: "restart",
		  message: "Would you like to play again?"
	},
	]).then(function (playAgain){
		if (playAgain.restart === true){
			counter = 0;
			correctAnswer = 0;
			demandQuestion();
		}
		else {
			console.log("Come back later friends!");
		}
	});
	}//end of else statement for demandquestion
}//end of demandQuestion

demandQuestion();

