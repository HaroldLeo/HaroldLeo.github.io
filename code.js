function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.round(Math.random() * 15)];
	}
	return color;
}

var clickedTime; var createdTime; var reactionTime;
function makeBox() {

	var time = Math.random() * 2000 + 500;

	setTimeout(function () {

		document.getElementById("block").style.backgroundColor = getRandomColor();

		document.getElementById("block").style.display="block";

		createdTime = Date.now();

	}, time);

}

document.getElementById("block").onclick = function () {

	clickedTime = Date.now();

	reactionTime = clickedTime - createdTime;

	document.getElementById("time").innerHTML = reactionTime;

	this.style.display = "none";

}

document.getElementById("start").onclick = function () {
	makeBox();
}