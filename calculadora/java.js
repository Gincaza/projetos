const output = document.querySelector(".output");
const keys = document.querySelectorAll(".key");

let firstValue = "";
let operator = "";
let secondValue = "";

keys.forEach(key => {
  key.addEventListener("click", () => {
    // Obtenha o valor do botão clicado
    const keyValue = key.textContent;

    // Verifique se o valor é um número ou uma operação
    if (!isNaN(keyValue) || keyValue === ".") {
      // Se o operador já foi escolhido, adicione o número à segunda entrada
      if (operator) {
        secondValue += keyValue;
        output.textContent = secondValue;
      } else {
        // Caso contrário, adicione o número à primeira entrada
        firstValue += keyValue;
        output.textContent = firstValue;
      }
    } else if (keyValue === "C") {
      // Se o botão clicado for "C", redefina todas as entradas
      firstValue = "";
      operator = "";
      secondValue = "";
      output.textContent = "0";
    } else {
      // Se o botão clicado for uma operação, armazene o operador
      operator = keyValue;
    }

    // Se ambas as entradas tiverem sido preenchidas, calcule o resultado
    if (firstValue && operator && secondValue) {
      let result = 0;

      switch (operator) {
        case "+":
          result = parseFloat(firstValue) + parseFloat(secondValue);
          break;
        case "-":
          result = parseFloat(firstValue) - parseFloat(secondValue);
          break;
        case "x":
          result = parseFloat(firstValue) * parseFloat(secondValue);
          break;
        case "/":
          result = parseFloat(firstValue) / parseFloat(secondValue);
          break;
      }

      // Exiba o resultado e redefina as entradas
      output.textContent = result;
      firstValue = "";
      operator = "";
      secondValue = "";
    }
  });
});
