var getQueryString = function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return r[2]; return "";
};

/**
  Acquire the player stat from PHP and parse them and put into the table.
*/
var playerChartStat={};
function playerstat(teamName, playerNumber){
  if (window.XMLHttpRequest) playerreq = new XMLHttpRequest();
  else playereq = new ActiveXObject("Microsoft.XMLHTTP");
  playerreq.onreadystatechange = function() {
    if (playerreq.readyState == 4 && playerreq.status == 200) {
      if(parseInt(playerreq.responseText)==0) 
        document.getElementById('playerstatinfo').innerHTML="<table><tbody><tr><th>Data for "+teamName+" No."+playerNumber+" is not ready yet. Check it tomorrow.</th></tr></tbody></table>";
      var playerinfo =JSON.parse(playerreq.responseText);
      var Name, Position;
      var FGACC=0, FGAACC=0, TPFGACC=0, TPFGAACC=0, FTACC=0, FTAACC=0, OREBACC=0, DREBACC=0, ASSTACC=0, STLACC=0, BLKACC=0, TOVRACC=0, FOULACC=0, PointsAcc=0, FGPACC=0, TPFGPACC=0, FTACC=0, REBACC=0;
      var str="<table><tbody><tr><th>VS</th> <th>On </th><th>PTS</th> <th>FGM</th><th>FGA</th> <th>FGP</th><th>3PM</th> <th>3PA</th><th>3PP</th> <th>FTM</th> <th>FTA</th> <th>FTP</th><th>REB</th> <th>OREB</th> <th>DREB</th> <th>ASS</th> <th>STL</th> <th>BLK</th> <th>TO</th> <th>FOUL</th> ";
      for(var i=0;i<playerinfo.length;i++){
       var Team=playerinfo[i]['Team'];
       var Team1 = playerinfo[i]['Team1'];
       var Team2 =playerinfo[i]['Team2'];
       if (String(Team)==String(Team2)) Team=Team1;
       else Team = Team2;
       var time = playerinfo[i]['Date'];
       var FG = playerinfo[i]['FG'];
       var PlayerNumber = playerinfo[i]['PlayerNumber'];
       var FGA = playerinfo[i]['FGA'];
       var FGP=FGA==0?"0%": parseInt(parseInt(FG)*100/parseInt(FGA))+"%";
       var TPFG = playerinfo[i]['TPFG'];
       var TPFGA = playerinfo[i]['TPFGA'];
       var TPFGP=TPFGA==0?"0%": parseInt(parseInt(TPFG)*100/parseInt(TPFGA))+"%";
       var FT = playerinfo[i]['FT'];
       var FTA = playerinfo[i]['FTA'];
       var FTP=FTA==0?"0%": parseInt(parseInt(FT)*100/parseInt(FTA))+"%";
       var OREB = playerinfo[i]['OREB'];
       var DREB = playerinfo[i]['DREB'];
       var REB=parseInt(OREB)+parseInt(DREB);
       var ASST = playerinfo[i]['ASST'];
       var STL = playerinfo[i]['STL'];
       var BLK = playerinfo[i]['BLK'];
       var TOVR = playerinfo[i]['TOVR'];
       var FOUL = playerinfo[i]['FOUL'];
       Name=playerinfo[i]['Name'];
       Position=playerinfo[i]['Position'];
       var points=2*parseInt(FG)+parseInt(TPFG)+parseInt(FT);
       FGACC+=parseInt(FG);
       TPFGACC+=parseInt(TPFG);
       FTACC+=parseInt(FT);
       OREBACC+=parseInt(OREB);
       DREBACC+=parseInt(DREB);
       ASSTACC+=parseInt(ASST);
       STLACC+=parseInt(STL);
       BLKACC+=parseInt(BLK);
       str+="<tr><td>"+Team+"</td> <td>"+time+"</td> <td>"+points+"</td><td>"+FG+"</td> <td>"+FGA+"</td><td>"+FGP+"</td> <td>"+TPFG+"</td> <td>"+TPFGA+"</td><td>"+TPFGP+"</td> <td>"+FT+"</td> <td>"+FTA+"</td><td>"+FTP+"</td><td>"+REB+"</td>  <td>"+OREB+"</td> <td>"+DREB+"</td> <td>"+ASST+"</td> <td>"+STL+"</td> <td>"+BLK+"</td> <td>"+TOVR+"</td> <td>"+FOUL+"</td></tr>" ;
      }
      str+="</tbody></table>";
      document.getElementById('playerstatinfo').innerHTML=str;
      document.getElementById('name').innerHTML=Name;
      document.getElementById('team').innerHTML=teamName;
      document.getElementById('number').innerHTML=playerNumber;
      document.getElementById('position').innerHTML=Position;
      playerChartStat['FGACC']=FGACC;
      playerChartStat['TPFGACC']=TPFGACC;
      playerChartStat['FTACC']=FTACC;
      playerChartStat['OREBACC']=OREBACC;
      playerChartStat['DREBACC']=DREBACC;
      playerChartStat['ASSTACC']=ASSTACC;
      playerChartStat['STLACC']=STLACC;
      playerChartStat['BLKACC']=BLKACC;
      playerChartStat['Games']=playerinfo.length;
      reqDraw(playerinfo);
    }  
  };
  playerreq.open("GET" , "./PHP/getPlayerStatByPlayer.php?Team='"+teamName+"'&Number="+playerNumber,true);
  playerreq.send();
};

$(document).ready(function(){
    var teamName=getQueryString("Team");
    var playerNumber = getQueryString("Number");
    playerstat(teamName, playerNumber);
 });

// var avgReq;
//   avgReq = jQuery.getJSON("http://web.engr.illinois.edu/~hcheng17/cssabasketball/PHP/getAverage.php").done = function() {
//     console.log(avgReq.readyState);
//     console.log(avgReq.status);
//     // if (avgReq.readyState == 4 && avgReq.status == 200) 
//       drawChart(JSON.parse(avgReq.responseText));
//   };

// (function() {
//   var avgURL = "http://web.engr.illinois.edu/~hcheng17/cssabasketball/PHP/getAverage.php";
//   $.getJSON( avgURL, {
//     tags: "mount rainier",
//     tagmode: "any",
//     format: "json"
//   })
//     .done(function(data){
//       drawChart(JSON.parse(data));
//     });
// })();

function reqDraw(playerinfo){
  if (window.XMLHttpRequest) avgreq = new XMLHttpRequest();
  else avgreq = new ActiveXObject("Microsoft.XMLHTTP");
  avgreq.onreadystatechange = function() {
    if (avgreq.readyState == 4 && avgreq.status == 200) {
        drawChart(playerinfo, JSON.parse(avgreq.responseText));
      }
    }  

  avgreq.open("GET" , "http://web.engr.illinois.edu/~hcheng17/cssabasketball/PHP/getAverage.php",true);
  avgreq.send();
};

function drawChart(playerinfo, avg){
  drawPieChart(avg);
  drawColumnChart(avg);
  drawTrendChart(playerinfo);
}

function drawPieChart(avg){
  console.log(avg);
  console.log(getScore() / avg.AvgScore);
  var chart = new CanvasJS.Chart("chartContainer1",
  {
    title:{
      text: "Disposition"
    },
    legend: {
      maxWidth: 350,
      itemWidth: 120
    },
    data: [
    {
      type: "pie",
      showInLegend: true,
      legendText: "{indexLabel}",
      dataPoints: [
        { y: getScore() / avg.AvgScore, indexLabel: "Score" },
        { y: getRebound() / avg.AvgRebound, indexLabel: "Rebound" },
        { y: getAssist() / avg.AvgAssist, indexLabel: "Assist" },
        { y: getBlock() / avg.AvgBlock, indexLabel: "Block"},
        // { y: avg.AvgScore, indexLabel: "Three Pointer" },
        // { y: avg.AvgScore, indexLabel: "Free Throw" },
        { y: getSteal() / avg.AvgSteal, indexLabel: "Steal"}
      ]
    }
    ]
  });
  chart.render();
}

function drawColumnChart(avg){
  var chart = new CanvasJS.Chart("chartContainer2",
    {
      title:{
        text: "Rating"
      },
      axisY:{
        maximum:4
      },
      data: [
      {
        dataPoints: [
        { x: 10, y: getScore() / avg.AvgScore, label: "Score"},
        { x: 20, y: getRebound() / avg.AvgRebound,  label: "Rebound"},
        { x: 30, y: getAssist(),  label: "Assist"},
        { x: 40, y: getSteal() / avg.AvgSteal,  label: "Steal"},
        { x: 50, y: getBlock() / avg.AvgBlock,  label: "Block"}
        ]
      },
        {        
        type: "line",
        dataPoints: [
        { x: 10, y: 1, label: "Average" },
        { x: 20, y: 1, label: "Average" },
        { x: 30, y: 1 , label: "Average"},
        { x: 40, y: 1 , label: "Average"},
        { x: 50, y: 1 , label: "Average"}
        ]
        }
      ]
    });
    chart.render();
}

function drawTrendChart(playerinfo){
  var scoreTrend=[];
  var reboundTrend=[];
  var assistTrend=[];
  var stealTrend=[];
  var blockTrend=[];
  for (var i = 0; i < playerinfo.length; i++) {
    var Team=playerinfo[i]['Team'];
    var Team1 = playerinfo[i]['Team1'];
    var Team2 =playerinfo[i]['Team2'];
    if (String(Team)==String(Team2)) Team=Team1;
    else Team = Team2;
    scoreTrend.push({x:i, y: parseInt(playerinfo[i].FG*2)+parseInt(playerinfo[i].TPFG)+parseInt(playerinfo[i].FT), label:"Score"});
    reboundTrend.push({x:i, y: parseInt(playerinfo[i].REB), label:"Rebound"});
    assistTrend.push({x:i, y: parseInt(playerinfo[i].ASST), label:"Assist"});
    stealTrend.push({x:i, y: parseInt(playerinfo[i].STL), label:"Steal"});
    blockTrend.push({x:i, y: parseInt(playerinfo[i].BLK), label:"Block"});
  };
  console.log(scoreTrend);

  var chart = new CanvasJS.Chart("chartContainer3",
    {
      title:{
        text: "Trend"
      },
      axisY:{
        //maximum:4
      },
      data: [
      {
        type:"line",
        showInLegend: true,
        legendText: "Score",
        dataPoints: scoreTrend
      },
      {        
      type: "line",
      showInLegend: true,
      legendText: "Rebound",
      dataPoints: reboundTrend
      },
      {        
      type: "line",
      showInLegend: true,
      legendText: "Assist",
      dataPoints: assistTrend
      },
      {        
      type: "line",
      showInLegend: true,
      legendText: "Steal",
      dataPoints: stealTrend
      },
      {        
      type: "line",
      showInLegend: true,
      legendText: "Block",
      dataPoints: blockTrend
      }
      ]
    });
  // chart.options.data[0]. dataPoints = scoreTrend;
    chart.render();
}

function getScore(){
  return (playerChartStat.FGACC*2+playerChartStat.TPFGACC+playerChartStat.FTACC)/playerChartStat['Games'];
}

function getRebound(){
  return (playerChartStat.OREBACC+playerChartStat.DREBACC)/playerChartStat['Games'];
}

function getAssist(){
  return playerChartStat.ASSTACC/playerChartStat['Games'];
}

function getSteal(){
  return playerChartStat.STLACC/playerChartStat['Games'];
}

function getBlock(){
  return playerChartStat.BLKACC/playerChartStat['Games'];
}