<?php
include "connect.php";
$name= $_POST['name'];//get the nama value from form
$query = "SELECT * FROM eicra_user_profile WHERE firstName like '%$name%' "; //query to get the search result
$result = mysql_query($query) or die("Failed to connect to MySQL."); //execute the query $q

if ($result) {
	while ($r = mysql_fetch_array($result)) {
		extract ($r);
		
		echo "$firstName ($address) | $companyName <br/> $postalCode <br/><hr/><br/>";
	}
}
?>