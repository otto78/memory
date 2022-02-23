class Card {
    constructor(forma, colore ) {
    this.forma = forma;
    this.colore = colore;
    }

    show(){
        let card = document.createElement('div')
        card.classList.add('card-front', 'd-flex', 'justify-content-center', 'align-items-center')

        let shape = document.createElement('div')

        if(this.forma == "cerchio"){
        shape.classList.add('cerchio')
        } else {
            shape.classList.add('rombo')
        }
        card.append(shape)
        tavolo.append(card)

    }

}

export {Card}