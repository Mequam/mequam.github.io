<!doctype html>
<html lang="en">
<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

	<title>Hours Worked</title>
</head>
<body>

	<?php
		include("banner.inc");
	?>
	<div class="container">	
		<div class="row">
			<div class="col-md-8 text-center">
				<h2>Employee wage calculation</h2>
				<p>Type your hours worked and hourly wage to see your pay!
				Any time over 40 is worth time and a half!</p>
			</div>
			<div class="col-md-4" id="col-form">
				<form action="PayCheck.php" method="post">
					<div class="form-group">
						<label for="txtHours" class="form-text">Hours Worked</label>
						<input id="txtHours" type="text" class="form-control" name="hours"
						<?php 
							if (isset($_GET["hours"]) and preg_match("/[0-9]/",$_GET["hours"])){ //make sure to regex to check for xxs attack
								echo "value=\"".$_GET["hours"].'"';
							}
						?>>
						<?php
							if ($_GET["invalid_hours"]==1)
							{
						?>
								<div class="alert alert-danger">Hours must be posative numbers!</div>
						<?php  
							}
							else if ($_GET["unset_hours"]==1)
							{ 
						?> 
								<div class="alert alert-danger">Hours are required in the form!</div>
						<?php		
							}
						?>
					</div>
					<div class="form-group">
						<label class="form-text" for="txtWage">Hourly Wage</label>
						<input id="txtWage" type="text" class="form-control" name="wage"
						<?php 
							if (isset($_GET["wage"]) and preg_match("/[0-9]/",$_GET["wage"])){ //make sure to regex to check for xxs attack
								echo "value=\"".$_GET["wage"].'"';
							}
						?>>
						<?php
							if ($_GET["invalid_wage"]==1)
							{
						?>
								<div class="alert alert-danger">Wage must be a number greater than 0! (NO '$'!)</div>
						<?php  
							}
							else if ($_GET["unset_wage"]==1)
							{ 
						?> 
								<div class="alert alert-danger">Wage is required in the form!</div>
						<?php		
							}
						?>
					
					</div>
					<div class="form-group">
						<button type="Submit" class="btn btn-primary btn-lg" id="btnSub">Click to see wage!</button>
					</div>
				</form>
			</div>
		</div>
	</div>	

	
	
	<!-- jQuery first, then Popper.js, then Bootstrap JS -->
	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>
