function solve(arr){

    let closure = (function (){
        let word = '';
            return {
             append: (str) => word += str,
             removeStart: (n) => word = word.slice(n),
             removeEnd: (n) => word = word.slice(0, word.length-n),
             print: () => console.log(word)
         }
    })();

    for (let line of arr) {
        let command = line.split(' ')[0];
        let arg = line.split(' ')[1];

        closure[command](arg);
    }
}

solve(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
)

