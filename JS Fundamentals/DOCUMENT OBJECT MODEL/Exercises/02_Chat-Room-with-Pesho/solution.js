function solve() {
 let buttons = Array.from(document.getElementsByTagName('button'));
    let input = Array.from(document.getElementsByTagName('input'));

    buttons.forEach((btn) => {
        btn.addEventListener('click', function(event){
            event.target;

            let divElement = document.createElement('div');
            let spanElement = document.createElement('span');
            let paragraphElem = document.createElement('p');

            let senderBtn = event.target.name;

            console.log(senderBtn);
            
            if (senderBtn === 'myBtn') {
                spanElement.textContent = 'Me';
                paragraphElem.textContent = document.getElementById('myChatBox').value;
                divElement.style.textAlign = 'left'
            }
            else if (senderBtn === 'peshoBtn') {
                spanElement.textContent = 'Pesho';
                paragraphElem.textContent = document.getElementById('peshoChatBox').value;
                divElement.style.textAlign = 'right';
            }
            divElement.appendChild(spanElement);
            divElement.appendChild(paragraphElem);


            let chronologyElement = document.getElementById('chatChronology');
            chronologyElement.appendChild(divElement);

            input[0].value = "";
            input[1].value = "";
        } )
    })
}