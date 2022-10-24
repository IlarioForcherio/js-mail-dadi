
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

// lista mail

let listaMail = ['mail1@gmail.com','mail2@gmail.com','mail3@gmail.com'];
let mailHtml = document.getElementById('inserisci-mail');

function invia(){
    //richiamo l'input nel click
   let valueMail = mailHtml.value;
   

   //ciclo array

   for (let i = 0; i <= listaMail.length; i++){
    if ( valueMail == listaMail [i] ){
        console.log('la mail è presente');
    }else {
        console.log('la mail non è presente');
    } 
         
    
   }







}
    
  
 
   











