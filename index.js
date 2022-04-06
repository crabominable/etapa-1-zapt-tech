const printer = require('./helpers/printer');

const {
  problem1,
  problem2,
  problem3
} = require('./functions');

printer(problem1(1000), 'Problema 1');
printer(problem2(4000000), 'Problema 2');
printer(problem3(600851475143), '');
