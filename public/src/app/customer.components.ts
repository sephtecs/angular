import { Component } from "@angular/core";


@Component({
    selector: 'cust-app',
    template: `<h1>Customer Component</h1>
                    <br/>
                {{customerName}}
                <br/>
                // {{ 2 + 2 }}
                {{"Welcome " + customerName + " and your bill amount is " + billAmount}}
                <br/>
                <img [src] = "imageURL">
                <br/>
                <input type="text" [value]="customerName">
                <br/>
                <button (click)="sayHello()">Change</button>
                <button (click)="sayBye()">Change Again</button>
                <br/>`

})

export class CustomerComponent {
    customerName: string = "Richard"
    billAmount: number = 0;
    imageURL: string = "https://picsum.photos/200/300"

    constructor() {
        this.customerName = "Danel"
        this.billAmount = 96000
    }

    sayHello() {
        this.customerName = "Tufail"
        this.imageURL = "https://picsum.photos/200/300"
    }

    sayBye() {
        this.customerName = "Amad"
        this.imageURL = "https://picsum.photos/200/300"
    }

}