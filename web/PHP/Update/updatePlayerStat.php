<?php
include '../testDBConnection.php';


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


/*
$gameID=105;
$team=NiShuoDeDui;
$playerNumber=7;
$FG=6;
$FGA=5;
$TPFG=4;
$TPFGA=3;
$FT=2;
$FTA=1;
$OREB=0;
$DREB=1;
$ASST=2;
$STL=3;
$BLK=4;
$TOVR=5;
$FOUL=6;
*/

$sql = "UPDATE PlayerStat SET FG=$FG, FGA=$FGA, TPFG=$TPFG,TPFGA=$TPFGA,FT=$FT,FTA=$FTA,OREB=$OREB,DREB=$DREB,ASST=$ASST,STL=$STL, BLK=$BLK, TOVR=$TOVR,FOUL=$FOUL WHERE gameID=$gameID AND Team='".$team."' AND PlayerNumber='".$playerNumber."'";


if ($conn->query($sql) === TRUE) {

    echo "New record updated successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();



?>