document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('orderForm');
    const ordersList = document.getElementById('ordersList');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const orderText = document.getElementById('order').value;

        if (orderText.trim() === '') {
            alert('Please enter a pizza order.');
            return;
        }

        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.textContent = orderText;

        ordersList.appendChild(orderItem);

        form.reset();
    });
});
