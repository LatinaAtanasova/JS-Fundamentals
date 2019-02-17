function solve(arr){
    //1. sort by length
   //2. sort alphabetically

    let sorted = arr.sort((a, b) =>{
        return a.length - b.length || a.localeCompare(b);
    });

    console.log(sorted.join('\n'));

}

solve(['test',
    'Deny',
    'omen',
    'Default']
)