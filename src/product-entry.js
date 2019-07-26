import store from './data/store.js';

const form = document.getElementById('product-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const newProduct = {
        code: formData.get('code'),
        name: formData.get('name'),
        image: formData.get('image'),
        description: formData.get('description'),
        category: formData.get('category'),
        family: formData.get('family'),
        price: formData.get('price'),
        cost: formData.get('cost'),
    };

    store.addProduct(newProduct);
    alert('New Item Added To Inventory');
    form.reset();
});