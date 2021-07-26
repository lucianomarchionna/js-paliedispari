// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
do{
    var scelta = prompt("Scegli tra pari o dispari");
    scelta = scelta.toLowerCase();
}while(scelta != "pari" && scelta != "dispari");
console.log("Hai scelto: " + scelta);

var numero = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("Hai scelto il numero: " + numero);

function numeroRandom(){
    return Math.floor(Math.random() * 5) + 1
}
var numeroCPU = numeroRandom();
console.log("Il numero casuale generato è: " + numeroCPU);

function somma(n1, n2){
    return n1 + n2;
}
var sommaNumeri = somma(numero, numeroCPU);
console.log("La somma dei due numeri è: " + sommaNumeri);

function pariDispari(somma){
    if(somma % 2 == 0)
        return "pari";
    else
        return "dispari";
}
var risultato = pariDispari(sommaNumeri);
console.log("La somma dei due numeri è " + risultato);

if(scelta == risultato)
    console.log("Hai vinto.");
else
    console.log("Hai perso, riprova per vincere!");