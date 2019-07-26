import renderLineItem from './render-line-item.js';
import store from './data/store.js';

const tbody = document.querySelector('tbody');
const shoppingCart = store.getShoppingCart();

for(let i = 0; i < shoppingCart.length; i++) {
    const lineItem = shoppingCart[i];
    const instrument = store.getProduct(lineItem.code);
    const dom = renderLineItem(lineItem, instrument);

    tbody.appendChild(dom);
}


