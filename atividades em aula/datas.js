//10/10/1992 ->  new Date(1992,10,10)
const{format} = require("date-fns");
const name = "Renata"

const nascimento= new Date (1992,9,10);

console.log(format(nascimento,"'A Renata nasceu em uma' eeee"));