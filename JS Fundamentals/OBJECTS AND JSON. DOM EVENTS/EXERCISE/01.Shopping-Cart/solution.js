function solve() {
    let products = [];
    let resultArea = document.getElementsByTagName('textarea')[0];

    for (let i = 0; i < 3; i++) {
        let product = document.getElementsByClassName('product')[i];
        let name = product.children[1].innerHTML;
        let price = Number(product.children[2].innerHTML.split(': ')[1]);
        document.getElementsByTagName('button')[i].addEventListener('click', () => {
            products.push({name, price});
            resultArea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
        });
    }

    let buyBtn = document.getElementsByTagName('button')[3].addEventListener('click', () => {
        let productNames = products.map(x => x.name).filter((el, index, arr) => {
            if (arr.indexOf(el) === index){
                return el;
            }
        }).join(', ');
      let totalPrice = products.map(x => x.price).reduce((a, b) => a+b).toFixed(2);

      resultArea.value += `You bought ${productNames} for ${totalPrice}.\n`;

    })


}