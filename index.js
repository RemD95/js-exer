/*Dichiarzione di variabili*/
let valore = 1;
const value= 2;
console.log(valore,value);


/*Cambio di valore*/

let val = 5;
console.log(val);
val = 8;
console.log(val);
/*Ridefinizione di variabili*/
let number = 10;
console.log(number);
{
    let number = 9;
    console.log(number);
}
/*Scoping delle variabili*/
let outside = 3;
{
    let inside = 4;
    console.log(outside);
console.log(inside);
}
console.log(outside);
/*console.log(inside); <-riporta un errore in console e di conseguenza non stampa i console.log successivi,perciò per il momento l'ho inserito in un comm.*/
/*Genera numeri pari*/
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const limite = 20;
for (let numbers = 0; numbers <= limite; numbers += 2) {
    if( numbers % 2 === 0) {
        console.log(numbers);
    }
}
/*Numeri dispari crescenti*/
let num = 10
 while(number >= 1) {
    if(number % 2 !== 0) {
        console.log(number);
    }
    number-- ;
 }
 /*Il prompt*/
 let word = prompt('Cane');
 
 /*lunghezza della parola */
 console.log(word.length);
 

