export class Product {
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

export class Processor {
    public readonly cores: number;
    public readonly frequesnsy: number;

    constructor(cores: number, frequency: number) {
        this.cores = cores;
        this.frequesnsy = frequency;
    }
}

export class Smartphone extends Product {
    private processor: Processor;

    constructor(name: string, price: number, processor: Processor) {
        super(name, price);
        this.processor = processor;
    }

    public getProcessor(): Processor {
        return this.processor;
    }
}

export class Headphone extends Product {
    public readonly wireLength: number | null;

    constructor(name: string, price: number, wireLength: number | null) {
        super(name, price);
        this.wireLength = wireLength;
    }

    isWireless(): boolean {
        return this.wireLength == null;
    }
}

export class Cart {
    private items: (Smartphone | Headphone)[] = [];

    public addItem(item: Smartphone | Headphone) {
        this.items.push(item);
    }

    public getItems(): (Smartphone | Headphone)[] {
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
const buds = new Headphone('Galaxy Buds', 10000, null);
const wireHeadphones = new Headphone('AKG', 1700, 100);

cart.addItem(samsung);
cart.addItem(htc);
cart.addItem(buds);
cart.addItem(wireHeadphones);

seller.checkout(cart);