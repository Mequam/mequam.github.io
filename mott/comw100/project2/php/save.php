<?php


if (preg_match('/[^A-Za-z\\?\\.\\,\\!\\s\\\'0-9}{\\n\\/]/',$_POST["madlib"]) != 0)
{
	//there were illegal charicters in the madlib!
	//there shall be no xss if I can help it!
	header('Location: ../error.html');
	exit();
}

function openMll($mllNum,$basedir,$mode="r+")
{	
	return fopen($basedir . '/lst' . strval($mllNum) . '.mll',$mode);
}
		
function get_mll($basedir)
{
	//we start with mad lib list zero
	$fnum = 0;	
	//open the list for readign and writing, starting at the top
	$outfile = openMll($fnum,$basedir);
	//the first lines of these files will contain a count of the number of lines in the file
	$line_count = intval(fgets($outfile));

	//while the line count of the file that we are looking at is too large 
	while ($line_count >= 100)
	{
		//the file that we used to be looking at is too large, close it to write to another file
		fclose($outfile);
		
		//target the next file number
		$fnum += 1;		

		//if the file does not exist, make it as a valid file
		if (!file_exists($basedir . "/lst" . strval($fnum) . ".mll"))
		{
			//the file does not exist, exit the loop after initilizing it with the required values
			$outfile = openMLL($fnum,$basedir,"w");
			//initilize it with zero lines
			fwrite('0',$outfile);
			//close the file, as this function has no more use with it
			fclose($outfile);
			
			//theres no need to perform any more calculation as we just created a valid file, so return the number of that file
			return openMLL($fnum,$basedir);
		}
		
		//the file that we want to open exists, check if it has a valid file size
		$outfile = openMll($fnum,$basedir);
 
		//read the size of the lists from that file
		$line_count = intval(fgets($outfile));
		
	}
	//we found a valid file! return it after we make sure its at the beginning
	return $outfile;	
}	
	

	//get the file that we are going to work with
	$fout = get_mll("../madLibs");
	
	//store the lines of the file into memory
	$lines = array();

	fseek($fout,0);	
	while (($line = fgets($fout)) !== false)
	{	
		//load each of the lines of the file into memory
		array_push($lines,$line);
		$line = fgets($fout);
	} 	
	//incriment the number of lines that are stored in the file
	$lines[0] = strval(intval($lines[0])+1) . "\n"; 
	
	//write the lines back to the file
	fseek($fout,0);
	fwrite($fout,implode("",$lines));

	//write the new content to the file
	fseek($fout,0,SEEK_END);
	
	//pull out all of the new line charicters in our string and replace them with - placehodlers 
	$ostring=str_replace(Array("\r\n","\r","\n"),' ',$_POST["madlib"]); 		

	//write the data to the desired file
	fwrite($fout,$ostring . "\n");
	
	//redirect the end user
	header('Location: ../success.html'); 
?>
