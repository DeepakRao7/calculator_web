//calculator working function 
function myfunction(){
    document.getElementById('calculatorForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // for inputs which are fill by the user 
        var number1 = parseFloat(document.getElementById('number1').value);
        var number2 = parseFloat(document.getElementById('number2').value);
        var operator = document.getElementById('operator').value;
        
        var result;
        // swich is use for changing the opreator and take value which type of calculation is needs 
        switch (operator) {
          case '+':
            result = number1 + number2;
            break;
          case '-':
            result = number1 - number2;
            break;
          case '*':
            result = number1 * number2;
            break;
          case '/':
            result = number1 / number2;
            break;
          default:
            result = '';
        }
        // for output & answer 
        document.getElementById('result').value = result;
      });
}

