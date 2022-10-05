const { stringLength } = require('./testcases.js');

describe('Parameter must be between 1 to 10', () => {
  test('Gives the length of a string passed', () => {
    // Arrange
    const str = 'hello';
    // Act
    const result = stringLength(str);
    // Assert
    expect(result).toBe(5);
  });
});