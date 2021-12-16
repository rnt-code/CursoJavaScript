/*
6am.11am, buenos días
12pm-18pm, buenas tardes
19pm-00am, buenas noches
01am-06-am, durmiendo

*/
var hoy = new Date();
let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
let soloHora = hoy.getHours();
//let soloHora = 6;
console.log(soloHora);

if(soloHora >=6 && soloHora < 12) {
    console.log('Buenos días');
}
else if(soloHora >= 12 && soloHora < 18) {
    console.log('Buenas tardes');
}
else if(soloHora >=18 && soloHora < 24) {
    console.log('Buenas noches');
}
else if(soloHora >=0 && soloHora < 6) {
    console.log('Duermiendo')
}