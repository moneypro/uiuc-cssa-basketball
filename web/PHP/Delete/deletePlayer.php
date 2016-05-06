<?php
include '../testDBConnection.php';


$Team=$_GET['Team'];
$Number=$_GET['Number'];

/*
$Team=$_GET['Team'];
$Number=$_GET['Number'];
*/

// sql to delete a record
 $sql = "DELETE FROM Player WHERE TeamName='".$Team."' AND Number='".$Number."'";

if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . $conn->error;
}


$conn->close();

?>