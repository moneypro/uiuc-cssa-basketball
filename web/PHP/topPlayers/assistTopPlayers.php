<?php
include '../DBConnection.php';
//=========================Top players based on Assist============================

$sql = "SELECT PlayerNumber, Name, TeamName, AVG(ASST) AS AvgAssist
FROM PlayerStat, Player
WHERE PlayerNumber=Number and Team = TeamName
GROUP BY PlayerNumber, TeamName
ORDER BY AvgAssist DESC
LIMIT 5;";

$TopAsst=[];
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        // echo player name, number, rank and the stat it is based on 
        $TopAsst[]=$row;
    }
} else {
    echo "0 results";
}
echo json_encode($TopAsst);
//================================================================================  




$conn->close();



?>