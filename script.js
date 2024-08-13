document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const orderText = document.getElementById('order').value;

    // Create a new order element
    const orderElement = document.createElement('div');
    orderElement.className = 'order-item';
    orderElement.textContent = orderText;

    // Add the new order to the orders list
    document.getElementById('ordersList').appendChild(orderElement);

    // Clear the form
    document.getElementById('orderForm').reset();
});
