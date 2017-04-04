 // U3.W7: JavaScript Olympics

// Integrantes parejas: nombre1, nombre2


// 0. Objetos
var atleta1 ={
    name: "Roberto",
    height: 84,
    sport: "handball"
}

var atleta2 ={
    name: "Diana",
    height: 50,
    sport: "yermis"
}

var array =[atleta1,atleta2];
// 1. Añadir propiedades a objetos
function addWinToAthlete(array, event){
    for(var i = 0; i < array.length; i++){
        var athlete = array[i]
        array[i].win = function(){
        console.log(`${athlete.name} won the ${event}`);
        }
    }
}

// 2. Voltea un String



// 3. Remueve numeros impares



// 4. Funcion constructora



// 5. Reflexion
