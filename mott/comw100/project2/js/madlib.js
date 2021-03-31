function safePrompt(str)
{	
	//note client side validation will not protect our users from 
	//an attacker inserting a malicious madLib ontu the server, server side code will be needed
	//for that, however this will help things on the client side,
	//and anything that makes an attackers life more difficult is good for us
	var buff = prompt(str);
	var reg = /[a-zA-Z0-9!?.]./
	while (!reg.test(buff))
	{
		buff = prompt(str);
	}
	return buff;
}
function fillMadLib(madLib) 
{
	for (var openBraket = madLib.indexOf('{'); openBraket != -1; openBraket = madLib.indexOf('{'))
	{
		var closedBraket = madLib.indexOf('}');
		
		var firstLib = madLib.substring(0,openBraket);
		var question = madLib.substring(openBraket+1,closedBraket);
		var lastLib = madLib.substring(closedBraket+1);
		
		question = safePrompt(question);
		
		madLib = firstLib + "<em class=\"mad\">" + question +"</em>"+ lastLib;
	}
	
	return madLib;
}

//this function fills a given id with the mad lib parsed contents of another id
function fillWithInput(id_raw="input",id_out="out")
{
	var libraw = document.getElementById(id_raw);
	var libout = document.getElementById(id_out);
	
	libout.innerHTML = fillMadLib(libraw.value);
}
function fillWithInner(id_raw="input",id_out="out")
{
	var libraw = document.getElementById(id_raw);
	var libout = document.getElementById(id_out);
	
	libout.innerHTML = fillMadLib(libraw.innerHTML);	
}
