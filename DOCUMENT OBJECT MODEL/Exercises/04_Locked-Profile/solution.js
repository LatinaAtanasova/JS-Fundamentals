function solve() {
    let buttons = document.getElementsByTagName('button');
    let profiles = document.getElementsByClassName('profile');
    let inputs = document.getElementsByTagName('input');

//user 1
    let buttonUser1 = buttons[0];
    let radioUser1Unlocked = document.getElementsByName('user1Locked')[1];
    let user1HiddenSection = document.getElementById('user1HiddenFields');

    let buttonUser2 = buttons[1];
    let radioUser2Unlocked = document.getElementsByName('user2Locked')[1];
    let user2HiddenSection = document.getElementById('user2HiddenFields');

    let buttonUser3 = buttons[2];
    let radioUser3Unlocked = document.getElementsByName('user3Locked')[1];
    let user3HiddenSection = document.getElementById('user3HiddenFields');



    buttonUser1.addEventListener('click', () => {
        if (radioUser1Unlocked.checked) {
            user1HiddenSection.style.display = 'block';
            buttonUser1.textContent = "Hide it";
            hideIt(radioUser1Unlocked, user1HiddenSection, buttonUser1)
            console.log(buttonUser1.textContent);

        }
    });

    buttonUser2.addEventListener('click', () => {
        if (radioUser2Unlocked.checked) {
            user2HiddenSection.style.display = 'block';
            buttonUser2.textContent = "Hide it";
            hideIt(buttonUser2, radioUser2Unlocked, user2HiddenSection);

        }
    });

    buttonUser3.addEventListener('click', () => {
        if (radioUser3Unlocked.checked) {
            user3HiddenSection.style.display = 'block';
            buttonUser3.textContent = "Hide it";
            hideIt(buttonUser3, radioUser3Unlocked, user3HiddenSection);

        }
    });

    function hideIt(radioButton, section, button) {
        button.addEventListener('click', () => {
            if (radioButton.checked) {
                section.style.display = 'none';
                button.textContent = "Show more";
                showMore(radioButton, section, button);
            }
        })
    };
    function  showMore(radioButton, section, button) {
        button.addEventListener('click', () =>{
            if (radioButton.checked) {
                section.style.display = 'block';
                button.textContent = "Hide it";
                hideIt(radioButton, section, button)
            }
        })
    };

}

