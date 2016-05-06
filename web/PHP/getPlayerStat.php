<?php

include 'DBConnection.php';

$GameID= $_GET['ID'];
$team=$_GET['Team'];

$sql = "select * from Player, PlayerStat where Player.Number=PlayerStat.PlayerNumber and Player.TeamName = PlayerStat.Team and GameID=$GameID AND Team=$team;";
$result = $conn->query($sql);
$out=[];
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
	$out[]=$row;
    }
} else {
    //echo "Invalid Request";
    echo 0;
}
//===================================

echo json_encode($out);

$conn->close();
?>