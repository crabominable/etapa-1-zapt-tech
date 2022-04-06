// essa função encontra o maior fator primo de um determinado número
const problem3 = (numParam) => {
  let i = 2
  while (i * i <= numParam) {
    if (numParam % i == 0) {
      numParam = numParam / i
    }
    i += 1;
  }
  return i;
}

module.exports = problem3;
