
var phrases = ["QR codes", "innovation", "makerspace", "middle management", "temp jobs"];

function generatePlan() {
	
	// message going out to page
	// var msg = 'Library future bullshittery!';
	var msg = phrases[Math.floor(Math.random()*phrases.length)];


	// message has to replace the text in the div named "message"
	var el = document.getElementById('message');
	el.textContent = msg;
}

// runs the script
generatePlan();