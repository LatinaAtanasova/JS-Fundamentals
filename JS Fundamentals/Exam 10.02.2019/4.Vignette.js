function solve(arr) {
    //let input = JSON.parse(arr);
    //console.log(arr);

    let maxProfit = 0;
    let maxTown = '';


    let profit = 0;
    let townG = '';

///let data = arr.filter(k => k.town === 'Varna');

    let o = {}
    let result = arr.reduce(function(r, e) {
        let key = e.town;
        if (!o[key]) {
            o[key] = e;
            r.push(o[key]);
        } else {
            o[key].value += e.value;
        }
        return r;
    }, []);

    console.log(result)
   //console.log(maxProfit);

}

solve([{model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2},
    {model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8},
    {model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9},
    {model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3},
    {model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3}]
)