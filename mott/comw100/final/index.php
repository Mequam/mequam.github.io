<!DOCTYPE html>
<html>
	<head>
		<title>Home</title>
		<link href="./css/bootstrap.min.css" type="text/css" rel="stylesheet">
		<link href="./css/main.css" type="text/css" rel="stylesheet">
		<meta name="viewport" content="width=device-width, initial-scale=1">	
	</head>
	<body>
			<?php include("menu.html");?>
		
		<div class="container">		
			<img src="img/twenty_sided_die.png" width=260.5 height=300>
			<h1>Tales of the dice</h1>	
			<h2>What is tales of the dice?</h2>
				<h3>A story to share!</h3>
				<p>
					Tales of the dice is a multiplayer story telling game where players work together
					to weave a tale of epic proportions. Together players scale mountains, fight dragons, discover
					planets or whatever other type of story that they want to create. <em>If this sounds interesting to
					you, read on!</em> You can find all of the games basic rules listed bellow, with links to additional
					rules that really serve to enhance out the core rule set bellow.
				</p>
			<div id="basics" class="row">
				<div class="col-sm-12">
				<h2>How does it work?</h2>
				<h3>The Basics</h3>
				<p>
					One player is selected to be the <em class="keyWord">game master</em>, think of them as the master story teller. Their
					job is to make sure that every other player knows whats going on in the story, describe whats happening, create the conflict,
					and manage the conflict resolution. In addition to all of this the <em class="keyWord">game master</em> serves as a voice
					actor for different charicters in the story, giving the other players a window into the world that the group is helping create.
				</p>
				<h3>Every One Gets to Play!</h3>
				<p>
					Becuase <em class="keyWord">game master</em> plays such a large roll in the creation of the story you might be thinking 
					
					<em class="question">I thought you said that players worked together to create the story!</em>
					
					and that is a fair thought, the <em class="keyWord">game master</em> does a lot to keep the story chugging along, but they
					don't do every thing. This is where the other players come in! It is the job of each other player to control a single star of the
					story. In the same way that the <em class="keyWord">game master</em> serves as a window into the world of the story, the players serve as a window
					into the main protagonists. Each palyer plays as the charicter that they represent! They state, as the charicter that they represent, what action that their charicter will take.
					It is then the <em class="keyWord">game master</em>s job to determine the outcome of that action. 
				</p>
			</div>	
			<div class="col-sm-12">	
					<h2 id="conflict">Conflict Resolution</h2>	
					<h3>Conflict Rolls</h3>
					<p>
						This is where the "gammy" part of the game exists. Any time that a player wants to do somthing, they roll a twenty sided 
					dice and if the dice roll is high enough for the difficulty of the action the action is successfull, 
					otherwise it fails. The observant among you might have noticed how random this process is, and you would be right. 
					</p>
					<p>
						This randomness poses a problem to the story that you and your friends are trying
					to tell. You wouldn't want Frodo Baggins to be able to stomp a giant troll to death, it just wouldn't
					make since for the narative. With the current system, this is exactly what could happen. 
					To solve this problem, we use somthing called character stats.
					</p>

					<p>
						When you create a new charicter, that charicter will have a series
					of numbers that tell you how good they are at certain things. These numbers range
					from 1 to 20 with 20 bieng the highest. <strong>In order to determine the true
					outcome of a roll, add the corisponding stat minus ten, divided by two to the roll.</strong> The result of 
					this calculation is called a <em class="keyWord">modifier</em>. 
					In this game, unless otherwise stated, <strong>allways</strong> round down when performing math.
					</p>

					<p>
						For example a charicter with a strength of 20 is almost certain to
					win an arm wrestle with a charicter who only has a strength of 1. This is because
					every time they roll a twenty sided dice, they are adding 5 ((20-10)/2) to their roll! 
					While the poor weakling that they are wresteling has to subtract 5 ((1-10)/2)! 
					</p>
				
					<h3>Continuos Resolution</h3>
					<p>
						Sometimes conflict is not resolved in a single do or die moment, instead a series of successes and failures build up
					to determine the way that the conflict resolves. This type of conflict is represented by <em class="keyWord">resolution points</em>.
					These <em class="keyWord">resolution points</em> are set up by the <em class="keyWord">game master</em> at key points of conflict in
					the story. Players can add and remove resolution points from the current resolution point value by passing conflict rolls that match
					the type of the given <em class="keyWord">resolution points</em> (If the conflict at hand tests strength, you would not want
					players to be able to pass intelegents to add to them!). If they pass they roll 1d6 and add it to the current 
					<em class="keyWord">resolution points</em>. 
					
					</p>

					<p>
							When the resolution points hit a certain posotive <em class="keyWord">success value</em>, 
						the players pass the test. Be carefull though! Just like the players can pass 
						by adding until they hit the <em class="keyWord">success value</em>, the enemies can reach a 
						negative <em class="keyWord">failure value</em> by subtracting from the <em class="keyWords">resolution points</em> 
						in the exact same way that players add to them (conflict rolls and all), but of course with 1d6 bieng subtracted from the 
						current total. The <em class="keyWord">starting value</em>, <em class="keyWord">success value</em> and 
						<em class="keyWord">failure value</em> are determined by the <em class="keyWord">game master</em>.
					</p>

					<p>
						Character genreation and <em class="keyWord">stats</em> are discussed on <a class="info_pointer">this page</a> 
					</p>
					</div>
			</div>


			<div id="example" class="row">
			<div class="col-sm-12">
			<h2>An Example</h2>
			<p>
				Its fine and dandy to try and explain all of this, but it certainly is easier to understand with an example, the following is
				an example session of tales of the dice.
			</p>
			<ul>
				<li class="dialog gm">
					<p>
					You enter into an old abbandoned house. The smell of dust and ancient things seems to linger about the air, as if the 
					house itself is growing close to death. Accross the room you see a rickety staircase, bairly held together by a mish mash
					of wooden planks. To the right of the staircase, facing into the entry way is an old yellow sofa, illuminated by the ghostly
					flickerings of an old television set letting out an uncomfortable glow of static into an other wise dark room. Strewn about 
					the sofa are hundreds of crumpled up pieces of paper, forming a small mound on top of it. 
					</p>
				</li>
				<li class="dialog player">
					<p>
						Alright, I go to look at the crumpled up pieces of paper, keeping an eye out to see if any ones home.
					</p>
				</li>
				<li class="dialog gm">
					<p>
					Ok, you move twords the pieces of paper. Opening up one of the papers you see a series of strange symbols, all eched in 
					thick, black pencil marks. So think in fact that as you take your hand away from the paper its stained by the graphite.
					Roll to see if you understand the markings on the page.
					</p>
				</li>
				<li class="player">
					<p>
						rolls an 8
					</p>
				</li>
				<li class="player dialog">
					<p>
					ok I rolled an 8, 9 with my inteligents modifier.
					</p>
				</li>
				<li class="dialog gm">
					<p>
					Ouch thats a low roll! Ok, you cant really make hides or tales of the page, but you vaugly remember seeing somthing
					similar in a text book somewhere and you think you can make out the picture of a wolf umoungst the chicken scratch, 
					but nothing else.
					</p>
				</li>
				<li class="dialog player">
					<p>
						Ok, I think im going to head upstairs now, but im gonna get my knife ready just in case. 
					</p>
				</li>
				<li class="dialog gm">
					<p>
					Alright, you begin to ascend the stair case, the old wood groaning in protest as you make your way ever upwards. Suddenly
					you hear growling coming from downstairs, theres a crashing sound and the light from the flickering TV vanishes. ...
					</p>
				</li>
			</ul>
			<p>
				Obviously this could go on for quite a while (and indeed these games often do), but that little taste serves as a nice starting
				example for what this game can be like.
			</p>
			</div>
			</div>
		</div>
	</body>
</html>
