function roll()
{
	var ret_val = 0;
	for (var i = 0; i < 3; i++)
	{
		ret_val += Math.ceil(Math.random()*6);
	}
	return ret_val;
}
//this function fills a list with the given id with random numbers
function fillList(id)
{	
	var stats = document.getElementById("stats");
	for (var i = 0; i < stats.childNodes.length; i++){
		var li = stats.childNodes[i];
		for (var j = 0; j < li.childNodes.length; j++){			
			if (li.childNodes[j] && li.childNodes[j].className.split(' ').includes("roll_output"))
			{
				var num_roll = roll()
				li.childNodes[j].setAttribute("data-percent",num_roll/18*100);
				li.childNodes[j].innerHTML = num_roll;	
			}
		}
	}	
}
fillList("stats");
