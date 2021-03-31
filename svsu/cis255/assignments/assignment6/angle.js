//creates the module app object for association with the html
var app = angular.module("tblPayBack",[]);

//creates a controller of the given name for the app
app.controller("tbl", // the name of the controller
	function ($scope) { //this is a machine function, it is used to set up the controller for use with the wierd {{}} substitution in the view of the app

	//load the loans array, for some reason angular runs before my ajax hooks get to run ready
	loadLoansArray();
	
	/*
		scope contains variables that we can display with views, note we place those variables in the machine function
		they (the scope variables) can be thought of as the model in the mvc structure angular uses. Basically this controller
		builds data that we throw at the view.

		In this case the plan is to create an array of debt payment objects and then use the ng-repeat directive to "expload" an 
		html view into several html views and display the output as a table. 
	*/
	
	//we are assuming that payment starts a year after you get out, this is arbitrary
	//and realistically payment could start while you are still attending
	//but I am assuming this is what the assignment wants so that is what we will use
	$scope.yearZero = loans[loans.length-1].loan_year;
	$scope.getPayObjects = () => {
		paymentObjects = [];

		let owed = getTotalPaymentWithInterest(loans.length-1);
		//how much you need to pay each year
		let pay = equalPaymentOfXYears(10, //over how many years
			loans[0].loan_int_rate, //the rate of the loan
			owed); //the size of the loan starting year zero		
		
		//add the 10 year objects that we will display
		for (let i = 0; i < 10;i+=1) {
			//yes payment will be the same in each of these, yes that is redundemt
			//but it allows us to potentially make it not the same if we want that functionality later
			//and remember this array is focused more on communicating with the display than computation
			paymentObjects.push({
							year: parseFloat($scope.yearZero)+i+4,
							amountPayed: strMoney(pay),
							startYearVal: strMoney(owed),
							endYearVal: strMoney((owed-pay)*(1+loans[0].loan_int_rate))
						});
			
			//symulate paying the loan and the year ending
			owed = (owed-pay)*(1+loans[0].loan_int_rate);
		}
		return paymentObjects;	
	}
});

//this function returns how much someone would have to pay every year
//if they were going to pay off their debt in x years
/*
	you can derive this equation by first realizing that by paying a certain amount of debt every step of the debt function
	we can derive the following function
	
	(A-P)*(1+r)^x-P*s(r+1,x-1) where 	--this is fairly easy to derive by playing around and writting down what you would do 
						--when subtracting P from an increasing series
						--as an example lets go three steps (x = 3) > (((A-P)*(1+r)-P)*(1+r)-P)*(1+r)
						--if you simplify this it should (I havn't tested that particular equation) 
						--go down to the geometric series described in the left equation
						--I leave that as an excersice for the curious
	
	s is the equation to summate a geometric series (r + r^1+r^2+....r^x)
	P is the amount you are paying to eliminate each step
	A is the initial amount owed
	r is the rate of interest
	x is the number of steps (years,months,days ... whatever) that passes in the equation

	then algebra(equation) to solve for P
*/
function equalPaymentOfXYears(years,rate,initialAmount) {
	let increase = (1+rate);
	return initialAmount*(Math.pow(increase,years)-Math.pow(increase,years+1))/(increase-Math.pow(increase,years+1));
}
