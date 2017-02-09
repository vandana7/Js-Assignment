function displayTime(){
var date=new Date();
var time= date.toLocaleTimeString();
 document.getElementById("Time").innerHTML=time;
}

setInterval(function(){
displayTime()
},1000);

var array = new Array();
function pushit(){
var input = document.getElementById('input').value;
if(input== "")
alert("enter atleast one value")
array.push(input);
var str ="";
for(var i=0; i<array.length;i++){
  str =str + array[i] + "," ;
}
document.getElementById('output').value = str;
}

function popit() {

  array.pop();
  if(document.getElementById('output').value==""){
  alert("no values to delete")
}
else{
  for(var i=0; i<array.length;i++){
    str =str + array[i] + "," ;
  }
  document.getElementById('output').value = str;
}
}
