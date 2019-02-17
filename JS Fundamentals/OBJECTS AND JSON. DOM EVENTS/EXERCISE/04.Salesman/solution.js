function solve() {
    let products = [];
    let profit = 0;

    document.getElementsByTagName('button')[0].addEventListener('click', load);

    function load() {
        let input = JSON.parse(document.getElementsByTagName('textarea')[0].value);
        let arrInput = Array.from(input);
        for (let product of arrInput) {
            if (products.length === 0) {
                let obj = product;
                products.push(obj);
                document.getElementsByTagName('textarea')[2].innerHTML = `Successfully added ${obj.quantity} ${obj.name}. Price: ${obj.price}\n`;
            } else {
                for (let pro of products) {
                    let obj = product;

                    if (pro.name === obj.name) {

                        pro.quantity += obj.quantity;
                        pro.price = obj.price;
                    } else {
                        products.push(obj);
                        document.getElementsByTagName('textarea')[2].innerHTML += `Successfully added ${obj.quantity} ${obj.name}. Price: ${obj.price}\n`;
                    }
                }
            }
        }
    }

    document.getElementsByTagName('button')[1].addEventListener('click', buy);

    function buy() {
        let proToBuy = JSON.parse(document.getElementsByTagName('textarea')[1].value);

        for (let product of products) {
            if (product.name === proToBuy.name && product.quantity >= proToBuy.quantity) {
                product.quantity -= proToBuy.quantity;

                //let index = products.indexOf(product);
                //products.splice(index,1);

                let paid = Number(proToBuy.quantity) * Number(product.price);
                profit += paid;

                document.getElementsByTagName('textarea')[2].innerHTML += `${proToBuy.quantity} ${proToBuy.name} sold for ${paid}.\n`;
                return;

            } else {
                document.getElementsByTagName('textarea')[2].innerHTML += `Cannot complete order.\n`;
                return;
            }
        }

    };

    document.getElementsByTagName('button')[2].addEventListener('click', () => {
        document.getElementsByTagName('textarea')[2].innerHTML += `Profit: ${profit.toFixed(2)}.\n`;

        document.getElementsByTagName('button')[0].removeEventListener('click', load);
        document.getElementsByTagName('button')[1].removeEventListener('click', buy);

    });
}
