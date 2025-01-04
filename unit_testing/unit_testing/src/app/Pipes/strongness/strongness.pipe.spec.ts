import { StrongnessPipe } from "./strongness.pipe"

describe('strongest pipe test', ()=>{

  it('create an instance', ()=>{
    const pipe = new StrongnessPipe();

    expect(pipe).toBeTruthy(); //object bn jayega ya nhi
  });

  it('should display weak, if we pass 5', ()=>{
    const pipe = new StrongnessPipe();

    expect(pipe.transform(5)).toEqual('5 weak'); //check output should match
  });

  it('should display strong, if we pass 10', ()=>{
    const pipe = new StrongnessPipe();

    expect(pipe.transform(10)).toEqual('10 strong');
  });

  it('should display strongest, if we pass 25', ()=>{
    const pipe = new StrongnessPipe();

    expect(pipe.transform(25)).toEqual('25 strongest');
  });


})