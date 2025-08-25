document.getElementById('loginbtn').addEventListener('click', function(login){
    login.preventDefault;
    const fixedNumber = 12345678910;
    const fixedPin = 1234;
    
    const mobileNumberValue = document.getElementById('mobile-number').value;
    const convertedMobileValue = parseInt(mobileNumberValue);
    
    const pinNumberValue = document.getElementById('pin-number').value;
    const convertedPinNumber = parseInt(pinNumberValue);
    
    if (convertedMobileValue === fixedNumber && convertedPinNumber === fixedPin) {
        window.location.href = "./AddMoney.html"
    }
    else{
        alert('Invalid Credentials');
    }
})