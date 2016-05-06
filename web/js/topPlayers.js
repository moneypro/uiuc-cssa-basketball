function getTopScorers(){
    var req;
    if (window.XMLHttpRequest) req = new XMLHttpRequest();
    else req = new ActiveXObject("Microsoft.XMLHTTP");
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            topInfo =JSON.parse(req.responseText);
            var str="<tr><th>Team</th><th>Number</th><th>Player Name</th><th>Average Score</td></tr>";
            for(var i=0;i<topInfo.length;i++){
                var PlayerNumber =topInfo[i]['PlayerNumber'];
                var PlayerName= topInfo[i]['Name'];
                var TeamName= topInfo[i]['TeamName'];
                var Avg = topInfo[i]['AvgScore']
                str+="<tr><td>"+TeamName+"</td> <td>"+PlayerNumber+"</td><td>"+PlayerName+"</td> <td>"+Avg+"</td></tr>";
            }   
            document.getElementById('score').innerHTML=str;
        }
    };
    req.open("GET" , "./PHP/topPlayers/scoreTopPlayers.php",true);
    req.send();
};

function getTopRebounders(){
    var req;
    if (window.XMLHttpRequest) req = new XMLHttpRequest();
    else req = new ActiveXObject("Microsoft.XMLHTTP");
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            topInfo =JSON.parse(req.responseText);
            var str="<tr><th>Team</th><th>Number</th><th>Player Name</th><th>Average Rebound</td></tr>";
            for(var i=0;i<topInfo.length;i++){
                var PlayerNumber =topInfo[i]['PlayerNumber'];
                var PlayerName= topInfo[i]['Name'];
                var TeamName= topInfo[i]['TeamName'];
                var Avg = topInfo[i]['AvgRebound']
                str+="<tr><td>"+TeamName+"</td> <td>"+PlayerNumber+"</td><td>"+PlayerName+"</td> <td>"+Avg+"</td></tr>";
            }   
            document.getElementById('rebound').innerHTML=str;
        }
    };
    req.open("GET" , "./PHP/topPlayers/reboundTopPlayers.php",true);
    req.send();
};

function getTopAssisters(){
    var req;
    if (window.XMLHttpRequest) req = new XMLHttpRequest();
    else req = new ActiveXObject("Microsoft.XMLHTTP");
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            topInfo =JSON.parse(req.responseText);
            var str="<tr><th>Team</th><th>Number</th><th>Player Name</th><th>Average Assist</td></tr>";
            for(var i=0;i<topInfo.length;i++){
                var PlayerNumber =topInfo[i]['PlayerNumber'];
                var PlayerName= topInfo[i]['Name'];
                var TeamName= topInfo[i]['TeamName'];
                var Avg = topInfo[i]['AvgAssist']
                str+="<tr><td>"+TeamName+"</td> <td>"+PlayerNumber+"</td><td>"+PlayerName+"</td> <td>"+Avg+"</td></tr>";
            }   
            document.getElementById('assist').innerHTML=str;
        }
    };
    req.open("GET" , "./PHP/topPlayers/assistTopPlayers.php",true);
    req.send();
};

function getTopStealers(){
    var req;
    if (window.XMLHttpRequest) req = new XMLHttpRequest();
    else req = new ActiveXObject("Microsoft.XMLHTTP");
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            topInfo =JSON.parse(req.responseText);
            var str="<tr><th>Team</th><th>Number</th><th>Player Name</th><th>Average Steal</td></tr>";
            for(var i=0;i<topInfo.length;i++){
                var PlayerNumber =topInfo[i]['PlayerNumber'];
                var PlayerName= topInfo[i]['Name'];
                var TeamName= topInfo[i]['TeamName'];
                var Avg = topInfo[i]['AvgSteal']
                str+="<tr><td>"+TeamName+"</td> <td>"+PlayerNumber+"</td><td>"+PlayerName+"</td> <td>"+Avg+"</td></tr>";
            }   
            document.getElementById('steal').innerHTML=str;
        }
    };
    req.open("GET" , "./PHP/topPlayers/stealTopPlayers.php",true);
    req.send();
};

function getTopBlockers(){
    var req;
    if (window.XMLHttpRequest) req = new XMLHttpRequest();
    else req = new ActiveXObject("Microsoft.XMLHTTP");
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            topInfo =JSON.parse(req.responseText);
            var str="<tr><th>Team</th><th>Number</th><th>Player Name</th><th>Average Block</td></tr>";
            for(var i=0;i<topInfo.length;i++){
                var PlayerNumber =topInfo[i]['PlayerNumber'];
                var PlayerName= topInfo[i]['Name'];
                var TeamName= topInfo[i]['TeamName'];
                var Avg = topInfo[i]['AvgBlock']
                str+="<tr><td>"+TeamName+"</td> <td>"+PlayerNumber+"</td><td>"+PlayerName+"</td> <td>"+Avg+"</td></tr>";
            }   
            document.getElementById('block').innerHTML=str;
        }
    };
    req.open("GET" , "./PHP/topPlayers/blockTopPlayers.php",true);
    req.send();
};

$(document).ready(function(){
    getTopBlockers();
    getTopStealers();
    getTopAssisters();
    getTopRebounders();
    getTopScorers();
 });