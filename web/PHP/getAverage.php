<?php

include 'DBConnection.php';


$sql = "SELECT AVG( OREB + DREB ) as AvgRebound FROM  `PlayerStat` WHERE OREB + DREB !=0";

$out;

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
	$out=$row;
    }
} else {
    //echo "Invalid Request";
    echo 0;
}
//===================================

$sql = "SELECT AVG( ASST ) AS AvgAssist FROM  `PlayerStat`  WHERE ASST !=0";

$result = $conn->query($sql);

    // output data of each row
    while($row = $result->fetch_assoc()) {
	$out = (object) array_merge((array) $out, (array) $row);
    }

//===================================

$sql = "SELECT AVG( STL ) AS AvgSteal FROM  `PlayerStat`  WHERE STL !=0";

$result = $conn->query($sql);

    // output data of each row
    while($row = $result->fetch_assoc()) {
	$out = (object) array_merge((array) $out, (array) $row);
    }

//===================================

$sql = "SELECT AVG( 2 * FG + TPFG + FT ) AS AvgScore FROM  `PlayerStat` WHERE FGA + TPFGA + FTA !=0";

$result = $conn->query($sql);

    // output data of each row
    while($row = $result->fetch_assoc()) {
	$out = (object) array_merge((array) $out, (array) $row);
    }

//===================================

$sql = "SELECT AVG( BLK ) AS AvgBlock FROM  `PlayerStat` WHERE BLK !=0";

$result = $conn->query($sql);

    // output data of each row
    while($row = $result->fetch_assoc()) {
	$out = (object) array_merge((array) $out, (array) $row);
    }

//===================================



echo json_encode($out);

$conn->close();
?>