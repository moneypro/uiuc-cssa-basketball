<?php
include '../testDBConnection.php';




$Team=$_GET['Team'];


/*
$Team=$_GET['Team'];
*/

// sql to delete a record
 $sql = "DELETE FROM Team WHERE Name='".$Team."'";

if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . $conn->error;
}


$conn->close();

?>