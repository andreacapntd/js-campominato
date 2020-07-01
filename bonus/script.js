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

//faccio scegliere all utente il livello di difficoltà
alert("CHOOSE YOUR DESTINY!!")
var destiny = parseInt(prompt(" Difficoltà 0 = numeri casuali da 1 a 100; Difficoltà 1 = numeri casuali da 1 a 80; Difficoltà 2 = numeri casuali da 1 a 50"));

// Il computer deve generare 16 numeri casuali tra 1 e 100.
//creo un array per contenere i numeri generati random(bombe)
var bombe = [];
//dichiaro una variabile per il numero delle bombe inserite
var numeroBombe = 16;
// utilizzo il ciclo while per generare i numeri random(bombe)
// var i = 0;
while (bombe.length < numeroBombe) {
  var numeriRandom;
  //condizioni sulla difficoltà scelta
  if  (destiny == 0) {
    numeriRandom = getRandomIntInclusive(1, 100);
  } else if (destiny == 1) {
    numeriRandom = getRandomIntInclusive(1, 80);
  } else if (destiny == 2) {
    numeriRandom = getRandomIntInclusive(1, 50);
  } else {
    alert("BOOOOOOOOM!");
  }
  //test della funzione
  // console.log(numeriRandom);
  // I numeri non possono essere duplicati
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

//creo array per contenere i numeri dell utente
var numeriUtente = [];
// dichiaro una variabile per i tentativi
var tentativi = 100 - 16;
// dichiaro una variabile per il punteggio
var punteggio = 0;
//l'utente inserisce i numeri fino al massimo di tentativi consentiti o fino a quando prende una bomba
var trovato = false;

//utilizzo ciclo while per richiedere i numeri all'utente
// var j = 0;

while (numeriUtente.length < tentativi && trovato == false) {
  var richiestaNumero = parseInt(prompt("Benvenuto! Inserisci uno alla volta un numero da 1 a 100 e buona fortuna"));
  //test richiesta del numero
  // console.log(richiestaNumero);
  // L’utente non può inserire più volte lo stesso numero,dve rispettare il range dato(check dati inseriti) e termina la partita se inserisce lo stesso numero contenuto in bombe
  if (checkRange(1, 100, richiestaNumero) == true && inArray(bombe, richiestaNumero) == false && inArray(numeriUtente, richiestaNumero) == false) {
    //inserisco con push i numeri dell utente nell array numeriUtente
    numeriUtente.push(richiestaNumero);
    // alert("Grande! Continua così")
    punteggio++;
  } //controllo che non venga inserito lo stesso numero dall utente
  else if (inArray(numeriUtente, richiestaNumero) == true) {
    alert("Numero già inserito");
  }
  //controllo che non vengano inseriti valori non richiesti
  if (checkRange(1, 100, richiestaNumero) == false) {
    alert("Valore inserito non valido! Inserisci un numero da 1 a 100");
  }
  //controllo se il numero inserito dall utente sia presente nell array bombe. in caso di esito positivo comunico la sconfitta ed il punteggio
  if (inArray(bombe, richiestaNumero)) {
    trovato = true;
    alert("BOOOOOOM!");
    alert("Sei esploso :-( Il tuo punteggio è: " + " " + punteggio);
  }
  // j++
}
//test push array utente
// console.log(numeriUtente);
// test punteggio
// console.log(punteggio);

//se il punteggio dell utente è uguale al numero dei tentativi comunico la vittoria ed il punteggio
if (punteggio == tentativi) {
  alert("HAI VINTO!!! Il tuo punteggio è: " + " " + punteggio);
}

//Funzioni

//funzione per generare numeri random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//funzione di controllo di un elemento se è incluso nell array
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

//funzione di controllo dei dati inseriti dall utente
function checkRange(min,max,num) {
  if (num >= min && num <= max && !isNaN(num)) {
    return true;
  }
  return false;
}
