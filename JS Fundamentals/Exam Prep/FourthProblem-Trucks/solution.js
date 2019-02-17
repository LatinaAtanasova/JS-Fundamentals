function solve() {
    let buttons = document.getElementsByTagName('button');

    buttons[0].addEventListener('click', addTruck);
    buttons[1].addEventListener('click', addNewTires);
    buttons[2].addEventListener('click', goToWork);
    buttons[3].addEventListener('click', endOfShift);

    let sections = document.getElementsByTagName('section');

    let obj = {
        'backUpTires': []
    };

    let testTires;

    function addTruck() {
        let plateNumber = document.getElementById('newTruckPlateNumber').value;
        let tires = document.getElementById('newTruckTiresCondition').value.split(' ').map(Number);

        if (!obj[plateNumber]) {
            obj[plateNumber] = {
                tires,
                'distance': 0
            }

            let el = createElement('div', plateNumber, 'truck');
            let divEl = sections[1].getElementsByTagName('div')[1];
            divEl.appendChild(el);
        }
    }

    function addNewTires() {
        let newTires = document.getElementById('newTiresCondition').value.split(' ').map(Number);
        obj.backUpTires.push(newTires);
        let el = createElement('div', newTires.join(' '), 'tireSet');
        let divEl = sections[1].getElementsByTagName('div')[0];
        divEl.appendChild(el);


    }


    function goToWork() {
        let workPlateNumber = document.getElementById('workPlateNumber').value;
        let workDistnace = Number(document.getElementById('distance').value);
        if (obj.hasOwnProperty(workPlateNumber)) {
            let result = areTiresGoodEnough(obj[workPlateNumber].tires, workDistnace);
            if (result) {
                obj[workPlateNumber].tires = testTires;
                obj[workPlateNumber].distance += workDistnace;
            } else {
                if (obj.backUpTires.length > 0) {
                    let backTires = obj.backUpTires[0];

                    let result = areTiresGoodEnough(backTires, workDistnace);
                    if (result) {
                        obj[workPlateNumber].tires = testTires;
                        obj[workPlateNumber].distance += workDistnace;

                    }
                    obj.backUpTires.shift();
                    let divEl = document.querySelector('div.tireSet');
                    divEl.remove();

                }
            }
        }
    }

    function areTiresGoodEnough(tires, distance) {
        let n = distance / 1000;
        testTires = [];

        //let result = true;
        for (let i = 0; i < tires.length; i++) {
            let testResult = tires[i] - n;
            testTires.push(testResult);

            if (testResult <= 0) {
                testTires = [];
                return false;
            }

        }
        return true;
    }

    function endOfShift() {
        let textArea = document.getElementsByTagName('textarea')[0];
        Object.keys(obj).filter(el => el !== 'backUpTires').forEach( k => {
            textArea.value += `Truck ${k} has traveled ${obj[k].distance}.\n`;
        });
        textArea.value += `You have ${obj.backUpTires.length} sets of tires left.\n`;

    }

    function createElement(type, text, className) {
        let el = document.createElement(type);
        el.textContent = text;
        el.setAttribute('class', className);
        return el;
    }


}

