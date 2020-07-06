    // The button in the HTML calls this function
    // Notice the function is never invoked (in this file, but it is in HTML)
function calculateTip() {
    // We created variables for each input and output
    //The inputs were billAmount and taxRate
    //The outputs were outputBillAmount, outputTax, outputTip, outputTotal
    // All HTML input values will be strings BY DEFAULT
    // We use ParseFloat to turn strings into numvbers
    /* We used method document.getElementById() to to retreive each 
    individual input element, and used .value to get each value*/
    var billAmount = parseFloat(document.getElementById("billAmount").value);
    var taxRate = parseFloat(document.getElementById("taxRate").value);
    var outputTax = (billAmount) * (taxRate)/100;

    //We set value of other HTML elements with numbers that were calculated
    document.getElementById("outputBillAmount").textContent= toDollars(billAmount);
    document.getElementById("outputTax").textContent = toDollars(outputTax);

    // We set a variable used to store tip amt (when we have it)
    var outputTip;
    // We set a variable to hold an array of radios (radios had same name of quality)
    var radios = document.getElementsByName("quality");
    // if iterating through an array, we will never use <= or >=
    // getElementsByName will return an array Always
    /* Created a loop to run through the array of radios, to find 
       the one that is checked */
    for (var i = 0; i < radios.length; i++ ) {
        const radio = radios[i];
        // If radio is checked...
        if (radio.checked === true) {
            /* ... calculate the tip by getting its value, turning the value into a num,
            then multiplying by the bill amt*/
            outputTip = billAmount * parseFloat(radio.value);
        }
    }
    document.getElementById("outputTip").textContent = toDollars(outputTip);

    // We said total would be equal to bill, tax, and tip added together
    var outputTotal = billAmount + outputTax + outputTip;
    document.getElementById("outputTotal").textContent = toDollars(outputTotal);
}
// created a separate function that is invoked in the previous function
// This function transforms a numver into a dollar string ($1.00)
// We use ParseInt to turn a float (decimal) into an integer(get rid of decimal places)
function toDollars(amount) {
   return "$ " + parseInt(amount * 100)/100;
}

