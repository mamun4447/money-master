function getValueFromInputField(id) {
    const Field = document.getElementById(id);
    const String = Field.value;
    const value = parseFloat(String);
    Field.value = "";

    return value;
}

function getElementFromTextField(id) {
    const textElement = document.getElementById(id);

    return textElement;
}

document.getElementById("calculate").addEventListener("click", function() {
    //Function call for income Value
    const income = getValueFromInputField("income");

    //Function call for Food Value
    const food = getValueFromInputField("food");
    //Function call for Rent Value
    const rent = getValueFromInputField("rent");
    //Function call for cloth Value
    const cloths = getValueFromInputField("cloths");

    // Total Expense
    const totalExpense = food + rent + cloths;
    const balance = income - totalExpense;

    if (income < 0) {
        alert("Broh! First earn money then come to expense!!");
    } else {
        if (totalExpense > income) {
            alert("Your expense is greater then your income!!!");
        } else if (totalExpense < 0) {
            alert("Expense can't be minus!!");
        } else {
            getElementFromTextField("total-expense").innerText = totalExpense;
            getElementFromTextField("balance").innerText = balance;
        }
    }

    // Savings Button
    const sbalance = getElementFromTextField("balance").innerText;
    const balances = parseFloat(sbalance);
    document.getElementById("saveBtn").addEventListener("click", function() {
        // savings Fields value
        const save = getValueFromInputField("saveInput") / 100;
        const savings = save * income;
        const remaining = balances - savings;

        if (savings < balances) {
            getElementFromTextField("saving-amount").innerText = savings;
            getElementFromTextField("remaining-amount").innerText = remaining;
        } else {
            alert("You don't have enough balance!!");
        }
    });
});