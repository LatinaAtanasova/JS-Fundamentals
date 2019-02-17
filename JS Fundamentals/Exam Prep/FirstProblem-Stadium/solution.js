function solve() {
    let buttons = document.getElementsByClassName('seat');
    Array.from(buttons).forEach(btn => {
        btn.addEventListener('click', booking);
    });

    let textarea = document.getElementById('output');

    let buutonSummary = document.getElementById('summary').addEventListener('click', summary);

    let obj = {
        'Levski': {
            'A': 10,
            'B': 7,
            'C': 5
        },
        'Litex': {
            'A': 10,
            'B': 7,
            'C': 5
        },
        'VIP': {
            'A': 25,
            'B': 15,
            'C': 10
        },
        'summery':{
            'fans': 0,
            'profit': 0
        }
    };
    function booking(e){
        let seat = e.target;
        let num = seat.innerHTML;
        let zone = seat.parentNode.parentNode.parentNode.parentNode.parentNode.className;
        let sector = String.fromCharCode(65 + seat.parentNode.cellIndex);
        
        let price = obj[zone][sector];

        if (seat.style.backgroundColor === ''){
            seat.style.backgroundColor = 'rgb(255,0,0)';
            textarea.value += ` Seat ${num} in zone ${zone} sector ${sector} was taken.\n`;
            obj.summery.profit += price;
            obj.summery.fans += 1;
        }
        else{
            textarea.value += ` Seat ${num} in zone ${zone} sector ${sector} is unavailable.\n`;
        }


    };

    function summary(){
        let spanArea = document.getElementById('summary').children[1];
        spanArea.textContent = `${obj.summery.profit} leva, ${obj.summery.fans} fans.`;

    }
}