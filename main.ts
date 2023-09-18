class calc{
  number1;
  number2;

  constructor(number1, number2){
    this.number1 = number1;
    this.number2 = number2;
  }

  
  cal(opreator) {
    return eval(this.number1+opreator+this.number2)
    //return this.number1 + this.number2
  }
}

function calculate(opreator){
  var t = document.getElementById("number1") as HTMLInputElement;
  var y = document.getElementById("number2") as HTMLInputElement;
  var cal = new calc(t.value, y.value)
  document.getElementById("result").innerHTML = cal.cal(opreator)
}