const date = new Date();
var month = date.getMonth() + 1;
var year = date.getFullYear() % 100;
var day = date.getDate();
var hour = date.getHours();
var minutes = date.getMinutes();

var yearf = ("0"+year).slice(-2);
var monthf = ("0"+month).slice(-2);
var dayf = ("0"+day).slice(-2);

var hourf = "00";
if(hour >= 12 && minutes > 2){
   hourf = "12";
}

var filename = "https://www.marinha.mil.br/chm/sites/www.marinha.mil.br.chm/files/\
cartas-sinoticas/c";
filename = filename + yearf + monthf + dayf + hourf + ".png";

document.getElementById("carta-sinotica").src = filename;