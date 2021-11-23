const loginBtn = document.getElementById("loginClick")
loginBtn.addEventListener("click", function () {
    const login = document.getElementById("login");
    login.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
    const name = document.getElementById("name1").value;
    document.getElementById("name").innerText = name;
})

//deposit button handler
const depositBtn = document.getElementById("addDeposit")
depositBtn.addEventListener("click", function () {
    const depositAmount = document.getElementById("depositAmount").value;
    if (depositAmount == "" || depositAmount < 0)
    {
        alert("Please write a valid amount");
        depositAmount = 0;
    }
    const depositNumber = parseFloat(depositAmount);
    const currentDeposit = document.getElementById("currentDeposit").innerText;
    // console.log(currentDeposit);
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = currentDepositNumber + depositNumber;


    document.getElementById("currentDeposit").innerText = totalDeposit;

    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById("currentBalance").innerText = totalBalance;

    document.getElementById("depositAmount").value = "";
})

//withdraw button handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    if (withdrawAmount == "" || withdrawAmount < 0) 
    {
        alert("Please write a valid amount")
        withdrawAmount = 0;
    }
    const withdrawAmountNumber = parseFloat(withdrawAmount);

    const currentWithdraw = document.getElementById("currentWithdraw").innerText;
    const currentWithdrawNumber = parseFloat(currentWithdraw);
    const totalwithdraw = withdrawAmountNumber + currentWithdrawNumber;

    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber - withdrawAmountNumber;
    if (totalBalance < 0 ){
        alert("Your balance is not sufficient")
        totalwithdraw = currentWithdrawNumber;
        totalBalance = currentBalanceNumber;
    }
    document.getElementById("currentWithdraw").innerText = totalwithdraw;
    document.getElementById("currentBalance").innerText = totalBalance;

    document.getElementById("withdrawAmount").value = "";

})