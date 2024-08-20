

document.getElementById("alldisplay").addEventListener("change", function() {
    toggleDisplay("all");
});

document.getElementById("mendisplay").addEventListener("change", function() {
    toggleDisplay("men");
});

document.getElementById("womendisplay").addEventListener("change", function() {
    toggleDisplay("women");
});

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

function addToCart(id, name, price) {
    const cartItem = cart.find(item => item.id === id);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();

    alert(`${name} has been added to your cart.`);
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const id = parseInt(button.getAttribute('data-id'));
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        addToCart(id, name, price);
    });
});

updateCartCount();
