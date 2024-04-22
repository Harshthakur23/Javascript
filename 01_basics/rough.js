/*const Marks = [87,65,76,88,98,90,66,74,82,89]

console.log(Marks)

Marks.sort()

console.log(Marks)

const secondsmallest = Marks[1]

console.log(secondsmallest)

const secondlargest = Marks[9 - 1]

console.log(secondlargest)

*/

let Employee = [
    {
        Name: "Harsh",
        Age: 23,
        Salary: 500000000000,
        Dept: "Software Engineer",
        EmpID: 123458759
    },
    {
        Name: "Virat",
        Age: 34,
        Salary: 100000000000,
        Dept: "Marketing",
        EmpID: 234564576,
    },
    {
        Name: "Sachin",
        Age: 34,
        Salary: 300000000000,
        Dept: "Anaylst",
        EmpID: 234564543,
    }
];

for (let i = 0; i < Employee.length; i++) {
    console.log(`Good morning ${Employee[i].Name}, Your ID is ${Employee[i].EmpID} and you've been offered ${Employee[i].Salary}`);
}

