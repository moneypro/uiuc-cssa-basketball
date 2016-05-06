<?php
include 'DBConnection.php';

/*
$gameID=$_GET['GameId'];
$team=$_GET['Team'];
$playerNumber=$_GET['PlayerNumber'];
$FG=$_GET['FG'];
$FGA=$_GET['FGA'];
$TPFG=$_GET['TPFG'];
$TPFGA=$_GET['TPFGA'];
$FT=$_GET['FT'];
$FTA=$_GET['FTA'];
$OREB=$_GET['OREB'];
$DREB=$_GET['DREB'];
$ASST=$_GET['ASST'];
$STL=$_GET['STL'];
$BLK=$_GET['BLK'];
$TOVR=$_GET['TOVR'];
$FOUL=$_GET['FOUL'];
*/




$sql = "INSERT INTO PlayerStat (GameID, Team, PlayerNumber,FG, FGA, TPFG,TPFGA,FT,FTA,OREB,DREB,ASST,STL, BLK, TOVR,FOUL)
VALUES ($gameID, '".$team."', $playerNumber, $FG, $FGA, $TPFG, $TPFGA, $FT,$FTA, $OREB, $DREB, $ASST, $STL, $BLK, $TOVR,$FOUL)";

//VALUES ($_GET['GameId'], '$_GET['Team']', $_GET['PlayerNumber'],$_GET['FG'],$_GET['FGA'],$_GET['TPFG'],$_GET['TPFGA'],$_GET['FT'],$_GET['FTA'],$_GET['OREB'],$_GET['DREB'],$_GET['ASST'],$_GET['STL'], $_GET['BLK'], $_GET['TOVR'], $_GET['FOUL'])";

echo $sql; 

if ($conn->query($sql) === TRUE) {

    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();



?>