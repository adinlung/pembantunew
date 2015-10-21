<?php

$host = "localhost";
$user = "busanaco_eicra";
$pass = "enteraja";
$dbName = "busanaco_eicra";
/**
 * mysql_connect($host, $user, $pass);
 * mysql_select_db($dbName)
 * or die ("Connect Failed !! : ".mysql_error());
 */
$mysqli = new mysqli($host, $user, $pass, $dbName);
if ($mysqli->connect_error) {
    die('Connect Error (' . $mysqli->connect_errno . ') '
            . $mysqli->connect_error);
}
?>