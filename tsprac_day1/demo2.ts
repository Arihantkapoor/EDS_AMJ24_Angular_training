interface Transaction{
    PayeeAccountNumber: number;
    PayerAccountNumber: number;
}

interface BankAccount{
    AccountNumber: number;
    IsActive: boolean;
    transactions: Transaction[];

}

const tran1: Transaction = {
    PayeeAccountNumber: 123,
    PayerAccountNumber: 456
};


const tran2: Transaction = {
    PayeeAccountNumber: 125,
    PayerAccountNumber: 456
}



const bank: BankAccount = {
    AccountNumber: 455,
    IsActive: true,
    transactions: [tran1,tran2]
}

console.log(bank);