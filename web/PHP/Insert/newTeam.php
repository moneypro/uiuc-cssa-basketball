<?php
include '../testDBConnection.php';


$name=$_GET['Name'];
$picture=$_GET['picture'];


/*
$name='';
$picture=;

*/

$sql = "INSERT INTO Team (Name, Picture)
VALUES('".$name."',$picture)";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}


$conn->close();

?>