// Il programma dovrà chiedere
// all’utente il numero di chilometri che
// vuole percorrere e l’età del
// passeggero.
// Sulla base di queste informazioni
// dovrà calcolare il prezzo totale del
// viaggio.
// Il prezzo del biglietto è definito in base
// ai km (0.21 € al km), ma va applicato
// uno sconto del 20% per i minorenni e
// del 40% per gli over 65.


// VARIABILI
var chilometriPercorrere;
var eta;
var prezzoBiglietto;

// VALORI
chilometriPercorrere = parseInt(prompt('Quanti chilometri vuole percorrere?'))
eta = parseInt(prompt('Quanti anni ha?'))
prezzoBiglietto = chilometriPercorrere * 0.21;

// VARIABILI PER EVENTUALE SCONTO
var sconto20;
var sconto40;
var sconto20Totale;
var sconto40Totale;

// VALORI
sconto20 = (prezzoBiglietto * 20) / 100;
sconto40 = (prezzoBiglietto * 40) / 100;
sconto20Totale = prezzoBiglietto - sconto20;
sconto40Totale = prezzoBiglietto - sconto40;

// CALCOLO EVENTUALE SCONTO
var prezzoBigliettoTotale = prezzoBiglietto;

if (eta < 18) {
  prezzoBigliettoTotale = sconto20Totale;
}

else if (eta > 64){
  prezzoBigliettoTotale = sconto40Totale;
}

document.getElementById('biglietto').innerHTML= 'Il costo del suo biglietto è' + ' ' + prezzoBigliettoTotale + ' ' + '€';
