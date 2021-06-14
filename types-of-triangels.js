let side1 = 3, side2 = 7, side3 = 5;

// side1 = parseInt(prompt("Enter first triangle side"));
// side2 = parseInt(prompt("Enter second triangle side"));
// side3 = parseInt(prompt("Enter third triangle side"));

if ((side1 === side2) && (side2 === side3)) {
  console.log("Equilateral triangle"); 
}
else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
  console.log("scalene triangle"); 
}
else {
  console.log("isosceles triangle!");
}
