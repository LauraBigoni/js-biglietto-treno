console.log('JS OK!')
/*
Traccia:

Il programma dovrà chiedere all'utente il numero di 
chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il 
prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.

BONUS 1
Stampare il risultato in pagina e non solo in console.

BONUS 2
Cercare, sulla base di quanto visto, di effettuare un minimo di validazione.

BONUS 3
Applicare un po' di CSS se siete riusciti a fare il bonus 1
*/

// 1 - Chiedere all'utente quanti km vuole percorrere
// 2 - Chiedere l'età del passeggero
// 3 - Salvo i dati in variabili
// 4 - Calcolare il prezzo con 2 decimali
// 4b- Verificare l'età per applicare eventuali sconti
// 5 - Applicare sconto 20% per minorenni
// 6 - Applicare sconto 40% per over 65
// 7 - Recupero un elemento in pagina
// 8 - Stampo in console
// 9 - Modifico il contenuto testuale

// Chiedo all'utente quanti km vuole percorrere
const kmPercorsi = parseInt(prompt('Quanti km devi percorrere?').trim());
console.log(kmPercorsi);

// Chiedo all'utente quanti anni ha
const userAge = parseInt(prompt('Quanti anni hai?').trim());
console.log(userAge);

// Salvo i dati in variabili
const price = 0.21;
let message = 'Il costo del tuo biglietto è:';
const sum = price * kmPercorsi;
let percentage = 0;
let finalPrice = 0;
let discountValue = 0;

// Recupero gli elementi in pagina
const greetingsElement = document.getElementById('greetings');
const kmElement = document.getElementById('km');
const ageElement = document.getElementById('age');
const priceElement = document.getElementById('price');

if (userAge < 18) { 
        // Applico gli sconti
        percentage = 20;
        discountValue = (sum / 100) * percentage;
        greetingsElement.innerHTML +=`Hai ottenuto uno sconto del 20%`;
        console.log(discountValue);
} else if (userAge >= 65) {
        percentage = 40;
        discountValue = (sum / 100) * percentage;
        greetingsElement.innerHTML += `Hai ottenuto uno sconto del 40%`;
        console.log(discountValue);
}

// Calcolo il prezzo
finalPrice = (sum - discountValue).toFixed(2);
console.log(`${message} ${finalPrice} €`);

if (isNaN(kmPercorsi || userAge)) {
    alert("Non hai inserito un valore corretto")
    greetingsElement.innerHTML = `Ops! QUALCOSA è ANDATO STORTO. L'operazione non è andata a buon fine.`;
} else {
    // Modifico il contenuto in pagina
    greetingsElement.innerHTML = `Complimenti per aver completato l'acquisto!`;
    kmElement.innerHTML = `Devi percorrere: ${kmPercorsi} km`; 
    ageElement.innerHTML = `Hai: ${userAge} anni`;
    priceElement.innerHTML = `${message} ${finalPrice} €`;
} 