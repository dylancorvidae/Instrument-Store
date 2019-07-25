import store from '../src/data/store.js';
import instruments from '../src/data/instruments.js';

store.storage = window.sessionStorage;

const test = QUnit.test;

QUnit.module('Data Store');

QUnit.testStart(() => {
    store.storage.clear();
});

test('get and save', assert => {
    //arrange
    const guitar = { name: 'ibanez-iceman' };
    const key = guitar;
    //act
    store.save(key, guitar);
    const got = store.get(key);
    //assert
    assert.deepEqual(got, guitar);
});

test('bootstrap products list', assert => {
    //arrange

    //act
    const products = store.getProducts();

    //assert
    assert.deepEqual(products, instruments);
});

test('get shopping cart, return empty array', assert => {
    //arrange
    //act
    const shoppingCart = store.getShoppingCart();
    //assert
    assert.deepEqual(shoppingCart, []);
});

test('order product code to empty shopping cart', assert => {
    //arrange
    const code = 'ibanez-iceman';
    const expected = [{
        code: 'ibanez-iceman',
        quantity: 1,
    }];

    //act
    store.orderProduct(code);
    const shoppingCart = store.getShoppingCart();

    //assert
    assert.deepEqual(shoppingCart, expected);
});

test('add product code to shopping cart multiple times', (assert) => {
    //arrange
    const code = 'ibanez-iceman';
    const expected = [{
        code: 'ibanez-iceman',
        quantity: 2,
    }];

    //act
    store.orderProduct(code);
    store.orderProduct(code);
    const shoppingCart = store.getShoppingCart();

    //assert
    assert.deepEqual(shoppingCart, expected);
});

test('get product', assert => {
    //arrange
    const code = 'ibanez-iceman';
    const expected = instruments[0];
    //act 
    const product = store.getProduct(code);
    
    //assert
    assert.deepEqual(product, expected);
});