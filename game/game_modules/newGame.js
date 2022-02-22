import {Game} from './game.js'

function nuovaPartita(player){
    let partita = new Game();
    partita.nuovoGioco(player)
    
}

export{nuovaPartita}