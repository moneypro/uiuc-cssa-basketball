<?php
include '../DBConnection.php';

//=========================Top Players Based on Steals============================

$sql = "SELECT PlayerNumber, Name, TeamName, AVG(STL) AS AvgSteal
FROM PlayerStat, Player
WHERE PlayerNumber=Number and Team = TeamName
GROUP BY PlayerNumber, TeamName
ORDER BY AvgSteal DESC
LIMIT 5;";

$TopSteal=[];
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        // echo player name, number, rank and the stat it is based on 
        $TopSteal[]=$row;
    }
} else {
    echo "0 results";
}
echo json_encode($TopSteal);

//================================================================================ 

$conn->close();



?>