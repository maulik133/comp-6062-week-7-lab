const numberInput = document.querySelector("#numberInput");

numberInput.addEventListener("input", function() {
    let number = parseInt(numberInput.value);
    
    if (number <= -10 || number >= 10) {
        alert("The number should be between -10 and 10");
    }
});

let fruit = {
    name: "Apple",
    color: "Red",
    taste: "Sweet"
};

// Select elements for displaying fruit properties
document.querySelector("#fruitName").innerHTML = `Name: ${fruit.name}`;
document.querySelector("#fruitColor").innerHTML = `Color: ${fruit.color}`;
document.querySelector("#fruitTaste").innerHTML = `Taste: ${fruit.taste}`;