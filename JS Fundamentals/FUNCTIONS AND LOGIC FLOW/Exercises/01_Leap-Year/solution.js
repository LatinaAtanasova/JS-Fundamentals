function leapYear() {
    let checkBtn = document.getElementsByTagName('button')[0];
    checkBtn.addEventListener('click', (e) => {
        e.target;

        let year = Number(document.getElementsByTagName('input')[0].value);
        let yearDiv = document.getElementById('year');


        let childDiv = document.querySelector('#year div');
        let h2El = document.querySelector('#year h2');
        childDiv.innerHTML = year;

        function checkLeapYear(year) {
            return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
        }

        let result = checkLeapYear(year);
        let message;

        if (result === false) {
            message = `Not Leap Year`;
        } else {
            message = `Leap Year`;
        }

        h2El.innerHTML = message;
        document.getElementsByTagName('input')[0].value = '';

    })


}