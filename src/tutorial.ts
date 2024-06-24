console.log('test');

// type annotations
let awesomeName: string = 'someAwesomeName';
awesomeName = 'awesomeName';
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);

let someNumber: number = 200;
someNumber = 100;
// someNumber = 'can't change type';
console.log(someNumber);

let isAwesome: boolean = true;
isAwesome = false;
console.log(isAwesome);


// union type
let tax: number | string = 10;

tax = 10;
tax = 'some string';


let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
requestStatus = 'error';


// preventing runtime error
const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;

for (let book of books) {
    if(book === 'Brave New World') {
        foundBook = book;
        break;
    }
}

console.log(foundBook?.length);

// arrays
let prices: number[] = [11, 23, 555, 634, 233];
let fruits: string[] = ['banana', 'orange', 'apple'];


let randomArr: (string | boolean)[] = ['something', true, false, 'something else'];
randomArr.push(true);


// objects
let bicycle = { title: 'bicycle', cost: 200 };
let car = { title: 'car', cost: 12000 };
let van = { title: 'van'};

let arr:{title:string; cost?:number}[] = [bicycle, car, van];


// functions 
function sayName(name: string) {
    console.log(`the name is ${name}`);
}

sayName('Stef');


// return
function calculateDiscount(price: number): number {
    const hasDiscount = true;

    if (hasDiscount) {
        return price * 0.9;
    }

    return price;
}

const finalPrice = calculateDiscount(200);


// optional parameters
function setDiscount(price:number, discount?:number): number {
    return price - (discount || 0);
}

const priceAfterDiscount = setDiscount(100, 20);


// default parameters
function calculateScore(score:number, penalty:number = 0): number {
    return score - penalty;
}

const scoreOne = calculateScore(200, 130);
const scoreTwo = calculateScore(200);


// rest parameter
function addNumbers(sentence: string, ...nums: number[]): string {
    const doubled = nums.map(num => num * 2);
    console.log(doubled);

    const addedNumbers = nums.reduce((num, acc) => {
        return num + acc;
    }, 0);
    return `${sentence} ${addedNumbers}`;
}

console.log(addNumbers('the total is:', 1,2,3,4,5));


// type guards
function processInput(input: string | number) {
    if (typeof input === 'string') {
        console.log(input.toLowerCase());
    } else {
        console.log(input * 2);
    }
}

processInput('This is a sentence');
processInput(33);


// objects as parameters
function createEmployee({id} : {id: number}): {
    id: number;
    isActive: boolean;
} {
    return {
        id,
        isActive: id % 2 === 0
    }
}

const num1 = createEmployee({id: 1});
const num2 = createEmployee({id: 2});

console.log(num1, num2)

// alternative
function createStudent(student:{id:number; name:string}): void {
    console.log(`Welcome to the course ${student.name.toUpperCase()}`);
}

const newStudent = {
    name: 'Jeff',
    id: 122232
}

createStudent(newStudent);