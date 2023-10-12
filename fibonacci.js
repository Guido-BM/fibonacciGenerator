const buttonGenerateFib = document.getElementById("generateFib");
const inputNumber = document.getElementById("inputNumber");
const resultNumbers = document.getElementById("resultNumbers");

buttonGenerateFib.addEventListener("click", () => {
  const n = parseInt(inputNumber.value);
  const newFibonacciNumber = fib(n);
  resultNumbers.innerHTML = "";
  newFibonacciNumber.forEach((num) => {
    const listItem = document.createElement("li");
    listItem.textContent = num;
    resultNumbers.appendChild(listItem);
  });
});

const fib = (n) => {
  if (n < 1) {
    return [];
  }
  if (n === 1) {
    return [0];
  }
  const numFibInicio = [0, 1];
  for (let i = 2; i < n; i++) {
    const nextValue = numFibInicio[i - 1] + numFibInicio[i - 2];
    numFibInicio.push(nextValue);
  }
  return numFibInicio;
};
