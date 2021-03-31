/*
	this function is my custom pilot code for combining the two above functions
*/

function updateCharts(id) {
    //loop through each of the given elements and add a chart
    var element = document.getElementsByClassName(id);
    for (var i = 0; i < element.length; i++)
	{
	    var pie = new EasyPieChart(element[i], 
		{	//this is where we set up our options for the graphs
			size: 80,
			scaleColor: '#555',
			barColor: '#00FA9A'
				
	    	}); 
	}
}

//make sure that we update everything when they click the re-roll button
document.getElementById("btnReRoll").onclick = function() 
{
	//fill the numbers using the first app
	fillList("chart");
	//fill the charts using the second one
	updateCharts("chart"); 
};

//update the charts when the script loads
updateCharts("chart");

