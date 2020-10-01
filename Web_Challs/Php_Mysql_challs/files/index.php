<!DOCTYPE html>
<head>
<title>Safe House</title>
<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
<div class="title">
<center><h1><font color="#FF0000"> Welcome Players To My Safe House </font> </h1></center> <br> </div>
<div class="cursor"></div>
<div class="sparkle"></div>
<?php

include("conn.php");
if(isset($_GET['xer']))
{
	$id=$_GET['xer'];

	$id= blacklist($id);
	$hint=$id;

	$sql="SELECT * FROM users WHERE xer='$id' LIMIT 0,1";
	$result=mysqli_query($con1, $sql);
	$row = mysqli_fetch_array($result, MYSQLI_BOTH);
	if($row)
	{
	  	echo "<h2><font color=green>Nice Try </font>";
  	}
	else 
	{
		echo ' <h2><center>  <font color=purple> ';
		print_r(mysqli_error($con1));
		echo "</font> </h2> </center> " ;  
	}
}
else 
{ 
}
function blacklist($id)
{
	$id= preg_replace('/or/i',"", $id);		
	$id= preg_replace('/AND/i',"", $id);		
	
	return $id;
}
?>
</font> </div></br></br></br><center>
<img src="data.png" width=400px hight=200px /> 

</center> 
<script type="text/javascript" src="style.js" ></script>
</body>
</html>
