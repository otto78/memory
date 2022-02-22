import {Game} from './game.js'

function nuovaPartita(){
    let partita = new Game();
    partita.nuovoGioco()
    
}

export{nuovaPartita}