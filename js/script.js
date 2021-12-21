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
const kmPercorsi = prompt('Quanti km devi percorrere?').trim();
console.log(kmPercorsi);

// Chiedo all'utente quanti anni ha
const userAge = parseInt(prompt('Quanti anni hai?').trim());
console.log(userAge);

// Salvo i dati in variabili
const price = 0.21;
let message = 'Il costo del tuo biglietto è:';
const sum = price * kmPercorsi;

// Calcolo il prezzo 
if (userAge >= 18 && userAge < 65) {
    console.log(`${message} ${sum} €`); 
}   else if (userAge < 18) { 
        // Applico gli sconti
        let percentage = 20;
        let discountValue = (sum / 100) * percentage;
        console.log(discountValue);
        let finalPrice = (sum - discountValue).toFixed(2);
        console.log(`${message} ${finalPrice} €`);
}   else if (userAge >= 65) {
        let percentage = 40;
        let discountValue = (sum / 100) * percentage;
        console.log(discountValue);
        let finalPrice = (sum - discountValue).toFixed(2);
        console.log(`${message} ${finalPrice} €`);
    }

// Recupero gli elementi in pagina
const messageElement = document.getElementById('message');
const kmElement = document.getElementById('km');
const ageElement = document.getElementById('age');
const priceElement = document.getElementById('price');

// Modifico il contenuto in pagina
messageElement.innerHTML = message;
kmElement.innerHTML = ;
ageElement.innerHTML = ;
priceElement.innerHTML = ;