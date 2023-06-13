function validatePassword(password) {
    var passwordInput = document.getElementById("password-input").value;
  
    // Verifica se a senha atende aos critérios
    if (passwordInput === password && passwordInput.length >= 8 && /[a-z]/.test(passwordInput) && /[A-Z]/.test(passwordInput) && /\d/.test(passwordInput)) {
      document.getElementById("password-message").innerHTML = "Senha válida!";
    } else {
      document.getElementById("password-message").innerHTML = "Senha inválida!";
    }
  }

  // Função para verificar se um número é primo
function checkPrime() {
    var number = document.getElementById("number-input").value;
    var isPrime = true;
  
    if (number <= 1) {
      isPrime = false;
    } else {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
    }
  
    if (isPrime) {
      document.getElementById("prime-message").innerHTML = "O número é primo!";
    } else {
      document.getElementById("prime-message").innerHTML = "O número não é primo!";
    }
  }
  
  // Função para inverter uma string
  function invertString() {
    var string = document.getElementById("string-input").value;
    var invertedString = "";
  
    for (var i = string.length - 1; i >= 0; i--) {
      invertedString += string[i];
    }
  
    document.getElementById("inverted-string").innerHTML = invertedString;
  }
  
  // Função para calcular o fatorial 
  function calculateFactorial() {
    var number = document.getElementById("factorial-input").value;
    var factorial = 1;
  
    for (var i = 2; i <= number; i++) {
      factorial *= i;
    }
  
    document.getElementById("factorial-result").innerHTML = "O fatorial de " + number + " é " + factorial;
  }
  
  // Função para converter temperatura de Celsius para Fahrenheit
  function convertTemperature() {
    var celsius = document.getElementById("celsius-input").value;
    var fahrenheit = (celsius * 9/5) + 32;
  
    document.getElementById("fahrenheit-result").innerHTML = celsius + " graus Celsius equivalem a " + fahrenheit + " graus Fahrenheit";
  }