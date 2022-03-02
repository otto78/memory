import {Card, Mazzo, Player, Game, nuovaPartita} from './game/gioco.js';

let startBtn = document.querySelector('#startBtn');
let tiva = document.querySelector('#tiva')
let btnNo = document.querySelector('#btnNo')
let btnContainer = document.querySelector('#btnContainer')

startBtn.addEventListener('click', ()=>{
    
    startBtn.remove()
    tiva.remove()
    btnNo.remove()

    let input = document.createElement('div')
    input.classList.add("fade-in",);
       
    input.innerHTML=`
    <input class="form-control rounded-pill text-center" type="text" name="name" id="name" placeholder="Dimmi come ti chiami..." autofocus><br>
    <button class="btn btn-dark btn-lg rounded-pill" id="startGame" type="button">Cominciamo</button>
    `
    btnContainer.append(input)

    let startGame = document.querySelector('#startGame')
    let name = document.querySelector('#name')

    startGame.addEventListener('click', ()=>{
        
        input.remove()
        btnContainer.remove()
        let player = name.value
        nuovaPartita(player)

        // let tabellone = document.querySelector('#tabellone')
        // tabellone.classList.replace('d-none', 'fade-in')
        
        let nomeGiocatore = document.querySelector('#nomeGiocatore')
        nomeGiocatore.innerHTML = `${player}`
    })
})


