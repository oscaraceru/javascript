let cart = JSON.parse(localStorage.getItem('cart')) || [];
let products = [];

// Fetch products
fetch('js/productos.json')
    .then(response => response.json())
    .then(data => {
        products = data.products;
        displayProducts();
        updateCartCount();
    })
    .catch(error => {
        Swal.fire({
            title: 'Error!',
            text: 'No se pudieron cargar los productos',
            icon: 'error'
        });
    });

    function showProductDetails(productId) {
        const product = products.find(p => p.id === productId);
        Swal.fire({
            title: product.name,
            html: `
                <div class="product-detail">
                    <img src="${product.image}" alt="${product.name}" style="max-width: 300px">
                    <p class="price">Precio: $${product.price}</p>
                    <p class="description">${product.description}</p>
                </div>
            `,
            showCancelButton: true,
            confirmButtonText: 'Agregar al Carrito',
            cancelButtonText: 'Cerrar'
        }).then((result) => {
            if (result.isConfirmed) {
                addToCart(productId);
            }
        });
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        const existingItem = cart.find(item => item.id === productId);
    
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
    
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateCartDisplay();
    
        Swal.fire({
            title: 'Success!',
            text: `${product.name} ha sido añadido a tu carrito`,
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
        });
    }

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
            <button id="eliminar" onclick="removeFromCart(${item.id})">Eliminar</button>
        `;
        cartItems.appendChild(itemElement);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartDisplay();
}


const modal = document.getElementById('cart-modal');
const cartBtn = document.getElementById('cart-btn');
const closeBtn = document.getElementsByClassName('close')[0];

cartBtn.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        Swal.fire({
            title: 'Carrito Vacio',
            text: 'Su carrito esta vacio!',
            icon: 'warning'
        });
        return;
    }

    Swal.fire({
        title: 'Confirma Pago',
        text: '¿Quieres completar tu compra?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Si, comprar!',
        cancelButtonText: 'No, cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Gracias!',
                text: 'Tu compra se ha completado con éxito',
                icon: 'success'
            });
            cart = [];
            localStorage.removeItem('cart');
            updateCartCount();
            updateCartDisplay();
            modal.style.display = "none";
        }
    });
});


const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm)
    );
    displayFilteredProducts(filteredProducts);
});


function displayFilteredProducts(productsToShow) {
    const container = document.getElementById('products-container');
    container.innerHTML = ''; 

    if (productsToShow.length === 0) {
        container.innerHTML = '<p class="no-results">Productos no encontrados</p>';
        return;
    }

    productsToShow.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-card';
        productElement.innerHTML = `
            <div class="product-image" onclick="showProductDetails(${product.id})">
                <img src="${product.image}" alt="${product.name}" style="width: 200px; height: 150px">
            </div>
            <h3 class="product-title" onclick="showProductDetails(${product.id})">${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})"><i class="fa-solid fa-cart-shopping"></i> Agregar al carrito</button>
        `;
        container.appendChild(productElement);
    });
}


function displayProducts() {
    displayFilteredProducts(products);
}


displayProducts();