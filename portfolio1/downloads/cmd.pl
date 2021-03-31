#!/usr/bin/perl
#the above line tells the linux bash shell that the program that understands this script is located in /usr/bin/perl
#this fact is not unique to perl, and the same thing can be done with any interpreted language in linux

#use is perls equivilent to pythons imports

#perl is very forgiving by default, this tells it to error out on alot of the edge casses the language provides
#ensuring more relyable code
use strict;
#perl doesn't warn you about code errors by default, you need to tell it to
use warnings;
#this is here for the same reason as above
use diagnostics;
#if you have more than one version of perl installed on your system this line tells perl to use the given version
use v5.16;
#say is like perls print output, except that it appends a new line by default (perl print = c++ print, per say=python print)
use feature 'say';

#lines begining with = here are examples of the syntax for a multi line comment
=begin comment
 	perl has three main variable types, scalars, arrays and hashes
 	to declare a variable place its name preceded by a special charicter indicating its type
	the special charicters are as follows:

	scalar: $
	array: @
	hash: %

	so what are these types?
	
	scalars contain single values, one and only one value. Now that value could be ANYTHING, be it a string, float, intager or any other type
	arrays contain groups of scalars that are orderd. Perl arrays are indexed at 0
	hashes contain key-value pairs similar to python dictionaries 

	In addition to this distinction perl has somthing called CONTEXT, where variables are interpreted differently depending on the context that they
	find themselfs in, for example if you try to assign an array to a scalar variable, the scalar gets assigned the length of the array

	all simple perl statements are ended with a ; and the expected = assignment of most programing languages applies
=end comment
=cut

#perl uses subroutines in place of functions, they are defined by the syntax bellow
#you will notice, they dont take arguments in ()!, instead each perl subroutine has a language
#defined array labeled @_, this array contains all of the arguments from the subroutines caller

sub counter
{
	#this function keeps track of the number of times that it is called



	#variables in perl are defined to be global by default, you can change that scope by procededing the 
	#declaration of a variable with a keyword indicating its scope

	#this variable gets the state scope, meaning it can be used inside of this function, but maintains its value (similar to c++ static)  	
 	state $count = 0;
	$count ++; #incriment the variable, same syntax as c++
}

sub getArgs {
	#this function gets arguments from the command line, and returns a hash of all of the flags followed by their arguments
 

	#my is another scope modifier, this one makes the varaible only valid in the code block it was called in (local variable in C#)
	my %argHash;
	
#the @ARGV array is a specialy defined array in perl that will allways contain the arguments passed to the program over the command line
#NOTE: ther arguments do not contain the program name

	#the shift operator pulls the left most value off of an array, removing it in the process
	
	#this code snippit pulls the left most value off of the arguments array and loads it into the local variable $i
	#when their are no more values in the array to pull off, the condition will be evaluated to false.
	

#while loops work just like C# or C++, they go until the condition evaluates to false 

#NOTE: perls equivilent of false as PERL DOES NOT HAVE BOOLEANS,
#instead specific values of other datatypes are used 0 evaluates to false '0' evalueates to false ect.
#this fact is exploited in the while loop bellow

while (my $i = shift @ARGV)
	{
		#=~ is a regex string comparison built into perl, regex could have a profesional development of its own
		#but basicaly its a standard way to match patters, the one bellow (on the right of the =~) maches any string that starts with -
		if ($i =~ m\^-\)
		{
			#store the NEXT value in the arguments into the hash
			$argHash{$i} = shift @ARGV;	
		}
	}
	#return the hash
	return %argHash;
}


#this is a subroutine to print a hash in a niceish format
sub printHash 
{
	#@_ contains the passed arguments the () on the left are used to pull scalers out of arrays with initliziation
	#my ($V0,$V21) = (0,1,2) would asign $V0 0 and $V2 1, both with scope my
	my (%hash) = @_;

	#the keys function returns an array of the keys stored in the hash
	my @keys = keys %hash;

	#the foreach loop loops through a given array	
	foreach (@keys)
	{
		#$_ contains the elements that you are looping through
		print "$_:$hash{$_}\n";	
	}
}


#this is where the subroutines definitions end

#get the arguments given to the program
my %argHash = getArgs();

#defined checks to see if a scalar is defined (NOTE: when retriving elements from a hash or array they are retrived as scalars)
if (defined $argHash{'-t'})
{ 
	#if the -t flag contains show show the time with the localtime format
	if ($argHash{'-t'} eq 'show')
	{
		#local time gets the current time in a preformated array
		#the join function joins a given array with the delimiter given as the first argument of the function
	 	say join(',' , localtime());
	}
	elsif ($argHash{'-t'} eq 'epoc')
	{
		#the time() function gets epoc time or time elapsed since a certain point
		#scalar here enforces the scalar context
		say scalar time();
	}
 
}

if (defined $argHash{'-s'})
{
	#-s means show so -s args means show args
	if ($argHash{'-s'} eq 'args')
	{
		#call the subroutine with the %argHash hash
		#NOTE: perl function calls to not require (), a list of comma seperated paramaters will sufice (although for clarity when nesting functions () are helpfull)
		printHash %argHash;	
	}
}


if (defined $argHash{'-c'})
{
	#get the top value for the for loop
	my $top = $argHash{'-c'};
		
	#NOTE: this is an interesting example of perl cotext,
	#there was no conversion from string to intager in the top variable like you would expect
	#with other command line parsing in languages, perl know that we want to use the $top scalar
	#as an intager, so it does the conversion automaticaly for us! You could test some interesting behavior by feeding it an invalid
	#numeric representation

	for (my $i = 0; $i < $top; $i++)
	{
		counter();
	}
	say counter();
}


if (defined $argHash{'-t'})
{
	#this is an example of references, perl references are scalar values that point to other perl variables, they are perls equivilent to pointers

	#to delcare a reference to a pre-existing variable you precede its name with  a \

	#in the case bellow subroutine are created with out names as references, and stored in the hash bellow 
	my %funcHash = (
		'h' => sub {say 'hello'},
		'w' => sub {say 'world'}
		);

	#use the value from the argHash as the key in the funcHash 
	$funcHash{$argHash{'-t'}}();
}

if (defined $argHash{'-f'})
{
	#this command showcases perl file formats

	
	#example of a format in perl 
	#NOTE: they care about left whitespace, spent quite a while figuring that out
	my $formatOut = 'this is an example of a perl format';

#perl formats are a way for the language to output information to the user, like forms in the real world
#they contain fields to be filled out by the preson presenting them

	format FORM_1=
------------------------
@<<<<
$formatOut
------------------------
.
	#perl formats allow you to specify a footer or a header to be printed out with the data, here we use a header
	format HEAD = 
this is an example format head
.
	
#tell the interpreter we want to write the forms to stdout 
	select STDOUT;
	
#associate our form with perls output form and our header with perls output header
	$~="FORM_1"; #these are special variables that we use to store the forms
	$^="HEAD";

#actualy write the form to the screen
	write;
}
if (defined $argHash{'-w'})
{
	#this command showcases perl file fiddling
	
	#to open a file in perl you use (among a few options) the open command, with the name of the file handle that will be created,
	#the second argument uses bash-like redirection syntax to specifiy wether the file will be opened in read,    write,    append, write+ or read+ modes
	#												    <fname   >fname >>fname     +>         +<
	
	#as a general rule of thumb if the arrows indicate the way data flows, the plus marks indicate that an additional operation can be performed than
	#the arrow indicates

	open(OUTFILE,">outfile"); #so we are creating a file handler that an write out to the file outfile
	
	#to actualy use a file you can use the print statement, followed by the file handler than the data that you want to write, with no commas!
	print OUTFILE "this is a super secret message from the illuminati\n"; 

	#close a file
	close OUTFILE;


	#make a new directory in perl, normal file path rules apply
	mkdir('example');
	#change the working directory of the program (in this case to the file we just created)
	chdir('example');
	
	#open the file in the previous directory (indicated by ..) for reading
	open(OUTFILE,"<../outfile");
	
	#open a NEW file in the current directory, for only writing
	open(CPFILE,">cpout");

	#to read from a file handler perform any operation that would return data from a variable, but place the file handlers name in place of the
	#variable and surround it with <>
	#theres an example bellow
	while (<OUTFILE>) 
	{
		#the data read in from the file is stored in the special $_ loop variable
		print CPFILE $_; #this is the same as the print command above, except were pointing the print to the NEW file
		#the end result of this loop will be to copy the first file into the second one 
	}

	#close the two files, so the system can re-use the resourses that it allocated for them
	close OUTFILE;
	close CPFILE;

	#to delete a file in perl use the unlink function with the path of the file to delete, in this case the file in the previous directory
	unlink("../outfile");
}
