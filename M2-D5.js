/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum (a, b) {
  if ( a === b){
    return (a + b)*3;
  } else {
    return (a + b);
  }
  }
  const result1a = crazySum(6, 6);
  
  console.log('esercizio 1 valori uguali', result1a);
  
  const result1b = crazySum(5, 6);
  
  console.log('esercizio 1 valori diversi', result1b);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary (num1) {
return (num1 >= 20 && num1 <= 100) || num1 === 400;
}

const result2a = boundary(22);

console.log('esercizio 2 con num1 tra 20 e 100', result2a);

const result2b = boundary(400);

console.log('esercizio 2 con num1 = 400', result2b);

const result2c = boundary(3);

console.log('esercizio 2 con num1 < 20 ', result2c);


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/


/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str) {
  let inverted = "";
  for (let i = str.length - 1; i >= 0; i--) {
      inverted += str[i];
  }
  return inverted;
}

let result3 = reverseString('EPICODE');

console.log('stringa invertita',result3);


/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(str) {
  let text = str
  return  text.toUpperCase()
}

let upper = upperFirst('fdsgsdgdsgh')

console.log( 'stringa trasformata in maiuscola', upper);

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
  let array = [];
  for (let i = 0; array.length < n; i++) {
   let i = Math.floor(Math.random() * 10 + 1);
   array.push(i);
  }
  return array;
}

let randomic = giveMeRandom(9)

console.log('array random di numeri', randomic);
  


//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  return (l1 * l2);
  }
let rectangleArea = area(2, 3);

console.log('area rettangolo', rectangleArea);


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(n) {
  let diff = n - 19
  if (diff > 19) {
    return diff*3
    } else {
    return diff
  }
}

let result4a = crazyDiff(39)

console.log('differenza maggiore di 19',result4a);

let result4b = crazyDiff(30)

console.log('differenza minore di 19',result4b);


/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function codify(str) {
  let result = str.includes('code', 0)
  if (result) {
    return str
  } else {
    return 'code' + str
  }
}

let result6 = codify('test')

console.log(result6);

let result7 = codify('codetest')

console.log(result7)

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(num) {
  let ref = num % 3 === 0 || num % 7 === 0;
  return ref;
}
let result8 = check3and7(13);
console.log('nessun multiplo', result8);

let result8a = check3and7(9);
console.log('multiplo di 3', result8a);

let result8b = check3and7(21);
console.log('multiplo di 7', result8b);


/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str) {
  return str.slice(1, - 1);
}

let result9 = cutString('123456789');
console.log(result9);
