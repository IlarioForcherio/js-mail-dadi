
/*Mail
Chiedi all’utente la sua email,
controlla che sia già presente nella lista di email per controllare se può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
-scrivere quante partite ha vinto il giocatore
-scrivere quante partite ha vinto il computer*/

//chiedere all'utente con un input la mail
//controlla nella lista mail 
//stampa un messaggio sull'esito del controllo 

// LISTA MAIL

let listaMail = ['mail1@gmail.com','mail2@gmail.com','mail3@gmail.com'];
let mailHtml = document.getElementById('inserisci-mail');

function invia(){
    //richiamo l'input nel click
   let valueMail = mailHtml.value;
   
   // variabile soldatino
   let valoreTrovato = false 

   //ciclo array

   for (let i = 0; i < listaMail.length; i++){
    if ( valueMail == listaMail [i] ){
        valoreTrovato = true 
        
        
    }
    else if ( valueMail != listaMail [i] ) {
            
    } 
         
    
   }

 console.log(valoreTrovato);

 if ( valoreTrovato = true ){
    mailYes.innerHTML += `presente`;
 }
 else{
    mailNot.innerHTML += `non presente`;
 }

 


}


// GIOCO DADI




function generaNumero(){
    let numeroRandom = document.getElementById('giocatore');
    numeroRandom = Math.floor( Math.random() * 6);
    document.getElementById("giocatore").innerHTML= ` ${numeroRandom}`;

    let numeroRandom2 = document.getElementById('computer');
    numeroRandom = Math.floor( Math.random() * 6);
    document.getElementById("computer").innerHTML= ` ${numeroRandom}`;
}


    
  
 
   











