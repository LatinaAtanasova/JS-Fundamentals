function solve() {
    document.getElementsByTagName('button')[0].addEventListener('click', (event) => {
        event.preventDefault();
        let userName = document.getElementsByClassName('user-info')[0].children[1].value;
        //let password = document.getElementsByClassName('user-info')[0].children[3].value;
        let email = document.getElementsByClassName('user-info')[0].children[5].value;


        let checkboxes = Array.from(document.getElementsByClassName('topics')[0].children)
            .filter(el => el.checked)
            .map(el => el.value);

        let tr = document.createElement('tr');
        let tdUserName = document.createElement('td');
        tdUserName.innerHTML = userName;
        let tdEmail = document.createElement('td');
        tdEmail.innerHTML = email;
        let tdTopics = document.createElement('td');
        tdTopics.innerHTML = checkboxes.join(' ');

        tr.appendChild(tdUserName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdTopics);

        let tBody = document.getElementsByTagName('tbody')[0];
        tBody.appendChild(tr);
    });
    document.getElementsByTagName('button')[1].addEventListener('click', () => {
        let searchText = document.getElementsByTagName('input')[7].value;
        let tableInfo = Array.from(document.getElementsByTagName('td'));
        for (let i = 0; i < tableInfo.length; i++) {
            if (tableInfo[i].innerHTML.includes(searchText)) {
                console.log(tableInfo[i].parentElement);
                tableInfo[i].parentElement.style.visibility = 'visible';
            } else {
                tableInfo[i].parentElement.style.visibility = 'hidden';
            }
        }
    });
}