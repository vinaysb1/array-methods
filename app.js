const persons = [
    {fname:"Arush",lname:"beelagi"},
    {fname:"virat",lname:"kohli"},
    {fname:"viraj",lname:"sigh"},
];

function getfullName(item){
return `${item.fname} ${item.lname}`
}
person = persons.map(getfullName);
console.log(person);

let numbers = [2,3,8,9,11,15,18]
function square(numbers){
    return numbers*numbers
}
sqnum = numbers.map(square);
console.log(sqnum);

const students = [
    {fname:"vin",lname:"b",marks:88},
    {fname:"san",lname:"d",marks:93},
    {fname:"ravi",lmane:"t",marks:95},
    {fname:"guru",lname:"h",marks:85}
]
// function mark(item){
//     return item.marks>92
// }
// const result = students.filter(mark);
// console.log(result);
// function marks(i){
//     return i.marks
// }
// const results = result.map(marks);
// console.log(results);

// function value(accu,cur){
//     return accu+cur
// }
// const total = results.reduce(value);
// console.log(total);

// const totalMarks = students.filter(item => item.marks>92).map(item => item.marks).reduce((acc,cur) => acc+cur);
// console.log(totalMarks);

const totalMarks = students.filter(item => item.marks>92).reduce((acc,cur) => { return acc+cur.marks},0);
console.log(totalMarks);

const  employees = [
    {id:"001",dept:"cs",salary:"1000"},
    {id:"011",dept:"me",salary:"2000"},
    {id:"003",dept:"ee",salary:"3000"},
    {id:"005",dept:"cv",salary:"5000"}
]
const totalSalary = employees.filter(item => item.salary>2000).reduce((acu,cur) => {return acu+cur.salary},0);
console.log(totalSalary);


const  employee = [
    {id:"001",dept:"cs",salary:1000},
    {id:"011",dept:"me",salary:2000},
    {id:"003",dept:"ee",salary:3000},
    {id:"005",dept:"cv",salary:5000}
]
const intakeSalary = employee.filter(item => item.salary>1000).map(item => item.salary).reduce((accu,cur) => accu+cur);
console.log(intakeSalary);

emp = [
    {name:"sonu",id:"001",dept:"cs",salary:1000},
    {name:"janu",id:"011",dept:"me",salary:2000},
    {name:"jenu",id:"003",dept:"ee",salary:3000},
    {name:"anu",id:"005",dept:"cv",salary:5000}
]
const empDetail = emp.map(item => item.name +" "+ item.salary);
console.log(empDetail);

homes = [
    {type:"residential",floor:2,size:"30x40",cost:50000},
    {type:"residential",floor:3,size:"30x50",cost:60000},
    {type:"commerial",floor:2,size:"30x40",cost:40000},
    {type:"residential",floor:2,size:"60x40",cost:50000}
]
const requiredHome = homes.filter(i => i.cost>40000).map(i => i.size + " "+i.type);
console.log(requiredHome);

const totalHome = homes.reduce((acu,cur) => acu+cur.cost,0);
console.log(totalHome);
    