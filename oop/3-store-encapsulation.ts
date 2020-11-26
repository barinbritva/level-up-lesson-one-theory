export class Smartphone {
    private name: string;
    private price: number;
    private salePrice: number | null;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public getName(): string {
        return this.name;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public setSalePrice(price: number): void {
        // если захотим изменить логику, то надо будет сделать это только здесь
        if (price > this.price) {
            throw Error('Sale price must be less then common price.');
        }

        this.salePrice = price;
    }

    public getPrice(): number {
        if (this.salePrice == null) {
            return this.price;
        } else {
            return this.salePrice;
        }
    }
}

const smartphone = new Smartphone('Samsung', 50000);
// product.name = 'iPhone';
// цена со скидкой не должна быть больше обычной
smartphone.setSalePrice(80000);
console.log(smartphone.getName(), smartphone.getPrice());