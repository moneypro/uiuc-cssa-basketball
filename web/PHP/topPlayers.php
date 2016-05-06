<!DOCTYPE html>
<html>
<body>

<?php
//echo "My first PHP script!<br><br>";
include 'DBConnection.php';

//===============================================================================


//===========================Top players based on scores=========================
$sql = "SELECT PlayerNumber, Name, TeamName, AVG(2*FG+TPFG+FT) AS AvgScore
FROM PlayerStat, Player
WHERE PlayerNumber=Number
GROUP BY PlayerNumber
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


//=========================Top Players Based on Rebounds==========================

echo "<br><br>";
$sql = "SELECT PlayerNumber, Name, TeamName, AVG(OREB+DREB) AS AvgRebound
FROM PlayerStat, Player
WHERE PlayerNumber=Number
GROUP BY PlayerNumber
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


//=========================Top players based on Assist============================

echo "<br><br>";
$sql = "SELECT PlayerNumber, Name, TeamName, AVG(ASST) AS AvgAssist
FROM PlayerStat, Player
WHERE PlayerNumber=Number
GROUP BY PlayerNumber
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


//=========================Top Players Based on Steals============================
echo "<br><br>";
$sql = "SELECT PlayerNumber, Name, TeamName, AVG(STL) AS AvgSteal
FROM PlayerStat, Player
WHERE PlayerNumber=Number
GROUP BY PlayerNumber
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


//=========================Top Players Based on Blocks============================

echo "<br><br>";
$sql = "SELECT PlayerNumber, Name, TeamName, AVG(BLK) AS AvgBlock
FROM PlayerStat, Player
WHERE PlayerNumber=Number
GROUP BY PlayerNumber
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
</body>
</html>