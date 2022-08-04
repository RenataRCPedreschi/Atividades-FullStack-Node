function Pokemon(nome, pontosAtaque, pontosDefesa){
this.nome = nome;
this.pontosAtaque = pontosAtaque;
this.pontosDefesa = pontosDefesa;
this.atacar = function (){
    console.log("atacando");
}
}

let pineco = new Pokemon("Pineco", 1000, 500);

let pikachu = new Pokemon("Pikachu", 2500, 1000);



let jsonPokemons = '{"count":1154,"next":"https://pokeapi.co/api/v2/pokemon?offset=10&limit=10","previous":null,"results":[{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},{"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"},{"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/"},{"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/"},{"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"},{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"},{"name":"wartortle","url":"https://pokeapi.co/api/v2/pokemon/8/"},{"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon/9/"},{"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon/10/"}]}'

let listaPokemons = JSON.parse(jsonPokemons);


let pinecoJson = JSON.stringify(pineco);
let pikachuJson = JSON.stringify(pikachu);
    

    console.log(pikachuJson);
   

