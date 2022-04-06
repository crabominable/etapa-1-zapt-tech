// essa função encontra a soma de todos os múltiplos de 3 ou 5 abaixo de um determinado número
const problem1 = (numParam) => {
  const x = 3;
  const z = 5;
  let result = 0;

  for (let i = 0; i < numParam; i++) {
    if (i % x === 0 || i % z === 0) {
      result += i;
    }
  }

  return result;
}

module.exports = problem1;
