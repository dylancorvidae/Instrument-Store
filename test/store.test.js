import store from '../src/data/store.js';
import instruments from '../src/data/instruments.js';

store.storage = window.sessionStorage;

const test = QUnit.test;

QUnit.module('Data Store');

QUnit.testStart(() => {
    store.storage.clear();
});

test('get and save', assert => {
    const guitar = { name: 'ibanez-iceman' };
    const key = guitar;

    store.save(key, guitar);
    const got = store.get(key);

    assert.deepEqual(got, guitar);
});

test('bootstrap products list', assert => {

    const products = store.getProducts();

    assert.deepEqual(products, instruments);
});

test('get shopping cart, return empty array', assert => {

    const shoppingCart = store.getShoppingCart();

    assert.deepEqual(shoppingCart, []);
});

test('order product code to empty shopping cart', assert => {
    const code = 'ibanez-iceman';
    const expected = [{
        code: 'ibanez-iceman',
        quantity: 1,
    }];

    store.orderProduct(code);
    const shoppingCart = store.getShoppingCart();

    assert.deepEqual(shoppingCart, expected);
});

test('add product code to shopping cart multiple times', (assert) => {
    const code = 'ibanez-iceman';
    const expected = [{
        code: 'ibanez-iceman',
        quantity: 2,
    }];

    store.orderProduct(code);
    store.orderProduct(code);
    const shoppingCart = store.getShoppingCart();

    assert.deepEqual(shoppingCart, expected);
});

test('get product', assert => {
    const code = 'ibanez-iceman';
    const expected = instruments[0];

    const product = store.getProduct(code);

    assert.deepEqual(product, expected);
});

test('add a product', assert => {
    const newProduct = {
        code: 'yamaha-piano',
        name: 'Yahama Piano',
        image: '../assets/yamaha-piano.jpg',
        description: 'Bright sound, upright style',
        category: 'acoustic',
        family: 'keyboard',
        price: 1500.00,
        cost: 1200.00,
    };

    store.addProduct(newProduct);
    const instruments = store.getProducts();

    assert.deepEqual(instruments[instruments.length - 1], newProduct);
});