function startGame(){

document.getElementById('startgm').style.display = "none";

	document.getElementById('newCard').onclick = function (){newCard1();};
	document.getElementById('Stop').onclick = function (){startGameEvaluation();};

var houseCard1 = 0;
var houseCard2 = 0;
var houseCard3 = 0;
var houseCard4 = 0;

var userCard1 = 0;
var userCard2 = 0;
var userCard3 = 0;
var userCard4 = 0;
// Giving first hand of cards for player and house

// set variables for random card numbers
var houseCard1 = Math.ceil(Math.random()*15); 
var userCard1 = Math.ceil(Math.random()*15);

//set variables for random player card type
var colorRandomNoPlayer1 = Math.ceil(Math.random()*4);
var colorRandomTypePlayer1 = "";
if(colorRandomNoPlayer1 == 1){
colorRandomTypePlayer1 = "Clubs";
} else if (colorRandomNoPlayer1 == 2){
colorRandomTypePlayer1 = "Diamonds";
} else if (colorRandomNoPlayer1 == 3){
colorRandomTypePlayer1 = "Hearts";
} else if (colorRandomNoPlayer1 == 4){
colorRandomTypePlayer1 = "Spades";
}

//set variables for random house card type

var colorRandomNoHouse1 = Math.ceil(Math.random()*4);
var colorRandomTypeHouse1 = "";
if(colorRandomNoHouse1 == 1){
colorRandomTypeHouse1 = "Clubs";
} else if (colorRandomNoHouse1 == 2){
colorRandomTypeHouse1 = "Diamonds";
} else if (colorRandomNoHouse1 == 3){
colorRandomTypeHouse1 = "Hearts";
} else if (colorRandomNoHouse1 == 4){
colorRandomTypeHouse1 = "Spades";
}

// display player card and show hidden house card
document.getElementById('playerFirstCard').src="images/"+ colorRandomTypePlayer1 + " " + userCard1 +".png";

// check to see if house is satisfied

if (houseCard1 == 14) {
document.getElementById('houseFirstCard').src="images/"+ colorRandomTypeHouse1 + " " + houseCard1 +".png";

} else if (houseCard1 != 14) {
	// call the second card of the house
	var houseCard2 = Math.ceil(Math.random()*15); 
	//set variables for random house card type

	var colorRandomNoHouse2 = Math.ceil(Math.random()*4);
	var colorRandomTypeHouse2 = "";
	if(colorRandomNoHouse2 == 1){
	colorRandomTypeHouse2 = "Clubs";
	} else if (colorRandomNoHouse2 == 2){
	colorRandomTypeHouse2 = "Diamonds";
	} else if (colorRandomNoHouse2 == 3){
	colorRandomTypeHouse2 = "Hearts";
	} else if (colorRandomNoHouse2 == 4){
	colorRandomTypeHouse2 = "Spades";
	}
		// check to see if house is satisfied with first 2 cards
		if (houseCard1 + houseCard2 == 14 | houseCard1 + houseCard2 == 21) {
			document.getElementById('houseSecondCard').src="images/"+ colorRandomTypeHouse2 + " " + houseCard2 +".png";
			document.getElementById('houseFirstCard').src="images/"+ colorRandomTypeHouse1 + " " + houseCard1 +".png";

		} else if (houseCard1 + houseCard2 < 14) {
					// call the third card of the house
					var houseCard3 = Math.ceil(Math.random()*15); 
					//set variables for random house card type

					var colorRandomNoHouse3 = Math.ceil(Math.random()*4);
					var colorRandomTypeHouse3 = "";
					if(colorRandomNoHouse3 == 1){
					colorRandomTypeHouse3 = "Clubs";
					} else if (colorRandomNoHouse3 == 2){
					colorRandomTypeHouse3 = "Diamonds";
					} else if (colorRandomNoHouse3 == 3){
					colorRandomTypeHouse3 = "Hearts";
					} else if (colorRandomNoHouse3 == 4){
					colorRandomTypeHouse3 = "Spades";
					}
					// check to see if house is satisfied with first 2 cards
					if (houseCard1 + houseCard2 + houseCard3 == 14 | houseCard1 + houseCard2 + houseCard3 == 21) {
					document.getElementById('houseSecondCard').src="images/"+ colorRandomTypeHouse2 + " " + houseCard2 +".png";
					document.getElementById('houseFirstCard').src="images/"+ colorRandomTypeHouse1 + " " + houseCard1 +".png";
					document.getElementById('houseThirdCard').src="images/"+ colorRandomTypeHouse3 + " " + houseCard3 +".png";
					}  else if (houseCard1 + houseCard2 + houseCard3 < 14) {
									// call the fourth card of the house
									var houseCard4 = Math.ceil(Math.random()*15); 
									//set variables for random house card type

									var colorRandomNoHouse4 = Math.ceil(Math.random()*4);
									var colorRandomTypeHouse4 = "";
									if(colorRandomNoHouse4 == 1){
									colorRandomTypeHouse4 = "Clubs";
									} else if (colorRandomNoHouse4 == 2){
									colorRandomTypeHouse4 = "Diamonds";
									} else if (colorRandomNoHouse4 == 3){
									colorRandomTypeHouse4 = "Hearts";
									} else if (colorRandomNoHouse4 == 4){
									colorRandomTypeHouse4 = "Spades";
									}
									// check to see if house is satisfied with first 2 cards
									if (houseCard1 + houseCard2 + houseCard3 + houseCard4 == 14 | houseCard1 + houseCard2 + houseCard3 + houseCard4 == 21) {
									document.getElementById('houseFirstCard').src="images/"+ colorRandomTypeHouse1 + " " + houseCard1 +".png";
									document.getElementById('houseSecondCard').src="images/"+ colorRandomTypeHouse2 + " " + houseCard2 +".png";
									document.getElementById('houseThirdCard').src="images/"+ colorRandomTypeHouse3 + " " + houseCard3 +".png";
									document.getElementById('houseFourthCard').src="images/"+ colorRandomTypeHouse4 + " " + houseCard4 +".png";
									} else {
									document.getElementById('houseFirstCard').src="images/"+ colorRandomTypeHouse1 + " " + houseCard1 +".png";
									document.getElementById('houseSecondCard').src="images/"+ colorRandomTypeHouse2 + " " + houseCard2 +".png";
									document.getElementById('houseThirdCard').src="images/"+ colorRandomTypeHouse3 + " " + houseCard3 +".png";
									document.getElementById('houseFourthCard').src="images/"+ colorRandomTypeHouse4 + " " + houseCard4 +".png";


									} // end of game for house
							// end of else if houseCard1 + houseCard2 + houseCard3 < 14  on the next row		
						} else if (houseCard1 + houseCard2 + houseCard3 > 14 && houseCard1 + houseCard2 + houseCard3 < 17) {
								var randomDecisionOfHouse = Math.ceil(Math.random()*3);
									if (randomDecisionOfHouse == 1  | randomDecisionOfHouse == 2) {
												// call the fourth card of the house
												var houseCard4 = Math.ceil(Math.random()*15); 
												//set variables for random house card type

												var colorRandomNoHouse4 = Math.ceil(Math.random()*4);
												var colorRandomTypeHouse4 = "";
												if(colorRandomNoHouse4 == 1){
												colorRandomTypeHouse4 = "Clubs";
												} else if (colorRandomNoHouse4 == 2){
												colorRandomTypeHouse4 = "Diamonds";
												} else if (colorRandomNoHouse4 == 3){
												colorRandomTypeHouse4 = "Hearts";
												} else if (colorRandomNoHouse4 == 4){
												colorRandomTypeHouse4 = "Spades";
												}
												// check to see if house is satisfied with first 2 cards
												if (houseCard1 + houseCard2 + houseCard3 + houseCard4 == 14 | houseCard1 + houseCard2 + houseCard3 + houseCard4 == 21) {
												document.getElementById('houseFirstCard').src="images/"+ colorRandomTypeHouse1 + " " + houseCard1 +".png";
												document.getElementById('houseSecondCard').src="images/"+ colorRandomTypeHouse2 + " " + houseCard2 +".png";
												document.getElementById('houseThirdCard').src="images/"+ colorRandomTypeHouse3 + " " + houseCard3 +".png";												
												document.getElementById('houseFourthCard').src="images/"+ colorRandomTypeHouse4 + " " + houseCard4 +".png";
												} else {
												document.getElementById('houseFirstCard').src="images/"+ colorRandomTypeHouse1 + " " + houseCard1 +".png";
												document.getElementById('houseSecondCard').src="images/"+ colorRandomTypeHouse2 + " " + houseCard2 +".png";
												document.getElementById('houseThirdCard').src="images/"+ colorRandomTypeHouse3 + " " + houseCard3 +".png";
												document.getElementById('houseFourthCard').src="images/"+ colorRandomTypeHouse4 + " " + houseCard4 +".png";
} // end of else random =3


										//on the rext row end of if  randomDecisionOfHouse for 1 and 2
									} else {
											document.getElementById('houseFirstCard').src="images/"+ colorRandomTypeHouse1 + " " + houseCard1 +".png";
											document.getElementById('houseSecondCard').src="images/"+ colorRandomTypeHouse2 + " " + houseCard2 +".png";
											document.getElementById('houseThirdCard').src="images/"+ colorRandomTypeHouse3 + " " + houseCard3 +".png";


										// end of else random decision on next row
									}

							// end of H1 + H3 + H3 > 14 && H1 + H3 + H3 < 17 on next row
						} else if (houseCard1 + houseCard2 + houseCard3 >= 17) {
											document.getElementById('houseFirstCard').src="images/"+ colorRandomTypeHouse1 + " " + houseCard1 +".png";
											document.getElementById('houseSecondCard').src="images/"+ colorRandomTypeHouse2 + " " + houseCard2 +".png";
											document.getElementById('houseThirdCard').src="images/"+ colorRandomTypeHouse3 + " " + houseCard3 +".png";


							//end of else if H1+H2+H3 >= 17 on next row
						}

	// end of else if houseCard1 + houseCard2 < 14
	} else if (houseCard1 + houseCard2 > 14 && houseCard1 + houseCard2 < 17) {
								var randomDecisionOfHouse2 = Math.ceil(Math.random()*3);
									if (randomDecisionOfHouse2 == 1  | randomDecisionOfHouse2 == 2) {
												// call the fourth card of the house
												var houseCard3 = Math.ceil(Math.random()*15); 
												//set variables for random house card type

												var colorRandomNoHouse3 = Math.ceil(Math.random()*4);
												var colorRandomTypeHouse3 = "";
												if(colorRandomNoHouse3 == 1){
												colorRandomTypeHouse3 = "Clubs";
												} else if (colorRandomNoHouse3 == 2){
												colorRandomTypeHouse3 = "Diamonds";
												} else if (colorRandomNoHouse3 == 3){
												colorRandomTypeHouse3 = "Hearts";
												} else if (colorRandomNoHouse3 == 4){
												colorRandomTypeHouse3 = "Spades";
												}
												// check to see if house is satisfied with first 2 cards
												if (houseCard1 + houseCard2 + houseCard3 == 14 | houseCard1 + houseCard2 + houseCard3  == 21) {
												document.getElementById('houseThirdCard').src="images/"+ colorRandomTypeHouse3 + " " + houseCard3 +".png";
												document.getElementById('houseFirstCard').src="images/"+ colorRandomTypeHouse1 + " " + houseCard1 +".png";
												document.getElementById('houseSecondCard').src="images/"+ colorRandomTypeHouse2 + " " + houseCard2 +".png";
												} else {
												document.getElementById('houseFirstCard').src="images/"+ colorRandomTypeHouse1 + " " + houseCard1 +".png";
												document.getElementById('houseSecondCard').src="images/"+ colorRandomTypeHouse2 + " " + houseCard2 +".png";
												document.getElementById('houseThirdCard').src="images/"+ colorRandomTypeHouse3 + " " + houseCard3 +".png";
} // end of else random =3


										//on the rext row end of if  randomDecisionOfHouse for 1 and 2
									} else {
											document.getElementById('houseFirstCard').src="images/"+ colorRandomTypeHouse1 + " " + houseCard1 +".png";
											document.getElementById('houseSecondCard').src="images/"+ colorRandomTypeHouse2 + " " + houseCard2 +".png";


										// end of else random decision on next row
									}
			// on next row end of H1+H2 > 14 && H1 + H2 < 17
		} else if (houseCard1+houseCard2 >= 17 ) {
											document.getElementById('houseFirstCard').src="images/"+ colorRandomTypeHouse1 + " " + houseCard1 +".png";
											document.getElementById('houseSecondCard').src="images/"+ colorRandomTypeHouse2 + " " + houseCard2 +".png";


										// end of else H1+H2 >= 17 on next row
									} 

// end of else if houseCard1 != 14
} 

// end of "see if house is satisfied"



// start see if player is satisfied
	document.getElementById('gameCommunication').style.display ="inline-block";



function newCard1 (){
	 userCard2 = Math.ceil(Math.random()*15); 


	//set variables for random player card type
	var colorRandomNoPlayer2 = Math.ceil(Math.random()*4);
	var colorRandomTypePlayer2 = "";
	if(colorRandomNoPlayer2 == 1){
	colorRandomTypePlayer2 = "Clubs";
	} else if (colorRandomNoPlayer2 == 2){
	colorRandomTypePlayer2 = "Diamonds";
	} else if (colorRandomNoPlayer2 == 3){
	colorRandomTypePlayer2 = "Hearts";
	} else if (colorRandomNoPlayer2 == 4){
	colorRandomTypePlayer2 = "Spades";
	}


	document.getElementById('playerSecondCard').src="images/"+ colorRandomTypePlayer2 + " " + userCard2 +".png";
	document.getElementById('newCard').onclick = function(){newCard2();};
		document.getElementById('Stop').onclick = function (){startGameEvaluation();};


	// on next row end of newCard function
}

function newCard2 (){
	 userCard3 = Math.ceil(Math.random()*15); 


	//set variables for random player card type
	var colorRandomNoPlayer3 = Math.ceil(Math.random()*4);
	var colorRandomTypePlayer3 = "";
	if(colorRandomNoPlayer3 == 1){
	colorRandomTypePlayer3 = "Clubs";
	} else if (colorRandomNoPlayer3 == 2){
	colorRandomTypePlayer3 = "Diamonds";
	} else if (colorRandomNoPlayer3 == 3){
	colorRandomTypePlayer3 = "Hearts";
	} else if (colorRandomNoPlayer3 == 4){
	colorRandomTypePlayer3 = "Spades";
	}


	document.getElementById('playerThirdCard').src="images/"+ colorRandomTypePlayer3 + " " + userCard3 +".png";
	document.getElementById('newCard').onclick = function(){newCard3();};
		document.getElementById('Stop').onclick = function (){startGameEvaluation();};


	// on next row end of newCard2 function
}

function newCard3 (){
	 userCard4 = Math.ceil(Math.random()*15); 


	//set variables for random player card type
	var colorRandomNoPlayer4 = Math.ceil(Math.random()*4);
	var colorRandomTypePlayer4 = "";
	if(colorRandomNoPlayer4 == 1){
	colorRandomTypePlayer4 = "Clubs";
	} else if (colorRandomNoPlayer4 == 2){
	colorRandomTypePlayer4 = "Diamonds";
	} else if (colorRandomNoPlayer4 == 3){
	colorRandomTypePlayer4 = "Hearts";
	} else if (colorRandomNoPlayer4 == 4){
	colorRandomTypePlayer4 = "Spades";
	}


	document.getElementById('playerFourthCard').src="images/"+ colorRandomTypePlayer4 + " " + userCard4 +".png";
	document.getElementById('newCard').style.display = "none";
	document.getElementById('Stop').style.display = "none";

	//check total
	var totalPlayer = userCard1 + userCard2 + userCard3 + userCard4;
	var totalHouse = houseCard1 + houseCard2+ houseCard3 + houseCard4;

	if ((totalPlayer == 14 && totalHouse != 14 && totalHouse != 21) | (totalPlayer == 21   && totalHouse != 14 && totalHouse != 21) | (totalPlayer < 21 && totalPlayer > totalHouse  && totalHouse != 14)  |  (totalPlayer < 21 && totalHouse > 21)) {
		document.getElementById('newCard').style.display = "none";
	document.getElementById('Stop').style.display = "none";
		document.getElementById('communication').innerHTML = "You win!";
		document.getElementById('playAgain').style.display = "inline-block";

// end of if winner on next row
} else if ((totalPlayer == totalHouse)  |  (totalPlayer == 14 && totalHouse == 21)  | (totalPlayer == 21 && totalHouse == 14) | (totalPlayer > 21 && totalHouse >21)) {
		document.getElementById('newCard').style.display = "none";
	document.getElementById('Stop').style.display = "none";
		document.getElementById('communication').innerHTML = "We have a draw!";
		document.getElementById('playAgain').style.display = "inline-block";


	// end of else if equal on next row
} else if ((totalPlayer > 21 && totalHouse <= 21 )  | (totalPlayer <=21 && totalPlayer != 14 && totalHouse > totalPlayer)) {
		document.getElementById('newCard').style.display = "none";
	document.getElementById('Stop').style.display = "none";
		document.getElementById('communication').innerHTML = "You lose!";

		document.getElementById('playAgain').style.display = "inline-block";

	//end of you lose
} 



	// on next row end of newCard3 function
}


function startGameEvaluation(){
		//check total
	var totalPlayer = userCard1 + userCard2 + userCard3 + userCard4;
	var totalHouse = houseCard1 + houseCard2+ houseCard3 + houseCard4;

	if ((totalPlayer == 14 && totalHouse != 14 && totalHouse != 21) | (totalPlayer == 21   && totalHouse != 14 && totalHouse != 21) | (totalPlayer < 21 && totalPlayer > totalHouse && totalHouse != 14)  |  (totalPlayer < 21 && totalHouse > 21)) {
		document.getElementById('newCard').style.display = "none";
	document.getElementById('Stop').style.display = "none";
	document.getElementById('communication').innerHTML = "You win!";
			document.getElementById('playAgain').style.display = "inline-block";

// end of if winner on next row
} else if ((totalPlayer == totalHouse)  |  (totalPlayer == 14 && totalHouse == 21)  | (totalPlayer == 21 && totalHouse == 14) | (totalPlayer > 21 && totalHouse >21)) {
		document.getElementById('newCard').style.display = "none";
	document.getElementById('Stop').style.display = "none";
	document.getElementById('communication').innerHTML = "We have a draw!";
			document.getElementById('playAgain').style.display = "inline-block";


	// end of else if equal on next row
} else if ((totalPlayer > 21 && totalHouse <= 21 )  | (totalPlayer <=21 && totalPlayer != 14 && totalHouse > totalPlayer)){
		document.getElementById('newCard').style.display = "none";
	document.getElementById('Stop').style.display = "none";
	document.getElementById('communication').innerHTML = "You lose!";
		document.getElementById('playAgain').style.display = "inline-block";


	//end of you lose
} 

	// on next line end of startGameEvaluation
}

// end of see if player is satisfied


} // end of the program

function myFunction() {
    location.reload();
}