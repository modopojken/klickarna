/* element för manipulation */
var button = document.getElementById("clickerbutton");
var lejonKnapp = document.getElementById("lejon");
var scoreDiv = document.getElementById("score");
var powerText = document.getElementById("powerText");
var scoreText = document.createElement("p");
var zebraKnapp = document.getElementById("zebra");

/* spelvariabler */
var clickValue = 1;
var bank = 0;
var lejonCost = 15;
var lejonClicks = 0;
var zebra;
var zebraCost = 35;
clickValue.toFixed(0);
var zebraTimer = 0;
var zebraGains = 5;



/* start */
scoreText.textContent = "Points: 0";
lejonKnapp.textContent = "Lejon: " + lejonCost;

/* click event + logic */
button.addEventListener("click", function() {


if(lejonClicks > 0){
	clickValue.toFixed(0);
	lejonClicks--;
	console.log("Du har " + lejonClicks + " lejon kvar");
}else if(lejonClicks == 0){

clickValue = 1;

}

	bank += clickValue; // lägg till värdet vid click
	scoreText.textContent = "Points: " + bank; // sätt textvärdet i p elementet till bank.
});

zebraKnapp.addEventListener("click", function(){
clickValue.toFixed(0);

	if (bank >= zebraCost && zebraTimer == 0) {
		bank -= zebraCost;
		zebraTimer += 10;
		zebraCost*= 1.5;
		clickValue.toFixed(0);
		zebraGains += 5;
		zebraKnapp.textContent = "Zebra: " + zebraCost;
		clickValue.toFixed(0);


		zebra = setInterval(function() {
			clickValue.toFixed(0);
			bank += zebraGains;
			scoreText.textContent = "Points: " + bank;
			zebraTimer--;

			if(zebraTimer == 0){
				clearInterval(zebra);
			}


			scoreText.textContent = "Points: " + bank;
		},1000);
	}else if(zebraTimer > 0){

		powerText.textContent = "Nej!!!";
clickValue.toFixed(0);
	}else{
		powerText.textContent = "Du har inte råd med zebra";
	}
}, true);
// fäst p elementet i score diven.
scoreDiv.appendChild(scoreText); 
lejonKnapp.addEventListener("click", function() {
	if (bank >= lejonCost) {
		clickValue.toFixed(0);
		bank -= lejonCost;
		clickValue *=2;
		lejonCost +=2;
		lejonClicks += 10;
		lejonKnapp.textContent = "Lejon: " + lejonCost;
		clickValue.toFixed(0);
		powerText.textContent = "Köpte lejon";
		scoreText.textContent = "Points: " + bank; // sätt textvärdet i p elementet till bank.
	} else {
		powerText.textContent = "Du har inte råd med lejon";
		scoreText.textContent = "Points: " + bank;
	}
});