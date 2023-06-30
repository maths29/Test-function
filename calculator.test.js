const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('should add two numbers correctly', () => {
      const result = calculator.add(5, 3);
      expect(result).toBe(8);
    });

    test('should handle negative numbers', () => {
      const result = calculator.add(-5, -3);
      expect(result).toBe(-8);
    });

    test('should handle decimal numbers', () => {
      const result = calculator.add(2.5, 1.5);
      expect(result).toBeCloseTo(4);
    });
  });

  describe('subtract', () => {
    test('should subtract two numbers correctly', () => {
      const result = calculator.subtract(5, 3);
      expect(result).toBe(2);
    });

    test('should handle negative numbers', () => {
      const result = calculator.subtract(-5, -3);
      expect(result).toBe(-2);
    });

    test('should handle decimal numbers', () => {
      const result = calculator.subtract(2.5, 1.5);
      expect(result).toBeCloseTo(1);
    });
  });

  describe('multiply', () => {
    test('should multiply two numbers correctly', () => {
      const result = calculator.multiply(5, 3);
      expect(result).toBe(15);
    });

    test('should handle negative numbers', () => {
      const result = calculator.multiply(-5, -3);
      expect(result).toBe(15);
    });

    test('should handle decimal numbers', () => {
      const result = calculator.multiply(2.5, 1.5);
      expect(result).toBeCloseTo(3.75);
    });
  });

  describe('divide', () => {
    test('should divide two numbers correctly', () => {
      const result = calculator.divide(6, 3);
      expect(result).toBe(2);
    });

    test('should handle dividing by zero', () => {
      expect(() => {
        calculator.divide(6, 0);
      }).toThrow('Cannot divide by zero');
    });

    test('should handle decimal numbers', () => {
      const result = calculator.divide(2.5, 0.5);
      expect(result).toBeCloseTo(5);
    });
  });
});
