export function getLineTotal(quantity, price) {
    return (quantity * price);
}

export function findProduct(instruments, code) {
    for(let i = 0; i < instruments.length; i++) {
        const instrument = instruments[i];
        if(instrument.code === code){
            return instrument;
        }
    }
    return null;
}

export function getOrderTotal(order, instruments) {
    let orderTotal = 0;
    for(let i = 0; i < order.length; i++) {
        const order = order[i];
        findProduct.price * order.quantity;
    }
}