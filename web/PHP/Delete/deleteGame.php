<?php
include '../testDBConnection.php';



$gameID=$_GET['gameID'];

/*
$gameID=;
*/

// sql to delete a record
 $sql = "DELETE FROM Game WHERE id=$gameID";

if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . $conn->error;
}

$conn->close();

?>