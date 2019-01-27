function solve() {
	let buttons = document.getElementsByTagName('button');
	let textAreas = document.getElementsByTagName('textarea');

	buttons[0].addEventListener('click', encode);
	buttons[1].addEventListener('click', decode);

	function encode(){
	    let encodedMessage = textAreas[0].value;
	    let newMessage = "";

        encodedMessage.split('').forEach((char) => {
            let asciValue = char.charCodeAt(0) + 1;
            newMessage += String.fromCharCode(asciValue);
        });
        textAreas[0].value = "";
        textAreas[1].value = newMessage;
    }

    function decode(){
	    let decodedMessage = textAreas[1].value;
	    let newMessage = "";

	    decodedMessage.split('').forEach((char) => {
	        let asciValue = char.charCodeAt(0) - 1;
	        newMessage += String.fromCharCode(asciValue);
        })
	    textAreas[1].value = newMessage;
    }
}