#!/bin/perl
use strict;
use warnings;
use diagnostics;

use v5.16;
use feature 'say';

sub roll
{
	my ($start,$end) = @_; #load the variables from the caller

	if ($end < $start)
	{
		return -1;
	}
	return $start+int(rand(($end-$start)));
}

say <<"EOF";
This is a dice guessing game where you guess a random number that the program generates.
Written by David Kennamer as an exercise and demonstartion of perl
EOF

say "what is the lowest value the dice can roll?";
print "(start)> ";
my $start = <STDIN>;

say "what is the highest value that the dice can roll?";
print "(end)> ";
my $end = <STDIN>;

my $roll = roll($start,$end);

say "what do you think that the number is?";

print "(guess)> ";
my $guess = <STDIN>;

while ($guess != $roll)
{
	if ($guess > $roll)
	{
		print "[*] too high!\n";
	}
	elsif ($guess < $roll)	
	{
		print "[*] too low!\n";
	}
	
	print "(guess)> ";
	$guess = <STDIN>;

}
print "[*] good job!\n";
