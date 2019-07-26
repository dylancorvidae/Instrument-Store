import store from "./data/store.js";

function renderInstrument(instrument){
    const li = document.createElement('li');
    li.classList.add(instrument.category);
    li.classList.add(instrument.family);
    li.title = instrument.description;

    const h3 = document.createElement('h3');
    h3.textContent = instrument.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = instrument.image;
    img.className = 'resize';
    img.alt = instrument.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';
    const usd = instrument.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const priceTextNode = document.createTextNode(usd);
    p.appendChild(priceTextNode);

    const button = document.createElement('button');
    button.textContent = 'Add to cart';
    button.value = instrument.code;
    button.addEventListener('click', () => {
        store.orderProduct(instrument.code);
    });
    p.appendChild(button);
    li.appendChild(p);

    return li;
}

export default renderInstrument;