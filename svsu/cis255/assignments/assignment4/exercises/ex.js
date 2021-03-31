// 6. modify basic JS object, with "this" keyword
let person = {
	firstName: "Jane",
	lastName: "Doe",
	age: 45,
	fullName: function() {return this.firstName  + " " + person.lastName},

	streetAddress: "121 Elms Street",
	city: "Detroit",
	state: "MI",
	zip: 12458,
	fullAddr: function() {return this.streetAddress + "," + this.city + ", " + this.state}
}
document.getElementById("1A").innerHTML = person.fullName();
document.getElementById("1B").innerHTML = person.fullAddr();
// Instructions
// modify person object, above, as follows
// add properties, streetAddress, city, state, zipCode
// add method, fullAddress(), which prints full address on a single line.
// Display output of fullAddress() in <div id="1B">
person.streetAddress = "123 Main Street";

// ==================

// 7. create basic DOM object
let div2a = document.getElementById("2A");

//couldnt help re-writing this with my function, setting the innerHtml using chordinents
//is crazy satisfying
//create table 2 a such that the numbers displayed are woven through it
let table2a = createTableDim("table2a",3,3,(x,y,cell) => {
	cell.innerHTML = (x+1)+y*3;
	return cell;
});
//set the attributes of table 2a
table2a.setAttribute("style", "border:1px solid black;")
table2a.setAttribute("width", "100%")

//append it to div2a
div2a.appendChild(table2a);

// Instructions
// add a new function, appendTableRow5(), which adds 5-column rows instead of 3-column rows
// create a 5-row by 5-column table showing the numbers, 1 through 25
// put borders around the cells, too, not just around the edge of the table
// Display output in <div id="2B">

//appends any number of elements to a table as a row, here for demonstration purposes for the assignment
function appendTableRowsX(tbl,rowArr,appending="td") { 
	let tr = createTableRowX(rowArr,appending);
	tbl.appendChild(tr);
}
//convinence wrapper for the above function
function createTableRowX(rowArr,appending="td") { 
	let tr = document.createElement("tr");
	rowArr.forEach((ele) => {
		let td = document.createElement(appending);
		td.innerHTML = ele;
		tr.appendChild(td);
	});	
	return tr;
}
let table3b = createMultTbl("table3b",5,5);
table3b.setAttribute("style","border: 1px solid black;");
document.getElementById("2B").appendChild(table3b);

// ==================

// 8. create "totals" row and column in a table

// Instructions
// don't change table3A. it's just a template.
// Use table03A to create table3B. Create new functions as in item 2, above. 
// in table3B, add a column, "Price * Qty", and use JS to compute the correct values to put in the column
// add to table03B a "totals" row which gives the "grand total" of all numbers in the "Price * Qty" column

let tbl3a_tbod = document.getElementById("table03A").children[0];
let newTblFull = createTable("table03AMod");
let newTbl = document.createElement("tbody");
newTblFull.appendChild(newTbl);
let tbl3a_header = tbl3a_tbod.children[0] 
appendTableRowsX(newTbl,[tbl3a_header.children[0].innerHTML,
	tbl3a_header.children[1].innerHTML,
	tbl3a_header.children[2].innerHTML,
	"Price * Qty"
],"th"); 
for (let i = 1; i < tbl3a_tbod.children.length; i++) {
	let row = tbl3a_tbod.children[i]
	appendTableRowsX(newTbl,[row.children[0].innerHTML,
				row.children[1].innerHTML,
				row.children[2].innerHTML,
				parseFloat(row.children[1].innerHTML)*parseFloat(row.children[2].innerHTML)
	]);
	}
document.getElementById("3B").appendChild(newTbl);


// 9. Revise a non-object-oriented HTML form. Make it so the field in focus displays *only* its own error 
//(not the errors of all the other fields), however, if the user clicks the 
//"validate" button, then display all errors.
// code below is from: https://www.guru99.com/practical-code-examples-using-javascript.html 

function validateEmail(str) {	
	var atpos = str.indexOf("@");
	var dotpos = str.lastIndexOf(".");
	return !(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= str.length)
}
    // initialize error div id array
    var divs = new Array();
    divs[0] = "errFirst";
    divs[1] = "errLast";
    divs[2] = "errEmail";
    divs[3] = "errUid";
    divs[4] = "errPassword";
    divs[5] = "errConfirm";

function capitolize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
function validateDivWithErrOut(divName,err_msg="<span style='color:red'>Please enter your first name!</span>",
					sucess_msg="OK!",
	valid = (val) => (val != ""),prefix="") {	
	
	let validTxt = (valid(document.getElementById(prefix+divName).value) ? sucess_msg : err_msg); 
	let errDiv = document.getElementById(prefix+"err" + capitolize(divName));
	errDiv.innerHTML = validTxt;
}
//move this out of the function where the data can be acceseble from more than one location
// initialize error array
let errors = new Array();
errors[0] = "<span style='color:red'>Please enter your first name!</span>";
errors[1] = "<span style='color:red'>Please enter your last name!</span>";
errors[2] = "<span style='color:red'>Enter a valid email!</span>";
errors[3] = "<span style='color:red'>Please enter your user id!</span>";
errors[4] = "<span style='color:red'>Please enter your password!</span>";
errors[5] = "<span style='color:red'>Please confirm your password!</span>";

function validateFirstName(prefix="") {
	validateDivWithErrOut(prefix+"first",errors[0]);
}
function validateLastName(prefix="") {
	validateDivWithErrOut(prefix+"last",errors[1]);
}
function validateEmailEle(prefix="") {
	validateDivWithErrOut(prefix+"email",errors[2],"OK!",validateEmail);
}
function validateUid(prefix="") {
	validateDivWithErrOut(prefix+"uid",errors[3]);
}
function validatePassword(prefix="") {
	validateDivWithErrOut(prefix+"password",errors[4],"OK",(val) => {
				if (val == "")
					return false
				//ensure that the passwords match
				validateConf();
				return true
			});
}
function validateConf(prefix="") {
	validateDivWithErrOut(prefix+"confirm",errors[5],"OK!",
		(val) => ((val != "") && (val == document.getElementById(prefix+"password").value))
	);
}


    // function: validate() ---------------------------------------------
    function validate() {
        // initialize input array
        var inputs = new Array();
        inputs[0] = document.getElementById('first').value;
        inputs[1] = document.getElementById('last').value;
        inputs[2] = document.getElementById('email').value;
        inputs[3] = document.getElementById('uid').value;
        inputs[4] = document.getElementById('password').value;
        inputs[5] = document.getElementById('confirm').value;
        // update error array with error message
        for (i in inputs) {
            var errMessage = errors[i];
            var div = divs[i];
            if (inputs[i] == "")
                document.getElementById(div).innerHTML = errMessage;
            else if (i == 2) {
                if (!validateEmail(inputs[i]))
                    document.getElementById('errEmail').innerHTML 
                      = "<span style='color: red'>Enter a valid email address!</span>";
                else
                    document.getElementById(div).innerHTML = "OK!";
            } else if (i == 5) {
                var first = document.getElementById('password').value;
                var second = document.getElementById('confirm').value;
                if (second != first)
                    document.getElementById('errConfirm').innerHTML 
                      = "<span style='color: red'>Your passwords don't match!</span>";
                else
                    document.getElementById(div).innerHTML = "OK!";
            } else
                document.getElementById(div).innerHTML = "OK!";
        }
    }

    // function: finalValidate() ------------------------------------
    function finalValidate() {
        var count = 0;
        for (i = 0; i < 6; i++) {
            var div = divs[i];
            if (document.getElementById(div).innerHTML == "OK!")
                count = count + 1;
        }
        if (count == 6)
            document.getElementById("errFinal").innerHTML 
              = "All the data you entered is correct!!!";
    }


// 10. Create a more object-oriented form

// Step 1. Create/append the DOM object 
let form00 = document.getElementById("form00");
let table00 = createTable("table00");
form00.appendChild(table00);

// Step 2. Create an JS object array containing form info 
let formArray = [
  {label: "First name:", inputType: "text", id: "first", 
    onkeyup: "validate();", errorId: "errFirst"}, 
  {label: "Last name:",  inputType: "text", id: "last",  
    onkeyup: "validate();", errorId: "errLast" }, 
  {label: "Email:",      inputType: "text", id: "email", 
    onkeyup: "validate();", errorId: "errEmail"}, 
  {label: "User id:",    inputType: "text", id: "uid",   
    onkeyup: "validate();", errorId: "errUid"  }, 
  {label: "Password:",   inputType: "password", id: "password", 
    onkeyup: "validate();", errorId: "errPassword"}, 
  {label: "Confirm Password:", inputType: "password", id: "confirm", 
    onkeyup: "validate();", errorId: "errConfirm"}
];
function createDivId(id) {
	let div = document.createElement("div");
	div.setAttribute("id",id);
	return div;
}
function obj2ErrDiv(obj,prefix="") {
	//we could use error id here, but this method forces future users to use the 
	//propernameing scheme and allows us to write less when inputing objects
	return createDivId(prefix + "err" + capitolize(obj.id));
}
function obj2InputEle(obj,prefix="",onKeyUp=null) {
	let input = document.createElement("input");
	input.setAttribute("type",obj.inputType);
	input.setAttribute("id",prefix+obj.id);
	if (onKeyUp)
		input.onkeyup = onKeyUp;
	else
		input.setAttribute("onkeyup",obj.onkeyup);
	return input;
}
function obj2Lbl(obj,prefix="") {
	let lbl = document.createElement("label");
	lbl.setAttribute("for",prefix+obj.id);
	lbl.innerHTML = obj.label
	return lbl;
}
function obj2LblElePair(obj,prefix="") {return [obj2Lbl(obj,prefix),obj2InputEle(obj,prefix)];}

// Step 3. loop through the JS object array to populate the form

// your code here
function objList2TblFrm(lstObj,prefix) {	
	//createTableDim(id,rowLen,rowCount,hooks = (x,y,r) => r)
	return createTableDim("tbl-obj-list",3,lstObj.length,(x,y,r) => {
		if (x == 0)
			//this is where the label goes
			r.appendChild(obj2Lbl(lstObj[y],prefix));
		else if (x == 1)
			//this is where the input element goes
			r.appendChild(obj2InputEle(lstObj[y],prefix,() => {
				validateDivWithErrOut(lstObj[y].id,"<span style='color:red'>Required input!</span>","OK!",(val)=>(val != ""),prefix);
			}));
		else
			//the error box
			r.appendChild(obj2ErrDiv(lstObj[y],prefix));
		return r;
	});
}
document.getElementById("5B").append(objList2TblFrm(formArray,"objectOriented-"))
// append to tableobj a 3-column table row 
function appendTableRow3 (tableobj, col1, col2, col3) {
  // create column (table division) DOM objects
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  // insert content into columns
  td1.innerHTML = col1;
  td2.innerHTML = col2;
  td3.innerHTML = col3;
  // create table row DOM object
  let tr = document.createElement("tr");
  // append table divisions (columns) to table row
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  // append the row to the tbody element in the table
  tableobj.children[0].appendChild(tr);
}

// return a DOM object containing an empty table (with tbody element)
function createTable(id) {
  let table = document.createElement("table");
  table.setAttribute("id", id);
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);
  return table;
}
//creates a table row of a given length and allows for hooks to modify behavior
function createRowLen(len,hooks = (i,x) => x) {
	let row = document.createElement("tr");
	for (let i = 0; i < len;i+=1)
		row.appendChild(hooks(i,document.createElement("td")));
	return row;
}

//creates a table of the given dimensions and allows for hooks of the quardinent of each cell to modify behavior 
function createTableDim(id,rowLen,rowCount,hooks = (x,y,r) => r) { 
	let tbl = createTable(id);
	for (let i = 0; i < rowCount;i++) {
		//wrap the hooks function to get a new function that takes the argument count we want
		let inner_hook = (x,r) => {return hooks(x,i,r)};	
		//append the child of the createRowLen with the given hooks to the table
		tbl.children[0].appendChild(
			createRowLen(rowLen,inner_hook)
		);
	}
	return tbl;
}
function createMultTbl(id,rowLen,rowCount,style="border:2px solid black;") { 
	return createTableDim(id,rowLen,rowCount,(x,y,r) => {	
		r.innerHTML = (x+1)*(y+1);
		r.setAttribute("style",style)
		return r;
	})
}
