document.getElementById('addmoneybtn').addEventListener('click', function(Add){
    Add.preventDefault();

    const bank = document.getElementById('selectBank').value;
    const acount = document.getElementById('accountNumber').value;
    const amount = parseInt(document.getElementById('addAmount').value);
    const pass = document.getElementById('password').value;
    const validpin = 1234;
    
if(acount.length < 11){
    alert('Invalid Account Number')
    return;
}
if(pass != validpin){
    alert('Invalid Pin')
    return;
}


    const displayAmount = parseInt(document.getElementById('money').innerText);
    const newBalance = amount + displayAmount;

    document.getElementById('money').innerText = newBalance;
    
})