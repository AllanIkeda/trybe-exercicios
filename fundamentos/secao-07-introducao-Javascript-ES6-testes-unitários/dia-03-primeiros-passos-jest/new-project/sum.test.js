const sum = (a, b) => a + b;

test('soma dois valores', () => {
  expect(sum(2, 3)).toEqual(5);
});