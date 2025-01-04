import { LoggerService } from '../logger/logger.service';
import { CalculatorService } from './calculator.service';

describe('Calculator service', () => {
  let mockLogger: any;
  let calculator: CalculatorService;
  beforeEach(() => {
    console.log('Calling before each test cases');

    mockLogger = jasmine.createSpyObj('LoggerService', ['log']);
    calculator = new CalculatorService(mockLogger);
  });

  it('should add two numbers', () => {
    // pending();

    // let logger = new LoggerService();
    // let mockLogger = jasmine.createSpyObj('LoggerService', ['log']);
    // spyOn(logger, 'log');

    //arrange
    // let calculator = new CalculatorService(mockLogger);

    //act
    let result = calculator.add(2, 2);

    //assert
    expect(result).toBe(4);
  });

  it('should subtract two numbers', () => {
    // fail();

    // let logger = new LoggerService();
    // spyOn(logger, 'log');
    // let mockLogger = jasmine.createSpyObj('LoggerService', ['log']);

    //arrange
    // let calculator = new CalculatorService(mockLogger);

    //act
    let result = calculator.subtract(2, 2);

    //assert
    expect(result).toBe(0);
  });
});
