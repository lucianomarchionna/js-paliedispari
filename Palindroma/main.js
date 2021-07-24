var parola = prompt("Inserisci una parola per verificare se è palindroma o meno");

function palindroma(parolaInserita){
    var parolaInversa = "";
    var i = parolaInserita.length - 1;

    while (i >= 0) {
        parolaInversa += parolaInserita[i];
        i--;
    }

    if(parolaInserita == parolaInversa){
        return "La parola che hai inserito è palindroma";
    } 
    else{
        return "La parola che hai inserito non è palindroma";
    }
}
console.log(palindroma(parola));