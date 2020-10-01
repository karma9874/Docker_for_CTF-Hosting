<?php

$dbuser ='root';
$dbpass ='scam@123';
$dbname ="agentxer";
$host = 'safe_house_sql';
$dbname1 = "challenges";

error_reporting(0);

//mysql connections for stacked query examples.
$con1 = mysqli_connect($host,$dbuser,$dbpass);

// Check connection
if (mysqli_connect_errno())
{
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
else
{
    @mysqli_select_db($con1, $dbname) or die ( "Unable to connect to the database: $dbname");
}


?>