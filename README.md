SIMON SAYS

Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


ESERCIZIO


Inizio il gioco al premere di un bottone
Creo un array randomNumbers vuoto
Creo un array correctNumbers vuoto
Uso un ciclo per pushare cinque numeri casuali dentro randomNumbers e creare cinque div da appendere a un container
Uso la funzione setTimeout con tempo trenta secondi per far scomparire i numeri casuali
Chiedo all'utente cinque numeri tramite prompt, se un numero inserito compare in randomNumbers, pusho il numero in correctNumbers
Scrivo quanti sono i numeri corretti e quali sono