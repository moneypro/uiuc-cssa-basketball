<?php
include '../testDBConnection.php';


$name=$_GET['name'];
$team=$_GET['Team'];
$playerNumber=$_GET['PlayerNumber'];
$position=$_GET['position'];


/*
$name='';
$team='';
$playerNumber= ;
$position='';
*/

$sql = "INSERT INTO Player (Name, TeamName, Number, Position)
VALUES ('".$gameID."', '".$team."', $playerNumber,'".$position."')";

if ($conn->query($sql) === TRUE) {

    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();



?>