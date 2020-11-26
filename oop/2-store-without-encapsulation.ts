export class Smartphone {
    name: string;
    price: number;
    salePrice: number | null;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    setSalePrice(price: number): void {
        this.salePrice = price;
    }
}

const smartphone = new Smartphone('Samsung', 50000);
// цена со скидкой не должна быть больше обычной
smartphone.setSalePrice(80000);
smartphone.name = 'iPhone';
console.log(smartphone);
