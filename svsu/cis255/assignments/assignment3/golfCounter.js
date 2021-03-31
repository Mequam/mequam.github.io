for (let i = 1; i <= 18; i++) { 

	let elem = document.getElementById(i);		
	
	//is this me bieng lazy and not adding tons of elemnents in html, nooooo absolutly not
	//again, quick and dirty solutions
//create the clear button
	let btnClear = document.createElement("button");
	btnClear.setAttribute("type","button");
	btnClear.setAttribute("class","clear-btn btn btn-warning");
	btnClear.innerHTML = 'C';
	btnClear.onclick = () => {clear(elem);};
	elem.children[4].appendChild(btnClear);
//create the add button
	//4 is the action td and 0 is the add button	
	elem.children[4].children[0].onclick = () => {add(elem);};
//create the subtract button
	//4 is the action td and 1 is the subtract button
	elem.children[4].children[1].onclick = () => {sub(elem);};	
}

//helper function to parse out a number safely
let safeParseNumStr = (str) => (str == "-") ? 0 : Number.parseInt(str); 

//this function sums all of the scores in the table
//I am tempted to generalize it to sum scores in a table, but quick and dirty is a must
//for this time frame!
function syncSums() { 
	totals = [0,0,0];
	for (let i = 1; i <= 18; i++) { 
		let elem = document.getElementById(i);
		totals[0] += safeParseNumStr(elem.children[1].innerHTML);
		totals[1] += safeParseNumStr(elem.children[2].innerHTML);
		totals[2] += safeParseNumStr(elem.children[3].innerHTML); 
	}
	let total = document.getElementById("totals");
	totals.forEach((elem,i)=>{
		total.children[i+1].innerHTML = totals[i]; 
	});

}

//this function sets the score of an element and ensures that the rest of the numbers of the element behave
function setScore(rowElem,score) {
	//make sure that score is posotive 
	score = (score > 0) ? score : 0;
	
	//set the score itself
	rowElem.children[2].innerHTML = score; //score is defined to be row 2
	
	let par = Number.parseInt(rowElem.children[1].innerHTML); //par is defined to be row 1	
	let over = score - par;
	//set the over
	rowElem.children[3].innerHTML = (over > 0) ? over : 0; //over is designed to be row 3
	//sync the totals
	syncSums();
}



function clear (elem) { 
	elem.children[2].innerHTML = "-";
	elem.children[3].innerHTML = "-";
	syncSums();
}
//these two functions (add and sub) could be turned into one higher order function, but this quick and 
//dirty approach works fine for now

// create an "add" function
function add (elem) {
	let scoreChild = elem.children[2];
	if(scoreChild.innerHTML == "-")
		setScore(elem,1);
		else {
			let currentScore = Number.parseInt(scoreChild.innerHTML);		
			setScore(elem,currentScore + 1);
		}	
}
//create a "sub" function
function sub (elem) { 
	let scoreChild = elem.children[2];
	if (scoreChild.innerHTML == "-")
		setScore(elem,0);
	else {
		let currentScore = Number.parseInt(scoreChild.innerHTML);	
		setScore(elem,currentScore - 1);
	}
}
