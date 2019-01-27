function solve() {
    let button = document.getElementById('searchBtn');



    button.addEventListener('click', (e) => {
        e.target;


        let fields = Array.from(document.getElementsByTagName('td'));
        Array.from(document.getElementsByTagName('td')).forEach( x=> x.parentElement.removeAttribute('class'));
        for (let i = 0; i < fields.length; i++) {

            let expression = document.getElementById('searchField').value;



            if (fields[i].textContent.includes(expression)) {

                let parentElement = fields[i].parentElement;
                parentElement.setAttribute('class', 'select')
            }}

        document.getElementById('searchField').value = "";

    });


};