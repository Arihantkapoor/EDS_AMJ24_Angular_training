describe('firstTest', () => {
  let testVariable: any;
  beforeEach(() => {
    testVariable = {};
  });
  it('should return true if A is true', () => {
    testVariable.A = false;
    testVariable.A = true;
    expect(testVariable.A).toBe(true);
  });
});
