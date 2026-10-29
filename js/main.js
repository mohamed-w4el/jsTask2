function convertValue() {
    var currency = document.getElementById("currency").value;

    if (currency == "") {
        document.getElementById("output").innerHTML = "Enter any amount in EGP";
    } else if (isNaN(currency)) {
        document.getElementById("output").innerHTML =
            "Input must contain integers only";
    } else if (currency < 0) {
        document.getElementById("output").innerHTML = "Input must be positive";
    } else if (currency == 0) {
        document.getElementById("output").innerHTML =
            "You can't enter zero y 3asal.";
    } else {
        var result = currency * 60;
        document.getElementById("output").innerHTML = result + " EGP";
    }

    return false;
}
