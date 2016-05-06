<?php
include '../testDBConnection.php';

$oldName=$_GET['oldName'];
$newName=$_GET['newName'];
$picture=$_GET['picture'];


/*
$oldName='';
$newName='';
$picture=;

*/

$sql = "UPDATE Team SET Name='".$newName."', Picture=$picture WHERE Name='".$oldName."'";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}


$conn->close();

?>