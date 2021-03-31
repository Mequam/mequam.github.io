<!DOCTYPE html>
<html>
	<head>
		<title>Dnd Character Generator</title>	
		<link rel="stylesheet" type="text/css" href="css/main.css">
		<link rel="stylesheet" type="text/css" href="css/gen.css">	
		<meta name="viewport" content="width=device-width, initial-scale=1">		
	</head>
	<body>
			<?php include("menu.html");?>
			<img src="img/rng_circle.png" width=176.75 height=176.75>
			<h1>Character Generation</h1>
		<h2>Character Generator</h2>
		<div class="grid">
			
				<div id="divName" class="divUI">
					<label for="txtName">Name:</label>
					<input type="txt" id="txtName" class="wordUI"></input>
				</div>
				<div id="divRace" class="divUI">
					<label for="txtRace">Race:</label>
					<input type="txt" id="txtRace" class="wordUI"></input>
				</div>
				<div id="divHp" class="divUI">
					<label for="numHp">HP:</label>
					<input type="number" id="numHp"></input>
				</div>	
			<ul id="stats">
			<li id="new_stat_ancor">
			</li>
			</ul>	
				<div id="statUI">	
					<form action="#" onSubmit="addNewStat(); return false">
						<label for="rolls">Roll To Set</label>
						<select id="rolls">
						</select>
						<label for="txtNewStat">New Stat</label>
						<input type="text" id="txtNewStat"></input>
						<button onClick="addNewStat()" type="button">Add New Stat!</button>
					</form>
				</div>
				<div id="charIO">
				<form>	
					<button type="button" id="btnImport" onClick="importCharicter()">Import Character!</button>
					<button type="button" id="btnExport" onClick="exportCharicter()">Export Character</button>
				</form>
				</div>

					<label for="txtHist">History</label>
					<textarea class="large-text" id="txtHist" name="txtHist" placeholder="type your charicters history here"></textarea>					
					<label for="txtInv">Inventory</label>
					<textarea class="large-text" id="txtInv" name="txtInv" placeholder="type your charicters inventory here"></textarea>		
					<label for="txtSkill">Skill</label>
					<textarea class="large-text" id="txtSkill" name="txtSkill" placeholder="type your charicters skills here"></textarea>
				
		<script src="js/parseChar.js"></script>
	</div>	
	<h2>Prebuilt Characters</h2>
	<ul id="charList">
		<li>	
			<p>
	{"stats":{"str":7,"dex":7,"con":9,"int":9,"wis":5,"cha":11},"history":"A rich dude who got bored and wanted to go adventuring. That is the only reason you are here, you were board.","inventory":"You have enough gold that you would never need to go adventuring again.","skills":"None, you have no skills, you are sad :(","name":"Kalin","race":"Human","hp":"20"}
			</p>
		</li>
			<li>
			<p>
		{"stats":{"str":12,"dex":10,"con":8,"int":15,"wis":14,"cha":9,"lightning":12},"history":"Jonny was a researcher working for an unknown organization on a product so classified not even he knew entirely what it was. This all came to head when Jonny accidentally stumbled into one of the test chambers. He woke up on the street the next day with a massive migraine and an unsettling amount of static electricity. Soon the company that he was working for came to look for him, take him back for more testing. Jonny had seen what they called testing. He wouldn't go back.","inventory":"An old watch and burner phone.","skills":"You may use your lightning stat in place of strength or dexterity for combat, in addition to this it gives \nyou access to lighting based skill checks.\n\nYou get +2d4 on biology recognition.\n\n+1 to all checks involving science.","name":"Jonny","race":"Human","hp":"10"}
			</p>
			</li>
		<li>
		<p>
{"stats":{"str":12,"dex":6,"con":14,"int":16,"wis":11,"cha":14,"Shape Shifting":10},"history":"You are a high ranking official of the Lexon people, a lizard like race dedicated to spreading socialism throughout the universe. You thought that you successfully converted earth in 1818, you were wrong. Now your back and spreading the good word of socialism once again. ","inventory":"","skills":"Shape Shifting: You may shape shift into a target entity. Difficulty is based on your familiarity with that thing and the stat is shape shifting\n+1 charisma\n+1d4 political discourse","name":"Marx","race":"Lexon","hp":"5"}
		</p>
		</li>
		<li>
		<p>
	{"stats":{"str":10,"dex":15,"con":13,"int":16,"wis":9,"cha":16},"history":"You are a cooperate spy, sent from one company to another to reveal trade secrets. Normally you get in and out with no trouble, but the last job you did found you infiltrating a strange research facility. They had security like you have never seen before! But you managed to get in any ways. It was on the way out that their was trouble. You thought you got out clean, but you were allowed to escape. When you returned home your family was gone, all that was left was a set of instructions inside of your door. You have a new employer now","inventory":"","skills":"+3d4 infiltration\n+1d4 deception\n+1 thievery ","name":"Jenny","race":"Human","hp":"12"}
		</p>
		</li>
	</ul>
</body>
</html>
