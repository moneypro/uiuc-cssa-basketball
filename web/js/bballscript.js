<script>

var game;
var show;

//function getgameinfo(num){
//   game =getgameinfo[num];
//    
//    if (window.XMLHttpRequest) {
//        gamereq = new XMLHttpRequest();
//    } else {
//        gamereq = new ActiveXObject("Microsoft.XMLHTTP");
//    };
//    gamereq .onreadystatechange = function() {
//        if (gamereq .readyState == 4 && gamereq .status == 200) {
//            var gameinfo =JSON.parse(detailreq .responseText);
//            for(var i=0;i<gameinfo.length;i++){
//                document.getElementById("classmeeting"+num).innerHTML+="<p>"+attendentinfo[i].firstname+" "+gameinfo[i].lastname+"</p>";
//               var gameid =gameinfo[i]['ID'];
//               var t1name= gameinfo[i]['Team1'];
//               var t2name= gameinfo[i]['Team2'];
//              var gamedate= gameinfo[i]['Date'];
//                //TODO:
//                show.innerHTML="<table><tr><td>"+t1name+"</td> <td>"+t2name+"</td> </tr>   <tr> </table>";
//            }
//        }
//    };
//    gamereq.open("GET" , "./tounament.php,true);
//    gamereq.send();
//};

                 
                 
var playerinfo;

                 
function playerstat(num){
    playerinfo =playerstat[num];
                 
     if (window.XMLHttpRequest) {
     playerreq = new XMLHttpRequest();
      } else {
                 playereq = new ActiveXObject("Microsoft.XMLHTTP");
                 };
                 playerreq .onreadystatechange = function() {
                 if (playereq .readyState == 4 && playereq.status == 200) {
                 var playerinfo =JSON.parse(detailreq .responseText);
                 var TeamACC=0;
                 var FGACC=0;
                 var PlayerNumberACC=0;
                 var FGAACC=0;
                 var TPFGACC=0;
                 var TPFGAACC=0;
                 var FTACC=0;
                 var FTAACC=0;
                 var OREBACC=0;
                 var DREBACC=0;
                 var ASSTACC=0;
                 var STLACC=0;
                 var BLKACC=0;
                 var TOVRACC=0;
                 var FOULACC=0;
                 var output="<table><tr><td>Team</td> <td>Number</td> <td>FG</td>FGA</td> <td>TPFG</td> <td>TPFGA</td> <td>FT</td> <td>FTA</td> <td>OREB</td> <td>DREB</td> <td>ASST</td> <td>STL</td> <td>BLK</td> <td>TOVR</td> <td>FOUL</td> ";
                 
                 for(var i=0;i<playerinfo.length;i++){
                 document.getElementById("classmeeting"+num).innerHTML+="<p>"+attendentinfo[i].firstname+" "+playerinfo[i].lastname+"</p>";
                 var Team=playerinfo[i]['Team'];
               
                 var FG = playerinfo[i]['FG'];
                 FGACC+=FG;
                 
                 var PlayerNumber = playerinfo[i]['PlayerNumber'];
               
                 
                 var FGA = playerinfo[i]['FGA'];
                 FGAACC+=FGA;
                
                 var TPFG = playerinfo[i]['TPFG'];
                 TPFGACC+=TPFG;
                 
                 var TPFGA = playerinfo[i]['TPFGA'];
                 TPFGAACC+=TPFGA;
                 
                 var FT = playerinfo[i]['FT'];
                 FTACC+=FT;
                 
                 var FTA = playerinfo[i]['FTA'];
                 FTAACC+=FTA;
                 
                 var OREB = playerinfo[i]['OREB'];
                 OREBACC+=OREB;
                 
                 var DREB = playerinfo[i]['DREB'];
                 DREBACC+=DREB;
                 
                 var ASST = playerinfo[i]['ASST'];
                 ASSTACC+=ASST;
                 
                 var STL = playerinfo[i]['STL'];
                 STLACC+=STL;
                 
                 var BLK = playerinfo[i]['BLK'];
                 BLKACC+=BLK;
                 
                 var TOVR = playerinfo[i]['TOVR'];
                 TOVRACC+=TOVR;
                 
                 var FOUL = playerinfo[i]['FOUL'];
                 FOULACC+=FOUL;
                                 //TODO:
                 str+="<tr><td>"+Team+"</td> <td>"+PlayerNumber+"</td> <td>"+FG+"</td> <td>"+FGA+"</td> <td>"+TPFGA+"</td> <td>"+FT+"</td> <td>"+FAT+"</td> <td>"+OREB+"</td> <td>"+DREB+"</td> <td>"+ASST+"</td> <td>"+STL+"</td> <td>"+BLK+"</td> <td>"+TOVR+"</td> <td>"+FOUL+"</td></tr>" ;
                 }
                 str+="<tr><td>"+Team+"</td> <td>"+"TOTAL"+"</td> <td>"+FGACC+"</td> <td>"+FGAACC+"</td> <td>"+TPFGAACC+"</td> <td>"+FTACC+"</td> <td>"+FATACC+"</td> <td>"+OREBACC+"</td> <td>"+DREBACC+"</td> <td>"+ASSTACC+"</td> <td>"+STLACC+"</td> <td>"+BLKACC+"</td> <td>"+TOVRACC+"</td> <td>"+FOULACC+"</td></tr>" ;
                 str+="</table>";
                 }
                 };
                 playerreq.open("GET" , "./tounament.php,true);
                              playerreq.send();
                              };
                               
var teaminfo;
                        
var teamreq;                                
function getTeamInfo(){
     
       if (window.XMLHttpRequest) {
            teamreq = new XMLHttpRequest();
                } else {
                teamreq = new ActiveXObject("Microsoft.XMLHTTP");
                        };
                    teamreq .onreadystatechange = function() {
                     if (teamreq .readyState == 4 && teamreq .status == 200) {
                     var teaminfo =JSON.parse(detailreq .responseText);
                     for(var i=0;i<teaminfo.length;i++){
                    document.getElementById("classmeeting"+num).innerHTML+="<p>"+attendentinfo[i].firstname+" "+teaminfo[i].lastname+"</p>";
                                var ID =teaminfo[i]['ID'];
                                var Team1= teaminfo[i]['Team1'];
                                var score1= teaminfo[i]['Score1'];
                                var Team2= teaminfo[i]['Team2'];
                                var score2= teaminfo[i]['Score2'];
                                var date = teaminfo[i]['date'];
                                
                                //TODO:
                                show.innerHTML="<table><tr><td>"+Team1+"</td> <td>"+Team2+"</td> </tr>   <tr><td>"+score1+"</td> <td>"+score2+"</td> </tr> table>";
                                }
                                }
                                };
                                teamreq.open("GET" , "./tounament.php,true);
                                             teamreq.send();
                                             };
                 
</script>