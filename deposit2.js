document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const withdrawFieldAmmount = parseFloat(withdrawFieldString);

    const withdrawAmmount = document.getElementById('withdraw-ammount');
    const withdrawAmmountString = withdrawAmmount.innerText;
    const withdrawAmmountTotal = parseFloat(withdrawAmmountString);

    const currentDeposittotal = withdrawAmmountTotal + withdrawFieldAmmount;
    withdrawAmmount.innerText = currentDeposittotal;

    withdrawField.value = '';

    const balanceAmmount = document.getElementById('balance-ammount');
    const balanceAmmountString = balanceAmmount.innerText;
    const balanceAmmountPrevious = parseFloat(balanceAmmountString);

    const currentBalanceTotal = balanceAmmountPrevious - withdrawFieldAmmount;
    balanceAmmount.innerText = currentBalanceTotal;
})