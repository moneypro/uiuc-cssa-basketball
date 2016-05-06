<!DOCTYPE html>
<html>
<body>

<?php

include 'DBConnection.php';
/*
$servername = "engr-cpanel-mysql.engr.illinois.edu";
$username = "cssabask_admin";
$password = "admin";
$dbname = "cssabask_DB";

// Create connection
$conn = new mysqli($servername , $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
//echo "Connected successfully";
*/
//--------------------------------------------------------------------- Team vs. Team

$GameID= $_GET['ID'];
$team1=$_GET['Team1'];
$team2=$_GET['Team2'];

$sql = "SELECT * FROM Game WHERE ID=$GameID";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo " " . $row["Team1"]. " vs. " . $row["Team2"]. " " . $row["Date"]. "<br>";
        echo " " . $row["Score1"]. " " . $row["Score2"]. "<br>";
    }
} else {
    //echo "Invalid Request";
}

//--------------------------------------------------------------------- Team 1 Stats

$tFG=0;
$tFGA=0;
$tTPFG=0;
$tTPFGA=0;
$tFT=0;
$tFTA=0;
$tOREB=0;
$tDREB=0;
$tASST=0;
$tSTL=0;
$tBLK=0;
$tTOVR=0;
$tFOUL=0;


//===================================


$sql = "SELECT * FROM PlayerStat WHERE GameID=$GameID AND Team=$team1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
       	
       	$tFG+=$row["FG"];
	$tFGA+=$row["FGA"];
	$tTPFG+=$row["TPFG"];
	$tTPFGA+=$row["TPFGA"];
	$tFT+=$row["FT"];
	$tFTA+=$row["FTA"];
	$tOREB+=$row["OREB"];
	$tDREB+=$row["DREB"];
	$tASST+=$row["ASST"];
	$tSTL+=$row["STL"];
	$tBLK+=$row["BLK"];
	$tTOVR+=$row["TOVR"];
	$tFOUL+=$row["FOUL"];
    }
} else {
    //echo "Invalid Request";
}
//===================================

echo "FG	FGA	TPFG	TPGFA	FT	FTA <br>";
echo "$tFG	$tFGA	$tTPFG	$tTPFGA	$tFT	$tFTA<br>";

echo "ORED	DREB	ASST	STL	BLK	TO	FOUL<br>";
echo "$tOREB	$tDREB	$tASST	$tSTL	$tBLK	$tTOVR	$tFOUL<br>";


//--------------------------------------------------------------------- Team 2 Stats

	$tFG=0;
	$tFGA=0;
	$tTPFG=0;
	$tTPFGA=0;
	$tFT=0;
	$tFTA=0;
	$tOREB=0;
	$tDREB=0;
	$tASST=0;
	$tSTL=0;
	$tBLK=0;
	$tTOVR=0;
	$tFOUL=0;
//===================================

$sql = "SELECT * FROM PlayerStat WHERE GameID=$GameID AND Team=$team2";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
       	
       	$tFG+=$row["FG"];
	$tFGA+=$row["FGA"];
	$tTPFG+=$row["TPFG"];
	$tTPFGA+=$row["TPFGA"];
	$tFT+=$row["FT"];
	$tFTA+=$row["FTA"];
	$tOREB+=$row["OREB"];
	$tDREB+=$row["DREB"];
	$tASST+=$row["ASST"];
	$tSTL+=$row["STL"];
	$tBLK+=$row["BLK"];
	$tTOVR+=$row["TOVR"];
	$tFOUL+=$row["FOUL"];
    }
} else {
    //echo "Invalid Request";
}
//===================================

echo "FG	FGA	TPFG	TPGFA	FT	FTA <br>";
echo "$tFG	$tFGA	$tTPFG	$tTPFGA	$tFT	$tFTA<br>";

echo "ORED	DREB	ASST	STL	BLK	TO	FOUL<br>";
echo "$tOREB	$tDREB	$tASST	$tSTL	$tBLK	$tTOVR	$tFOUL<br>";

//--------------------------------------------------------------------- team 1 players' stats

echo "Player Number:	FG	FGA	TPFG	TPGFA	FT	FTA	ORED	DREB	ASST	STL	BLK	TO	FOUL<br> ";

$sql = "SELECT * FROM PlayerStat WHERE GameID=$GameID AND Team=$team1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo  "" .$row["FG"]. " " .$row["FGA"]. " " .$row["TPFG"]. " " .$row["TPFGA"]. " " .$row["FT"]. " " .$row["FTA"]. " " .$row["OREB"]. " " .$row["DREB"]. " " .$row["ASST"]. " " .$row["STL"]. " " .$row["BLK"]. " " .$row["TOVR"]. " " .$row["FOUL"]."<br>";
    }
} else {
 //   echo "0 results";
}

//--------------------------------------------------------------------- team 2 players' stats

echo "Player Number:	FG	FGA	TPFG	TPGFA	FT	FTA	ORED	DREB	ASST	STL	BLK	TO	FOUL<br> ";

$sql = "SELECT * FROM PlayerStat WHERE GameID=$GameID AND Team=$team2";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo  "" .$row["FG"]. " " .$row["FGA"]. " " .$row["TPFG"]. " " .$row["TPFGA"]. " " .$row["FT"]. " " .$row["FTA"]. " " .$row["OREB"]. " " .$row["DREB"]. " " .$row["ASST"]. " " .$row["STL"]. " " .$row["BLK"]. " " .$row["TOVR"]. " " .$row["FOUL"]."<br>";
    }
} else {
   // echo "0 results";
   }

//---------------------------------------------------------------------
$conn->close();


?>
</body>
</html>