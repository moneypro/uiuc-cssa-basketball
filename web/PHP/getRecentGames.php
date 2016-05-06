<?php

include 'DBConnection.php';

$sql = "SELECT * FROM Game ORDER BY Date DESC";
$result = $conn->query($sql);
$out=[];
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
       // echo "<a href=game.php?ID=".$row["ID"]."&Team1=". $row["Team1"]. "&Team2=" . $row["Team2"]. ">". $row["Team1"]. " vs. " . $row["Team2"]. " " . $row["Date"]."</a><br>";
    	$out[]=$row;
    }
} else {
    echo "0 results";
}

echo json_encode($out);
$conn->close();



?>
