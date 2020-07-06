    // The button in the HTML calls this function
function calculateTip() {
    var billAmount = parseFloat(document.getElementById("billAmount").value);
    var taxRate = parseFloat(document.getElementById("taxRate").value);
    var outputTax = (billAmount) * (taxRate)/100;

    document.getElementById("outputBillAmount").textContent= toDollars(billAmount);
    document.getElementById("outputTax").textContent = toDollars(outputTax);

    var outputTip;
    var radios = document.getElementsByName("quality");
    // if iterating through an array, we will never use <= or >=
    // getElementsByName will return an array Always
    for (var i = 0; i < radios.length; i++ ) {
        const radio = radios[i];
        if (radio.checked === true) {
            outputTip = billAmount * parseFloat(radio.value);
        }
    }
    document.getElementById("outputTip").textContent = toDollars(outputTip);
    
    var outputTotal = billAmount + outputTax + outputTip;
    document.getElementById("outputTotal").textContent = toDollars(outputTotal);
}

function toDollars(amount) {
   return "$ " + parseInt(amount * 100)/100;
}

