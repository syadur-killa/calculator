function getPin() {
    const pin =Math.round(Math.random()*10000); 
    const pinString  = pin+'';
    if (pinString.length == 4) {
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin() {
    const pin  = getPin()
    document.getElementById('displayPin').value = pin;
}

document.getElementById('keypad').addEventListener('click', function(event){
    const number =  event.target.innerText;
    const calc =  document.getElementById('typed-numbers')
    if (isNaN(number))  {
        console.log(number)
        if (number == 'C') {
            calc.value = '';
        }
    }
    else {
        const previousCalc = calc.value;
        const newCalc = previousCalc+number;
        calc.value = newCalc;
    }
    
})

function verifyPin() {
    const pin = document.getElementById('displayPin').value ;
    const typed = document.getElementById('typed-numbers').value;
    const success  = document.getElementById('notifyed');
    const faillError  = document.getElementById('failed');

    if (pin == typed) {
        
        success.style.display = 'block';
        faillError.style.display = 'none';
    }
    else{
        
        success.style.display = 'none';
        faillError.style.display = 'block';
    }
}