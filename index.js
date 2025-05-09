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
 /*Il prompt
 let word =prompt('cane')*/
 
 /*lunghezza della parola 
 console.log(word.length); */

 /*richiesta input corretto */
let world 
do {
    world = prompt('Inserisci una parola di almeno 5 caratteri:');
} while (world.length < 5);
    console.log(world);
/* if & else */
let numero = 16 ;
{
    if(numero > 5) {
       console.log('la variabile è maggiore di 5');
    } else {
        console.log('la variabile è minore di 5');
    }
}   
/* if & else , else & if */
  let score =parseInt(prompt('inserisci un valore da 0 a 100:'));
    if(score >= 90 && score <=100 ){
        console.log('Voto ottimo');
    }else if(score >= 70 && score <= 89){
        console.log('Voto buono');
    }else if(score >= 69 && score <= 60){
        console.log('Voto sufficiente');
    }else if(score >= 0 && score <= 59) {
        console.log('Voto insufficiente');
    }else{
        console.log('inserisci un valore valido!');
    };

    /* switch case */
    switch(score) {
        case score >= 70 && score <= 89:
         console.log('Voto ottimo');
         break;
         case score >= 69 && score <= 60:
          console.log('Voto sufficiente');
          break;
          case score >= 0 && score <= 59:
           console.log('Voto insufficiente');
           break;
           default:  
           console.log('inserisci un valore valido!'); 
           break;
    }

/* arary di numeri */
const numeri = [4, 5, 6, 7, 8, 9];
console.log(numeri);

/* somma i numeri */
let somma = 0;
for(let i = 0; i < numeri.length; i++){
    somma += numeri[i];
}
    console.log(somma);

/* array reverse  */
const reverse = [];
for(let i = numeri.length -1; i >= 0; i--){
    reverse.push(numeri[i]);
}
    console.log(reverse);

/* popolamento array */
const parole = [];

for(let i = 0; i < 5; i++) {
    let parola =prompt('inserisci parola qui:');
    parole.push(parola);
};
for(let i = 0; i < parole.length; i++) {
    if(parole[i].length % 2 !== 0){
        console.log(parole[i]);
    }
}

/*Crea un oggetto  */
const person = {
     nome : 'Remus-Daniel Blaj' ,
     age : 29,
     city : 'Rome, Italy'
};
    console.log(person);

/* accedi alle propietà */ 
    console.log(person.age);
    


 
 

