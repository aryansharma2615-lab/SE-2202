// pointFunctionSolution.js
// Task 2: Extend the constructor with midpoint and scaleTo

function Point(x, y) {
  // Base from Task 1
  this.x = x;
  this.y = y;

  this.print = function () {
    console.log("(" + this.x + ", " + this.y + ")");
  };

  // midpoint between this (x1,y1) and p2 (x2,y2)
  // returns a new Point
  this.midpoint = function (p2) {
    const x1 = this.x, y1 = this.y;
    const x2 = p2.x, y2 = p2.y;
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2; // matches expected outputs
    return new Point(mx, my);
  };

  // scaleTo moves this point toward p2 by factor s (0..1 typical)
  // returns a new Point
  this.scaleTo = function (p2, s) {
    const x1 = this.x, y1 = this.y;
    const x2 = p2.x, y2 = p2.y;
    const sx = x1 + (x2 - x1) * s;
    const sy = y1 + (y2 - y1) * s; // matches expected outputs
    return new Point(sx, sy);
  };
}

/* Do not change the lines below */
let p1 = new Point(1, 5);
let p2 = new Point(5, 7);
p1.midpoint(p2).print(); // expect (3, 6)
p2.midpoint(p1).print(); // expect (3, 6)

/* Do not change the lines below */
let p3 = new Point(0, 0);
let p4 = new Point(4, 8);
p3.scaleTo(p4, 0.25).print(1, 2); // expect (1, 2) (args ignored)
p4.scaleTo(p3, 0.75).print(); // expect (1, 2)
