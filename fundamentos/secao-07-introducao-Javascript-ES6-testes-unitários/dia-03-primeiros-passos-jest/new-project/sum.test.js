const {sum} = require('./sum');

describe('exercicio 1', () => {
  it ('teste se o retorno de sum 4 + 5 é 9', () => {
    expect(sum(4, 5)).toBe(9)
  });
});
