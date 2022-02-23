class Card {
    constructor(forma, colore ) {
    this.forma = forma;
    this.colore = colore;
    }

    show(){
        let card = document.createElement('div')
        card.classList.add('card-front', 'd-flex', 'justify-content-center', 'align-items-center')

        let shape = document.createElement('div')

        let blu = "#0080fe"
        let giallo = "#da833b"
        let verde = "#DAA520"
        let rosso = "#de0000"
        let viola = "#4a2356"


        if(this.forma == "cerchio"){
        shape.classList.add('cerchio')
        } else {
            shape.classList.add('rombo')
        }

        if(this.colore == "blu"){
            card.style.borderColor = blu
            shape.style.backgroundColor = blu
        }
        if(this.colore == "verde"){
            card.style.borderColor = verde
            shape.style.backgroundColor = verde
        }
        if(this.colore == "rosso"){
            card.style.borderColor = rosso
            shape.style.backgroundColor = rosso
        }
        if(this.colore == "viola"){
            card.style.borderColor = viola
            shape.style.backgroundColor = viola
        }
        if(this.colore == "giallo"){
            card.style.borderColor = giallo
            shape.style.backgroundColor = giallo
        }


        card.append(shape)
        board.append(card)

    }

}

export {Card}