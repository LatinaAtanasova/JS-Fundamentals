function solve(){
    let summary = {};

    for (let argument of arguments) {
        let type = typeof argument;

        console.log(`${type}: ${argument}`);

        if (!summary[type]){
            summary[type] = 1
        } else{
            summary[type] ++;
        }

    }
    let sortedTypes = [];
    for (let currentType in summary){
        sortedTypes.push([currentType, summary[currentType]]);
    }
    Array.from(sortedTypes)
        .sort((a, b) => b[1] - a[1])
        .forEach(e => console.log(`${e[0]} = ${e[1]}`))

}
solve('cat', 42, function () { console.log('Hello world!'); })