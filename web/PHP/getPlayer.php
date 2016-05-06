<?php

include 'DBConnection.php';

$num= $_GET['Number'];
$team=$_GET['Team'];

$sql = "select * from Player where Number=$num AND TeamName='".$team."'";
//$sql = "select * from Player where Number=1 AND TeamName='WSND'";

$result = $conn->query($sql);
$out=[];
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
	$out[]=$row;
    }
} else {
    //echo "Invalid Request";
    echo 0;
}
//===================================

echo json_encode($out);

$conn->close();
?>