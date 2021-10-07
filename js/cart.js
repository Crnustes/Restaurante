var cart = [];

function addItem(name, price, count) {
    var item = { name: name, price: price, count: count };
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].count += count;
            return;
        }
    }
    cart.push(item);
}