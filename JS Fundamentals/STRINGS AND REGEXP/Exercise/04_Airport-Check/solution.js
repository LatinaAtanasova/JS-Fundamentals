function solve() {

    let inputString = document.getElementById('str').value;

    let textString = inputString.split(', ');
    let text = textString[0];
    let word = textString.pop();

    let namePattern = / ([A-Z]+([A-Za-z]*)?)(-[A-Z][A-Za-z]*\.)?-([A-Z][A-Za-z]*)? /gm;
    let airportPattern = / ([A-Z]{3})\/([A-Z]{3}) /gm;
    let flightPattern = / [A-Z]{1,3}\d{1,5} /gm;
    let companyPattern = /- ([A-Z]+([A-Za-z]+)?)\*([A-Z]+([A-Za-z]+)?) /gm;

    let nameMatch = text.match(namePattern);
    let airportMatch = text.match(airportPattern);
    let flightMatch = text.match(flightPattern);
    let companyMatch = text.match(companyPattern);

    let resultMessage = '';
    if (nameMatch && word === 'name') {
        let name = nameMatch[0].trim().replace('-', ' ');
        resultMessage = `Mr/Ms, ${name}, have a nice flight!`
    }
    
    if (airportMatch && flightMatch && word === 'flight'){
        let airport = airportPattern.exec(text);
        let from = airport[1];
        let to = airport[2];
        let flight = flightMatch[0].trim();
        resultMessage = `Your flight number ${flight} is from ${from} to ${to}.`

    }

    if (companyMatch && word === 'company'){
        let company = companyPattern.exec(text);
        let firstPart = company[1].trim();
        let secondPart = company[3].trim();

        resultMessage = `Have a nice flight with ${firstPart} ${secondPart}.`;

    }

    if (nameMatch && airportMatch && companyMatch && flightMatch && word === 'all'){
        let name = nameMatch[0].trim().replace('-', ' ');
        let flight = flightMatch[0].trim();
        let airport = airportPattern.exec(text);
        let from = airport[1];
        let to = airport[2];
        let company = companyPattern.exec(text);
        let firstPart = company[1].trim();
        let secondPart = company[3].trim();

        resultMessage = `Mr/Ms, ${name}, your flight number ${flight} is from ${from} to ${to}. Have a nice flight with ${firstPart} ${secondPart}.`
    }
    //console.log(company);
    //console.log(flightMatch);
    //console.log(word)

    let resultEl = document.getElementById('result');
    resultEl.textContent = resultMessage;
}