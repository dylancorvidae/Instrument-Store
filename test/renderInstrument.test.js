import renderInstrument from '../src/renderInstrument.js';

const test = QUnit.test;

QUnit.module('Render Instrument');

test('renders an instrument', assert => {
    //arrange
    const ibanezIceman = {
        code: 'ibanez-iceman',
        name: 'Ibanez Iceman',
        image: 'assets/ibanez-iceman.jpg',
        description: 'Totally shreds, great for downtuning',
        category: 'electric',
        price: '800',
        cost: '650',
    };
    const expected = '<li class="electric" title="Totally shreds, great for downtuning"><h3>Ibanez Iceman</h3><img src="../assets/ibanez-iceman.jpg" class="resize" alt="Ibanez Iceman image"><p class="price">$800.00<button value="ibanez-iceman">Add to cart</button></p></li>';
    //act
    const dom = renderInstrument(ibanezIceman);
    console.log(dom);
    const html = dom.outerHTML;
    //assert
    assert.equal(html, expected);
});