let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        cartItem.innerHTML = `
            <div>
                <h5 class="mb-1">${item.name}</h5>
                <small>Price: $${item.price} x ${item.quantity}</small>
            </div>
            <div>
                <button class="btn btn-sm btn-danger remove-from-cart" data-id="${item.id}">Remove</button>
            </div>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    cartTotal.textContent = total.toFixed(2);

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-muted">Your cart is empty.</p>';
        document.getElementById('checkout').disabled = true;
    } else {
        document.getElementById('checkout').disabled = false;
    }

    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', () => {
            const id = parseInt(button.getAttribute('data-id'));
            removeFromCart(id);
        });
    });
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

document.getElementById('checkout').addEventListener('click', () => {
    alert('Checkout not implemented yet!');
});

renderCart();
updateCartCount();
