let cart = [];

function addToCart(name, price) {
    cart.push({name, price});
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');

    if(cartItems && cartTotal && cartCount){
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
            total += item.price;
            cartItems.innerHTML += `<li>${item.name} - ${item.price}₸ <button onclick="removeFromCart(${index})">Удалить</button></li>`;
        });
        cartTotal.textContent = total;
        cartCount.textContent = cart.length;
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    if(cart.length === 0){
        alert("Корзина пуста!");
        return;
    }
    alert("Спасибо за заказ! Общая сумма: " + cart.reduce((sum, item) => sum + item.price, 0) + "₸");
    cart = [];
    updateCart();
}
