<?php
include '../testDBConnection.php';


$team1score=$_GET['team1score'];
$team2score=$_GET['team2score'];
$gameID=$_GET['gameID'];



/*

$team1score=;
$team2score=;
$gameID=;
*/


$sql = "UPDATE Game SET Score1=$team1score, Score2=$team2score WHERE ID=$gameID";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();



?>