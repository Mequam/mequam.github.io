// --- global variables ---
jQuery.noConflict();

//initilize the loans array
var loans = [
  { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
];
function saveLoansArray() {
	localStorage.setItem("loansArr",JSON.stringify(loans));	
}
function loadLoansArray() {
	if (localStorage.getItem("loansArr") === null)
		//save the existing array
		saveLoansArray();	
	else
		//load it if there is a value stored
		loans = JSON.parse(localStorage.getItem("loansArr"));
}
// if the loans array is not stored, store it
jQuery(document).ready(() => {
	//load the actual data values that we display for silly humans
	loadLoansArray();
	//display those values to said humans
	loadDoc();
});
// --- function: loadDoc() ---

//this function updates the colors of the table to appear how we want and sets event hooks,
//but DOES NOT interact with the values stored in the input elements
//that interaction is performed in loadDocValues()
function loadDoc() {
	// disable the loan inputs as necessary
	//DESING NOTE:
	//	the reason that we use loans.length + 1 is because the loans array is zero indexed
	//	BUT the labeling on the html for some reason is 1 indexed instead so we instead loop till an extra value
	//	also note that we intentionaly ignore the first display
	for(var i=2; i<loans.length+1; i++) {	
		jQuery("#loan_year0" + i).prop("disabled", true);
		jQuery("#loan_year0" + i).css("backgroundColor","gray");
		jQuery("#loan_year0" + i).css("color","white");
		jQuery("#loan_int0" + i).prop("disabled", true);
		jQuery("#loan_int0" + i).css("backgroundColor","gray");
		jQuery("#loan_int0" + i).css("color","white");	
	} // end: "for" loop
	
	//display the contents of the array
	loadDocValues();

	// all input fields: select contents on fucus
	jQuery("input[type=text]").focus(function() {
		jQuery(this).select();
		jQuery(this).css("background-color", "yellow");
	}); 
	jQuery("input[type=text]").blur(function() {
		jQuery(this).css("background-color", "white");
	});

	// set focus to first year: messes up codepen
	jQuery("#loan_year01").focus();
	jQuery("#loan_year01").blur( function() {
		//update the numeric values of the array
		updateLoansArray();
		//display the array to the screen
		loadDocValues();
	});
	jQuery("#loan_int01").blur(function () {
		updateLoansArray();
		loadDocValues();
	});
	jQuery("[id^=loan_amt0]").blur(function () {
		//update the array
		updateLoansArray();
		//load the array	
		loadDocValues();
	});
  
} // end: function loadDoc()


//this function sets the years stored in the array to be reletive to the first given year
function setFirstYear(firstYear) {	
	loans.forEach((ele,idx) => {
			loans[idx].loan_year = firstYear+idx;
		});
}

//displays a single entry from the array to the screen
/*
	DESING NOTE:
		balance is the total balance of debt to this point, and as such
		must be passed in from elsewhere as that information cannot come from a single
		entry in the array and is dependent on several

		We could theoreticaly re-calculate it up to the given index every time that it was passed in
		but that would make us do a lot of unecissary looping that we would not do otherwise
*/
function displaySingleEntry(entryIdx,bal) {
	var display_idx = entryIdx + 1;
	jQuery("#loan_year0" + display_idx).prop("value", loans[entryIdx].loan_year);	
	jQuery("#loan_amt0" + display_idx).prop("value", loans[entryIdx].loan_amount.toFixed(2));
	jQuery("#loan_int0" + display_idx).prop("value", loans[entryIdx].loan_int_rate);		
	jQuery("#loan_bal0" + display_idx).html(toComma(bal.toFixed(2)));
}

//this function sums a geometric series in the form r+r^2+r^3....r^x
const sumGeoSeries = (r,x) => (r*(1-(r**x)))/(1-r);

/*
	this function loads the numerical values into the table data
	it can effectivly be thought of as "syncing" the nice computer stored
	data for silly humans who don't like reading arrays

	DESING NOTE: 
		all of the statements from this function originaly came
		from loadDoc, however as we needed to re-display the values each time that the user
		changed the inputs, it did not make sense to update the display as well, it would just slow
		things down. So we pulled out the code from that function that actutlly did the numeric calculations
		and encapsulated it into it's own function
*/
function loadDocValues() {	
	//these variables are nothing more than syntactic sugar for the values stored in the first element of the loans array
	var defaultYear = loans[0].loan_year;
	var defaultLoanAmount = loans[0].loan_amount; 
	var defaultInterestRate = loans[0].loan_int_rate;
		
	// pre-fill defaults for other loan years
	for(var i=0; i<loans.length; i++) {
		//display the given entry
		displaySingleEntry(i,getTotalPaymentWithInterest(i));
	} // end: "for" loop
	
	//display the total interest for the loop
	
	let tpwi = getTotalPaymentWithInterest(loans.length-1); //total payment with interest	
	let tpwNi = getTotalPaymentsWithoutInterest(loans.length-1); //total payment with no interest	
	
	jQuery("#loan_int_accrued").html(strMoney((tpwi-tpwNi)));

	//display the yearly summary
	jQuery("#pmt_year01").html(loans[loans.length-1].loan_year);	
	jQuery("#pmt_amt01").html(strMoney(tpwNi));
	jQuery("#pmt_int01").html(strMoney(tpwi-tpwNi));
	jQuery("#pmt_bal01").html(strMoney(tpwi));
	
}
//syntactic sugar function because I got anoyed at writting to fixed every time I called toComma
function strMoney(n,x=2) {
	return toComma(n.toFixed(x));
}
function toComma(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//gets how much you have to pay at a given loan index when all previous loans are accounted for
function getTotalPaymentWithInterest(idx) {
	let sum = 0;
	for (let i = 0; i < idx+1 ; i++) {
		//the rate is just the rate for the loan that we are accounting
		//the amount is how much time that index has been able to grow its interest at this point
		//which is how far away it is from that index (idx-i) + 1 so we never use zero
		sum += loans[i].loan_amount*sumGeoSeries(1+loans[i].loan_int_rate,idx+1-i);	
	}
	return sum;
}
function getTotalPaymentsWithoutInterest(idx) {
	let sum = 0;
	for (let i = 0; i < idx+1;i++){
		sum += loans[i].loan_amount;
	}
	return sum;
}
//parses a number out of a string and returns zero if the number is malformated
function parseFloatZeroErr(inpTxt) {
	//this regex parses out a number that is allowed to have decimals
	/*
		^ From the begginning of the word
		[0-9]* We can have zero or more numbers
		(
			\. a dot
			[0-9]+ followed by one or more numbers
		)? What is inside of these parenthasis must be matched once, or not at all
	
		Spoken in english From the beginning of the word zero or more numbers then mabye a dot followed by 1 or more numbers	
	
		Side note I really wish that js let us write regular expresions with new lines in them like this
		we keep our code that way so it's easy to read but when we write regular expressions it's like
		our brains shut off to readability and we write all of our code in one line. Sure its convention
		but its bad convention.
	*/	
	if (!/^[0-9]*(\.[0-9]+)?$/.test(inpTxt)) {
		return 0;
	}
	return parseFloat(inpTxt);
}
//syntactic suagar that sets all interest rates to the given value
function setAllInterestRates(ir) {
	loans.forEach((ele)=>{
		ele.loan_int_rate = ir; 
	});
}
function updateLoansArray() {
	//set the first year of the loans array to be the proper value and
	//set each consecutive year
	setFirstYear(parseFloatZeroErr(jQuery("#loan_year01").val()));
	setAllInterestRates(parseFloatZeroErr(jQuery("#loan_int01").val()));	
	jQuery("[id^=loan_amt0]").each(
		(idx) => {	
			//display the actual loan amount
			loans[idx].loan_amount = parseFloatZeroErr(jQuery("#loan_amt0"+(idx+1)).val());
	});

	//save the new array to the local storage
	saveLoansArray();
}
