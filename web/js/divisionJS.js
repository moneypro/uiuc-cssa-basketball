/**
  A function to fulfill the table with the data in arrays.
*/

function insertText(){
  var groupA=["GYZers","PHD","ChiXinJueDui","NiShuodeDui","GUTS","MARS"];
  var groupB=["Baby Chinam","Splash","SPA","Why Not","Big Totoros","Empire Taste"];
  var groupC=["WSND","GGDaDaDer","Black Jack","Redeemers 2.0","Eastern Knights","Gou(Dog)"];
  var groupAScore=[5,4,3,2,1,0];
  var groupBScore=[5,4,3,2,1,0];
  var groupCScore=[5,4,3,2,1,0];
  var groupAWinning = [141,36,31,-50,-58,-100];
  var groupBWinning = [97,28,31,-15,-9,-132];
  var groupCWinning = [73,47,2,21,-50,-93];
  for (var i =0; i <groupA.length;i++){
    document.getElementById("A"+i).innerHTML= groupA[i];
    document.getElementById("A"+i+"S").innerHTML=groupAScore[i];
    document.getElementById("A"+i+"W").innerHTML=groupAWinning[i];
  }
  for (var i =0; i <groupA.length;i++){
    document.getElementById("B"+i).innerHTML= groupB[i];
    document.getElementById("B"+i+"S").innerHTML=groupBScore[i];
    document.getElementById("B"+i+"W").innerHTML=groupBWinning[i];
  }
  for (var i =0; i <groupA.length;i++){
    document.getElementById("C"+i).innerHTML= groupC[i];
    document.getElementById("C"+i+"S").innerHTML=groupCScore[i];
    document.getElementById("C"+i+"W").innerHTML=groupCWinning[i];
  }
};