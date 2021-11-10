/**
 Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */




// Referenze

 const countdown = document.querySelector('.countdown');
const display = document.querySelector('.display');
const number = document.querySelector('.number');

let secondi = 2;

// array di numeri casuali
const numberArray = [];
// array di numeri inserti dal giocatore tramite il prompt
let numeriUenteInseriti = []


// generazione numeri casuali
for(let i = 0; i < 5; i++) {
  numberArray.push( randomNum() );
  number.innerHTML = numberArray;
};

console.log(numberArray);



const timer = setInterval(() => {

    
    // raggiunto lo zero
    if(secondi === 0) {
        // fermare intervallo di loop
        clearInterval(timer)
        // aggiornare display
        display.innerHTML = '';
        // richiesta per inserire 5 numeri
        let numUtente;
        for(let i = 0; i < 5; i++) {

         do {
            numUtente = parseInt(prompt('inserisci un numero'));
        } while(isNaN(numUtente))
        numeriUenteInseriti.push(numUtente);

        let comparazioneNUmeri = numeriUenteInseriti.filter((element)=>{
            if(numberArray.includes(element) ) {
                return true; 
            } 
        });
       
        console.log(comparazioneNUmeri)
        
    }
    } else {
        countdown.innerText = secondi
        secondi--;
    }
    
}, 1000);  




/*************************************************
                    FUNZIONI
 *************************************************/

// generzione random di 5 numeri

 function randomNum(){
    return Math.floor(Math.random() * 100) + 1;
} 

