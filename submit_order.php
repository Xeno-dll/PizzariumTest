<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $pizza = htmlspecialchars($_POST['pizza']);
    $address = htmlspecialchars($_POST['address']);

    // You can process the data here, e.g., save it to a database or send an email

    // For demonstration purposes, we'll just return a success message
    echo "Order received! Name: $name, Pizza: $pizza, Address: $address";
} else {
    echo "Invalid request.";
}
?>
