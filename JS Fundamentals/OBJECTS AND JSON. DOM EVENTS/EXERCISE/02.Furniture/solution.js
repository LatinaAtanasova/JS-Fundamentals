function solve() {

    let buttons = document.querySelectorAll('#exercise button');


    let boughtFurniture = [];
    let totalPrice = 0;
    let decFactor = [];

    let generateButton = buttons[0].addEventListener('click', () => {
        let textAreas = document.getElementsByTagName('textarea');
        let input = JSON.parse(textAreas[0].value);

        for (let furniture of input) {
            let furnitureDiv = document.getElementById('furniture-list');

            let divEl = document.createElement('div')
            divEl.setAttribute('class', 'furniture');
            furnitureDiv.appendChild(divEl);
            let pName = document.createElement('p');
            pName.innerHTML = `Name: ${furniture.name}`;
            let imageEl = document.createElement('img');
            imageEl.setAttribute('src', furniture.img);
            let priceP = document.createElement('p');
            priceP.innerHTML = `Price: ${furniture.price}`;
            let decorP = document.createElement('p');
            decorP.innerHTML = `Decoration factor: ${furniture.decFactor}`;
            let checkBox = document.createElement('input');
            checkBox.setAttribute('type', 'checkbox');
            divEl.appendChild(pName);
            divEl.appendChild(imageEl);
            divEl.appendChild(priceP);
            divEl.appendChild(decorP);
            divEl.appendChild(checkBox);
        }
    });

    let buyButton = buttons[1].addEventListener('click', () =>{

        let furnitureList = Array.from(document.getElementById('furniture-list').children);
        for (let line of furnitureList){
            let args = line.children;
            if (args[4].checked === true){
                let name = args[0].innerHTML.split(': ')[1];
                boughtFurniture.push(name);
                totalPrice += Number(args[2].innerHTML.split(': ')[1]);
                decFactor.push(Number(args[3].innerHTML.split(': ')[1]));

            }
        }


        document.getElementsByTagName('textarea')
        let resultEl = '';

        resultEl += `Bought furniture: ${boughtFurniture.join(', ')}\n`;
        resultEl += `Total price: ${totalPrice.toFixed(2)}\n`;
        let decF = decFactor.reduce((a, b) => a+b)/decFactor.length;
        resultEl += `Average decoration factor: ${decF}`;
        document.getElementsByTagName('textarea')[1].value = resultEl;

    })

}