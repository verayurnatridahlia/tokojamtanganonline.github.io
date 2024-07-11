document.addEventListener('DOMContentLoaded', () => {
    // Handle detail button click
    document.querySelectorAll('.detail-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.closest('.product');
            const name = product.getAttribute('data-name');
            const price = product.getAttribute('data-price');
            const description = product.getAttribute('data-description');
            const image = product.getAttribute('data-image');

            document.getElementById('modal-title').textContent = name;
            document.getElementById('modal-price').textContent = price;
            document.getElementById('modal-description').textContent = description;
            document.getElementById('modal-image').src = image;
            
            // Reset quantity input field to 1 when modal opens
            document.getElementById('quantity').value = 1;

            document.getElementById('modal').style.display = 'block';
        });
    });

    // Handle close button click
    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('modal').style.display = 'none';
    });

    // Handle add to cart button click
    document.getElementById('add-to-cart-btn').addEventListener('click', () => {
        const quantity = document.getElementById('quantity').value;
        document.getElementById('modal').style.display = 'none';
        showNotification();
        addToCart(quantity);
    });

    // Show notification
    function showNotification() {
        const notification = document.getElementById('notification');
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // Dummy function to simulate adding to cart
    function addToCart(quantity) {
        console.log(`Added ${quantity} item(s) to cart.`);
        // Implement your actual add to cart logic here
    }

    // Handle menu toggle (hamburger button) for mobile view
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
