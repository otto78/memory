import {Player} from './player.js'
import {Mazzo} from './mazzo.js'


class Game {
    constructor(){
        
        this.cardsInMddle =[];
        this.players =["Comp"];
    }
    
    // start(p1, p2){
    //     this.players.push(new Player(p1));
    //     this.players.push(new Player(p2));
    //     let mazzo = new Mazzo();
    //     mazzo.creaMazzo();
    //     mazzo.mescolaMazzo()
    //     this.players[0].playerCards = mazzo.cards.slice(0,5);
    //     this.players[1].playerCards = mazzo.cards.slice(5,10);
    // };
    
    nuovoGioco(player){
        
        
        let mazzo = new Mazzo();
        mazzo.creaMazzo();
        mazzo.mescolaMazzo()
        this.players.unshift(new Player(player))
        this.cardsInMddle = mazzo
                    
            // for (let i=0; i<numGiocatori; i++){
            //     this.players.push(new Player(prompt("inserisci il nome del giocatore " + (i+1))))    
            // }
            
            // for(let i=0; i<numGiocatori; i++){
            //     //let start = i*5
            //     //let end = i*5 +5
                
            //     this.players[i].playerCards = mazzo.cards.slice(0, 5);
            //     for (let j =0; j<5; j++){mazzo.cards.shift()}
            // }


        //console.log(this.players);
        
        //console.log(mazzo)
        console.log(this.cardsInMddle)

        let board = document.createElement('div')
        //board.style.width = "500"
        board.setAttribute("id", "board")
        board.classList.add("row", "justify-content-center", "board")
        tavolo.append(board)

        for(let i=0; i<20; i++){
            this.cardsInMddle.cards[i].show()
        }
        // for(let i=5; i<10; i++){
        //     this.cardsInMddle.cards[i].show()
        // }

        
    }
}

export {Game}