export class SalesModel {
    Id: string;
    CustomerId: number
    CustomerName: string
    ProductId: number
    ProductName: string
    ProductPrice: string
    Sellquantity: string
    Selldate: Date;

    constructor(custName:string, prodName:string, prodPrice:string,prodQty:string){
        this.CustomerName = custName;
        this.ProductName = prodName;
        this.ProductPrice = prodPrice;
        this.Sellquantity = prodQty;
    }
}