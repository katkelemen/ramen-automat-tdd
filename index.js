import { RamenAutomat } from "./ramen.js";

let r = new RamenAutomat();

let coinButton = document.getElementById("coin-button");
let chooseButton = document.getElementById("choose-button");
let cancelButton = document.getElementById("cancel-button");
let ramenSpace = document.getElementById("ramen-space");
let changeSpace = document.getElementById("change-space");
let display = document.getElementById("display-text");

coinButton.onclick = onCoinButton;
chooseButton.onclick = onChooseButton;
cancelButton.onclick = onCancelButton;
changeSpace.onclick = onChangeSpace;
ramenSpace.onclick = onRamenSpace;

console.log(r.state);

function onCoinButton () {
	if (ramenSpace.innerHTML == "R") {
		display.innerHTML = "Enjoy your ramen!";
		return
	}
	else if (r.insertCoin() == "Take your change") {
		display.innerHTML = "Take your change!";
		changeSpace.innerHTML = "C";
	} else {
		display.innerHTML = "Choose your ramen!"
		chooseButton.className = "button borderBlink";
		coinButton.className = "button";
		console.log(r.state);
	}
	
}

function onChooseButton () {
	display.innerHTML = "Enjoy your ramen!";
	if (ramenSpace.innerHTML == "R") {
		return
	}
	else if (r.chooseRamen() == "Take your ramen") {
		chooseButton.className = "button";
		ramenSpace.className = "borderBlink";
		ramenSpace.innerHTML = "R";
		console.log(r.state);
	}
}

function onCancelButton () {
	if (ramenSpace.innerHTML == "R") {
		display.innerHTML = "Enjoy your ramen!";
		return
	}
	else if (r.cancel() == "Coins in tray") {
		display.innerHTML = "Take your change!";
		chooseButton.className = "button";
		coinButton.className = "button borderBlink";
		changeSpace.innerHTML = "C";
		console.log(r.state);
	}
}

function onChangeSpace () {
	if (changeSpace.innerHTML == "C") {
		changeSpace.innerHTML = "";
		if (coinButton.className == "button borderBlink") {
			display.innerHTML = "Insert 1 coin for a delicious ramen bowl...";
		}
		else if (chooseButton.className == "button borderBlink") {
			display.innerHTML = "Choose your ramen!";
		}
	}
}

function onRamenSpace () {
	if (ramenSpace.innerHTML == "R") {
		display.innerHTML = "Insert 1 coin for a delicious ramen bowl...";
		ramenSpace.innerHTML = "";
		coinButton.className = "button borderBlink";
		ramenSpace.className = "";
	}
}