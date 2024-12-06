/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("Esercizio 1")

const pets = ['dog', 'cat', 'hamster', 'redfish']

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

console.log("*****")

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/


console.log("Esercizio 2")

//const pets = ['dog', 'cat', 'hamster', 'redfish']; 

pets.sort();

console.log(pets);

console.log("*****")

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("Esercizio 3")

//const pets = ['dog', 'cat', 'hamster', 'redfish']; 

for (let i = pets.length - 1; i >= 0; i--) {
  console.log(pets[i]);
}

console.log("*****")

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/


console.log("Esercizio 4")

//const pets = ['dog', 'cat', 'hamster', 'redfish']; 

let primoPet = pets.shift(); 

pets.push(primoPet); 

console.log(pets);

console.log("*****")

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

console.log("Esercizio 5")


const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]


for (let i = 0; i < cars.length; i++) {
  let numeriTarga = Math.floor(Math.random()*1000)
  if(numeriTarga<10){   //evito errori se il numero random in uscita è compreso tra 0 e 10 e aggiungo la stringa "00" al numero sorteggiato
      numeriTarga = "00"+numeriTarga
  } else if (numeriTarga<100) {  //evito errori se il numero random in uscita è compreso tra 0 e 100 e aggiungo la stringa "0" al numero sorteggiato
      numeriTarga = "0" +numeriTarga;
  }
    cars[i].licensePlate= "AA "+numeriTarga+" BB"
  
}

console.log(cars);

console.log("*****")

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log("Esercizio 6")



cars.push( {
  brand: 'Fiat',
  model: '500L',
  color: 'Black_blue',
  trims: ['Mirror', 'Bicolore', 'cross'],  // Le virgole, ricordati le virgole!!
});

console.log("il nuovo oggetto name: 500L è stato aggiunto all'array")

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);     //Prima con tutt i valori contenuti in trims
}

console.log("Elimino l'ultimo valore da trims")

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();  
  console.log(cars[i]);   //Dopo senza l'ultimo valore
}


console.log("*****") 

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

console.log("Esercizio 7")

const justTrims = []

for (let i=0; i<cars.length; i++){  
      justTrims.push(cars[i].trims[0]);
  }
  
console.log(justTrims)

console.log("*****")

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log("Esercizio 8")

for (let i=0; i<cars.length; i++){  
  let coloreauto=cars[i].color[0]; // avrei potuto scrivere direttamente quindi il lowerCas
  let coloreautoverificato= coloreauto.toLowerCase(); //inserito perchè il colore della 500L è scritto maiuscolo
  if(coloreautoverificato==="b"){
    console.log("Fizz")
  }else{
  console.log("Buzz")
}
}

console.log("*****")

//ciclare l'array>> ok, split sulle lettere del colore, variabile che contenga il risultato e if se ===b o !=b

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

console.log("Esercizio 9")

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i=0;

while (i<numericArray.length && numericArray[i] !==32) {

  console.log(numericArray[i]);
  
i++;
}
console.log("Hai raggiunto 32")

console.log("*****")

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

console.log("Esercizio 10")

const charactersArray = ['g', 'n', 'u', 'z', 'd']


console.log(charactersArray); //inserito per confronto tra array e risultato finale, una sorta di verifica


const alfabeto = 'abcdefghijklmnopqrstuvwxyz';

const posizioneArr= [];

for (let i = 0; i < charactersArray.length; i++) {
  let posizioneAlfabeto;

  switch (charactersArray[i]) {
    case 'a': posizioneAlfabeto = 1; break;
    case 'b': posizioneAlfabeto = 2; break;
    case 'c': posizioneAlfabeto = 3; break;
    case 'd': posizioneAlfabeto = 4; break;
    case 'e': posizioneAlfabeto = 5; break;
    case 'f': posizioneAlfabeto = 6; break;
    case 'g': posizioneAlfabeto = 7; break;
    case 'h': posizioneAlfabeto = 8; break;
    case 'i': posizioneAlfabeto = 9; break;
    case 'j': posizioneAlfabeto = 10; break;
    case 'k': posizioneAlfabeto = 11; break;
    case 'l': posizioneAlfabeto = 12; break;
    case 'm': posizioneAlfabeto = 13; break;
    case 'n': posizioneAlfabeto = 14; break;
    case 'o': posizioneAlfabeto = 15; break;
    case 'p': posizioneAlfabeto = 16; break;
    case 'q': posizioneAlfabeto = 17; break;
    case 'r': posizioneAlfabeto = 18; break;
    case 's': posizioneAlfabeto = 19; break;
    case 't': posizioneAlfabeto = 20; break;
    case 'u': posizioneAlfabeto = 21; break;
    case 'v': posizioneAlfabeto = 22; break;
    case 'w': posizioneAlfabeto = 23; break;
    case 'x': posizioneAlfabeto = 24; break;
    case 'y': posizioneAlfabeto = 25; break;
    case 'z': posizioneAlfabeto = 26; break;
  }
  posizioneArr.push(posizioneAlfabeto);
}

console.log(posizioneArr);

console.log("*****")
