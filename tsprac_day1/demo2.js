var tran1 = {
    PayeeAccountNumber: 123,
    PayerAccountNumber: 456
};
var tran2 = {
    PayeeAccountNumber: 125,
    PayerAccountNumber: 456
};
var bank = {
    AccountNumber: 455,
    IsActive: true,
    transactions: [tran1, tran2]
};
console.log(bank);
