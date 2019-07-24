import instruments from '../src/data/instruments.js';
import { findProduct } from '../src/register.js';
import renderLineItem from '../src/render-line-item';

const test = QUnit.test;

QUnit.module('Renders Line Item');

test('renders line items to DOM', assert => {
    //arrange
    const lineItem = {
        code: 'fender-blues-deluxe',
        quantity: 2
    };

    const amp = findProduct(instruments, lineItem.code);
    const 

    //act

    
    //assert


});