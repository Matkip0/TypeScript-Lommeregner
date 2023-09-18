class calc{
  number1;
  number2;

  constructor(number1, number2){
    this.number1 = number1;
    this.number2 = number2;
  }

  
  cal(operator) {
    return eval(this.number1+operator+this.number2)
    //return this.number1 + this.number2
  }
}

function calculate(operator){
  var t = document.getElementById("number1") as HTMLInputElement;
  var y = document.getElementById("number2") as HTMLInputElement;
  var cal = new calc(t.value, y.value)
  document.getElementById("result").innerHTML = cal.cal(operator)
}