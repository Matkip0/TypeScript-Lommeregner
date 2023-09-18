var calc = /** @class */ (function () {
    function calc(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }
    calc.prototype.cal = function (opreator) {
        return eval(this.number1 + opreator + this.number2);
        //return this.number1 + this.number2
    };
    return calc;
}());
function calculate(opreator) {
    var t = document.getElementById("number1");
    var y = document.getElementById("number2");
    var cal = new calc(t.value, y.value);
    document.getElementById("result").innerHTML = cal.cal(opreator);
}
