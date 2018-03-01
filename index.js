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
	if (ramenSpace.className == "ramen-in") {
		display.innerHTML = "Enjoy your ramen!";
		return
	}
	else if (r.insertCoin() == "Take your change") {
		display.innerHTML = "Take your change!";
		changeSpace.className = "coin-in";
	} else {
		display.innerHTML = "Choose your ramen!"
		chooseButton.className = "button borderBlink";
		cancelButton.style = "border-color: #efdb1b";
		coinButton.className = "button";
		console.log(r.state);
	}
	
}

function onChooseButton () {
	if (ramenSpace.className == "ramen-in") {
		return
	}
	else if (r.chooseRamen() == "Take your ramen") {
		display.innerHTML = "Enjoy your ramen!";
		chooseButton.className = "button";
		cancelButton.style = "border-color: #4c4c4c";
		ramenSpace.className = "ramen-in";
		console.log(r.state);
	}
}

function onCancelButton () {
	if (ramenSpace.className == "ramen-in") {
		display.innerHTML = "Enjoy your ramen!";
		return
	}
	else if (r.cancel() == "Coins in tray") {
		display.innerHTML = "Take your change!";
		chooseButton.className = "button";
		coinButton.className = "button borderBlink";
		changeSpace.className = "coin-in";
		cancelButton.style = "border-color: #4c4c4c";
		console.log(r.state);
	}
}

function onChangeSpace () {
	if (changeSpace.className == "coin-in") {
		changeSpace.className = "";
		if (coinButton.className == "button borderBlink") {
			display.innerHTML = "Insert 1 coin for a delicious ramen bowl...";
		}
		else if (chooseButton.className == "button borderBlink") {
			display.innerHTML = "Choose your ramen!";
		}
	}
}

function onRamenSpace () {
	if (ramenSpace.className == "ramen-in") {
		display.innerHTML = "Insert 1 coin for a delicious ramen bowl...";
		coinButton.className = "button borderBlink";
		ramenSpace.className = "";
	}
}