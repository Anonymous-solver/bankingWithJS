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
    const withdrawAmountNumber = parseFloat(withdrawAmount);

    const currentWithdraw = document.getElementById("currentWithdraw").innerText;
    const currentWithdrawNumber = parseFloat(currentWithdraw);
    const totalwithdraw = withdrawAmountNumber + currentWithdrawNumber;
    document.getElementById("currentWithdraw").innerText = totalwithdraw;

    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber - withdrawAmountNumber;
    document.getElementById("currentBalance").innerText = totalBalance;

    document.getElementById("withdrawAmount").value = "";

})