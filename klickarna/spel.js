/* element för manipulation */
var button = document.getElementById("clickerbutton");
var LittleboyKnapp = document.getElementById("Littleboy");
var scoreDiv = document.getElementById("score");
var powerText = document.getElementById("powerText");
var scoreText = document.createElement("p");
var FatmanKnapp = document.getElementById("Fatman");
var Bombska = document.getElementById("Bombska");
var Tsarbomba = document.getElementById("Tsarbomba");

/* spelvariabler */
var clickValue = 1;
var bank = 0;
var LittleboyCost = 15;
var LittleboyClicks = 0;
var Fatman;
var FatmanCost = 35;
clickValue.toFixed(0);
var FatmanTimer = 0;
var FatmanGains = 5;
var BombskaCost = 500;
var BombskaClicks = 0;
var LittleboyPurchased = 0;
var Bombska;
var BombskaPurchased = 0;

var TsarbombaClicks = 0;
var TsarbombaPurchased = 0;
var TsarbombaCost = 10000;



powerText.textContent = "Börja Klicka!";
/* start */
scoreText.textContent = "Hazard Points: 0";
LittleboyKnapp.textContent = "Little Boy: " + LittleboyCost;

/* click event + logic */
button.addEventListener("click", function() {

if(LittleboyClicks > 0){
	clickValue.toFixed(0);
	LittleboyClicks--;
	console.log("Du har " + LittleboyClicks + " Little Boy kvar");
}else if(LittleboyClicks == 0){

clickValue = 1;

}
	bank += clickValue; // lägg till värdet vid click
	scoreText.textContent = "Hazard Points: " + Math.floor(bank); // sätt textvärdet i p elementet till bank.
});

FatmanKnapp.addEventListener("click", function(){
clickValue.toFixed(0);

	if (bank >= FatmanCost && FatmanTimer == 0) {
		bank -= FatmanCost;
		FatmanTimer += 10;
		FatmanCost*= 1.5;
		clickValue.toFixed(0);
		FatmanGains += 5;
		FatmanKnapp.textContent = "Fatman: " + Math.floor(FatmanCost);
		clickValue.toFixed(0);


		Fatman = setInterval(function() {
			clickValue.toFixed(0);
			bank += FatmanGains;
			scoreText.textContent = "Hazard Points: " + Math.floor(bank);
			FatmanTimer--;

			if(FatmanTimer == 0){
				clearInterval(Fatman);
			}


			scoreText.textContent = "Hazard Points: " + Math.floor(bank);
		},1000);
	}else if(FatmanTimer > 0){

		powerText.textContent = "Nej!!!";
clickValue.toFixed(0);
	}else{
		powerText.textContent = "Du har inte råd med Fatman";
	}
}, true);


Tsarbomba.addEventListener("click", function(){

	if(bank>9999){
	clickValue.toFixed(0)
	bank -= TsarbombaCost;
	TsarbombaPurchased++;
	clickValue = TsarbombaPurchased + clickValue * 1000;
	TsarbombaCost *=1.23;
	TsarbombaClicks += 100;

	scoreText.textContent = "Hazard Points: " + Math.floor(bank);
	Tsarbomba.textContent = "Tsarbomba: " + Math.floor(TsarbombaCost);
	powerText.textContent = "Du köpte den största bomben som finns på marknaden, vill du ha en påse till det?";

}else{powerText.textContent = "Du har inte råd med Tsarbomberino";}


},true);



Bombska.addEventListener("click", function(){
	BombskaClicks++;
	BombskaPurchased++
	console.log("Du har " + BombskaClicks + " Bombska's");
	bank = bank * 2;	
	bank - BombskaCost;
	if(BombskaClicks >= 1){powerText.textContent = "Du får inte köpa en till!!!!";
		Bombska.style.display = "none";
}

if(bank == 420){powerText.textContent = "kys...";}

},true);

// fäst p elementet i score diven.
scoreDiv.appendChild(scoreText); 
LittleboyKnapp.addEventListener("click", function() {
	if (bank >= LittleboyCost) {
		clickValue.toFixed(0);
		bank -= LittleboyCost;
		LittleboyPurchased++;
		clickValue = LittleboyPurchased + clickValue * 2;
		LittleboyCost *=1.5;
		LittleboyClicks += 10;

		
		if(LittleboyPurchased >= 10 && BombskaPurchased == 0){
			
			Bombska.style.display = "inline";

		}

		LittleboyKnapp.textContent = "Little Boy: " + Math.floor(LittleboyCost);
		clickValue.toFixed(0);
		powerText.textContent = "Köpte Little Boy";
		scoreText.textContent = "Hazard Points: " + Math.floor(bank); // sätt textvärdet i p elementet till bank.
	} else {
		powerText.textContent = "Du har inte råd med denna atombomb";
		scoreText.textContent = "Hazard Points: " + Math.floor(bank);
	}
});