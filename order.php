<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $package = $_POST['package'];
    $order = "Package: $package\n";
    file_put_contents('orders.txt', $order, FILE_APPEND);
    echo 'Order saved successfully';
}
?>
