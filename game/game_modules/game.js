import {Player} from './player.js'
import {Mazzo} from './mazzo.js'


class Game {
    constructor(){
        
        this.cardsInMddle = [];
        this.players = [{playerName: "Comp", playerCards: []}];
    }
 
    //     this.players[0].playerCards = mazzo.cards.slice(0,5);
    //     this.players[1].playerCards = mazzo.cards.slice(5,10);
      
    nuovoGioco(player){
           
        let mazzo = new Mazzo();

        mazzo.creaMazzo();
        mazzo.mescolaMazzo()

        this.players.unshift(new Player(player))
        this.cardsInMddle = mazzo
       

        let board = document.createElement('div')   
        board.setAttribute("id", "board")
        board.classList.add("row", "justify-content-center", "board")
        tavolo.append(board)
        
        let carteGiocatore = this.players[0].playerCards 

        for(let i=0; i<20; i++){
            let carta = this.cardsInMddle.cards[i]
            //carta.show()

            let card = document.createElement('div')
            card.classList.add('card', 'card-back', 'd-flex', 'justify-content-center', 'align-items-center')
            
            let cardLogo = document.createElement('div')
            cardLogo.classList.add('card-logo')
           
            card.append(cardLogo)
            board.append(card)
                
        
            card.addEventListener('click', ()=>{
         
                giraCarta(carta, card, cardLogo)
                
                console.log(carta.forma, carta.colore)

                if(carteGiocatore.length < 2){
                    
                    carteGiocatore.push(carta)

                }else {
                    carteGiocatore = []
                }

            console.log(carteGiocatore)
                
                
                
                
                
                
            }) // fine evento click


        
        
        
        } // fine ciclo for

    
    console.log(mazzo.cards)
   
    


    function giraCarta(carta, card, cardLogo){

        card.classList.toggle('card-back')
                card.classList.toggle('card-front')
                cardLogo.classList.toggle('card-logo')

        carta.forma == 'cerchio' ? cardLogo.classList.toggle('cerchio') : cardLogo.classList.toggle('rombo');
                    
                // Colore
                if(carta.colore == "blu"){
                    card.classList.toggle('border-blu')
                    cardLogo.classList.toggle('shape-blu')
                }
        
                if(carta.colore == "verde"){
                    card.classList.toggle('border-verde')
                    cardLogo.classList.toggle('shape-verde')
                }
    
                if(carta.colore == "rosso"){
                    card.classList.toggle('border-rosso')
                    cardLogo.classList.toggle('shape-rosso')
                }
        
                if(carta.colore == "viola"){
                    card.classList.toggle('border-viola')
                    cardLogo.classList.toggle('shape-viola')
                }
        
                if(carta.colore == "giallo"){
                    card.classList.toggle('border-giallo')
                    cardLogo.classList.toggle('shape-giallo')
                }
    }
    }
}

export {Game}