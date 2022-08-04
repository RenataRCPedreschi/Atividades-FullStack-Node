//SWITCH CASE

let paisesContinentes
/* let oceania = 1
let asia = 2
let africa = 3
let america = 4
let europa = 5 */

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)


paisesContinentes =  prompt("Digite o número do continente e veja 5 países que estão nele:\n 1 - Oceania \n 2 - Asia\n 3 - Africa\n 4 - America\n 5 - Europa");

/* paisesContinentes = Number(paisesContinentes) */

switch (paisesContinentes) {
    case "1":
        //alert("Austrália, Nova Zelândia, Fiji, Palau, Tonga")
        console.log("Austrália, Nova Zelândia, Fiji, Palau, Tonga");
        break;


    case "2":

        console.log("Afeganistão, Arábia Saudita, China, Índia, japão");
        break;

    case "3":

        console.log("Nigéria, Marrocos, Etiópia, Senegal, Angola");
        break;

    case "4":

        console.log("Brasil, Argentina, Estados Únidos, Chile, Canadá");
        break;


    case "5":

        console.log("Portugual, Itália, Espanha, Suiça, Grécia");
        break;

}