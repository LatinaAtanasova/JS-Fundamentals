function solve(arr) {
    let keys = arr[0].split(' ').filter(x => x.length > 1);

let objArr = [];

    for (let i = 1; i < arr.length; i++) {
        let info = arr[i].split(' ').filter(x => x.length > 1);

        let obj = {};
        for (let j = 0; j < info.length; j++) {

            obj[keys[j]] = info[j];
           // console.log(obj);
        }
        objArr.push(JSON.stringify(obj));

    }
    console.log(objArr);

}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)