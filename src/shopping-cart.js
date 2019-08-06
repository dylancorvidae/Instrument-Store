import renderLineItem from './render-line-item.js';
import store from './data/store.js';
import { getOrderTotal } from './register.js';
import { toUSD } from './data/format.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

const shoppingCart = store.getShoppingCart();

for(let i = 0; i < shoppingCart.length; i++) {
    const lineItem = shoppingCart[i];
    const instrument = store.getProduct(lineItem.code);
    const dom = renderLineItem(lineItem, instrument);

    tbody.appendChild(dom);
}

const orderTotal = getOrderTotal(shoppingCart, store.getProducts());

orderTotalCell.textContent = toUSD(orderTotal);
