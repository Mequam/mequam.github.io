<!DOCTYPE html>
<html>
	<head>
		<title>Species Generation Rules</title>
		<link type="text/css" href="./css/bootstrap.min.css" rel="stylesheet">	
		<link type="text/css" href="./css/main.css" rel="stylesheet">
		<meta name="viewport" content="width=device-width, initial-scale=1">	
	</head>
	<body>
		<?php include("menu.html"); ?>
		<div class="container">
			<img src="img/species_word_art.png" width="353.5" height="353.5">
			<h1>Species Generation</h1>	
			<div class="row">
				<div class="col-sm-12">
				<h2>Rule Zero</h2>
				<p>
						Every charicter has a species. Be it the tiny Hobbits of middle earth, the brutish Grinneer of space, or just us plain old humans.
					These species affect the average charicteristics of those that have them. For example you would not expect a hobbit to be able to easily defeat a giant
					troll! Are there exceptions? Of course! Sure there might be a mighty hobbit who felled a giant troll, but <em>on average</em> hobbits tend
					to have reletivly low strength.
				</p>

				<p>
						The first thing to do when creating a new species is to determine what you want the traits of the species to be.
					This is the least mechanicaly involved aspect of the generation process, but it is no less important. This is the step
					that can make or break your species. Yes the mechanics of the game are important, but thats not why you play it! You don't
					play as a +2 to charisma and -2 to wisdom, instead you play as a seductive devil like species, with a tendency for self 
					destruction and impulsivness. So while most of this rule set will focus on the numbers that affect conflict resolution,
					do NOT assume that this is the most important part of racial generation. Make sure that you create a race whose 
					<em>concept</em> you think is interesting and fun to play! 
				</p>
			<p class="note">
						A word to the wise here, make sure that your race can contribute to the story at hand. You wouldn't want to play a 
				race of amorphis blobs that cannot talk to any of the other merry adventurers that are inside of your story with you. Make sure
				that you can interact with the other charicters! Or if you think that such a concept would be fun, make sure that the other players
				and your <em class="keyWord">game master</em> are ok with such your concept.
			</p>
			</div>
		</div>
			<div class="row">
				<div class="col-sm-12">
				<h2>The Mechanics</h2>
				<h3>Basics</h3>
				<p>
						So how do we represent the fact that <em>most</em> hobbits have a low strength. Well we can think of the race as a 
					modifier in addition to the base stats that a charicter represents. So all hobbits might have 1d4 subtracted from their
					strength, or all trolls might have 1d4 added to them.
				</p>
				
				<p>
					All species are represented mechanicaly in the same way that charicter skills are represented. Each species has the
				exact same type of <em>"skills"</em> that characters have, referd to as traits henceforth, each charicter of that species inherits
				those traits, and adds them to the skills that the charicter has. While mechanicaly traits have the same effect on chariacters
				as skills, they are generated in a completly different manner.
				</p>
				<h3>Generation</h3>
				<p>
						Just like you purchase skills with experience you purchase their corisponding traits with 
					<em class="keyWord">species points</em>. The difference is unlike in charicter generation you start off with zero
					<em class="keyWord">species points</em>, in order to gain more, <strong>you have to get a negative trait</strong>. 
					These are traits that will hinder your characters ability to perform certain options, they are mechanicaly the 
					same as the normal skills from character generation, with the exception that their benifits are subtracted 
					from the charicter and their respective costs are added instead. Characters with zero <em class="keyWord">species points</em>
					are conciderd human, unless otherwise stated. 
				</p>
			<h3>Trait Reference</h3>
			<table>	
					<tr><th>name</th><th>description</th><th>skill category</th><th>cost</th></tr>
					<tr>
						<td>The 4 Sider'</td>
						<td class="skillRule">
							When performing your chosen skill, you may add and additional 1d4 to the conflict resolution roll.
						</td>
						<td>specific</td>
						<td>1 xp</td>	
					</tr>
					<tr>
						<td>The Dice-Do-Over</td>
						<td class="skillRule">
							When performing your chosen specific skill, you may gain 1 advantage.
						</td>
						<td>specific</td>
						<td>1 xp</td>
					</tr>
					<tr>
						<td>The Die-Fudger</td>
						<td class="skillRule">
							When performing a skill within your chosen broad skill, you may add 1 to the die roll.
						</td>
						<td>broad</td>
						<td>2 xp</td>
					</tr>
					<tr>
						<td>The Odd Ball</td>
						<td class="skillRule">
							You have access to a very specialized skill that would normaly be far to difficult for a normal dice
							roll or simply does not fit the scope of what is normaly possible. 	
						</td>
						<td>N/A Specific where possible</td>
						<td>3 xp</td>
					</tr>
			</table>	
			</div>
			</div>
		</div>
	</body>
</html>		
