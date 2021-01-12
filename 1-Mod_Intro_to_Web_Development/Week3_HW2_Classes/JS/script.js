//Week3_HW2_Classes



//--Circle--
class Circle {
  constructor(radius){
    this.radius = radius;
  }
  circle_area(){
    return this.radius * this.radius * 3.14;
  }
  total_sides(){
    return 0;
  }
}

var circle1 = new Circle(5);
var circle2 = new Circle(10);
var circle3 = new Circle(12.5);
console.log("\nArea and Sides of a Circle:\n")
console.log(circle1.circle_area());
console.log(circle1.total_sides());
console.log(circle2.circle_area());
console.log(circle2.total_sides());
console.log(circle3.circle_area());
console.log(circle3.total_sides());


//--Rectangle--
class Rectangle {
  constructor(height, width){
    this.height = height;
    this.width = width;
  }
  rectangle_area(){
    return this.height * this.width;
  }
  total_sides(){
    return 4;
  }
}

var rectangle1 = new Rectangle(5, 10);
var rectangle2 = new Rectangle(10, 9);
var rectangle3 = new Rectangle(12.5, 42);
console.log("\nArea and Sides of Rectangles:\n")
console.log(rectangle1.rectangle_area());
console.log(rectangle1.total_sides());
console.log(rectangle2.rectangle_area());
console.log(rectangle2.total_sides());
console.log(rectangle3.rectangle_area());
console.log(rectangle3.total_sides());


//--Square--
class Square {
  constructor(side){
    this.side = side;

  }
  square_area(){
    return this.side * this.side;
  }
  total_sides(){
    return 4;
  }
}

var square1 = new Square(5);
var square2 = new Square(10);
var square3 = new Square(12.5);
console.log("\nArea and Sides of Squares: \n")
console.log(square1.square_area());
console.log(square1.total_sides());
console.log(square2.square_area());
console.log(square2.total_sides());
console.log(square3.square_area());
console.log(square3.total_sides());

console.log("\nCircles!  Rectangles!  Squares!  Oh My!!!!\n")
