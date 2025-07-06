function orderPackage(packageName) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "order.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert("Your order for " + packageName + " has been placed successfully!");
        }
    };
    xhr.send("package=" + encodeURIComponent(packageName));
}
