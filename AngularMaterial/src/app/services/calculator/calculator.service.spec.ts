import { CalculatorService } from "./calculator.service";

describe('Calculator Service', ()=>{
  
  it('should add 2 numbers', ()=>{
    // pending();
    
    // Arrange
    let Calculator = new CalculatorService();

    //ACT
    let result = Calculator.add(45,90);
    

    //assert

    expect(result).toBe(135);

  });

  it('should subtract 2 numbers',()=>{
    // fail();
 
    // Arrange
    let Calculator = new CalculatorService();

    //ACT
    let result = Calculator.subtract(95,23);
    

    //assert

    expect(result).toBe(72);


  })
})