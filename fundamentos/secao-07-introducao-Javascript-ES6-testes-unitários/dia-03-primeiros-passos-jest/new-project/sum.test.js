const {sum} = require('./sum');

describe('exercicio 1', () => {
  it ('teste se o retorno de sum 4 + 5 é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it ('teste se o retorno de sum 0 + 0 é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it ('teste se o retorno de sum retorna error', () => {
    expect(() => sum(4, '5')).toThrowError();
  });
  it ('teste se o retorna a mensagem parameters must be numbers', () => {
    expect(() => sum(1, '1')).toThrowError('parameters must be numbers');
  });
});
