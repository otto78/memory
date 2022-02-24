class Card {

    constructor(forma, colore ) {
        this.forma = forma;
        this.colore = colore;
    }

    show(){
    
    let card = document.createElement('div')
    card.classList.add('card', 'card-back', 'd-flex', 'justify-content-center', 'align-items-center')
    
    let cardLogo = document.createElement('div')
    cardLogo.classList.add('card-logo')
    
        card.append(cardLogo)
        board.append(card)
        

        card.addEventListener('click', ()=>{

            card.classList.toggle('card-back')
            card.classList.toggle('card-front')
            cardLogo.classList.toggle('card-logo')
            
            //Forma
            if(this.forma == "cerchio"){
                cardLogo.classList.toggle('cerchio')
            }

            if(this.forma == "rombo"){
                cardLogo.classList.toggle('rombo')
            }
            
            // Colore
            if(this.colore == "blu"){
                card.classList.toggle('border-blu')
                cardLogo.classList.toggle('shape-blu')
            }

            if(this.colore == "verde"){
                card.classList.toggle('border-verde')
                cardLogo.classList.toggle('shape-verde')
            }

            if(this.colore == "rosso"){
                card.classList.toggle('border-rosso')
                cardLogo.classList.toggle('shape-rosso')
            }

            if(this.colore == "viola"){
                card.classList.toggle('border-viola')
                cardLogo.classList.toggle('shape-viola')
            }

            if(this.colore == "giallo"){
                card.classList.toggle('border-giallo')
                cardLogo.classList.toggle('shape-giallo')
            }

            
           
        })


    }

    showBack(){

        let cardBack = document.createElement('div')
        cardBack.classList.add('card', 'card-back','d-flex', 'justify-content-center', 'align-items-center')

        let cardLogo = document.createElement('div')
        cardLogo.classList.add('card-logo')
        
        cardBack.append(cardLogo)
        board.append(cardBack)

    }

    

}

export {Card}