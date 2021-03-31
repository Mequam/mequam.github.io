// ---------- Global variables ----------

// use "var" keyword so code works in CodePen

// Covid19api variables
var URL = "https://api.covid19api.com/summary";

// AJAX variable
var xhttp;

//constant for what we name the local storage data
const LS_COVID_DATA_NAME = "covidData"

// "ctx" is the canvas HTML element where the chart is rendered in the browser
var ctx = 
  document.getElementById('myChart').getContext('2d');

// ---------- loadContent() function ----------

// Note: you can't execute API data dependent code outside the loadContent() function because the code might execute before the AJAX call responds, that is, it might execute before the variable, covidJson, is initialized with data from the API. Example below.

// code below modified from: 
// https://www.w3schools.com/js/js_ajax_intro.asp

//asyncronously loads the graph with event oriented programing
function loadAjax() {	
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		let covidJson = this.responseText;
		let covidJsObj = JSON.parse(covidJson);
		let newConfirmedOver1000 = [];

		for (let c of covidJsObj.Countries) {
			let totalDeaths = c.NewDeaths + c.TotalDeaths; 
			if (totalDeaths >= 50000) {
				let totalConfirmed = c.TotalConfirmed+c.NewConfirmed;	
				let percentageInfected = totalConfirmed / populations[c.Slug];
		
					newConfirmedOver1000.push({ 
						"Slug" : c.Slug, 	
						"NewConfirmed" : c.NewConfirmed, 
						"NewDeaths" : c.NewDeaths,
						"TotalDeaths" : totalDeaths,
						"TotalConfirmed" : totalConfirmed,
						"Population" : populations[c.Slug],
						"PercInfected" : percentageInfected,
						"TotalConfrimedPer100000" : percentageInfected * 100000
				});
			}
		}
		
		//sort the data with lodash
		newConfirmedOver1000 = _.orderBy(newConfirmedOver1000,["TotalConfrimedPer100000"],["desc"]);

		//save the output array in localstorage
		localStorage.setItem(LS_COVID_DATA_NAME,JSON.stringify({
							"time" : (new Date()),
							"data" : newConfirmedOver1000}));
		
		//display the data with our chart plug in
		displayBarGraph(newConfirmedOver1000);
    } // end if
    
  }; // end xhttp.onreadystatechange = function()
  
  xhttp.open("GET", URL, true);
  xhttp.send();
}

//syntactic sugar functions, the lot of em'
const mil2hour = (mil) => mil/3600000;
const elapsedMil = (d1,d2) => d2.getTime()-d1.getTime();
const elapsedHour = (d1,d2) => mil2hour(elapsedMil(d1,d2));

//simple function to determine if a number is a power of another number without using logs or brute force
function powerOfX(n,x) {
	//my haskell is showing :D
	if (n % x == 0)
		return powerOfX(n/x,x);
	if (n == 1)
		return true	
	return false	
}
//uses AJAX if our local storage is not up to date, otherwise displays the graph with the local data
function loadContent() {
	var data = localStorage.getItem(LS_COVID_DATA_NAME);
	if (data === null)
		loadAjax();
	else {
		//parse out the stored JSON
		var parsedData = JSON.parse(data);

		//check if the data is outdated
		if (elapsedHour((new Date(parsedData.time)),(new Date())) > 24)
			loadAjax();	
		else
			displayBarGraph(parsedData.data);
	}
} // end function loadContent()

//this function takes an array of case objects and displays them in a bar graph
//intentionaly overide the global scope so we can have a local variable 
function displayBarGraph(newConfirmedOver1000) {
		let chartData = {
			  type: 'bar',
			  data: {
				//this array gets label data pushed to it
			    labels: [],
				//this gets the actual array data pushed
			    datasets: []
			  },
			  options: {
			    title: {
			      display: true,
			      text: ''
			    },
			    scales: {
			      yAxes: [{
				ticks: {
				  // logarithmic scale ignores maxTicksLimit 
				callback: function(label, index, labels) {
					
					if (powerOfX(label,10)) 
						return ((label/1000 > 9 
							|| label/1000 == 1 
							|| label/1000 == 0.1 
							|| label/1000 == 0.01) 
							? label/1000+'k' :  "");
					return "";
				  }
				},
				scaleLabel: {
				  display: true,
				  labelString: '1k = 1000'
				},
				// logarithmic scale ignores maxTicksLimit
				type: "logarithmic"
			      }]
			    }
			  }
		
		}
		//set the labels for the chart data 
		chartData.data.labels  
		= newConfirmedOver1000.map( (x) => x.Slug );
		
		//push the actual bar values
		chartData.data.datasets.push({
			backgroundColor : "rgba(100,100,100,0.4)",
			label: 'Total Cases',
			data: newConfirmedOver1000.map((x)=>x.TotalConfirmed)
		});
		chartData.data.datasets.push({
			backgroundColor : "rgba(255,0,0,00.4)",
			label : 'Total Deaths',
			data: newConfirmedOver1000.map((x)=>x.TotalDeaths)
		});
		chartData.data.datasets.push(
			{
				backgroundColor : "rgba(0,0,255,0.4)", // blue
				label : 'Total Cases Per 10000',
				data : newConfirmedOver1000.map((x)=>x.TotalConfrimedPer100000)
			});
		chartData.data.datasets.push(
			{
				backgroundColor : "rgba(0,255,0,0.4)", // green < such a nice color for a horrible statistic
				label : 'Total Deaths Per 10000 Infected',
				data : newConfirmedOver1000.map((x)=>10000*(x.TotalDeaths/x.TotalConfirmed))
			});

		//Set the graph title data
		chartData.options.title.text = "Covid 19 Hotspots Retrieved On " + dayjs().format("dd, MMM DD YYYY @ hh:mmA");
	      
		//actually set the chart
		myChart = new Chart(ctx, chartData);

}
// data from: https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population
var populations = {
  'china' : 1405137440,
'india' : 1369152434,
'united-states' : 330578332,
'indonesia' : 269603400,
'pakistan' : 220892331,
'brazil' : 212281095,
'nigeria' : 206139587,
'bangladesh' : 169575884,
'russia' : 146748590,
'mexico' : 127792286,
'japan' : 125880000,
'philippines' : 109376023,
'congo' : 101935800,
'egypt' : 101126063,
'ethiopia' : 100829000,
'vietnam' : 96483981,
'iran' : 83914898,
'turkey' : 83154997,
'germany' : 83122889,
'france' : 67146000,
'united-kingdom' : 66796807,
'thailand' : 66571530,
'italy' : 60026546,
'south-africa' : 59622350,
'tanzania' : 57637628,
'myanmar' : 54817919,
'south-korea' : 51841786,
'colombia' : 50372424,
'kenya' : 47564296,
'spain' : 47329981,
'argentina' : 45376763,
'algeria' : 43900000,
'sudan' : 42957030,
'ukraine' : 41723998,
'uganda' : 41583600,
'iraq' : 40150200,
'poland' : 38352000,
'canada' : 38229409,
'morocco' : 36063063,
'uzbekistan' : 34501586,
'saudi-arabia' : 34218169,
'afghanistan' : 32890171,
'malaysia' : 32703180,
'peru' : 32625948,
'angola' : 31127674,
'ghana' : 30955202,
'mozambique' : 30066648,
'nepal' : 29996478,
'yemen' : 29825968,
'venezuela' : 28435943,
'ivory-coast' : 26453542,
'madagascar' : 26251309,
'australia' : 25690614,
'north-korea' : 25550000,
'cameroon' : 24348251,
'taiwan' : 23568378,
'niger' : 23196002,
'sri-lanka' : 21803000,
'burkina-faso' : 21510181,
'mali' : 20250833,
'chile' : 19458310,
'romania' : 19317984,
'kazakhstan' : 18806296,
'malawi' : 18449828,
'zambia' : 17885422,
'ecuador' : 17601388,
'netherlands' : 17525931,
'syria' : 17500657,
'guatemala' : 16858333,
'senegal' : 16705608,
'chad' : 16244513,
'somalia' : 15893219,
'zimbabwe' : 15473818,
'cambodia' : 15288489,
'south-sudan' : 13249924,
'rwanda' : 12663116,
'guinea' : 12559623,
'burundi' : 12309600,
'benin' : 12114193,
'haiti' : 11743017,
'tunisia' : 11708370,
'bolivia' : 11633371,
'belgium' : 11539878,
'cuba' : 11193470,
'jordan' : 10804332,
'greece' : 10724599,
'czech-republic' : 10699142,
'dominican-republic' : 10448499,
'sweden' : 10367232,
'portugal' : 10295909,
'azerbaijan' : 10095900,
'hungary' : 9769526,
'belarus' : 9408400,
'united-arab-emirates' : 9366829,
'tajikistan' : 9313800,
'honduras' : 9304380,
'israel' : 9272700,
'papua-new-guinea' : 8935000,
'austria' : 8915382,
'switzerland' : 8632703,
}
