<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $order = trim($_POST['order']);

    if (!empty($order)) {
        $file = 'orders.txt';
        file_put_contents($file, $order . PHP_EOL, FILE_APPEND | LOCK_EX);
    }
}
?>
