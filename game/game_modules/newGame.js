import {Game} from './game.js'

function nuovaPartita(player){
    let partita = new Game();
    partita.nuovoGioco(player)
    console.log (partita.players)
    console.log(partita.cardsInMddle.cards[0])
    for(let i=0; i<20; i++){
        partita.cardsInMddle.cards[i].show()

    }
}

export{nuovaPartita}