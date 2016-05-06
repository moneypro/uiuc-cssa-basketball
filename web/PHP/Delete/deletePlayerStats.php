<?php
include '../testDBConnection.php';



$gameID=$_GET['GameId'];
$team=$_GET['Team'];
$playerNumber=$_GET['PlayerNumber'];

/*
$gameID=105;
$team=NiShuoDeDui;
$playerNumber=7;
*/

$sql = "DELETE FROM PlayerStat WHERE gameID=$gameID AND Team='".$team."' AND PlayerNumber='".$playerNumber."'";


if ($conn->query($sql) === TRUE) {

    echo "Record deleted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();



?>