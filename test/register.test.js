import instruments from '../src/data/instruments.js';
import { findProduct, getLineTotal, getOrderTotal } from '../src/register.js';
const test = QUnit.test;

QUnit.module('Register');

test('calculate line total', (assert) =>{
    const quantity = 2;
    const price = 500;
    const expected = 1000;
    const total = getLineTotal(quantity, price);
    assert.equal(total, expected);
});

test('find product by code', assert => {
    const code = 'fender-blues-deluxe';
    const expected = {
        code: 'fender-blues-deluxe',
        name: 'Fender Blue Deluxe',
        image: '../assets/blues-deluxe.jpg',
        description: 'Crank it up to 11',
        category:'electric',
        family: 'amps',
        price: 500,
        cost: 300,
    };
    const foundProduct = findProduct(instruments, code);
    assert.deepEqual(foundProduct, expected);
});

test('calculate order total', assert => {
    const order = [{
        code:'ibanez-iceman',
        quantity: 1,
    }, {
        code:'fender-blues-deluxe',
        quantity: 2,
    }];
    const expected = 1800;

    const orderTotal = getOrderTotal(order, instruments);

    assert.equal(orderTotal, expected);
});
