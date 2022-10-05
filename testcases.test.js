const { stringLength, reverseString, Calculator } = require('./testcases.js');

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

describe('Perform basic math expression on two numbers', () => {
  test('add two numbers', () => {
    // Arrange
    const a = 1;
    const b = 2;
    // Act
    const calculate = new Calculator(a, b);
    const result = calculate.add();
    // Assert
    expect(result).toBe(3);
  });

  test('subtract two numbers', () => {
    // Arrange
    const a = 2;
    const b = 1;
    // Act
    const calculate = new Calculator(a, b);
    const result = calculate.subtract();
    // Assert
    expect(result).toBe(1);
  });

  test('Multiply two numbers', () => {
    // Arrange
    const a = 2;
    const b = 1;
    // Act
    const calculate = new Calculator(a, b);
    const result = calculate.multiply();
    // Assert
    expect(result).toBe(2);
  });

  test('Divide two numbers', () => {
    // Arrange
    const a = 2;
    const b = 1;
    // Act
    const calculate = new Calculator(a, b);
    const result = calculate.divide();
    // Assert
    expect(result).toBe(2);
  });
});