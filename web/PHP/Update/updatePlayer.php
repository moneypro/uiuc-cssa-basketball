<?php
include '../testDBConnection.php';



$Team=$_GET['oldTeam'];
$oldNumber=$_GET['oldNumber'];

$name=$_GET['newName'];
$newNumber=$_GET['newNumber'];
$position=$_GET['newPosition'];


/*
$Team='A';
$oldNumber='1';

$name='aa3';
$newNumber='3';
$position='p3';
*/

$sql = "UPDATE Player SET Name='".$name."', Number='".$newNumber."', Position='".$position."' WHERE TeamName='".$Team."' AND Number='".$oldNumber."'";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();



?>