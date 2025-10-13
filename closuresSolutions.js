let counter = function (increment) {
    // private variable
    let count = 0;

    // inner function (closure)
    return function () {
        count += increment;
        return count;
    };
};

let countByTwo = counter(2);
let countByOne = counter(1);

console.log(countByTwo()); // 2
console.log(countByOne()); // 1
console.log(countByTwo()); // 4
console.log(countByOne()); // 2
