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
        let idArray =[]
        let idCardLogoArray = []
        
        for(let i=0; i<20; i++){
            let carta = this.cardsInMddle.cards[i]
            //carta.show()
            
            let card = document.createElement('div')
            card.setAttribute('id', i)
            card.classList.add('card', 'card-back', 'd-flex', 'justify-content-center', 'align-items-center')
            
            let id = card.getAttribute('id')
            
            let cardLogo = document.createElement('div')
            cardLogo.setAttribute('id', i+20)
            cardLogo.classList.add('card-logo')

            let idCardLogo = cardLogo.getAttribute('id')
           
            card.append(cardLogo)
            board.append(card)
            
        
            card.addEventListener('click', ()=>{
         
                giraCarta(carta, card, cardLogo)
                
                
                //console.log("Carta: ", carta.forma, carta.colore)
                
                //console.log("Id DOM: ", id)
                
                
                
                //console.log("Indice carta nel mazzo", mazzo.cards.indexOf(carta), "\n\n")
                
                if(carteGiocatore.length < 2){
                    
                    carteGiocatore.push(carta)
                    idArray.push(id)
                    idCardLogoArray.push(idCardLogo)
                    
                    console.log(idArray)
                    console.log(idCardLogoArray)
                    //console.log("Numero carte Giocatore: ", carteGiocatore.length)
                    //console.log("Indice carta nell'array giocatore", carteGiocatore.indexOf(carta))
                    console.log("Array giocatore: ", carteGiocatore, "\n\n")                   
                    //console.log("Carta: ", carteGiocatore[0].forma, carteGiocatore[0].colore)
                    //if(carteGiocatore[1]){console.log("Carta: ", carteGiocatore[1].forma, carteGiocatore[1].colore)}


                    if(carteGiocatore[1] 
                        && carteGiocatore[0].forma==carteGiocatore[1].forma 
                        && carteGiocatore[0].colore==carteGiocatore[1].colore){
                        
                        console.log('Bravo!')

                    
                    }else if(carteGiocatore[1]){
                        if(carteGiocatore[0].forma!=carteGiocatore[1].forma 
                            || carteGiocatore[0].colore!=carteGiocatore[1].colore){
                                
                                for(let i=0; i<idArray.length; i++){
                                    
                                    let idCard = document.getElementById(idArray[i])
                                    let idCardLogo = document.getElementById(idCardLogoArray[i])

                                    giraCarta(carta, idCard, idCardLogo)

                                    // idCard.classList.replace('card-front', 'card-back')
                                    
                                    // //console.log(idCardLogo)
                                    // idCardLogo.classList.remove('cerchio','rombo')
                                    // //idCardLogo.classList.add('card-logo')
                                    


                                }
                                
                                carteGiocatore =[]
                                idArray=[]
                                idCardLogoArray =[]



                            }

                    }
                   
                }
                
                

            
                
                
                
                
                
                
            }) // fine evento click


        
        
        
        } // fine ciclo for

    
    console.log(mazzo)
   
    


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