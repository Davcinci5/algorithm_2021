// Display the numbers from 1 to 100 without using loops/conditionals
let i = 0;
const print = () => console.log(++i);

const print10times = () =>{
    print();
    print();
    print();
    print();
    print();
    print();
    print();
    print();
    print();
    print();
}

const print10times10times = () => {
    print10times();
    print10times();
    print10times();
    print10times();
    print10times();
    print10times();
    print10times();
    print10times();
    print10times();
    print10times();
    i = 0;
}
module.exports = print10times10times;