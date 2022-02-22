import {Card} from './card.js'

class Mazzo {
    constructor (){
        this.cards =[]
    }
    
    creaMazzo(){
        let forma =['cerchio', 'rombo',];
        let colore=['blu', 'giallo', 'verde', 'rosso', 'arancione'];
       
        
        for(let i=0; i<colore.length; i++){
            for(let j=0; j<forma.length; j++){
                this.cards.push(new Card(colore[i], forma[j]));
                this.cards.push(new Card(colore[i], forma[j]));         
            }        
        }

    }
    
    
    mescolaMazzo(){
        let location1, location2, tmp;
        for(let i=0; i<1000; i++){
            location1 = Math.floor((Math.random()*this.cards.length));
            location2 = Math.floor((Math.random()*this.cards.length));
            tmp = this.cards[location1]
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = tmp;
            
        }
        
    }
    
}

export {Mazzo}