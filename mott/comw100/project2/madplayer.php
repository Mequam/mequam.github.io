<!DOCTYPE html>
<html lang="en">
<head>
	<title>Mad Lib Generator</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="js/madlib.js"></script>
	<link rel="stylesheet" href="./css/bootstrap.min.css">
	<link rel="stylesheet" href="./css/main.css">
</head>
<body>
	<?php include("menu.html"); ?>		
	<div class="container">
		<div class="row">
			<div class="banner col-12 backHead">	
				<div class="spacer mad"></div>	
				<h1>Mad Lib Player</h1>
			</div>
			
			<div class="content col">
				<h2>See what madlibs other people have made!</h2>
				<p>Can't quite find the madd libs you like, make one yourself!</p>
			</div>
			<div class="content col">
				<button id="btnPlay" type="button" onClick="fillWithInner('mad_in','mad_out');">PLAY!</button>
			
				<div class="mad_lib">
					<p id="mad_out"></p>
				</div>
			
			</div>	
							<div class="content creator col col-md-12">
								<h2>The madlib behind the curtain</h2>	
								<div class="mad_lib hidder">
									<p id="mad_in">
										<?php
										//randomly select a list file to read

											function getSizes($baseDir="madLibs/lst*.mll")
											{
												//this function gets the sizes of every file and the file name and returns each of them in a two dimensional array	
												//this array contains all of the file names inside the madLibs folder
												$fnames = glob($baseDir);

												//this array WILL contain the size of each file after their file name
												$fsizes = Array();

												//this will contain the sum of the size of each of the files
												$total = 0.0;
													
												foreach($fnames as $fname)
												{
													//open each file, read in the size of the file, close the file
													$file = fopen($fname,'r');
													$size = floatval(fgets($file));	
													if ($size > 0)
													{	
														//the file contains a valid size
														array_push($fsizes,Array($fname,$size));
														//incriment the total
														$total += $size; 
													/*
													  NOTE: this COULD go after the if statement, but our code is a bit
													  more robust with it here, as it gaurentees the value will be posotive
													  (which in an ideal world it should ALLWAYS be) and saves us a caclulation
													  if the value is zero.
													*/
													}
													//close the open file and move onto the next one
													fclose($file);
												}
												//place the total size of all of the files as the first element in the array
												array_unshift($fsizes,$total);
								
												return $fsizes;
											}	
											function getLib($filepath)
											{
												$open = fopen($filepath,'r');
												$lines = Array();
												while (($line = fgets($open)) !== false)
												{
													array_push($lines,$line);
												}
												fclose($open);
												//remove the first element of the array as it will contain our file length
												array_shift($lines);

												//while we could get away with using the given madlib length of the file,
												//theres not really anything gaurenteeing that that length is accurate
												//I relied on it for speed earlier, but now that we only have one file to deal with
												//we use its calculated line length for our calculations
												return $lines[mt_rand(0,sizeof($lines)-1)];							
											}	
											//NOTE: $sizes is an array whos first element is the total amount of mad lib lines in the files
											//and every proceeding element is an array where the first element is the file name, and the second one
											//is the number of mad libs in that file
											$sizes = getSizes();
												
											for ($i = 1; $i < sizeof($sizes);$i++)
											{
												//each file has chance to be picked based on the number of mad libs stored in that file
												//if we didnt do this, when there were 101 mad libs the 101th would be picked WAY more often
												//than the other 100
												if (mt_rand(1,100) <= ($sizes[$i][1]*100)/$sizes[0])
												{
					//this line contains the actual output that gets sent to the html page
													//they have passed the desired percentage check!
													//print out a random mll from that file to the screen
													echo getLib($sizes[$i][0]);
													break;
												}
												//the total number of mad libs we can pick from decreases, as we know that the current file
												//does not contain a mad lib that we want, this should gaurentee that we allways pick a file
												$sizes[0] -= $sizes[$i][1];	
											}
										?>	
									</p>
								</div>
							</div>
		</div>
	</div>
</body>
</html>
