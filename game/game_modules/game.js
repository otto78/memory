import {Player} from './player.js'
import {Mazzo} from './mazzo.js'


class Game {
    constructor(){        
        this.cardsInMddle = [];
        this.players = [{playerName: "Comp", playerCards: []}];
    }
      
    nuovoGioco(player){
           
        let mazzo = new Mazzo();

        mazzo.creaMazzo();
        mazzo.mescolaMazzo()

        this.players.unshift(new Player(player))
        this.cardsInMddle = mazzo

        console.log(mazzo) //stampa delle carte del mazzo per debug
        let colore = ['blu', 'giallo', 'verde', 'rosso', 'viola'];
         
        let board = document.createElement('div')   
        board.setAttribute("id", "board")
        board.classList.add("row", "justify-content-center", "board")
        let tavolo = document.querySelector('#tavolo')
        tavolo.append(board)
        
        let carteGiocatore = this.players[0].playerCards 
        let idArray =[]
        let idLogoArray = []
        let verifica =[]
        let punteggio = 0
        let errore = 0
        let counter = 0
        let turnoCounter = 0
        let punti = document.querySelector('#punti')
        punti.innerHTML = `Punteggio: ${punteggio}, Errori: ${errore}, Turno: ${turnoCounter}`
        
        // Partita
        for(let i=0; i < mazzo.cards.length; i++){
            
            let carta = this.cardsInMddle.cards[i]
            let card = document.createElement('div')
            
            card.setAttribute('id', i)
            card.classList.add('card', 'd-flex', 'justify-content-center', 'align-items-center')
           
            board.append(card)
            
            let cardLogo = document.createElement('div')
            cardLogo.setAttribute('id', i+20)
                   
            mostraCarta(carta, card, cardLogo)
            giraCarta(carta, card, cardLogo)

            //click sulla carta
            card.addEventListener('click', ()=>{
                turno(carta, card, cardLogo)
            })
        } // fine ciclo for
        

        function mostraCarta(carta, card, cardLogo){
            
            
            if (card.classList.contains('card-back')){
                card.classList.remove('card-back')
            }
            
            card.classList.add('card-front')                       
            card.append(cardLogo)

            carta.forma == 'cerchio' ? cardLogo.classList.add('cerchio') : cardLogo.classList.add( 'rombo');
            
            for(let i=0; i < colore.length; i++){              
                if(carta.colore == colore[i]){
                    card.classList.add(`border-${colore[i]}`)
                    cardLogo.classList.add(`shape-${colore[i]}`)
                }
            }             
        }

        function giraCarta(carta, card, cardLogo){

            setTimeout(gira, 1000)
        
            function gira(){
                
                
                if (card.classList.contains('card-front')){
                    card.classList.remove('card-front')
                }
                if(cardLogo){

                    cardLogo.remove()
                }       
                card.classList.add('card-back') 
                
                for(let i=0; i < colore.length; i++){                    
                    if(carta.colore == colore[i]){
                        card.classList.remove(`border-${colore[i]}`)
                    }
                }                     
            }
        
        }
        // Logica di gioco
        function turno(carta, card, cardLogo){
            
            counter++
            if(counter%2 != 0){turnoCounter++}
    
            mostraCarta(carta, card, cardLogo)
            
            let id = card.getAttribute('id') //id della card
            let idLogo = cardLogo.getAttribute('id') //id del contenuto della card
            let numeroCarta = mazzo.cards.indexOf(carta)
                      
            carteGiocatore.push(carta)
            idArray.push(id)
            idLogoArray.push(idLogo)
            verifica.push(numeroCarta)            
              
            if(carteGiocatore[1]
                && verifica[0] == verifica[1]){
                    carteGiocatore.pop(carta)
                    idArray.pop(id)
                    idLogoArray.pop(idLogo)
                    verifica.pop(numeroCarta)
                 }
 
            //Se c'è il match 
            if(carteGiocatore[1] 
                && carteGiocatore[0].forma==carteGiocatore[1].forma 
                && carteGiocatore[0].colore==carteGiocatore[1].colore){
        
                    for(let i=0; i<2; i++){

                        let choosenCard = document.getElementById(idArray[i])
                        carta = carteGiocatore[i]                                   
                        let space = document.createElement('div')
                        space.classList.add('card-ghost')                      
                        choosenCard.replaceWith(space)                       
                    }
                        
                    carteGiocatore =[]
                    idLogoArray =[]
                    idArray=[]
                    verifica=[]
                    punteggio++
                    punti.innerHTML = `Punteggio: ${punteggio}, Errori: ${errore}, Turno: ${turnoCounter}`
                }
                
            //Se non c'è il match
            if(carteGiocatore[1]){
                if(carteGiocatore[0].forma!=carteGiocatore[1].forma 
                    || carteGiocatore[0].colore!=carteGiocatore[1].colore){
                        
                    for(let i=0; i<2; i++){
                                
                        let card = document.getElementById(idArray[i])
                        let cardLogo = document.getElementById(idLogoArray[i])
                        carta = carteGiocatore[i]                       
                        giraCarta(carta, card, cardLogo)                            
                    }
                     
                    carteGiocatore =[]
                    idLogoArray =[]
                    idArray=[]
                    verifica=[]
                    errore++
                    punti.innerHTML = `Punteggio: ${punteggio}, Errori: ${errore}, Turno: ${turnoCounter}`
                }
            }

            if(punteggio==10){
                console.log('hai vinto')
                document.location.reload(true) 
            }
        }
    }
}

export {Game}