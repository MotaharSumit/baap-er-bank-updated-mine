document.getElementById('Deposit-btn').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputFieldString = inputField.value;
    const inputFieldAmmount = parseFloat(inputFieldString);
    
    const textAmmount = document.getElementById('deposit-ammount');
    const textAmmountString = textAmmount.innerText;
    const textAmmountMain = parseFloat(textAmmountString);

    const cuurentDepositTotal = inputFieldAmmount + textAmmountMain;
    textAmmount.innerText = cuurentDepositTotal;

    inputField.value='';

    const balanceAmmount = document.getElementById('balance-ammount');
    const balanceAmmountString = balanceAmmount.innerText;
    const balanceAmmountPrevious = parseFloat(balanceAmmountString);

    const currentBalanceTotal = balanceAmmountPrevious + inputFieldAmmount;
    balanceAmmount.innerText = currentBalanceTotal;
})