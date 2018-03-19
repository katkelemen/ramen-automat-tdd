import { RamenAutomat } from "./ramen.js";

const r = new RamenAutomat();

const coinButton = document.getElementById("coin-button");
const chooseButton = document.getElementById("choose-button");
const cancelButton = document.getElementById("cancel-button");
const ramenSpace = document.getElementById("ramen-space");
const changeSpace = document.getElementById("change-space");
const display = document.getElementById("display-text");
const ramen0 = document.getElementById("0");
const ramen1 = document.getElementById("1");
const ramen2 = document.getElementById("2");
const ramen3 = document.getElementById("3");

coinButton.onclick = onCoinButton;
chooseButton.onclick = onChooseButton;
cancelButton.onclick = onCancelButton;
changeSpace.onclick = onChangeSpace;
ramenSpace.onclick = onRamenSpace;
ramen0.onclick = function(){ onRamenSelect(0, ramen0)};
ramen1.onclick = function(){ onRamenSelect(1, ramen1)};
ramen2.onclick = function(){ onRamenSelect(2, ramen2)};
ramen3.onclick = function(){ onRamenSelect(3, ramen3)};

function onCoinButton () {
	if (ramenSpace.className == "ramen-in") {
		display.innerHTML = "Enjoy your ramen!";
		return
	} else {
		r.insertCoin()
		display.innerHTML = "Choose your ramen!"
		ramen0.className = "button ramen-button borderBlink";
		ramen1.className = "button ramen-button borderBlink";
		ramen2.className = "button ramen-button borderBlink";
		ramen3.className = "button ramen-button borderBlink";
		cancelButton.style = "border-color: #efdb1b";
		coinButton.style = "border-color: #efdb1b";
		coinButton.className = "button";
		console.log("coins in: " + r.coins);
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
		console.log("coins in: " + r.coins);
	}
}

function onCancelButton () {
	if (ramenSpace.className == "ramen-in") {
		display.innerHTML = "Enjoy your ramen!";
		return
	}
	else if (!isNaN(r.cancel()[0])) {
		display.innerHTML = "Take your change!";
		chooseButton.className = "button";
		coinButton.className = "button borderBlink";
		changeSpace.className = "coin-in";
		cancelButton.style = "border-color: #4c4c4c";
		ramen0.className = "button ramen-button";
		ramen1.className = "button ramen-button";
		ramen2.className = "button ramen-button";
		ramen3.className = "button ramen-button";
		console.log("coins in: " + r.coins);
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

function onRamenSelect (n, selected) {
	const message = r.select(n)[0];
	const price = r.select(n)[1];
	if (message == "Not enough coins") {
		display.innerHTML = "Insert " + price + " coin for ramen " + n;
	} else {
		ramen0.className = "button ramen-button";
		ramen1.className = "button ramen-button";
		ramen2.className = "button ramen-button";
		ramen3.className = "button ramen-button";
		selected.style = "border-color: #efdb1b";
	}
}