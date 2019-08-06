import instruments from '../src/data/instruments.js';
import { findProduct } from '../src/register.js';
import renderLineItem from '../src/render-line-item.js';

const test = QUnit.test;

QUnit.module('Renders Line Item');

test('renders line items to DOM', assert => {
    //arrange
    const lineItem = {
        code: 'fender-blues-deluxe',
        quantity: 2
    };

    const customerOrder = findProduct(instruments, lineItem.code);
    const expected = '<tr><td class="align-left">Fender Blues Deluxe</td><td>2</td><td>$500.00</td><td>$1,000.00</td></tr>';
    
    //act
    const dom = renderLineItem(lineItem, customerOrder);
    const html = dom.outerHTML;
        
    //assert
    assert.equal(html, expected);

});