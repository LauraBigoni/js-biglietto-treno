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
const kmPercorsi = prompt('Quanti km devi percorrere?');
console.log(kmPercorsi);