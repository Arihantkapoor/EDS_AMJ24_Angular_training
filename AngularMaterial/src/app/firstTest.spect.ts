describe('first Test', ()=>{
    let testVariable: any;
    beforeEach( ()=>{
        testVariable = {};
    });


    it('should return true, if a is true', ()=>{
        testVariable.A = false;
        testVariable.A = true;
        expect(testVariable.A).toBe(false);  
    })
})