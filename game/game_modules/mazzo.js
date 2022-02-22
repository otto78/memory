import {Card} from './card.js'

class Mazzo {
    constructor (){
        this.cards =[]
    }
    
    creaMazzo(){
        let tipi =['picche', 'cuori', 'quadri', 'fiori'];
        let ranks=['Asso', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Regina', 'Re'];
        let valori =[1,2,3,4,5,6,7,8,9,10,11,12,13];
        
        for(let i=0; i<tipi.length; i++){
            for(let j=0; j<ranks.length; j++){
                this.cards.push(new Card(tipi[i], ranks[j], valori[j]));
                
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