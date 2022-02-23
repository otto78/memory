import {Card, Mazzo, Player, Game, nuovaPartita} from './game/gioco.js';

let startBtn = document.querySelector('#startBtn');
let btnContainer = document.querySelector('#btnContainer')
let tavolo = document.querySelector('#tavolo')

startBtn.addEventListener('click', ()=>{
    
    startBtn.remove()

    let input = document.createElement('div')
    input.classList.add("fade-in",);
       
    input.innerHTML=`
    <input class="form-control rounded-pill text-center" type="text" name="name" id="name" placeholder="Dimmi come ti chiami...">
    <button class="btn btn-dark rounded-pill my-2" id="startGame" type="button">Cominciamo</button>
    `
    btnContainer.append(input)


    let startGame = document.querySelector('#startGame')
    let name = document.querySelector('#name')

    startGame.addEventListener('click', ()=>{
        
        input.remove()
        let player = name.value
        nuovaPartita(player)

        let playerDiv = document.createElement('div')
        playerDiv.classList.add('m-4', 'text-center', 'points', 'fade-in')
        playerDiv.innerHTML =`
            <p><span class="mx-3">${player}</span>0<span class="mx-2">|</span>0<span class="mx-3">Computer</span></p>
            
        `
        tavolo.after(playerDiv)

    
    })


})


