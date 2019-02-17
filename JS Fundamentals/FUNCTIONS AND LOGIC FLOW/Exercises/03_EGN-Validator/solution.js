function validate() {

    let validateBtn = document.querySelector('#exercise>div>button');
    validateBtn.addEventListener('click', getEGN)

    let egn;

    function getEGN() {

        let year = document.querySelector('#exercise > table > tbody > tr > td > input').value;

        let months = document.querySelector('#exercise > table > tbody > tr > td > select');
        let monthValue = months.options[months.selectedIndex].value;

        let date = document.getElementById('date').value;

        let genders = document.getElementsByName('gender');
        let gender;
        for (let i = 0; i < genders.length; i++) {
            if (genders[i].checked) {
                gender = genders[i].value;
            }
        }

        let region = document.getElementById('region').value;

        function checkYear(year) {
            //Valid year is between 1900 and 2100 (including);
            if (year >= 1900 && year <= 2100) {
                return year.slice(2);
            }
        }

        function checkMonth() {
            months = {
                January: '01',
                Fabruary: '02',
                March: '03',
                April: '04',
                May: '05',
                June: '06',
                July: '07',
                August: '08',
                September: '09',
                October: '10',
                November: '11',
                December: '12',
            }
            return months[monthValue];
        }

        function checkDate(date) {

            if (date > 0 && date < 32) {
                if (date.length < 2) {
                    return '0' + String(date);
                } else {
                    return String(date);
                }

            }
        }


        function checkRegion(regionCode) {
            //Valid regional code is between 43 and 999 (including);
            if (regionCode >= 43 && regionCode <= 999) {
                return regionCode.slice(0, 2);
            }
        }

        function getGender(gender) {
            if (gender.toLowerCase() === 'male') {
                return 2;
            } else {
                return 1;
            }
        }

        function checkNumber() {
            let inputNumbers = (checkYear(year)) + checkMonth(monthValue) + checkDate(date) + checkRegion(region) + getGender(gender);
            let sum = 0;

            let weightArray = [2, 4, 8, 5, 10, 9, 7, 3, 6];

            for (let i = 0; i < 9; i++) {
                sum += Number(inputNumbers[i]) * Number(weightArray[i]);
            }

            let remainder = sum % 11;
            if (remainder === 10) {
                remainder = 0
            }

            return String(remainder);

        }


        egn = checkYear(year) + checkMonth(monthValue) + checkDate(date) + checkRegion(region) + getGender(gender) + checkNumber();
        let p = document.createElement('p');

        p.innerHTML = `Your EGN is: ${egn}`;
        document.getElementById('egn').appendChild(p);


    }
}