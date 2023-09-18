var calc = /** @class */ (function () {
    function calc(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }
    calc.prototype.cal = function () {
        return this.number1 + this.number2;
    };
    return calc;
}());
function calculate(opreator) {
    var cal = new calc(document.getElementById("number1").Value, document.getElementById("number1").ariaValueMax);
    console.log(document.getElementById("number1").ariaValueNow);
}
