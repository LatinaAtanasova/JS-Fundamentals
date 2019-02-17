let manager = (function () {

    const ingredientObj = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipeObj = {
        'apple': {carbohydrate: 1, flavour: 2},
        'coke': {carbohydrate: 10, flavour: 20},
        'burger': {carbohydrate: 5, fat: 7, flavour: 3},
        'omelet': {protein: 5, fat:1, flavour:1},
        'cheverme': {protein: 10, fat: 10, flavour:10, carbohydrate:10}
    };

    let prepareRecipe = function (recipe, neededquantity) {
        let ingredients = Object.entries(recipeObj[recipe]);
        for (const [ing, qua] of ingredients) {
            let ingredientStored = ingredientObj[ing];
            let ingredNeeded = qua*neededquantity;
            if (ingredientStored < ingredNeeded){
                return `Error: not enough ${ing} in stock `;
            }
        }
        for (const [ing, qua] of ingredients) {
            ingredientObj[ing] -= qua * neededquantity;
        }
        return `Success`;
    };
    
    return function (input) {
        let tokens = input.split(' ');
        let command = tokens[0];
        
        if (command === 'restock'){
            let quantity = Number(tokens[2]);
            let element = tokens[1];
            ingredientObj[element] += quantity;
            return `Success`;
        }else if(command === 'prepare'){
            return prepareRecipe(tokens[1], Number(tokens[2]))
        }else if(command === 'report'){
            return Object.entries(ingredientObj)
                .map((kvp) => `${kvp[0]}=${kvp[1]}`)
                .join(' ');
        }
    }
    
})();

console.log(manager("prepare cheverme 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare cheverme 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare cheverme 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare cheverme 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare cheverme 1"));
console.log(manager("report"));
