export class Product {
    pid: number;
    merchant_name: string;
    shop_name: string;
    name: string;
    description: string;
    category: string;
    qty: number;
    price: number;
    constructor(pid: number, category: string, description: string, merchant_name: string, name: string, quantity: number, price: number, shop_name: string) {
        this.pid = pid;
        this.merchant_name = merchant_name;
        this.qty = quantity;
        this.price = price;
        this.shop_name = shop_name;
        this.name = name;
        this.description = description;
        this.category = category;
    }
}