function solve(func){
    return (value) => {
        return func(',', '$', true, value);
    }
}


let dollarFormatter = solve(function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
});
console.log(dollarFormatter(5));






