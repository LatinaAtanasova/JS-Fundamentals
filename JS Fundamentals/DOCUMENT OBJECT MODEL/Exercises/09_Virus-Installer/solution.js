function solve() {
    let buttons = document.getElementsByTagName('button');

    let nextButton = buttons[0];
    let cancelButton = buttons[1];



    nextButton.addEventListener('click', firstStep);
    cancelButton.addEventListener('click', closeProgram);

    function firstStep() {
        cancelButton.addEventListener('click', closeProgram);

        document.getElementById('content').style.backgroundImage = 'none';
        document.getElementById('firstStep').style.display = 'block';

        let inputEl = Array.from(document.getElementsByName('license'));

        for (let i = 0; i < inputEl.length; i++) {
            if (inputEl[i].checked) {

                nextButton.addEventListener('click', secondStep);


            }
        }
    }

    function secondStep() {
        cancelButton.addEventListener('click', closeProgram);

        let inputEl = Array.from(document.getElementsByName('license'));

        for (let i = 0; i < inputEl.length; i++) {
            if (inputEl[i].checked) {
                document.getElementById('firstStep').style.display = 'none';
                document.getElementById('secondStep').style.display = 'block';
                nextButton.style.display = 'none'
                setTimeout(function () {
                    nextButton.style.display = 'inline';
                }, 3000);

                nextButton.addEventListener('click', thirdStep);
            }
            else{
                nextButton.setAttribute(disabled, 'true');
            }
        }

    }

    function thirdStep() {
        cancelButton.addEventListener('click', closeProgram);

        document.getElementById('secondStep').style.display = 'none';
        document.getElementById('thirdStep').style.display = 'block';
        cancelButton.textContent = 'Finish';

        cancelButton.addEventListener('click', closeProgram);
    }

    function closeProgram() {
        let sectionEl = document.getElementsByTagName('section')[0];
        sectionEl.style.display = 'none';
    }


}