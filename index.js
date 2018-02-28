import { RamenAutomat } from "./ramen.js";

let r = new RamenAutomat();

let coinButton = document.getElementById("coin-button");
let chooseButton = document.getElementById("choose-button");
let cancelButton = document.getElementById("cancel-button");
let ramenSpace = document.getElementById("ramen-space");
let changeSpace = document.getElementById("change-space");

coinButton.onclick = onCoinButton;
chooseButton.onclick = onChooseButton;
cancelButton.onclick = onCancelButton;
changeSpace.onclick = onChangeSpace;
ramenSpace.onclick = onRamenSpace;

console.log(r.state);

function onCoinButton () {
	if (ramenSpace.innerHTML == "R") {
		alert("Take your ramen!");
		return
	}
	else if (r.insertCoin() == "Take your change") {
		changeSpace.innerHTML = "C";
	} else {
		chooseButton.className = "button borderBlink";
		coinButton.className = "button";
		console.log(r.state);
	}
	
}

function onChooseButton () {
	if (ramenSpace.innerHTML == "R") {
		alert("Take your ramen!");
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
		alert("Take your ramen!");
		return
	}
	else if (r.cancel() == "Coins in tray") {
		chooseButton.className = "button";
		coinButton.className = "button borderBlink";
		changeSpace.innerHTML = "C";
		console.log(r.state);
	}
}

function onChangeSpace () {
	if (changeSpace.innerHTML == "C") {
		changeSpace.innerHTML = "";
	}
}

function onRamenSpace () {
	if (ramenSpace.innerHTML == "R") {
		ramenSpace.innerHTML = "";
		coinButton.className = "button borderBlink";
		ramenSpace.className = "";
	}
	//this should change the state back to ""
}