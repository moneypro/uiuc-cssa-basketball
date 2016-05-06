<?php

include '../DBConnection.php';

//=========================Top Players Based on Rebounds==========================

$sql = "SELECT PlayerNumber, Name, TeamName, AVG(OREB+DREB) AS AvgRebound
FROM PlayerStat, Player
WHERE PlayerNumber=Number and Team = TeamName
GROUP BY PlayerNumber, TeamName
ORDER BY AvgRebound DESC
LIMIT 5;";

$TopRebound=[];
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        // echo player name, number, rank and the stat it is based on 
        $TopRebound[]=$row;
    }
} else {
    echo "0 results";
}
echo json_encode($TopRebound);

//================================================================================ 



$conn->close();



?>