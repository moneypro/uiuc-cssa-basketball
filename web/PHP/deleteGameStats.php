<?php

include 'DBConnection.php';

$date= $_GET['date'];
$team=$_GET['Team'];

$sql = "DELETE FROM PlayerStat WHERE team='".$team."' AND date=$date";

if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . $conn->error;
}

$conn->close();
header('Location: http://cssabasketball.web.engr.illinois.edu/delete.html');
?>