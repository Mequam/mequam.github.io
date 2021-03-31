<!DOCTYPE html>
<html>
	<head>
		<title>strong password tester</title>
	</head>
	<body>
		<?php
			function strong_pass($pass)
			{
				return (preg_match("/[a-z]/",$pass) and preg_match("/[A-Z]/",$pass) and preg_match("/[0-9]/",$pass) 
					and preg_match("/[^a-zA-Z0-9]/",$pass) and preg_match('/^[^\s]{8,16}$/',$pass));
			}
			if (strong_pass($_POST["pass"]))
			{
				echo "<p>the password is strong with this one!</p>";
			}
			else
			{
				echo "<p>you need to make a stronger password</p>";
			}
		?>	
	</body>
</html>
