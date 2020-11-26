export class Processor {
    public readonly cores: number;
    public readonly frequesnsy: number;

    constructor(cores: number, frequency: number) {
        this.cores = cores;
        this.frequesnsy = frequency;
    }
}

export class Smartphone {
    private name: string;
    private price: number;
    private salePrice: number | null;
    private processor: Processor;

    constructor(name: string, price: number, processor: Processor) {
        this.name = name;
        this.price = price;
        this.processor = processor;
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

    public getProcessor(): Processor {
        return this.processor;
    }
}

export class Cart {
    private items: Smartphone[] = [];

    public addItem(item: Smartphone) {
        if (this.items.length === 3) {
            throw new Error('You can not buy more then 3 smartphones a time.');
        }

        this.items.push(item);
    }

    public getItems(): Smartphone[] {
        return this.items;
    }

    public getTotalItemsQuantity(): number {
        return this.getItems().length;
    }

    public getTotalPrice(): number {
        let totalPrice: number = 0;

        this.items.forEach((item) => {
            totalPrice += item.getPrice();
        })

        return totalPrice;
    }
}

export class Seller {
    public checkout(cart: Cart): void {
        console.log('Items:');
        console.log(cart.getItems());
        console.log(
            '\nTotal items: ' +
            cart.getTotalItemsQuantity() +
            '\nTotal price: ' +
            cart.getTotalPrice() +
            '\nPayment in progress...'
        );
    }
}


const seller = new Seller();
const cart = new Cart();

const samsung = new Smartphone('Samsung', 50000, new Processor(4, 2000));
const htc = new Smartphone('HTC', 20000, new Processor(2, 1300));

cart.addItem(samsung);
cart.addItem(htc);

seller.checkout(cart);