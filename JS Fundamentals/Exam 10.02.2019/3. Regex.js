function solve(arr){

let output = '';

    let pattern = /(<.*?>)+(.*?)<\/.*?>/gm;





    for (let i = 0; i < arr.length; i++) {

        let result = pattern.exec(arr[i])[2];

      console.log(result);


    }


}

solve(['<div><p>This</p> is</div>',
    '<div><a>perfectly</a></div>',
    '<divs><p>valid</p></divs>',
    '<div><p>This</div></p>',
    '<div><p>is not</p><div>']
)

