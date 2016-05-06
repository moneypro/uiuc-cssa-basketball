/**
    Global variables for storing the team request and team infos.
    Team request is a XMLHTTP request, while team info is an array of objects.
    Keep track of the team infos to connect it with the function button in a dictionary.
*/
var teamreq, teaminfo;
var dict={};

/**
    Connect to the PHP file to get recent games in JSON.
*/
function getRecentGames(){
    var tempTxt="";
    var show=document.getElementById('rencentinfo');
    if (window.XMLHttpRequest) 
        teamreq = new XMLHttpRequest();
    else
        teamreq = new ActiveXObject("Microsoft.XMLHTTP");
    teamreq.onreadystatechange = function() {
        if (teamreq.readyState == 4 && teamreq.status == 200) {
            teaminfo =JSON.parse(teamreq.responseText);
            for(var i=0;i<teaminfo.length;i++){
                var ID =teaminfo[i]['ID'];
                var Team1= teaminfo[i]['Team1'];
                var score1= teaminfo[i]['Score1'];
                var Team2= teaminfo[i]['Team2'];
                var score2= teaminfo[i]['Score2'];
                var date = teaminfo[i]['Date'];
                dict[ID]=[Team1,Team2];
                tempTxt+="<button onclick='gameDetail("+ID+");'><table  style='background-color:transparent'><tbody><tr><th>"+Team1+"</th> <td>"+date+"</td><th>"+Team2+"</th> </tr>   <tr><td>"+score1+"</td> </td><td><td>"+score2+"</td></tr></tbody></table></button>";
            }   
            document.getElementById('recentinfo').innerHTML=tempTxt;
        }
    };
    teamreq.open("GET" , "./PHP/getRecentGames.php",true);
    teamreq.send();
};  

/**
    Called by the button to redirect the page to the game detail page.
*/
function gameDetail(num){
    window.location.href="./teamComparison.html?gameId="+num+"&TeamName1="+dict[num][0]+"&TeamName2="+dict[num][1];
};