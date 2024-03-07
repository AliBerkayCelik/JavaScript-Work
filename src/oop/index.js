class Customer{
    constructor(id,CustomerNumber){
        this.id=id;
        this.CustomerNumber=CustomerNumber;
    }
}

let customer=new Customer(1,"12345");
//prototyping
customer.name="Berkay Çelik"
console.log(customer.name);

Customer.bisey="Bişey";
console.log(Customer.bisey)

console.log(customer.CustomerNumber)
console.log(customer.id)

class IndividualCustomer extends Customer{
    constructor(firstName,id,CustomerNumber){
        super(id,CustomerNumber)
        this.firstName=firstName
    }
}
class CorporateCustomer extends Customer{
    constructor(companyName,id,CustomerNumber){
        super(id,CustomerNumber)
        this.companyName=companyName
    }
}
