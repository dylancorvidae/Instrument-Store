import instruments from './instruments.js';
import { findProduct } from '../register.js';

const PRODUCTS_KEY = 'products';
const SHOPPING_CART_KEY = 'shopping cart';

const store = { 
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },

    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },

    getProducts() {
        let products = store.get(PRODUCTS_KEY);
        if(!products) {
            products = instruments;
            store.save(PRODUCTS_KEY, instruments);
        }
        return products;
    },

    getShoppingCart() {
        let shoppingCart = store.get(SHOPPING_CART_KEY);
        if(!shoppingCart) {
            return []; }
        return shoppingCart;
    },

    orderProduct(code) {
        const shoppingCart = store.getShoppingCart();
        
        const lineItem = findProduct(shoppingCart, code);
        
        if(lineItem) {
            lineItem.quantity++; 
        }
        else {
            const lineItem = {
                code: code,
                quantity: 1,
            };
            shoppingCart.push(lineItem);
        }
        store.save(SHOPPING_CART_KEY, shoppingCart);
    },
    getProduct(code){
        const instruments = store.getProducts();
        const instrument = findProduct(instruments, code);
        return instrument;
    },
    addProduct(newProduct) {
        const products = store.getProducts();
        products.push(newProduct);
        store.save(PRODUCTS_KEY, products);
    },
};

export default store;