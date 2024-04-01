//*-------------------------------------------------
// Programming Question - Check the triangle type.
//*-------------------------------------------------

//* Ques--> Write a function checkTriangleType which takes 3 params and return whether it is quilateral , isoceles or scalene. 

// Three sides equal return  "Equilateral"
// Two sides equal return  "Isosceles"
// No sides equal return   "Scalene"


const checkTriangleType = (...sides) => {
    const [a, b, c] = sides;

    if (a == b && b == c && c == a) {
        return "equilateral triangle"
    } else if (a == b || b == c || a == c) {
        return "isosceles triangle";
    } else {
        return "scalene triangle";
    }

}

console.log(checkTriangleType(2, 2, 2)); // OUTPUT: "equilateral triangle"
console.log(checkTriangleType(2, 3, 2)); // OUTPUT: "isoceles triangle"
console.log(checkTriangleType(2, 1, 4)); // OUTPUT: "scalene triangle"