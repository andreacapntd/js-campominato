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

//genero 16 numeri casuali da 1 a 100 per il computer

var numeriCpu = [];

for (var i = 0; i < 16; i++) {
  var numeriRandom = getRandomIntInclusive(1, 100);
  numeriCpu.push(numeriRandom);
}
console.log(numeriCpu);





//chiedo all'utente x numeri sempre da 1 a 100
 var numeriUtente = [];
 


//controllo che il numero dell'utente non sia presente nei numeri del computer(se presente il gioco termina) oppure il gioco finisce se finiti i tentativi.

//comunico punteggio(num tentativi)

//Funzioni
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function richiestaCheckNumeroUtente (array, num) {
  for (var i = 0; i < array.length; i++) {
    array[i]
  }
}
