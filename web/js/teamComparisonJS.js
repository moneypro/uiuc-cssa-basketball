var gameID;
var playerreq=[];
var TeamName=[];
var getQueryString = function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return r[2]; return "";
};

var TeamStat=[{},{}];
// var Team2Stat={};

/**
  Acquire the player stat from PHP and parse them and put into the table.
*/
function playerstat(num){
  if (window.XMLHttpRequest) playerreq[num] = new XMLHttpRequest();
  else playereq[num] = new ActiveXObject("Microsoft.XMLHTTP");
  playerreq[num].onreadystatechange = function() {
    if (playerreq[num].readyState == 4 && playerreq[num].status == 200) {
      if(parseInt(playerreq[num].responseText)==0) 
        document.getElementById('playerstatinfo'+num).innerHTML="<table><tbody><tr><th>Data for "+TeamName[num]+"is not ready yet. Check it tomorrow.</th></tr></tbody></table>";
      var playerinfo =JSON.parse(playerreq[num].responseText);
      var TeamACC=0, FGACC=0, PlayerNumberACC=0, FGAACC=0, TPFGACC=0, TPFGAACC=0, FTACC=0, FTAACC=0, OREBACC=0, DREBACC=0, ASSTACC=0, STLACC=0, BLKACC=0, TOVRACC=0, FOULACC=0, PointsAcc=0, FGPACC=0, TPFGPACC=0, FTACC=0, REBACC=0;
      var str="<table><tbody><tr><th>Team</th> <th>No.</th><th>Name</th><th>PTS</th> <th>FGM</th><th>FGA</th> <th>FGP</th><th>3PM</th> <th>3PA</th><th>3PP</th> <th>FTM</th> <th>FTA</th> <th>FTP</th><th>REB</th> <th>OREB</th> <th>DREB</th> <th>ASS</th> <th>STL</th> <th>BLK</th> <th>TO</th> <th>FOUL</th> ";
      for(var i=0;i<playerinfo.length;i++){
        var Team=playerinfo[i]['Team'], FG = playerinfo[i]['FG'], PlayerNumber = playerinfo[i]['PlayerNumber'], FGA = playerinfo[i]['FGA'], TPFG = playerinfo[i]['TPFG'], TPFGA = playerinfo[i]['TPFGA'];
        var FT = playerinfo[i]['FT'], FTA = playerinfo[i]['FTA'], OREB = playerinfo[i]['OREB'], DREB = playerinfo[i]['DREB'], ASST = playerinfo[i]['ASST'],  STL = playerinfo[i]['STL'], BLK = playerinfo[i]['BLK'];
        var TOVR = playerinfo[i]['TOVR'], FOUL = playerinfo[i]['FOUL'], Name=playerinfo[i]['Name'];
        var FGP=FGA==0?"0%": parseInt(parseInt(FG)*100/parseInt(FGA))+"%";
        var TPFGP=TPFGA==0?"0%": parseInt(parseInt(TPFG)*100/parseInt(TPFGA))+"%";
        var FTP=FTA==0?"0%": parseInt(parseInt(FT)*100/parseInt(FTA))+"%";
        var REB=parseInt(OREB)+parseInt(DREB);
        var points=2*parseInt(FG)+parseInt(TPFG)+parseInt(FT);
        FGACC+=parseInt(FG);
        FGAACC+=parseInt(FGA);
        TPFGACC+=parseInt(TPFG);
        TPFGAACC+=parseInt(TPFGA);
        FTACC+=parseInt(FT);
        FTAACC+=parseInt(FTA);
        OREBACC+=parseInt(OREB);
        DREBACC+=parseInt(DREB);
        ASSTACC+=parseInt(ASST);
        STLACC+=parseInt(STL);
        BLKACC+=parseInt(BLK);
        TOVRACC+=parseInt(TOVR);
        FOULACC+=parseInt(FOUL);
        PointsAcc+=points;
        str+="<tr><td>"+Team+"</td> <td>"+PlayerNumber+"</td> <td> <a href='./playerStat.html?Team="+Team+"&Number="+PlayerNumber+"''>"+Name+"</a></td><td>"+points+"</td><td>"+FG+"</td> <td>"+FGA+"</td><td>"+FGP+"</td> <td>"+TPFG+"</td> <td>"+TPFGA+"</td><td>"+TPFGP+"</td> <td>"+FT+"</td> <td>"+FTA+"</td><td>"+FTP+"</td><td>"+REB+"</td>  <td>"+OREB+"</td> <td>"+DREB+"</td> <td>"+ASST+"</td> <td>"+STL+"</td> <td>"+BLK+"</td> <td>"+TOVR+"</td> <td>"+FOUL+"</td></tr>" ;
      }
      FGPACC=parseInt(FGACC*100/FGAACC)+"%";
      TPFGPACC=parseInt(TPFGACC*100/TPFGAACC)+"%";
      FTPACC=parseInt(FTACC*100/FTAACC)+"%";
      REBACC=OREBACC+DREBACC;
      str+="<tr><td>"+Team+"</td> <td>"+"TOTAL"+"</td> <td></td> <td>"+PointsAcc+"</td><td>"+FGACC+"</td> <td>"+FGAACC+"</td><td>"+FGPACC+"</td> <td>"+TPFGACC+"</td> <td>"+TPFGAACC+"</td><td>"+TPFGPACC+"</td> <td>"+FTACC+"</td> <td>"+FTAACC+"</td> <td>"+FTPACC+"</td><td>"+REBACC+"</td> <td>"+OREBACC+"</td> <td>"+DREBACC+"</td> <td>"+ASSTACC+"</td> <td>"+STLACC+"</td> <td>"+BLKACC+"</td> <td>"+TOVRACC+"</td> <td>"+FOULACC+"</td></tr>" ;
      str+="</tbody></table>";
      TeamStat[num]['FG']=FGACC;
      TeamStat[num]['FGA']=FGAACC;
      TeamStat[num]['TPFG']=TPFGACC;
      TeamStat[num]['TPFGA']=TPFGAACC;
      TeamStat[num]['FT']=FTACC;
      TeamStat[num]['FTA']=FTAACC;
      TeamStat[num]['OREB']=OREBACC;
      TeamStat[num]['DREB']=DREBACC;
      TeamStat[num]['ASST']=ASSTACC;
      TeamStat[num]['STL']=STLACC;
      TeamStat[num]['BLK']=BLKACC;
      TeamStat[num]['TOVR']=TOVRACC;
      TeamStat[num]['FOULACC']=FOULACC;
      document.getElementById('playerstatinfo'+num).innerHTML=str;
      if(TeamStat[0]!=undefined && TeamStat[1]!=undefined) renderComparisonChart();
    }  
  };
  playerreq[num].open("GET" , "./PHP/getPlayerStat.php?ID="+gameID+"&Team='"+TeamName[num]+"'",true);
  playerreq[num].send();
};

$(document).ready(function(){
    gameID=getQueryString("gameId");
    TeamName[0]=getQueryString("TeamName1");
    TeamName[1] = getQueryString("TeamName2");
    playerstat(0);
    playerstat(1);
 });

/**
  Possesion: 0.5 * ((Tm FGA + 0.4 * Tm FTA - 1.07 * (Tm ORB / (Tm ORB + Opp DRB)) * (Tm FGA - Tm FG) + Tm TOV) + (Opp FGA + 0.4 * Opp FTA - 1.07 * (Opp ORB / (Opp ORB + Tm DRB)) * (Opp FGA - Opp FG) + Opp TOV))
  TS%
  True Shooting Percentage; the formula is PTS / (2 * TSA). True shooting percentage is a measure of shooting efficiency that takes into account field goals, 3-point field goals, and free throws.
  TSA
  True Shooting Attempts; the formula is FGA + 0.44 * FTA.
  Usage: 100 * ((FGA + 0.44 * FTA + TOV) * (Tm MP / 5)) / (MP * (Tm FGA + 0.44 * Tm FTA + Tm TOV))
  Effective FG% (FG + 0.5 * 3P) / FGA.
*/

function possesion_helper(teamNum){
  var cur = TeamStat[teamNum];
  var opp = TeamStat[teamNum==0?1:0];
  //0.5 * ((Tm FGA + 0.4 * Tm FTA - 1.07 * (Tm ORB / (Tm ORB + Opp DRB)) * (Tm FGA - Tm FG) + Tm TOV) + (Opp FGA + 0.4 * Opp FTA - 1.07 * (Opp ORB / (Opp ORB + Tm DRB)) * (Opp FGA - Opp FG) + Opp TOV))
   return (cur.FGA+0.4*cur.FTA-1.07*(double)(cur.OREB)/(cur.OREB+opp.DREB)*(cur.FGA-cur.FG)+curr.TOVR);
}

function possesion(){
  return (possesion_helper(0)+possesion_helper(1))/2;
}

function renderComparisonChart(){
  var chart = new CanvasJS.Chart("chartContainer",
  {
    title:{
      text: "Team Comparison Chart"             
    },
    axisY:{
      title: "comparison"
    },
    animationEnabled: true,
    toolTip:{
      shared: true,
      content: "{name}: {y} - <strong>#percent%</strong>",
    },
    data:[
    {        
      type: "stackedBar100",
      showInLegend: true, 
      name: TeamName[0],
      dataPoints: renderDataPoints(TeamStat[0])
    },
    {        
      type: "stackedBar100",
      showInLegend: true, 
      name: TeamName[1],
      dataPoints: renderDataPoints(TeamStat[1])
    }  
    ]
  });
  chart.render();
}

function renderDataPoints(team){
  return [
    {y: getScore(team), label:"Score"},
    {y:getRebound(team), label:"Rebound"},
    {y:getAssist(team), label:"Assist"},
    {y:getSteal(team),label:"Steal"},
    {y:getBlock(team),label:"Block"},
    {y:getTurnover(team), label:"Turnover"},
    {y:getOffensiveRebound(team),label:"Offensive Rebound"},
    {y:getFreeThrow(team),label:"Free Throw"},
    {y:getFieldGoalPercent(team),label:"Field Goal Percent"},
    {y:getThreePointer(team),label:"Three Pointer"},
    {y:getThreePointerPercent(team),label:"Three Pointer Percent"}
  ];

}

/**
TeamStat[num]['FG']=FGACC;
TeamStat[num]['FGA']=FGAACC;
TeamStat[num]['TPFG']=TPFGACC;
TeamStat[num]['TPFGA']=TPFGAACC;
TeamStat[num]['FT']=FTACC;
TeamStat[num]['FTA']=FTAACC;
TeamStat[num]['OREB']=OREBACC;
TeamStat[num]['DREB']=DREBACC;
TeamStat[num]['ASST']=ASSTACC;
TeamStat[num]['STL']=STLACC;
TeamStat[num]['BLK']=BLKACC;
TeamStat[num]['TOVR']=TOVRACC;
TeamStat[num]['FOULACC']=FOULACC;
*/

function getScore(stat){
  return parseInt(stat.FG)*2+parseInt(stat.TPFG)+parseInt(stat.FT);
}

function getRebound(stat){
  return parseInt(stat.OREB)+parseInt(stat.DREB);
}

function getAssist(stat){
  return parseInt(stat.ASST);
}

function getSteal(stat){
  return parseInt(stat.STL);
}

function getBlock(stat){
  return parseInt(stat.BLK);
}

function getTurnover(stat){
  return parseInt(stat.TOVR);
}

function getOffensiveRebound(stat){
  return parseInt(stat.OREB);
}

function getFreeThrow(stat){
  return parseInt(stat.FT);
}

function getFieldGoalPercent(stat){
  return parseInt(stat.FG)/parseInt(stat.FGA);
}

function getThreePointer(stat){
  return parseInt(stat.TPFG);
}

function getThreePointerPercent(stat){
  return parseInt(stat.TPFG)/parseInt(stat.TPFGA);
}
