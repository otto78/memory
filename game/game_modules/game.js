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

            console.log(mazzo)

        let colore = ['blu', 'giallo', 'verde', 'rosso', 'viola'];
        
       
        let board = document.createElement('div')   
        board.setAttribute("id", "board")
        board.classList.add("row", "justify-content-center", "board")
        tavolo.append(board)
        
        let carteGiocatore = this.players[0].playerCards 
        let idArray =[]
        let idLogoArray = []
        //let idSpaceArray = []
        
        for(let i=0; i < mazzo.cards.length; i++){

            let carta = this.cardsInMddle.cards[i]
            
            let card = document.createElement('div')
            card.setAttribute('id', i)
            card.classList.add('card', 'd-flex', 'justify-content-center', 'align-items-center')
            //let id = card.getAttribute('id') //id della card
            board.append(card)
            
            let cardLogo = document.createElement('div')
            cardLogo.setAttribute('id', i+20)
            //let idLogo = cardLogo.getAttribute('id') //id del contenuto della card

            
            
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
                       
            //card.classList.replace('card-back', 'card-front')
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
                card.classList.replace('card-front','card-back')            
                cardLogo.remove()
                
                for(let i=0; i < colore.length; i++){                    
                    if(carta.colore == colore[i]){
                        card.classList.remove(`border-${colore[i]}`)
                    }
                }                     
            }
        
        }

        function turno(carta, card, cardLogo){

            mostraCarta(carta, card, cardLogo)
               
            //console.log("Id DOM: ", id)
            //console.log("Carta: ", carta.forma, carta.colore)
            //console.log("Indice carta nel mazzo", mazzo.cards.indexOf(carta), "\n\n")
            //console.log(carteGiocatore)
            let id = card.getAttribute('id') //id della card
            let idLogo = cardLogo.getAttribute('id') //id del contenuto della card

            carteGiocatore.push(carta)
            idArray.push(id)
            idLogoArray.push(idLogo)
            //idSpaceArray.push(id+30)
            
            //console.log(idArray)
            //console.log(idLogoArray)
            //console.log("Numero carte Giocatore: ", carteGiocatore.length)
            //console.log("Indice carta nell'array giocatore", carteGiocatore.indexOf(carta))
            //console.log("Array giocatore: ", carteGiocatore, "\n\n")                   
            //console.log("Carta: ", carteGiocatore[0].forma, carteGiocatore[0].colore)
                

                
                //Se c'è il match 
                if(carteGiocatore[1] 
                    && carteGiocatore[0].forma==carteGiocatore[1].forma 
                    && carteGiocatore[0].colore==carteGiocatore[1].colore){
                    
                    for(let i=0; i<2; i++){

                        let choosenCard = document.getElementById(idArray[i])
                        carta = carteGiocatore[i]
                        console.log(carta)
                        //choosenCard.remove()
                        //choosenCard.style.opacity =(0.5)
                        
                        
                        
                        let space = document.createElement('div')
                        space.classList.add('card-ghost')
                        //space.setAttribute('id', idSpaceArray[i])

                        // let idSpace = space.getAttribute('id')
                        //card.style.opacity =(0.3)
                        choosenCard.replaceWith(space)

                        
                    }
                    
                    
                    console.log('Bravo!')
                    
                    carteGiocatore =[]
                    idLogoArray =[]
                    idArray=[]
                }
                
                //Se non c'è il match
                if(carteGiocatore[1]){
                    if(carteGiocatore[0].forma!=carteGiocatore[1].forma 
                        || carteGiocatore[0].colore!=carteGiocatore[1].colore){
                            
                        for(let i=0; i<2; i++){
                                
                            let card = document.getElementById(idArray[i])
                            let cardLogo = document.getElementById(idLogoArray[i])
                            carta = carteGiocatore[i]
                            //console.log(carta)
                            
                            // console.log(idCard)
                            // console.log(idCardLogo)
                            //setTimeout(giraCarta, 1000)
                            giraCarta(carta, card, cardLogo)
                            
                        }
                        
                        
                        //console.log("Array giocatore: ", carteGiocatore, "\n\n")
                        carteGiocatore =[]
                        idLogoArray =[]
                        idArray=[]
                    }
                }

        }
    }
}

export {Game}