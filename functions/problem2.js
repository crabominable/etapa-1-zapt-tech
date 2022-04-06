// essa função encontra a soma de todos os termos pares abaixo de um determinado número na sequência de Fibonacci,
// termos esses que são gerados pela adição dos dois termos anteriores
const problem2 = (numParam) => {
  const numbersArray = [1, 2];
  let resultSum = 2;
  while (numbersArray[numbersArray.length - 1] <= numParam) {
    let numbersValue = (numbersArray[numbersArray.length - 1]) + (numbersArray[numbersArray.length - 2]);
    numbersArray.push(numbersValue);
    if (numbersValue % 2 === 0) {
      resultSum += numbersValue;
    }
  }
  return resultSum;
}

module.exports = problem2;