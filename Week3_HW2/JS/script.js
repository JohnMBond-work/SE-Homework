//W3_HW2_Classes


// OOP: Classes
//
// Let's create shaped objects
//
// Define a new class called Circle with appropriate attributes and instantiate a few Circle objects.
// Write a function called circle_area that returns the area of the object.
// Write a function total_sides that returns the number of sides of the object.
// Define a new class called Rectangle with appropriate attributes and instantiate a few Rectangle objects.
// Write a function called rectangle_area that returns the area of the given object.
// Write a function total_sides that returns the number of sides of the object.
// Define a new class called Square with appropriate attributes and instantiate a few Square objects.
// Write a function called square_area that returns the area of the given object.
// Write a function total_sides that returns the number of sides of the object.


class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  circumference() {
    return Math.PI * this.radius * 2;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

let circle = new Circle(2);  // create a new Circle instance with radius 2
circle.area();              // call the area method, which returns 12.566370614359172

console.log(circle)
