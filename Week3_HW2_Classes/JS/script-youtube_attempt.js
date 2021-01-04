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



function updateForm() {

// hide all inputs
  document.getElementById("id_inputs_circle").hidden = true;
  document.getElementById("id_inputs_triangle").hidden = true;
  document.getElementById("id_inputs_square").hidden = true;
  document.getElementById("id_inputs_rectangle").hidden = true;

// get the selected shape and show its inputs
  let shape = document.getElementById("id_shapes").value;
  switch (shape) {
    case "circle":
      document.getElementById("id_inputs_circle").hidden = false;
      break;
    case "triangle":
      document.getElementById("id_inputs_triangle").hidden = false;
      break;
    case "square":
      document.getElementById("id_inputs_square").hidden = false;
      break;
    case "rectangle":
      document.getElementById("id_inputs_rectangle").hidden = false;
      break;
  }
}

function calculateArea() {

// get the selected shape
  let shape = document.getElementById("id_shapes").value;

// calculate the shape's area
  let area = 0;
  switch (shape) {
    case "circle":
      let radius = document.getElementById("id_radius").value;
      area = Math.PI * radius * radius;
      break;
    case "triangle":
      let base = document.getElementById("id_base").value;
      let height = document.getElementById("id_height").value;
      area = base * height / 2;
      break;
    case "square":
      let side = document.getElementById("id_side").value;
      area = side * side;
      break;
    case "rectangle":
      let length = document.getElementById("id_length").value;
      let width = document.getElementById("id_width").value;
      area = length * width;
      break;
  }

// output the area
  document.getElementById("id_output").innerHTML = "Area = " + area;
}
