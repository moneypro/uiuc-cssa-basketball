<?php

include 'DBConnection.php';

$oldTeamName=$_GET['oldteam'];
$oldNumber=$_GET['oldnumber'];

$newName=$_GET['newname'];
$newTeamName=$_GET['newteam'];
$newNumber=$_GET['newnumber'];
$newPosition=$_GET['newposition'];

$sql = "UPDATE Player SET Name='".$newName."', Position='".$newPosition."' WHERE TeamName='".$oldTeamName."' AND Number=$oldNumber";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}


$conn->close();



?>