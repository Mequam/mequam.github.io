<!DOCTYPE html>
<html lang="en">
<head>
	<title>Mad Lib Generator</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="js/madlib.js"></script>
	<link rel="stylesheet" href="./css/main.css">
	<link rel="stylesheet" href="./css/bootstrap.min.css">
</head>
<body>
	<?php include("menu.html"); ?>	
	<div class="container">
		<div class="row">
			<div class="banner col-12">
				<div class='scroll'></div>	
				<h1>Mad Lib Generator</h1>
			</div>
			
			<div class="content col-lg-4 col-md-12 col-sm-12">
				<h2>Create mad libs for your friends!</h2>
				<p>Can't quite find the madd libs you like?<br> <strong>make one yourself</strong></p>
			</div>
			<div class="content info col-md-12 col-lg-7">
				<h2>Heres how it works</h2>
				<p>
					Type the text that you want to apear in your madd lib, but where you want
					people to pick a word type {} with the word type that you want for them in the
					middle! What they type will replace your {}
				</p>

				<p>
					For example if I type the following
				</p>
				<div class="code">	
					<p>
						The <em>{adjective}</em> <em>{pluaral living thing}</em> went for a lovely trip down the <em>{place}</em>, 
						where they discoverd a wild <em>{animal}</em>
					</p>
				</div>
				<p>
					The player will be asked to supply and adjictive, noun, noun and then animal and the resulting
					story will apear in the box. 
				</p>
				<p>
					For example a story for the above mad lib might look like bellow.
				</p>
				<div class="code">
					<p>
						The <em>red</em> <em>foxes</em> went for a lovely trip down the <em>forest</em>,
						where they discover a wild <em>dragon</em>
						
					</p>
				</div>

			</div>

			<div class="content creator col-lg-12">
				<h2>Your turn!</h2>
				<form method="post" action="php/save.php">
					<textarea name="madlib" id="lib_creator" class="text_maker"></textarea>	
					<button id="btnTest" onClick="fillWithInput('lib_creator','lib_tester');" type="button">Test</button>
					<button id="btnSubmit" onCLock="submit();">submit</button>
				</form>
				<div class="mad_lib">
					<p id="lib_tester">
					</p>
				</div>
			</div>
			<div class="game">
			</div>	
		
		</div>
	</div>
</body>
</html>
