<?php 

if ($_SERVER["REQUEST_METHOD"] == "POST") {

//check that the image exists and has a valid size
	$error_list = array();
	
	if ($_FILES["picUpload"]["size"] <= 0) {
		$error_list["file_required"] = true;	
	}
 	if ($_FILES["picUpload"]["size"] > 999999){
		$error_list["size_overflow"] = true;	
	}	
	//note that the client browser tells us this mime type, it is a helpful check, but it is NOT to be trusted
	if (!($_FILES["picUpload"]["type"] == 'image/jpeg' or $_FILES["picUpload"]["type"] == "image/png")) { 
		$error_list["invalid_type"] = true;	
	}


//check that the non file uploads are working	
	if (!isset($_POST["txtName"]) or $_POST["txtName"] == "") {
		$error_list["unset_txtName"] = true;
	}
	else if (!preg_match('/^[a-zA-Z ]*$/',$_POST["txtName"])){
		$error_list["invalid_txtName"] = true;
	}
	if (!isset($_POST["txtDesc"]) or $_POST["txtDesc"] == "") {
		$error_list["unset_txtDesc"] = true;	
	}
	else if (!preg_match('/^[a-zA-Z \.\!\?,-]*$/',$_POST["txtDesc"])){	
		$error_list["invalid_txtDesc"] = true;
	}

	if (empty($error_list)) {
		//no errors occured!
		if ($_FILES["picUpload"]["type"])
		
		$recv_dir = "user_images/" . microtime() . date("m-d-Y");

		//make a unique dir to store the image AND text 
		mkdir($recv_dir); 
		
		chmod($recv_dir,0755);	

//move the file to the target destination
	//determine the name based on the type of file
		$img_name = "/image.jpg";
		if ($_FILES["picUpload"]["type"] == "image/png") {
			$img_name="/image.png";
		}
		echo $_FILES["picUpload"]["tmp_name"];
		rename($_FILES["picUpload"]["tmp_name"], $recv_dir . $img_name);
		chmod($recv_dir . $img_name,0644);	
	
		//save the description and name in there respective files
		$name_file = fopen($recv_dir . "/name.txt","w");
		fwrite($name_file,$_POST["txtName"]);
		fclose($name_file);
		chmod($recv_dir . "/name.txt",0644);
		
			
		$desc_file = fopen($recv_dir . "/desc.txt","w");
		fwrite($desc_file,$_POST["txtDesc"]);
		fclose($desc_file);
		chmod($recv_dir . "/desc.txt",0644);

		header("Location: display.php");
		exit();
	}
}

//convienence function for leaving bootstrap error alerts

function error_alert($text)
{
?>
	<div class="alert alert-danger" roll="alert"> <?php echo $text; ?> </div> 
<?php
}

?>

<!DOCTYPE html>
<html>
	<head>
		
		<title>Image Uploader</title>
		
		<!-- include bootstrap in our page for quick and easy pleasentry for the eyes, nothing too crazy -->	
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">			
	</head>
	<body class="text-center">
		<div class="container">
			<div class="row">
				<div class="col-sm">
					<div class="jumbotron">
						<h1>Highschool Image Submission</h1>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-4">
				</div>
				<div class="col-sm-3">
					<form action="index.php" method="post" class="" enctype="multipart/form-data">
						
						<div class="form-group">	
							<label class="sr-only" for="txtName">What is your name</label>	
							<input placeholder="name" 
							value="<?php
								if ($_SERVER["REQUEST_METHOD"] == "POST") {
									if (!(isset($error_list["unset_txtName"]) or isset($error_list["invalid_txtName"]))) {
										//they have been a good user and as such can get their username back
										echo $_POST["txtName"];
									}
								}
								?>"type="text" class="form-control" id="txtName" name="txtName"/>		
						<?php
							//return the error alerts for the description in case the user gives us a bad description
							if (isset($error_list["unset_txtName"])) {
								error_alert("This is a required field!");	
							}
							if (isset($error_list["invalid_txtName"])) {
								error_alert("Name contains illegal characters!");
							}
						?>
						</div>

						<div class="form-group">
							<label class="sr-only" for="txtDesc">where you are now?</label>
							<textarea placeholder="where are you now?" id="txtDesc" name="txtDesc" rows="10" class="form-control" cols="50"><?php
								if ($_SERVER["REQUEST_METHOD"] == "POST") {
									if (!(isset($error_list["unset_txtDesc"]) or isset($error_list["invalid_txtDesc"]))) {
										//they have been a good user and as such can get their username back
										echo $_POST["txtDesc"];
									}
								} 
							?></textarea>	
						<?php
							//return the error alerts for the description in case the user gives us a bad description
							if (isset($error_list["unset_txtDesc"])) {
								error_alert("This is a required field!");	
							}
							if (isset($error_list["invalid_txtDesc"])) {
								error_alert("Description contains illegal characters!");
							}
						?>
						</div>
						<div class="form-group">
							<label class="sr-only" for="picUpload">Highschool Picture</label>	
							<input type="file" class="from-control-file" id="picUpload" placeholder="Highschool Picture" name="picUpload"/>		
							<?php
								//return the error alerts for the file input if the user gives us a bad file
								if (isset($error_list["file_required"])) { 
									error_alert("This is a required field!");
								}
								else if (isset($error_list["invalid_type"])) {
									error_alert("Only jpeg and png are allowed!");
								}
								if (isset($error_list["size_overflow"])) { 
									error_alert("sorry, your file is too large!");
								}
								
							?>	
						</div>
						<button type="submit" id="btnSubmit" class="btn btn-primary btn-large" placeholder="submit picture">Submit Picture</button>
					</form>	
				</div>
				<div class="col-sm-5">
				</div>
			</div>
		</div>
		<!-- bootstrap scripts -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>	
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
	</body>
</html>
