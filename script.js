document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
   
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var theme = document.getElementById('theme').value;
  
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Theme:', theme);
    
    document.body.className = ""; 
    if (theme === 'pink') {
        document.body.className = "pink-theme";
    } else if (theme === 'light') {
        document.body.className = "light-theme";
    } else if (theme === 'dark') {
        document.body.className = "dark-theme";
    }

  });
  

document.addEventListener("DOMContentLoaded", function() {
  
  let firstOperand = "";
  let operator = "";
  let secondOperand = "";

  const mathExpressionBox = document.getElementById("mathExpressionBox");
  const answerInput = document.getElementById("answerInput");
  const submitBtn = document.getElementById("submitBtn");
  const clearBtn = document.getElementById("clearBtn");
  const resultsBox = document.getElementById("resultsBox");

let score = 0;

function updateScore() {
  document.getElementById("score-counter").innerText = score;
}

function incrementScore() {
  score++;
  updateScore();
}

  document.querySelectorAll(".number-btn").forEach(button => {
    button.addEventListener("click", function() {
      if (operator === "") {
        firstOperand += this.textContent;
      } else {
        secondOperand += this.textContent;
      }
      updateMathExpression();
    });
  });

  document.querySelectorAll(".operator-btn").forEach(button => {
    button.addEventListener("click", function() {
      operator = this.textContent;
      updateMathExpression();
    });
  });

  document.querySelector(".equal-btn").addEventListener("click", function() {
    updateMathExpression();
  });

  submitBtn.addEventListener("click", function() {
    if (operator === ">" || operator === "<") {
      const result = evaluateComparison();
      if (result === answerInput.value) {
        resultsBox.textContent = "Great job!";
        incrementScore();
      } else {
        resultsBox.textContent = "Try again";
      }
    } else {
      const result = evaluateEquation();
      if (result === parseFloat(answerInput.value)) {
        resultsBox.textContent = "Great job!";
        incrementScore();
      } else {
        resultsBox.textContent = "Try again";
      }
    }
  });

  
  clearBtn.addEventListener("click", function() {
    clearAll();
  });

  function updateMathExpression() {
    mathExpressionBox.textContent = `${firstOperand} ${operator} ${secondOperand}`;
  }

  function evaluateEquation() {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      default:
        return NaN;
    }
  }

  function evaluateComparison() {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);
    switch (operator) {
      case ">":
        return num1 > num2;
      case "<":
        return num1 < num2;
      default:
        return NaN;
    }
  }

  function clearAll() {
    firstOperand = "";
    operator = "";
    secondOperand = "";
    answerInput.value = "";
    mathExpressionBox.textContent = "";
    resultsBox.textContent = "";
  }
});
