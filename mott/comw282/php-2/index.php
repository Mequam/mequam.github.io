<!DOCTYPE html>
<html>
	<head>
		<title>php-2</title>
		<link rel="stylesheet" type="text/css" href="report.css">
	</head>
	<body>
		<table class="equip_disp">
		
		<?php
			/*
				this function converts an array to html table data
				NOTE: the output is designed to be placed in a table, it
				does not create the table itself
			*/
			function arr2table($arr,$h1,$h2)
			{
				$line_1 = "<tr> <th>$h1</th> ";
				$line_2 = "<tr> <th>$h2</th> ";
				foreach ($arr as $key => $value)
				{
					//add the key as the left most value
					$line_1 .= "<td>$key</td>";
					$line_2 .= "<td>$value</td>";
				}
				$line_1 .= "</tr>";
				$line_2 .= "</tr>";
				
				return $line_1.$line_2;
			}

			$celTemps = Array();			
			for ($i = 0; $i <= 100;$i+=1)
			{
				//the index of this array will be the farenhight tempature
				//the value will be the celcius tempature
				$celTemps[]+=round(($i-32)*(5/9),1);
			}
			echo arr2table($celTemps,"Fahrenheit","Celcius");			
		?>
		</table>
	</body>
</html>
