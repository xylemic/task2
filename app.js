// create an array of objects repping students
// each object should have props like name, age and grade
// write a function to filter by grade
// the function should take the array and a grade as params
// the function should return a new array containing only
// the students with the matching grade
// write another function that calculates and returns the avg
// age of the students in the array

// first function that filters the students by grade
const students = [
  { name: 'daniel', age: 18, grade: 'A' },
  { name: 'lucas', age: 17, grade: 'B' },
  { name: 'amaka', age: 19, grade: 'A' },
  { name: 'levi', age: 20, grade: 'C' },
  { name: 'david', age: 18, grade: 'B' },
];

const filterByGrade = (grade, students) => {
  return students.filter((student) => student.grade === grade);
}

// test the filterByGrade function
// console.log(filterByGrade('A', students)); 
// console.log(filterByGrade('B', students)); 
// console.log(filterByGrade('C', students));

// second function that calculates and returns the avg age of the students
const calculateAvgAge = (students) => {
  const totalAge = students.reduce((sum, student) => sum + student.age, 0);
  return totalAge / students.length;
}

// test the calculateAvgAge function
console.log('the average age of students is: ', calculateAvgAge(students)); 