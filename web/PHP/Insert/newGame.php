<?php
include '../testDBConnection.php';

$team1=$_GET['team1'];
$team2=$_GET['team2'];
$gameDate=$_GET['date'];



/*
$team1='';
$team2='';
$gameDate='0000-00-00';
*/

$sql = "INSERT INTO Game (Team1, Team2,Date)
VALUES ('".$team1."', '".$team2."','".$gameDate."')";


if ($conn->query($sql) === TRUE) {

    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();



?>