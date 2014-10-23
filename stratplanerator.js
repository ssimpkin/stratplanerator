
var phrases1 = ["Building", "Crafting", "Sparking", "Forging", "Hatching"];
var phrases2 = ["synergistic", "shared", "cutting-edge", "innovative", "community-led"];
var phrases3 = ["partnerships", "technologies", "makerspaces", "programs", "collections"];
var phrases4 = ["with", "using"];
var phrases5 = ["innovative", "inventive", "cutting-edge", "groundbreaking", "ingenious"];
var phrases6 = ["makerspaces", "collections", "partnerships", "infrastructure", "QR codes"];



function generatePlan() {
	
	// message going out to page
	// var msg = 'Library future bullshittery!';
	// var msg = phrases[Math.floor(Math.random()*phrases.length)];

	var msg = phrases1[Math.floor(Math.random()*phrases1.length)] 
	+ " " + phrases2[Math.floor(Math.random()*phrases2.length)]
	+ " " +  phrases3[Math.floor(Math.random()*phrases3.length)]
	+ " " +  phrases4[Math.floor(Math.random()*phrases4.length)]
	+ " " +  phrases5[Math.floor(Math.random()*phrases5.length)]
	+ " " +  phrases6[Math.floor(Math.random()*phrases6.length)] + ".";





	// message has to replace the text in the div named "message"
	var el = document.getElementById('message');
	el.textContent = msg;
}

// runs the script
generatePlan();