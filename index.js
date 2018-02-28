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
		this.style.border = "2px solid #4c4c4c";
		chooseButton.style.border="2px solid red";
		console.log(r.state);
	}
	
}

function onChooseButton () {
	if (ramenSpace.innerHTML == "R") {
		alert("Take your ramen!");
		return
	}
	else if (r.chooseRamen() == "Take your ramen") {
		this.style.border = "2px solid #4c4c4c";
		coinButton.style.border = "2px solid red";
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
		chooseButton.style.border = "2px solid #4c4c4c";
		coinButton.style.border = "2px solid red";
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
	}
	//this should change the state back to ""
}