Descrizione:
//Visualizzare in pagina 5 numeri casuali. 
//Da lì parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire, uno alla volta: 
// -i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, 
//il software dice: 
// -quanti  
// - quali 
// numeri da indovinare sono stati individuati.

//--- funzione numeri random --- //
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

// 1. Creo costante per contenere i numeri random generati
const numbers = [];
//1.2 creo ciclo while per generare numeri fino a 5
while (numbers.length < 5) { 
    let fiveNum = randomNumber(1,100);
    // proprieta'  "includes" per evitare che venga generato lo stesso numero
    if (!numbers.includes(fiveNum)){
    numbers.push(fiveNum);
    }
}
console.log(numbers);

let userNum = [];
setTimeout (function(){
    while (userNum.length < 5) {
        let numChoice = Number(prompt("Inserisci i numeri appena mostrati"));
        userNum.push(numChoice);
    }
},3000)

console.log(userNum);