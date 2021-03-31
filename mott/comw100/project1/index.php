<!DOCTYPE html>
<html lang="en">
<head>
	<title>short story generator</title>
	<meta charset="utf-8">
	<script src="js/main.js"></script>
	<link rel="stylesheet" href="./css/main.css">
</head>
<body>
	<?php include("menu.html"); ?>	
	<img src="img/quillNscroll.jpg" alt="a quill and scroll">
	<h1>Silly Short Story Generator</h1>
<div id="info">
	<h2>This is a short story generator where you and a friend take turns creating a story, word by word</h2>
	<em>what will you make?</em>

	<h2>Thems the rules</h2>
	<p>
		this is a tool to use to have fun, so however you want to play with it is
		perfectly fine! But if you want to follow a set of rules which we have found
		to be the most fun, heres a small list.<br>
		<strong><a href=#story>if you just want to skip to the game click here</a></strong>
	</p>
	
	<h3>Main rules</h3>
	<ul>
		<li>
			Two players take turns going one after the other
		</li>
		<li>
			Each one is only allowed so many words
		</li>	
		<li>
			both players take turns choosing how many words each is allowed	
		</li>
		<li>
			The two players cannot talk to eachother
		</li>
		<li>
			When finished making the story, the players should read it outloud
		</li>
	</ul>
	
	<h3>Additional rules</h3>
	<ul>
		<li>
			player 1 is trying to make the story "bad" while player two is trying to make the story "good"
		</li>
		<li>
			get a third party to vote on who wins
		</li>
	</ul>
</div>

<div id="game">
	<form onsubmit="loadValue();return false;">
		<label for="wCount">how many words can each person type per turn?</label>	
		<input id="wCount" type="number" name="wordcount" min="1" max="40">
		<br><input type="submit" value="enter number">
	</form>
	
	<p id="story" class="story"></p>

	<h4>It is <strong id="turn">Player 1</strong>'s turn</h4>
	<h4>you can only use <strong id="countLbl">3</strong> words<h4>
	<form onsubmit="addTxt();return false;">	
		<label for="textIn">Your message:</label>
		<input id="textIn" type="text" oninput="checkTxt()"><br>
		<p id="textOut"></p> <br>
		<button type="button" onclick="addTxt();">add message</button>
	</form>	
</div>	
</body>
</html>
