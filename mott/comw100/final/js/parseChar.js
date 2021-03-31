var charObj = JSON.parse(
'{"stats":{"str":0,"dex":0,"con":0,"int":0,"wis":0,"cha":0},"history":"","inventory":"","skills":""}'
);

function genStat()
{	
	var ret_val = 0;

//create and store the dice rolls
	var rolls = [];	
	//initilize the lowest value
	var lowest_roll = Math.ceil(Math.random()*6);
	var lowest_index = 0;
	//create the rolls and find the roll with the lowest value
	for (var i = 0; i < 4; i++)
	{
		rolls.push(Math.ceil(Math.random()*6));		
		if (rolls[i] < lowest_roll)
		{
			//we found a new lowest, change the total lowest value
			lowest_roll = rolls[i];
			lowest_index = i;
		}
	}
	for (var i = 0; i < 4; i++)
	{	
		if (i != lowest_index)
		{	
			ret_val+=rolls[i];
		}
	}
	
	return ret_val;
}
function displayStat(statName)
{
	var statBlock = document.getElementById("txt" + statName);
		
	var rollCmb = document.getElementById('rolls');	
	if (rollCmb.selectedIndex != -1)
	{
		//load over the selected index into the stat
		statBlock.innerHTML = rollCmb.options[rollCmb.selectedIndex].innerHTML;	
		rollCmb.remove(rollCmb.selectedIndex);
	
		var btnSU = document.getElementById("btn" + statName);
		btnSU.setAttribute("onClick","clearStat('" + statName + "')");
		btnSU.innerHTML = "unset";
	}
}

function clearStat(statName)
{
	var statBlock = document.getElementById("txt" + statName);
	if (statBlock.innerHTML != 'unset')	
	{
		var rollCmb = document.getElementById('rolls');
		
		var new_option = document.createElement("option");
		new_option.innerHTML = statBlock.innerHTML;
		statBlock.innerHTML = "unset";
		rollCmb.appendChild(new_option);
		rollCmb.selectedIndex = rollCmb.options.length-1;
		
		var btnSU = document.getElementById("btn" + statName);
		btnSU.setAttribute("onClick","displayStat('" + statName + "')");
		btnSU.innerHTML = "set";
	}
}
function removeStats()
{
	var stats = document.querySelectorAll(".stat_block");
	var statUl = document.getElementById("stats");
	for (var i = 0; i < stats.length; i++)
	{
		statUl.removeChild(stats[i]);
	}
}
function loadCharicter(charicterObj)
{
	//this function loads a charicter into the stats list

	//clear out the previous stats so we are not just appending to pre-existing stats
	removeStats();
		
	for (var key in charicterObj)
	{
		if (key == "stats")
		{
			//we found the stats object
			for (var key2 in charicterObj[key])
			{
				addStat(key2,charicterObj[key][key2]);
			}
		}
	}
	
	//display the text of the charicter	
	document.getElementById("txtHist").value = charicterObj.history;
	document.getElementById("txtInv").value = charicterObj.inventory;
	document.getElementById("txtSkill").value = charicterObj.skills;
	
	
	document.getElementById("txtName").value = charicterObj.name;
	document.getElementById("txtRace").value = charicterObj.race;
	document.getElementById("numHp").value = charicterObj.hp;
}
function addStat(statName,statValue)
{
	stat_parent = document.getElementById("stats");
	stat_ancor = document.getElementById("new_stat_ancor");

	//create the stat block node
	var statBlock = document.createElement("li");
	statBlock.setAttribute("class","stat_block");
	statBlock.setAttribute("id",statName); //this is so that we can find the stat block again
	
	//create the title element for that node
	var title = document.createElement("h4");
	title.innerHTML = statName;
	title.setAttribute("class","txtStatTitle");	
	//create and label the text node for access later		
	var textNode = document.createElement("span");
	textNode.setAttribute("id","txt" + statName);
	textNode.setAttribute("class","txtStatNum");
		
	if (statValue != 0)
	{
		textNode.innerHTML = statValue;					
	}
	else 
	{
		textNode.innerHTML = "unset";
	}	
	
	//add the title and actual stat to the text of the node
	statBlock.appendChild(title);	
	statBlock.appendChild(textNode);	

	//if the stat is running in "evaluation mode", e.g. it equals zero, then we add the ui to set and reset it
	if (statValue == 0)
	{
		//create the button to set the stat to a roll
		var button = document.createElement("button");
		button.setAttribute("id","btn" + statName); // tag the button so we can access it later
		button.setAttribute("class","statBtn");
		button.setAttribute("onClick","displayStat('" + statName + "')");
		button.innerHTML = "set";

		//add the button to the stat block
		statBlock.appendChild(button);		
		
//this stat has not been initilized yet, so add a roll that the user can set to the rolls option
		var rollElement = document.getElementById("rolls");
		var option = document.createElement("option");
		option.setAttribute("id","opt"+statName); //set the id of the roll so we can access it later
		option.setAttribute("value",statValue);
		option.innerHTML = genStat(); //set the actual numerical value of the roll
		rollElement.appendChild(option); //add the roll to the actual options
	
	}

	//append the new node to the stat_target
	stat_parent.insertBefore(statBlock,stat_ancor);			
}
function addNewStat()
{
	var name = document.getElementById("txtNewStat").value;
	if (name != "")
	{
		addStat(name,0);
	}
}
function syncChar()
{
	//this function takes the information placed on the screen and stores it into the charicter object 
	//for use in other places of the script

	charObj.history = document.getElementById("txtHist").value;
	charObj.inventory = document.getElementById("txtInv").value;
	charObj.skills = document.getElementById("txtSkill").value;
	charObj.name = document.getElementById("txtName").value;
	charObj.race = document.getElementById("txtRace").value;
	charObj.hp = document.getElementById("numHp").value;

	var statTxtList = document.querySelectorAll(".txtStatNum");
	var statTitleList = document.querySelectorAll(".txtStatTitle");

	for (var i = 0; i < statTxtList.length; i ++)
	{	
		if (statTxtList[i].innerHTML == "unset")
		{
			charObj.stats[statTitleList[i].innerHTML] = 0;
		}
		else
		{
			charObj.stats[statTitleList[i].innerHTML] = Number(statTxtList[i].innerHTML);
		}
	} 
	
}

function promptCopy(toCopy)
{
	//this is a simple wrapper function to prompt the user to copy the information
	window.prompt("CTRL+C to copy",toCopy);
}
function exportCharicter()
{
	//this function exports the charicter for the user
	syncChar();	
	promptCopy(JSON.stringify(charObj));
}
function importCharicter()
{
	var string = prompt("Paste Charicter Here");
	charObj = JSON.parse(string);
	loadCharicter(charObj);
}
//display the default charicter
loadCharicter(charObj);
