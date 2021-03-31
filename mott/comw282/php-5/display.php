<?php


	//I don't know o-o progrmaing in php yet
	//but that does not mean that I cannot emulate it with what I do know!

	function value_exists($arr,$val) { 
		
		//when we are given an array, perform a value_exists anded accross each element of the array 
		if (is_array($val)) {
			foreach ($val as $value) {
				if (!value_exists($arr,$value)) {
					//one of the values that we were "anding" returned false, so the whole thing will return false
					return false;
				}
			}
			//everyone survived true, return true
			return true;	
		}
		else {
			//we are given a normal value, see if it exists in the array
			foreach ($arr as $value) {
				if ($value == $val){
					return true; //it exists! return true
				}
			}
			//our value does not exist any where inside of the array, return false!
			return false;
		}
	}		
	
//this function takes a directory as an argument and returns an array whos keys are image, desc ,and name with corisponding elements 
	
	function get_user($dir_name)
	{
		
		$files = scandir($dir_name);
		
//we care about wether or not its a png image, so we save this imformation for later whiler were checking things
		
		$image_name = "";
		if (value_exists($files,"image.png")){
			$image_name = $dir_name . "/image.png";
		}
		else if (value_exists($files,"image.jpg")){ //no need to check for this if we found the png
			$image_name = $dir_name . "/image.jpg";
		}

		//check image_name first so we short circut if its not been found
		if ($image_name != "" and value_exists($files,array("desc.txt","name.txt"))) {
			//we have a valid array, prepare the return "object"
			$ret_val = array();
		
			$handle = fopen($dir_name . "/desc.txt","r");
			$ret_val["desc"] = fread($handle,10000);
			fclose($handle);
			
			$handle = fopen($dir_name . "/name.txt","r");
			$ret_val["name"] = fread($handle,20);
			fclose($handle);
		
			$ret_val["img_path"] = $image_name;
			
			//store the dimmensions of the image
			$dims = getimagesize($image_name);
			$ret_val["img_width"] = $dims[0];
			$ret_val["img_height"] = $dims[1];	
			return $ret_val;
		}
		else {
			return NULL;
		}
	}

	function user_img_area($user) {
		return $user["img_width"] * $user["img_height"];
	}
	function display_user($user)
	{
		//scale the image down so it has a pre-determined area, but the same ratio
		$scale_factor = sqrt(40000/user_img_area($user));

		echo "<div class=\"user_disp\">";
		echo '<img class="user_img" src="' . $user["img_path"] . '" alt="a picture of ' . $user["name"] . '" width="' . $user["img_width"] * $scale_factor . 
		'" height="'.$user["img_height"]*$scale_factor.'">';
		echo '<h2 class="user_name">' . $user["name"] . "</h2>";
		echo '<p class="user_desc">' . $user["desc"] . '</p>';	
		echo '</div>';
	}
?>
<!DOCTYPE html>
<html>
	<head>
		<title>School Photos</title>
		<!-- bootstrap stylesheet -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
		<!-- custom stylesheet -->
		<link rel="stylesheet" href="css/main.css" type="text/css" >
	</head>
	<body>
				<div class="jumbotron"><h1>School Pictures</h1></div>
				<div id="school_photo_disp" class="text-center">
					<?php
						$arr = scandir("user_images");	
						foreach ($arr as $value) {
							if ($value != '.' and $value != '..') { //make sure we don't get triped up by the navigation directories	
								display_user(get_user('user_images/' . $value));
							}
						}
					?>
				</div>
		<!-- bootstrap javascript -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script> 
	</body>
</html>
