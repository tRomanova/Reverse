
//entering function
function getValues() {
    let inputSting = document.getElementById('userString').value

    let revString = reverseString(inputSting);
    displayString(revString);
}

//logic function
// reverse a string
function reverseString(userString) {
    //reverse the string
    let newSring = ''

    for (let i = userString.length -1; i >= 0; i--) {
        // let currentLetter = userString;
        // newSring = currentLetter;

        newSring += userString[i];
    }

    return newSring;
}

//view function
function displayString(revString) {
    document.getElementById('results').textContent = revString;
    document.getElementById('alert').classList.remove('invisible');
}