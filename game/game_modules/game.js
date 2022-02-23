import {Player} from './player.js'
import {Mazzo} from './mazzo.js'


class Game {
    constructor(){
        
        this.cardsInMddle = [];
        this.players = ["Comp"];
    }
 
    //     this.players[0].playerCards = mazzo.cards.slice(0,5);
    //     this.players[1].playerCards = mazzo.cards.slice(5,10);
      
    nuovoGioco(player){
           
        let mazzo = new Mazzo();

        mazzo.creaMazzo();
        mazzo.mescolaMazzo()

        this.players.unshift(new Player(player))
        this.cardsInMddle = mazzo
       
        console.log(typeof this.cardsInMddle.cards)
        console.log(this.cardsInMddle.cards)
        //for (let card in mazzo){console.log(card)}

        let board = document.createElement('div')
        
        board.setAttribute("id", "board")
        board.classList.add("row", "justify-content-center", "board")
        tavolo.append(board)

        for(let i=0; i<20; i++){
            this.cardsInMddle.cards[i].show()        
        }
        


        

        
    }
}

export {Game}