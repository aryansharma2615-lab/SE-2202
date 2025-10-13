let counter = function (increment) {
    /*
        Uncomment the line that will correctly result in a separate (rather than shared) 
        Counter if multiple counter functions are defined
    */
    //count = 0
    let count = 0;

    /*
        Create and return an inner function that receives a value increment
        and increments the value stored in count by increment.
    */
    return function () {
        count += increment;
        return count;
    };
};

let countByTwo = counter(2); // closure that adds two each call
let countByOne = counter(1); // closure that adds one each call

// DO NOT change the lines below
console.log(countByTwo());
console.log(countByOne());
console.log(countByTwo());
console.log(countByOne());
