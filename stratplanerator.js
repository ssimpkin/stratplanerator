

function generatePlan() {
	
	// message going out to page
	var msg = 'Library future bullshittery!';
	
	// message has to replace the text in the div named "message"
	var el = document.getElementById('message');
	el.textContent = msg;
}

// runs the script
generatePlan();