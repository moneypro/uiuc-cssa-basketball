<?php

include 'DBConnection.php';

$num= $_GET['Number'];
$team=$_GET['Team'];

$sql = "select * from Player, PlayerStat,Game where Player.Number=PlayerStat.PlayerNumber and Player.TeamName = PlayerStat.Team and Player.Number=$num AND Team=$team and PlayerStat.GameID=Game.ID;";
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