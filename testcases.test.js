const { stringLength, reverseString } = require('./testcases.js');

describe('Practise tests for strings', () => {
  test('Gives the length of a string passed', () => {
    // Arrange
    const str = 'hello';
    // Act
    const result = stringLength(str);
    // Assert
    expect(result).toBe(5);
  });

  test('reverse a string', () => {
    // Arrange
    const string = 'hello';
    // Act
    const result = reverseString(string);
    // Assert
    expect(result).toBe('olleh');
  });
});