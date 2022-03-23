var $ = function (id) {
    return document.getElementById(id);
}

const calculate_click = function() {
    var cents = $("cents").value;
    var quarters = 0.25;
    var nickels = 0.05;
    var pennies = 0.01;
    var dimes = 0.10;

    pennies = cents % 1;
    cents =  parseFloat("1");
    $("pennies").value = pennies;

    nickels = cents % 5;
    cents = parseFloat 5);
    $("nickels").value = nickels;

    dimes = cents % 10;
    cents = parseFloat("10");
    $("dimes").value = dimes;

    quarters = cents % 25;
    cents = parseFloat("25")
    $("quarters").value = quarters
}

$("calculate").addEventListener("click", calculate_click);