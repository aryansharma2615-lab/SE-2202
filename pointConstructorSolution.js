// pointConstructorSolution.js
// Task 1: Prototype-based object creation vs constructor function

// 1) Template object (prototype) for a 2D point
let PointPrototype = {
  // default coordinate properties
  x: 0,
  y: 0,

  /*
    Make a property called print that contains a function
    that prints:
      console.log("(" + [x] + ", " + [y] + ")");
    with [x] and [y] replaced with the appropriate way of
    accessing the values.
  */
  print: function () {
    console.log("(" + this.x + ", " + this.y + ")");
  },
};

// 2) Function that creates a point object using the prototype
function createPoint(x, y) {
  // Create an object whose prototype is PointPrototype
  const p = Object.create(PointPrototype);
  // Initialize properties based on parameters
  p.x = x;
  p.y = y;
  return p;
}

// ===== Test the prototype-based objects (do not change) =====
let p1 = createPoint(3, 4);
p1.print();
p1 = createPoint(10, 15);
p1.print();
p1 = createPoint(-2, 8);
p1.print();

// 3) Constructor function version
function Point(x, y) {
  // define x and y on the created instance
  this.x = x;
  this.y = y;

  // instance method print (must use `this`)
  this.print = function () {
    console.log("(" + this.x + ", " + this.y + ")");
  };
}

/* Test creating objects with the constructor Point.
   The x and y values should be the same as those for 
   createPoint above and in the same order.
   Do not change the print statements */
let p2 = new Point(3, 4); // make with constructor function
p2.print();
p2 = new Point(10, 15); //make with constructor function
p2.print();
p2 = new Point(-2, 8); //make with constructor function
p2.print();
