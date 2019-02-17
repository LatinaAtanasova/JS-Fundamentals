function solve(array, command) {

    let commandName = command.split(' ')[0];
    let commandProp = command.split(' ')[1];

    let objList = [];
    let matrix = [];


 //  console.log(objList)

    if (commandName === 'hide' && commandProp === 'header') {

        let matrix = [];

        for (let row = 1; row < array.length; row++) {
            matrix[row] = [];
            for (let col = 0; col < array[row].length; col++) {
                matrix[row][col] = array[row][col]

            }
            //objList.push(obj);
        }

        console.log(matrix);
    }


}

    solve([['name', 'age', 'grade'],
            ['Peter', '25', '5.00'],
            ['George', '34', '6.00'],
            ['Marry', '28', '5.49']],
        'hide header'
    )