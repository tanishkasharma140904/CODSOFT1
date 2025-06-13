let updateCalculation = localStorage.getItem('updateCalculation') || '';

function buttonValue(digit) {
    if (digit === '=') {
        updateCalculation = eval(updateCalculation);
        localStorage.setItem('updateCalculation', updateCalculation);
        inputValue();
    }
    else if (digit === 'Clear') {
        updateCalculation = '';
        localStorage.removeItem('updateCalculation')
        localStorage.removeItem('updateCalculation1')
        document.querySelector('input').value = 0;
    }
    else {
        updateCalculation += digit;
        //yha hamlog stringify isiliye nai kar rhey kyunki ham already string me deal kar rhey yha aur eval function v string ko math me convert krta hai evaluate krta hai fir vapas string me convert krta h
        inputValue();
    }

    return 0;

}
function inputValue() {
    const input = document.querySelector('input');
    input.value = updateCalculation;
}

window.onload = function () {
    inputValue();
}
