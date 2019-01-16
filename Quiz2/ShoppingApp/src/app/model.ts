import { HttpHeaders } from "@angular/common/http";

export class Cart {
    Product: Product;
    Amount: number;
    TotalPrice: number;
    TotalDiscount: number;

}
export class Product {

    ProductName: string;
    Price: number;

}

export class GlobalVariable {
    static host: string = "http://localhost:5000/api/Cart/";
}