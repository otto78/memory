import {Player} from './player.js'
import {Mazzo} from './mazzo.js'
import {nuovaPartita} from './newGame.js'


class Game {
    constructor(){        
        this.cardsInMddle = [];
        this.players = [{playerName: "Comp", playerCards: []}];
    }
      
    nuovoGioco(player){
           
        let mazzo = new Mazzo();

        mazzo.creaMazzo();
        mazzo.mescolaMazzo()

        this.players.unshift(new Player(player))
        this.cardsInMddle = mazzo

        console.log(mazzo) //stampa delle carte del mazzo per debug
        let colore = ['blu', 'giallo', 'verde', 'rosso', 'viola'];
         
        let board = document.createElement('div')   
        board.setAttribute("id", "board")
        board.classList.add("row", "justify-content-center", "board")
        let tavolo = document.querySelector('#tavolo')
        
        let carteGiocatore = this.players[0].playerCards 
        let idArray =[]
        let idLogoArray = []
        let verifica =[]
        let punti = document.querySelector('#punti')
        let punteggio = 0
        let errore = 0
        let counter = 0
        let turnoCounter = 0

        
        // Variabili Gestione timer
        let time = document.querySelector('time')
        let sec = 0
        let min = 0
        let t
        
        //Funzioni timer
        function tick(){
            sec++
            if(sec>=60){
                sec=0;
                min++;      
            }
        }
         
        function add(){
            tick()
            time.textContent = (min>9 ? min : '0'+ min) + ':' + (sec>9 ? sec : '0'+ sec)
            timer()      
        }
         
        function timer(){
            t = setTimeout(add, 1000)
        }
        
        timer() 
        
        
        tavolo.append(board)
        
        
        
        
        
        tabellone(punteggio, errore, turnoCounter)
        
        
        //punti.innerHTML = `Punteggio: ${punteggio}, Errori: ${errore}, Turno: ${turnoCounter}`
        
        // Partita
        for(let i=0; i < mazzo.cards.length; i++){
            
            let carta = this.cardsInMddle.cards[i]
            let card = document.createElement('div')
            
            card.setAttribute('id', i)
            card.classList.add('card', 'd-flex', 'justify-content-center', 'align-items-center')
           
            board.append(card)
            
            let cardLogo = document.createElement('div')
            cardLogo.setAttribute('id', i+20)
                   
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
                
                
                if (card.classList.contains('card-front')){
                    card.classList.remove('card-front')
                }
                if(cardLogo){

                    cardLogo.remove()
                }       
                card.classList.add('card-back') 
                
                for(let i=0; i < colore.length; i++){                    
                    if(carta.colore == colore[i]){
                        card.classList.remove(`border-${colore[i]}`)
                    }
                }                     
            }
        
        }
        // Logica di gioco
        function turno(carta, card, cardLogo){
            
            counter++
            if(counter%2 != 0){turnoCounter++}
    
            mostraCarta(carta, card, cardLogo)
            
            let id = card.getAttribute('id') //id della card
            let idLogo = cardLogo.getAttribute('id') //id del contenuto della card
            let numeroCarta = mazzo.cards.indexOf(carta)
                      
            carteGiocatore.push(carta)
            idArray.push(id)
            idLogoArray.push(idLogo)
            verifica.push(numeroCarta)            
            
            // Se si clicca la stessa carta
            if(carteGiocatore[1]
                && verifica[0] == verifica[1]){
                    carteGiocatore.pop(carta)
                    idArray.pop(id)
                    idLogoArray.pop(idLogo)
                    verifica.pop(numeroCarta)
                }
 
            //Se c'è il match
            if(carteGiocatore[1] 
                && carteGiocatore[0].forma==carteGiocatore[1].forma 
                && carteGiocatore[0].colore==carteGiocatore[1].colore){
        
                    for(let i=0; i<2; i++){
                        
                        let choosenCard = document.getElementById(idArray[i])
                        
                        carta = carteGiocatore[i]                                   
                        let space = document.createElement('div')
                        space.classList.add('card-ghost','d-flex', 'justify-content-center', 'align-items-center', `border-${carteGiocatore[i].colore}`, 'fade-out')
                        
                        let cardLogo = document.getElementById(idLogoArray[i])
                        space.append(cardLogo)                    
                        
                        choosenCard.replaceWith(space)                                              
                    }
                  
                    carteGiocatore =[]
                    idLogoArray =[]
                    idArray=[]
                    verifica=[]
                    punteggio++
                    tabellone(punteggio, errore, turnoCounter)
                }
                
            //Se non c'è il match
            if(carteGiocatore[1]){
                if(carteGiocatore[0].forma!=carteGiocatore[1].forma 
                    || carteGiocatore[0].colore!=carteGiocatore[1].colore){
                        
                    for(let i=0; i<2; i++){
                                
                        let card = document.getElementById(idArray[i])
                        let cardLogo = document.getElementById(idLogoArray[i])
                        carta = carteGiocatore[i]                       
                        giraCarta(carta, card, cardLogo)                            
                    }
                     
                    carteGiocatore =[]
                    idLogoArray =[]
                    idArray=[]
                    verifica=[]
                    errore++
                    tabellone(punteggio, errore, turnoCounter)
                }
            }

            if(punteggio==2){               
                clearTimeout(t)
                setTimeout(risultato, 1000)               
            }
        }



        
        function tabellone(punteggio, errore, turnoCounter){
            

            punti.innerHTML = `
                    <div>Punti<br><span class="point punteggio">${punteggio}</span></div>
                    <div>Errori<br><span class="point errori">${errore}</span></div>
                    <div>Mosse<br><span class="point turno">${turnoCounter}</span></div>
                         
            `
        }

        function risultato(){
            
            let tabellone = document.querySelector('#tabellone')
            tabellone.classList.add('d-none')

            let risultato = document.createElement('div')
            risultato.classList.add('row', 'justify-content-center', 'align-items-center')
            risultato.setAttribute('id', 'risultato')

            let commento
            let commento2
            

            if(turnoCounter==2){
                commento = 'Hai una memoria di ferro!'
            }

            if(turnoCounter>2 && turnoCounter<=10){
                commento = 'Però non hai una gran memoria'
            }

            if(turnoCounter>10){
                commento = 'Ma hai una pessima memoria'
            }

            if (time.textContent<='00:30'){
                commento2= 'e sei pure una scheggia!'
            }

            if (time.textContent>'00:30' && time.textContent<'01:00'){
                commento2= 'ma non sei velocissimo!'
            }
            if (time.textContent>='01:00'&& time.textContent<='01:30'){
                commento2= 'e sei una lumaca!'
            }
            if (time.textContent>'01:30'){
                commento2= 'ma forse avevi preso sonno?!'
            }

            

            risultato.innerHTML=`
            
                
                    <div class="col-11 col-lg-10 sfondo-risultato shadow rounded-3 border">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-11 col-sm-6 ps-3 my-3">
                                <h2 class="text-white pt-3">Complimenti ${player}!<br>Ce l'hai fatta!</h2>
                                <p class="pb-0 mb-0">${commento} ${commento2}</p>
                                
                                <div class="pt-lg-3 pb-0">
                                    <button id="replay" type="button" class="my-2 my-xxl-4 px-1 px-md-5 btn btn-dark btn-md-lg rounded-pill larghezza-btn">Gioca ancora</button>
                                    <a id="btnNo" href="https://otto78.github.io/hello-world/" target="_blank" class="my-2 my-xxl-4 px-1 px-md-5 btn btn-dark btn-md-lg rounded-pill larghezza-btn"> Torna indietro</a>
                                </div>
                            </div> 
                            
                            <div class="col-11 col-sm-4 my-5 text-center shadowshadow border border-dark rounded-3 m-3 gx-0 justify-content-center bordo-tondo">
                                <div class="d-flex justify-content-evenly">
                                    <h2 class="m-0 py-3 flex-basis text-white border border-dark bg-point-verde">Punti<br><span class="point">${punteggio}</span></h2>
                                    <h2 id="bgErrori" class="m-0 py-3 flex-basis text-white border border-dark">Errori<br><span class="point">${errore}</span></h2>
                                </div>
                                <div class="d-flex justify-content-evenly">    
                                    <h2 id="bgMosse" class="m-0 py-3 flex-basis text-white border border-dark ">Mosse<br><span class="point">${turnoCounter}</span></h2>
                                    <h2 id="bgTempo" class="m-0 py-3 flex-basis text-white border border-dark">Tempo<br><span class="point">${time.textContent}</span></h2>
                                </div>
                            </div>
                        </div>    
                    </div>    
                
            
            `
            board.remove()
            tavolo.append(risultato)

            
            let bgErrori = document.querySelector('#bgErrori')
            let bgMosse = document.querySelector('#bgMosse')
            let bgTempo = document.querySelector('#bgTempo')
            console.log(errore)

            if(errore<1){
                bgErrori.classList.add('bg-point-verde')
            }

            if(errore>=1 && errore<5){
                bgErrori.classList.add('bg-point-giallo')
            }
            if(errore>=5){
                bgErrori.classList.add('bg-point-rosso')
            }


            if(turnoCounter<=2){
                bgMosse.classList.add('bg-point-verde')
            }

            if(turnoCounter>2 && turnoCounter<5){
                bgMosse.classList.add('bg-point-giallo')
            }
            if(turnoCounter>=5){
                bgMosse.classList.add('bg-point-rosso')
            }


            if(time.textContent<'00:10'){
                bgTempo.classList.add('bg-point-verde')
            }

            if(time.textContent>='00:10' && time.textContent<'00:30'){
                bgTempo.classList.add('bg-point-giallo')
            }
            if(time.textContent>='00:30'){
                bgTempo.classList.add('bg-point-rosso')
            }


            
            
            let replay = document.querySelector('#replay')
            replay.addEventListener('click', ()=>{
                board.remove()
                nuovaPartita(player)
                tabellone.classList.remove('d-none')
                
            })
        }

        
    }
}

export {Game}