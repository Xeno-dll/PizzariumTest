document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('orderForm');
    const ordersList = document.getElementById('ordersList');

    // Function to fetch and display orders
    const fetchOrders = async () => {
        try {
            const response = await fetch('orders.txt');
            const orders = await response.text();
            const ordersArray = orders.split('\n').filter(order => order.trim() !== '');
            ordersArray.forEach(order => {
                const orderItem = document.createElement('div');
                orderItem.className = 'order-item';
                orderItem.textContent = order;
                ordersList.appendChild(orderItem);
            });
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    // Submit order
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const orderText = document.getElementById('order').value.trim();

        if (orderText === '') {
            alert('Please enter a pizza order.');
            return;
        }

        try {
            await fetch('submit_order.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({ order: orderText })
            });
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.textContent = orderText;
            ordersList.appendChild(orderItem);
            form.reset();
        } catch (error) {
            console.error('Error submitting order:', error);
        }
    });

    // Initial load of orders
    fetchOrders();
});
