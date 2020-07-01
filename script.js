// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati

//creo un array per contenere i numeri generati random(bombe)
var bombe = [];
// utilizzo il ciclo while per generare i numeri random(bombe)
// var i = 0;
//dichiaro una variabile per il numero delle bombe inserite
var numeroBombe = 16;

while (bombe.length < numeroBombe ) {
  var numeriRandom = getRandomIntInclusive(1, 100);
  //test della funzione
  // console.log(numeriRandom);
  if (inArray(bombe, numeriRandom) != true) {
    // test condizione
    // console.log(inArray(bombe, numeriRandom) != true);
    // inserisco con push i numeri random nell array bombe
    bombe.push(numeriRandom)
  }
  // i++
}

//test push
console.log(bombe);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.

//creo array per contenere i numeri dell utente
var numeriUtente = [];
// dichiaro una variabile per i tentativi
var tentativi = 3;

//utilizzo ciclo while per richiedere i numeri all'utente
// var j = 0;

while (numeriUtente.length < tentativi) {
  var richiestaNumero = parseInt(prompt("Benvenuto! Inserisci uno alla volta un numero da 1 a 100 e buona fortuna"));
  //test richiesta del numero
  // console.log(richiestaNumero);
  if (inArray(numeriUtente, richiestaNumero) != true) {
    //inserisco con push i numeri dell utente nell array numeriUtente
    numeriUtente.push(richiestaNumero);
  } else {
    alert("Numero già inserito");
  }

  // j++
}

//test push utente
console.log(numeriUtente);

// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.








//Funzioni
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function inArray (array, elemento) {
  var i = 0
  var trovato = false;
  while (i < array.length && trovato == false) {
    if (array[i] == elemento) {
      trovato = true;
    }
    i++
  }
  return trovato;
}
