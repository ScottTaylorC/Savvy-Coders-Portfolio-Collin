var nameChcker = function() {
    var name = prompt("Enter your Name");

    if (name === "") {
    name = prompt("ENTER YOUR NAME NOW!");
} else {
document.querySelector("h1").textContent = `Hello, ${name}`;
}
}
nameChcker();
