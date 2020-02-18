let fruits = ['apple', 'tomato', 'banana'];


function printFruits() {
    let favFruit = fruits[2];
    console.log(fruits[0]);
    printFavFruit();
    function printFavFruit() {
        console.log(favFruit);
    }
}

printFruits();

someFunc();
function someFunc() {
    console.log("Hello Regan Loper");

}


let newFunc = function() {
    alert("You suck!");
}
newFunc();

