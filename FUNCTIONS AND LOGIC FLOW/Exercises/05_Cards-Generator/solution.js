function solve() {

    let cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let cardTypes = document.querySelectorAll('#exercise option');
    let hearts = cardTypes[0];
    let spades = cardTypes[1];
    let diamonds = cardTypes[2];
    let clubs = cardTypes[3];

    let heartsCode = (cardTypes[0].textContent).split(' ')[1];
    let spadesCode = (cardTypes[1].textContent).split(' ')[1];
    let diamondsCode = (cardTypes[2].textContent).split(' ')[1];
    let clubsCode = (cardTypes[3].textContent).split(' ')[1];

    let btn = document.querySelector('#exercise button');
    btn.addEventListener('click', getCards);

    function getCards() {
        let fromCard = document.querySelector('#from').value;
        let toCards = document.querySelector('#to').value;



        let startIndex;
        let endIndex;
        for (let i = 0; i < cards.length; i++) {
            if (String(fromCard) === cards[i]) {
                startIndex = i;
            }if (String(toCards) === cards[i]) {
                endIndex = i;
            }
        }

        let code;
        if (spades.selected) {
            code = spadesCode;
        } else if (hearts.selected) {
            code = heartsCode;
        } else if (diamonds.selected) {
            code = diamondsCode;
        } else if(clubs.selected){
            code = clubsCode
        }

        for (let i = startIndex; i <= endIndex; i++) {

            let section = document.getElementById('cards');

            let divEl = document.createElement('div');
            divEl.setAttribute('class', 'card');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');


            divEl.appendChild(p1).innerHTML = code;
            divEl.appendChild(p2).textContent = cards[i];
            divEl.appendChild(p3).innerHTML = code;
            section.appendChild(divEl);

        }

        document.querySelector('#from').value = '';
        document.querySelector('#to').value = '';

    }


}