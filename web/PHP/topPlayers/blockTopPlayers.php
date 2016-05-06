<?php
include '../DBConnection.php';

//=========================Top Players Based on Blocks============================

$sql = "SELECT PlayerNumber, Name, TeamName, AVG(BLK) AS AvgBlock
FROM PlayerStat, Player
WHERE PlayerNumber=Number and Team = TeamName
GROUP BY PlayerNumber, TeamName
ORDER BY AvgBlock DESC
LIMIT 5;";

$TopBlock=[];
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        // echo player name, number, rank and the stat it is based on 
        $TopBlock[]=$row;
    }
} else {
    echo "0 results";
}
echo json_encode($TopBlock);




//================================================================================ 


$conn->close();



?>