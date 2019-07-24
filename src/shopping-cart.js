import instruments from './data/instruments.js';
import { findProduct } from './register.js';
import renderLineItem from './render-line-item.js';
//import getOrderTotal from './register.js';
import order from './data/order.js';

const tbody = document.querySelector('tbody');

for(let i = 0; i < order.length; i++) {
    const lineItem = order[i];
    const instrument = findProduct(instruments, lineItem.code);
    const dom = renderLineItem(lineItem, instrument);

    tbody.appendChild(dom);
}


