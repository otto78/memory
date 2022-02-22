import {Player} from './player.js'
import {Mazzo} from './mazzo.js'


class Game {
    constructor(){
        this.cardsInMddle =[];
        this.players =[];
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

    nuovoGioco(){
        
        let mazzo = new Mazzo();
        mazzo.creaMazzo();
        mazzo.mescolaMazzo()
        // console.log(mazzo)
        
        let div = document.createElement('div');
        div.innerHTML = `
        <label for="numGiocatori">Inserisci il numero dei giocatori:</label>
        
        <select name="numGiocatori" id="numGiocatori">
            
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        `;

        let divNumGiocatori = document.querySelector('#divNumGiocatori');
        divNumGiocatori.append(div);

        
        
        let inputNumGiocatori = document.querySelector('#numGiocatori')
        let numGiocatori = inputNumGiocatori.addEventListener('input', ()=>{

            numGiocatori = inputNumGiocatori.value
            console.log(numGiocatori)
            
            //return numGiocatori

        })


        
        
        

        

            
            for (let i=0; i<numGiocatori; i++){
                this.players.push(new Player(prompt("inserisci il nome del giocatore " + (i+1))))    
            }
            
            for(let i=0; i<numGiocatori; i++){
                //let start = i*5
                //let end = i*5 +5
                
                this.players[i].playerCards = mazzo.cards.slice(0, 5);
                for (let j =0; j<5; j++){mazzo.cards.shift()}
            }


        console.log(this.players);
        console.log(numGiocatori);
        console.log(mazzo)
        
    }
}

export {Game}