/*
Продукт описывает все возможные товары в магазине. Любой товар имеет название, цену и к нему применимы скидки.

Рассказать про констурктор, свойства и методы
*/

// Структура каждого такого объекта может отличаться
const planeSmartphone = {
    name: 'Samsung',
    price: 50000,
};
console.log(planeSmartphone.price);

export class Smartphone {
    name: string;
    price: number;
    salePrice: number | null;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    setPrice(price: number): void {
        this.price = price;
    }
}

const smartphone = new Smartphone('Samsung', 50000);
console.log(smartphone.price);