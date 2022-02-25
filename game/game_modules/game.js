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
       

        let board = document.createElement('div')   
        board.setAttribute("id", "board")
        board.classList.add("row", "justify-content-center", "board")
        tavolo.append(board)
        
        let carteGiocatore = this.players[0].playerCards 
        let idArray =[]
        let idLogoArray = []
        
        for(let i=0; i < mazzo.cards.length; i++){

            let carta = this.cardsInMddle.cards[i]
            
            let card = document.createElement('div')
            card.setAttribute('id', i)
            let id = card.getAttribute('id') //id della card
            
            let cardLogo = document.createElement('div')
            cardLogo.setAttribute('id', i+20)
            let idLogo = cardLogo.getAttribute('id') //id del contenuto della card
            
            
            card.classList.add('card', 'card-back', 'd-flex', 'justify-content-center', 'align-items-center')            
            cardLogo.classList.add('card-logo') 
            
            //card.append(cardLogo)
            board.append(card)
            
            //click sulla carta



            card.addEventListener('click', ()=>{
         
                mostraCarta(carta, card, cardLogo)
                //card.removeEventListener()
                //console.log("Carta: ", carta.forma, carta.colore)
                //console.log("Id DOM: ", id)
                //console.log("Indice carta nel mazzo", mazzo.cards.indexOf(carta), "\n\n")
                
                if(carteGiocatore.length < 2){
                    
                    carteGiocatore.push(carta)
                    idArray.push(id)
                    idLogoArray.push(idLogo)
                    
                    //console.log(idArray)
                    //console.log(idLogoArray)
                    //console.log("Numero carte Giocatore: ", carteGiocatore.length)
                    //console.log("Indice carta nell'array giocatore", carteGiocatore.indexOf(carta))
                    //console.log("Array giocatore: ", carteGiocatore, "\n\n")                   
                    //console.log("Carta: ", carteGiocatore[0].forma, carteGiocatore[0].colore)
                    

                    

                    if(carteGiocatore[1] 
                        && carteGiocatore[0].forma==carteGiocatore[1].forma 
                        && carteGiocatore[0].colore==carteGiocatore[1].colore){
                        
                            for(let i=0; i<idArray.length; i++){

                                let idCard = document.getElementById(idArray[i])
                                
                                
                                
                                
                                idCard.style.opacity =(0.2)
                            }
                            
                            console.log('Bravo!')
                            carteGiocatore =[]

                    }
                    
                    if(carteGiocatore[1]){
                        if(carteGiocatore[0].forma!=carteGiocatore[1].forma 
                            || carteGiocatore[0].colore!=carteGiocatore[1].colore){
                                
                            for(let i=0; i<2; i++){
                                    
                                let card = document.getElementById(idArray[i])
                                let cardLogo = document.getElementById(idLogoArray[i])
                                carta = carteGiocatore[i]
                                console.log(carta)
                                
                                // console.log(idCard)
                                // console.log(idCardLogo)
                                //setTimeout(giraCarta, 1000)
                                giraCarta(carta, card, cardLogo)
                                
                            }
                            
                            
                            console.log("Array giocatore: ", carteGiocatore, "\n\n")
                            carteGiocatore =[]
                            idLogoArray =[]
                            idArray=[]
                        }
                    }   
                }
            }) // fine evento click



        
        
        
        } // fine ciclo for

        
    
    
    
    





   
        function mostraCarta(carta, card, cardLogo){
        card.classList.replace('card-back', 'card-front')
        card.append(cardLogo)
        carta.forma == 'cerchio' ? cardLogo.classList.add('cerchio') : cardLogo.classList.add( 'rombo');

        // Colore
        if(carta.colore == "blu"){
            card.classList.add('border-blu')
            cardLogo.classList.add('shape-blu')
        }

        if(carta.colore == "verde"){
            card.classList.add('border-verde')
            cardLogo.classList.add('shape-verde')
        }

        if(carta.colore == "rosso"){
            card.classList.add('border-rosso')
            cardLogo.classList.add('shape-rosso')
        }

        if(carta.colore == "viola"){
            card.classList.add('border-viola')
            cardLogo.classList.add('shape-viola')
        }

        if(carta.colore == "giallo"){
            card.classList.add('border-giallo')
            cardLogo.classList.add('shape-giallo')
        }

        
        }

        function giraCarta(carta, card, cardLogo){

        setTimeout(gira, 1000)
        
        function gira(){    
        card.classList.replace('card-front','card-back')
        
        cardLogo.remove()

        // Colore
        if(carta.colore == "blu"){
            card.classList.remove('border-blu')
           
        }

        if(carta.colore == "verde"){
            card.classList.remove('border-verde')
           
        }

        if(carta.colore == "rosso"){
            card.classList.remove('border-rosso')
           
        }

        if(carta.colore == "viola"){
            card.classList.remove('border-viola')
           
        }

        if(carta.colore == "giallo"){
            card.classList.remove('border-giallo')
            
        }
        }
        
        }

        function switchCarta(carta, card, cardLogo){

        

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