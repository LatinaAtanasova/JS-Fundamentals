function solve() {
    let finalResult = 0;

    let buttons = Array.from(document.getElementsByTagName('button'));
    let sections = Array.from(document.getElementsByTagName('section'));

    let firstQestionBtn = buttons[0];
    firstQestionBtn.addEventListener('click', (e) =>{
        e.target;

        let test1 = Array.from(document.getElementsByName('softUniYear'));

        for (let i = 0; i < test1.length; i++) {
            if (test1[i].checked) {
                let answer = test1[i].value;
                if (answer === '2013'){
                    finalResult +=1;
                }
            }
        }

        sections[1].classList.remove('hidden');

        let secondQuestionBtn = buttons[1];
        secondQuestionBtn.addEventListener('click', (e) =>{
            e.target;

            let test2 = Array.from(document.getElementsByName('popularName'));

            for (let i = 0; i < test2.length; i++) {
                if (test2[i].checked) {
                    let answer = test2[i].value;
                    if (answer === 'Pesho'){
                        finalResult +=1;
                    }
                }
            }

            sections[2].classList.remove('hidden');
        })

        let thirdQuestionBtn = buttons[2];
        thirdQuestionBtn.addEventListener('click', (e) => {
            e.target;

            let test3 = Array.from(document.getElementsByName('softUniFounder'));

            for (let i = 0; i < test3.length; i++) {
                if (test3[i].checked) {
                    let answer = test3[i].value;
                    if (answer === 'Nakov'){
                        finalResult +=1;
                    }
                }
            }

            let resultElement = document.getElementById('result');

            if (finalResult === 3){
                resultElement.textContent = `You are recognized as top SoftUni fan!`
            }
            else{
                resultElement.textContent = `You have ${finalResult} right answers`
            }
        })


    })

}