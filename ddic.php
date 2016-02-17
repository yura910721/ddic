<?php
header('Access-Control-Allow-Origin: *');

$dbhost = "localhost";
$dbuser = "outuser";
$dbpass = "yura9119";
$dbname = "dictionary";
	//Connect to MySQL Server
mysql_connect($dbhost, $dbuser, $dbpass);
	//Select Database
mysql_select_db($dbname) or die(mysql_error());
	// Retrieve data from Query String
$age = $_GET['age'];

	// Escape User Input to help prevent SQL Injection
$age = mysql_real_escape_string($age);

	//build query
$query = "SELECT * FROM words WHERE word = '$age'";

	//Execute query
$qry_result = mysql_query($query) or die(mysql_error());

	//Build Result String

// Insert a new row in the table for each person returned
while($row = mysql_fetch_array($qry_result)){
	$display_string =$row['definition'];
	}
	echo $display_string;
	?>
