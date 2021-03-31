<!doctype html>
<html lang="en">
<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<title>Hours Worked</title>
</head>
<body>
<?php
	//this array contains all of the errors that we find with the user data
	$err_list = Array();
	if (isset($_POST["hours"]) and $_POST["hours"] != ""){	
		//they gave us hour data, check to see if its invalid
		if (!is_numeric($_POST["hours"]) or $_POST["hours"] < 0){
			$err_list["invalid_hours"]=True;
		}
	}
	else{
		//this represents a lack of post dat
		$err_list["unset_hours"]=True;
	}

	if (isset($_POST["wage"]) and $_POST["wage"]!=""){
		if (!is_numeric($_POST["wage"]) or $_POST["wage"] < 0){
			//the wage is invalid
			$err_list["invalid_wage"] = True;
		}
	}
	else{
		//the wage is unset
		$err_list["unset_wage"] = True;
	}

	if (!empty($err_list)){
	//there are errors! die horribly after redirecting the user and telling the previous form of their failures
		$new_location = "index.php?";
		$i = 0; 

		//construct the arguments to pass to the previous form so they can alert the user what they did wrong
		foreach($err_list as $key=>$value){
			
			$new_location.=$key."=".$value;
		//only append the delimter if we are not the last item in the array			
			if ($i != sizeof($err_list)-1){ 
				$new_location.="&";
			}
			
			//add 1 to the count of the items that we have looked at
			$i++;
		}
		//add the data that the user sent to us so the previous form can be "sticky"
		if (!( isset($err_list["invalid_wage"]) or isset($err_list["unset_wage"]) )){
		//the user gave us valid wage data, so they are allowed to have it back
			$new_location.="&wage=".$_POST["wage"];
		}
		if (!(isset($err_list["invalid_hours"]) or isset($err_list["unset_hours"]))){
		//the user gave us valid hour data, they are allowed to have it back
			$new_location.="&hours=".$_POST["hours"];
		}
		
		//send the user off to the previous form
		header("Location: " . $new_location);
		//die an honerable death
		die;
	}
	//we are safe to load our valid responce

		//this banner is included in all files on the website
		include("banner.inc");
		
		//set up the pay
		$pay = 0;
		if ($_POST["hours"] > 40){
			$pay = (40+(($_POST["hours"]-40)*1.5))*$_POST["wage"];
		}
		else{
			$pay = $_POST["hours"]*$_POST["wage"];
		}	
	?>
		<div class="container">
			<div class="row">
				<div class="col-md-8 text-center" id="div-money">
					<h2>You are owed</h2>
					<p class="lead"><?php echo $pay; ?>$</p>	
				</div>
				<div class="col-md-4 text-center">	
					<a href="index.php" class="btn-lg btn-info big-button" role="button">Calculate another paycheck!</a>
					
				</div>	
			</div>
		</div>
	<!-- jQuery first, then Popper.js, then Bootstrap JS -->
	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>	
</html>
