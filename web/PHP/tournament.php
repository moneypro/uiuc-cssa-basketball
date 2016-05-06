<!DOCTYPE html>
<html>
<body>

<?php
//echo "My first PHP script!<br><br>";
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
echo "Connected successfully";
*/
$sql = "SELECT * FROM Game ORDER BY Date DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<a href=game.php?ID=".$row["ID"]."&Team1=". $row["Team1"]. "&Team2=" . $row["Team2"]. ">". $row["Team1"]. " vs. " . $row["Team2"]. " " . $row["Date"]."</a><br>";
    }
} else {
    echo "0 results";
}
$conn->close();



?>
</body>
</html>
