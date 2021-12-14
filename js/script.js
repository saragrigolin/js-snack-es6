/*
Consegna:
Scrivere una funzione (e lanciarla) che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.
*/

let arrayNames = ['Sara', 'Matilde', 'Massimo', 'Cristiana', 'Eleonora', 'Francesco'];

let a = 2;
let b = 6;

console.log('Array originale: '+ arrayNames);
console.log('a: ' + a + ' , b: ' + b);

let arrayNew = getNames(arrayNames, a, b);
console.log('Array nuovo: ' + arrayNew);

//funzione per ottenere i valori dell'array che hanno la posizione compresa tra i due numeri
function getNames(array, num1, num2){
    let arrayNew = [];
    array.forEach((element, index) => {
        if (index >= num1 && index <= num2){
            arrayNew.push(element);
        }
    });
    return arrayNew;
}