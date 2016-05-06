<?php
//echo "My first PHP script!<br><br>";
include '../DBConnection.php';

//===========================Top players based on scores=========================
$sql = "SELECT PlayerNumber, Name, TeamName, AVG(2*FG+TPFG+FT) AS AvgScore
FROM PlayerStat, Player
WHERE PlayerNumber=Number and Team = TeamName and GameId<=47
GROUP BY PlayerNumber, TeamName
ORDER BY AvgScore DESC
LIMIT 5;";

$TopScore=[];
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        // echo player name, number, rank and the stat it is based on 
        $TopScore[]=$row;
    }
} else {
    echo "0 results";
}
echo json_encode($TopScore);

//================================================================================ 



$conn->close();



?>