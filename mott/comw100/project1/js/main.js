function sanitize(str)
{
	var whiteList = " abcdefghijklmnopqrstuvwxyz!?.,+-:";
	for (var i = 0; i < str.length; i++)
	{
		if (!whiteList.includes(str[i].toLowerCase()))
		{
			return false;
		}
	}
	return true;
}
function checkLength(str)
{
	//this function compairs a string against the valid document length
	var strArr = str.split(" ");	
	if (strArr.length > document.wCount)
	{	
		return false;
	}
		return true;
}
function loadValue()
{
	//this function loads the wCount variable into the document
	document.wCount = document.getElementById("wCount").value;
	document.getElementById("countLbl").innerHTML = document.wCount.toString();
}
function checkTxt()
{
	//this function is ment to be run on every key press in the textIn input
	//to validate that the user is imputing valid text on the fly
	
	var txtIn = document.getElementById("textIn");
	if (checkLength(txtIn.value))
	{
		if (sanitize(txtIn.value))
		{
			document.getElementById("textOut").innerHTML = "";	
			return true;
		}
		else
		{
			document.getElementById("textOut").innerHTML = "you have invalid charicters in your message!";
			//return false : readability
		}
	}
	else
	{
		var tOut = document.getElementById("textOut")
		
		tOut.innerHTML="you can only use " + document.wCount.toString() + " word";
		if (document.wCount != 1) {tOut.innerHTML+="s";} //this way we only use an s when there is more than one word
		//return false : readability
	}
	//if they do not pass both of the if statements they must return false	
	txtIn.value = txtIn.value.slice(0,-1) //chop off the last problamatic charicter of the input	
	return false;
}
function addTxt()
{
	//this function adds text to the main story element

	var textIn = document.getElementById("textIn");
	if (!sanitize(textIn.value))
	{
		var txtOut = document.getElementById("textOut");
		txtOut.innerHTML = "you have invalid charicters in your message, please try again";
		return false;
	}
	//theres no need to get the story element before we know we have a safe string
	
	var story = document.getElementById("story");

	if (document.turn)
	{
		story.innerHTML += " <em class=\"p2\">" + textIn.value + "</em>";	
	}
	else
	{
		story.innerHTML += " <em class=\"p1\">" + textIn.value + "</em>";	
	}
	
	//change the value of the turn element
	if (document.turn)
	{
	
		document.getElementById("turn").innerHTML = "Player 1";
	}
	else
	{
		document.getElementById("turn").innerHTML = "Player 2";
	}
	
	//change whose turn it is 
	document.turn = !document.turn;
	textIn.value = ""; //found that resetting the value REALLY helps with the game side of things	
	return false;
}
