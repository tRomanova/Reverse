
//entering function
function getValues() {
    let inputSting = document.getElementById('userString').getValues

    let rverseString = reverseString(inputSting);
    displayString(rverseString);
}

//logic function
// reverse a string
function reverseString(userString) {
    //reverse the string

    return ;
}

//view function
function displayString(revString) {
    document.getElementById('results').textContent = revString;
    document.getElementById('alert').classList.remove('invisible');
}