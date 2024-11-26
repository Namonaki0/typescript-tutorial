// // type annotations
// let awesomeName: string = 'someAwesomeName';
// awesomeName = 'awesomeName';
// awesomeName = awesomeName.toUpperCase();
// console.log(awesomeName);

// let someNumber: number = 200;
// someNumber = 100;
// // someNumber = 'can't change type';
// console.log(someNumber);

// let isAwesome: boolean = true;
// isAwesome = false;
// console.log(isAwesome);


// // union type
// let tax: number | string = 10;

// tax = 10;
// tax = 'some string';


// let requestStatus: 'pending' | 'success' | 'error' = 'pending';
// requestStatus = 'success';
// requestStatus = 'error';


// // preventing runtime error
// const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

// let foundBook: string | undefined;

// for (let book of books) {
//     if(book === 'Brave New World') {
//         foundBook = book;
//         break;
//     }
// }

// console.log(foundBook?.length);

// // arrays
// let prices: number[] = [11, 23, 555, 634, 233];
// let fruits: string[] = ['banana', 'orange', 'apple'];


// let randomArr: (string | boolean)[] = ['something', true, false, 'something else'];
// randomArr.push(true);


// // objects
// let bicycle = { title: 'bicycle', cost: 200 };
// let car = { title: 'car', cost: 12000 };
// let van = { title: 'van'};

// let arr:{title:string; cost?:number}[] = [bicycle, car, van];


// // functions 
// function sayName(name: string) {
//     console.log(`the name is ${name}`);
// }

// sayName('Stef');


// // return
// function calculateDiscount(price: number): number {
//     const hasDiscount = true;

//     if (hasDiscount) {
//         return price * 0.9;
//     }

//     return price;
// }

// const finalPrice = calculateDiscount(200);


// // optional parameters
// function setDiscount(price:number, discount?:number): number {
//     return price - (discount || 0);
// }

// const priceAfterDiscount = setDiscount(100, 20);


// // default parameters
// function calculateScore(score:number, penalty:number = 0): number {
//     return score - penalty;
// }

// const scoreOne = calculateScore(200, 130);
// const scoreTwo = calculateScore(200);


// // rest parameter
// function addNumbers(sentence: string, ...nums: number[]): string {
//     const doubled = nums.map(num => num * 2);
//     console.log(doubled);

//     const addedNumbers = nums.reduce((num, acc) => {
//         return num + acc;
//     }, 0);
//     return `${sentence} ${addedNumbers}`;
// }

// console.log(addNumbers('the total is:', 1,2,3,4,5));


// // type guards
// function processInput(input: string | number) {
//     if (typeof input === 'string') {
//         console.log(input.toLowerCase());
//     } else {
//         console.log(input * 2);
//     }
// }

// processInput('This is a sentence');
// processInput(33);


// // objects as parameters
// function createEmployee({id} : {id: number}): {
//     id: number;
//     isActive: boolean;
// } {
//     return {
//         id,
//         isActive: id % 2 === 0
//     }
// }

// const num1 = createEmployee({id: 1});
// const num2 = createEmployee({id: 2});

// console.log(num1, num2)

// // alternative
// function createStudent(student:{id:number; name:string}): void {
//     console.log(`Welcome to the course ${student.name.toUpperCase()}`);
// }

// const newStudent = {
//     name: 'Jeff',
//     id: 122232
// }

// createStudent(newStudent);


// // Type alias

// type User = { id: number; name: string; isActive: boolean };

// const john:User = {
//     id: 1,
//     name: 'john',
//     isActive: true,
//   };
//   const susan:User = {
//     id: 1,
//     name: 'susan',
//     isActive: false,
//   };
  
//   function createUser(user: User):User {
//     console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  
//     return user;
//   }


//   type Theme = 'light' | 'dark';

//   let theme:Theme;
//   theme = 'light';
//   theme = 'dark';


// function setTheme(t:Theme) {
//     theme = t;
// }

// setTheme('dark');

// // intersection type
// type Book = { id:number; name:string; price:number};
// type DiscountBook = Book & {discount: number};

// const book1:Book = {
//     id: 1,
//     name: 'book one',
//     price: 22
// }

// const book2:Book = {
//     id: 2,
//     name: "book two",
//     price: 20
// }

// const book3:Book & {discount:number} = {
//     id: 3,
//     name: "discounted book one",
//     price: 10,
//     discount: 0.15
// }

// const book4:DiscountBook = {
//     id: 4,
//     name: "discount book two",
//     price: 30,
//     discount: 0.20
// }

// console.log(book1, book2, book3, book4);

// // computed properties
// const propName = 'age';

// type SetProp = {
//     [propName]: number
// }

// const tiger:SetProp = {[propName]: 5};

// console.log(tiger);


// // interface methods
// interface BookRef {
//     readonly isbn: number;
//     title: string;
//     author: string;
//     genre?: string;
//     printAuthor(): void;
//     printTitle(message: string): string;
// }

// const book: BookRef = {
//     isbn: 1234,
//     title: 'deep work',
//     author: 'Cal Newport',
//     genre: 'self-help',
//     printAuthor() {
//         console.log(this.author);
//     },
//     printTitle(message) {
//         return `${this.title} ${message}`;
//     }
// }

// book.printAuthor();

// const result = book.printTitle('is an awesome book');
// console.log(result);



// // tuples
// let person:[string, number] = ['john', 25];

// let date: readonly [number, number, number] = [12, 26, 2024];

// function getPerson(): [string, number] {
//     return ['jeff', 30];
// }

// const getRandomPerson = getPerson();

// console.log(getRandomPerson[0]);
// console.log(getRandomPerson[1]);

// let marge:[string, number?] = ['marge'];



// // enums
// enum ServerResponseStatus {
//     Success = 200,
//     Error = 500,
// }

// console.log(ServerResponseStatus);

// interface ServerResponse {
//     result: ServerResponseStatus;
//     data: string[];
//     anotherKey: number;
// }

// function getServerResponse():ServerResponse {
//     return {
//         result: ServerResponseStatus.Success,
//         data: ['first item', 'second item', 'third item'],
//         anotherKey: 20,
//     }
// }

// const response:ServerResponse = getServerResponse();
// console.log(response);


// // type assertion
// let someValue: any = 'string example';
// let stringLength: number = (someValue as string).length;

// type Bird = {
//     name: string;
// }

// let birdString = '{"name": "Eagle"}';
// let dogString = '{"breed": "Poodle"}';

// let birdObject = JSON.parse(birdString);
// let dogObject = JSON.parse(dogString);

// let bird = birdObject as Bird;

// console.log(bird.name);

// enum Status {
//     pending = 'pending',
//     Declined = 'declined'
// }

// type User$ = {
//     name: string;
//     status: Status;
// }

// // save Status.Pending in the DB as a string
// // retrieve string from the DB

// let statusValue = 'pending';

// const user: User$ = {name: 'john', status: statusValue as Status};


// // unknown
// let unknownValue: unknown;

// unknownValue = 'some string';
// unknownValue = 1.2345;
// unknownValue = [1, 2, 3];

// if (typeof unknownValue === 'number') {
//     unknownValue.toFixed(2);
// }

// function runSomeCode() {
//     const random = Math.random();
//     if (random < 0.5) {
//         throw new Error('There was an error...');
//     } else {
//         throw 'There was a different error...';
//     }
// }

// try {
//     runSomeCode();
// } catch (error) {
//     if (error instanceof Error) {
//         console.log(error.message);
//     } else {
//         console.log(error);
//     }
// }


// // never
// type Theme = 'light' | 'dark';

// function checkTheme(theme: Theme):void {
//     if (theme === 'light') {
//         console.log('light theme');
//         return;
//     }
//     if (theme === 'dark') {
//         console.log('dark theme');
//         return;
//     }
//     theme; // type of never because all the options have been handled
// }

// enum Color {
//     Blue,
//     Red,
//     Green
// }

// function getColorName(color:Color) {
//  switch(color) {
//     case Color.Blue:
//         return 'blue color';
//     case Color.Red:
//         return 'red color';
//     case Color.Green:
//         return 'green color';
//     default:
//         // at build time
//         let unexpectedColor: never = color;
//         // at runtime
//         throw new Error(`Unexpected color value: ${color}`);
//  }
// }

// console.log(getColorName(Color.Blue));
// console.log(getColorName(Color.Red));
// console.log(getColorName(Color.Green));


// type guards - discriminated unions

type IncrementAction = {
    type: 'increment';
    amount: number;
    timestamp: number;
    user: string;
}

type DecrementedAction = {
    type: 'decrement';
    amount: number;
    timestamp: number;
    user: string;
}

type Action = IncrementAction | DecrementedAction;

function reducer(state: number, action: Action) {
    switch(action.type) {
        case 'increment':
            return state + action.amount;
        case 'decrement':
            return state - action.amount;
        default:
            const unexpectedAction:never = action;
            throw new Error(`Unexpected error: ${unexpectedAction}`);
    }
}

const newState = reducer(12, {
    user: 'John',
    amount: 20,
    timestamp: Date.now(),
    type: 'increment'
});

// import newStudentName, { sayHello, personName, type Student } from "./actions";
// import { example } from "./example";

// sayHello('testName');
// console.log(newStudentName);
// console.log(personName);

// const anotherStudent: Student = {
//     name: 'Jeff',
//     age: 44
// }

// console.log(anotherStudent);


// // typeof
// type ValueType = string | number | boolean;

// let value: ValueType;
// const random = Math.random();
// value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;

// function checkValue(value: ValueType):void {
//  if (typeof value === 'string') {
//     console.log(value.toLowerCase());
//     return;
//  }

//  if (typeof value === 'number') {
//     console.log(value.toFixed(2));
//     return;
//  }

//  console.log(`Boolean : ${value}`);
// }

// checkValue(value)


// // equality and 'in'
// type Dog = { type: 'dog'; name: string; bark: () => void };
// type Cat = { type: 'cat'; name: string; meow: () => void };
// type Animal = Dog | Cat;


// function makeSound(animal:Animal) {
//     if (animal.type === 'dog') {
//         animal.bark();
//     } else {
//         animal.meow();
//     }
// }

// function makeSounds(animal: Animal) {
//     if ('bark' in animal) {
//         animal.bark();
//     } else {
//         animal.meow();
//     }
// }



// // Truthy and Falsy
// function printLength(str:string | null | undefined) {
//     if (str) {
//         console.log(str.length)
//     } else {
//         console.log('no string provided')
//     }
// }

// printLength('Hello');
// printLength('');
// printLength(null);
// printLength();
// printLength(undefined);



// // instanceof
// try {
//     throw 'error';
//     // throw new Error('This is an error');
// } catch (error) {
//     if (error instanceof Error) {
//         console.log(`Caught an error: ${error.message}`);
//     } else {
//         console.log('unknown error...');
//     }
// }

// function checkInput(input: Date | string): string {
//     if (input instanceof Date) {
//         return input.getFullYear().toString();
//     }
//     return input;
// }

// const year = checkInput(new Date());
// const randoms = checkInput('2020-05-05');

// console.log(year);
// console.log(randoms);



// // type predicate
// type Student = {
//     name: string;
//     study: () => void;
//   };
  
//   type Users = {
//     name: string;
//     login: () => void;
//   };
  
//   type Person = Student | Users;
  
//   const randomPerson = (): Person => {
//     return Math.random() > 0.5
//       ? { name: 'john', study: () => console.log('Studying') }
//       : { name: 'mary', login: () => console.log('Logging in') };
//   };
  
//   const persons = randomPerson();

//   function isStudent(persons: Person): persons is Student {
//     return (persons as Student).study !== undefined; 
//   }

//   if (isStudent(persons)) {
//     persons.study();
//   } else {
//     persons.login();
//   }


// // generics
// // let array1:string[] = ['one', 'two', 'three'];
// // let array2:number[] = [1, 2, 3];
// // let array3:boolean[] = [true, false, true];

// // <T> - convention for declaration

// let array1:Array<string> = ['one', 'two', 'three'];

// // generics - function
// function genericFunction<T>(arg:T):T {
//     return arg;
// }

// const stringValue = genericFunction<string>('Example sentence');
// const numberValue = genericFunction<number>(100);

// // generics - interface
// interface GenericInterface<T> { 
//     value: T;
//     getValue: () => T;
// }

// const genericString:GenericInterface<string> = {
//     value: 'some string',
//     getValue() {
//         return this.value
//     }
// }

// // generics - promise
// async function promiseFunction():Promise<number> {
//     return 1233;
// }

// // create array
// function generateStringArray(length:number, value:string):string[] {
//     let result:string[] = [];
//     result = new Array(length).fill(value);
//     return result
// }

// function createArray<T>(length:number, value:T):Array<T> {
//     let result:T[] = [];
//     result = new Array(length).fill(value);
//     return result;
// }

// const stringArray = generateStringArray(5, 'some string');
// const numberArray = createArray<number>(5, 100);

// console.log(stringArray);
// console.log(numberArray);

// // multiple types
// function pair<T, U>(first: T, second: U): [T, U] {
//     return [first, second];
// }

// const results = pair<number, string>(1, 'one');
// console.log(results);


// // type constraints - on the generic type T, generic type can be either a number or a string.
// function processValue<T extends string | number>(value: T): T {
//     console.log(value);
//     return value;
// }

// processValue(100);
// processValue('example string');
// // processValue(true); -> not valid as the type is not a string or a number

// type Product = {
//     name: string;
//     price: number;
// }

// const product: Product = {
//     name: 'shoes',
//     price: 100
// }

// type Students = {
//     name: string;
//     age: number;
// }

// const students: Students = {
//     name: 'john',
//     age: 20
// };

// function printName<T extends Students | Product>(value: T): void {
//     console.log(value.name)
// }

// printName(students);
// printName(product);


// fetch data
import { z } from 'zod';

const url = 'https://www.course-api.com/react-tours-project'

// checked at runtime
const tourSchema = z.object({
    id: z.string(),
    name: z.string(),
    info: z.string(),
    image: z.string(),
    price: z.string()
})

type Tour = z.infer<typeof tourSchema>;

// type Tour = {
//     id: number;
//     name: string;
//     info: string;
//     image: string;
//     price: number;
// }

async function fetchData(url:string):Promise<Tour[]> {
    try {
        const response = await fetch(url);

        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const rawData:Tour[] = await response.json();

        const result = tourSchema.array().safeParse(rawData);
        console.log(result);

        if (!result.success) {
            throw new Error(`Invalid data: ${result.error}`);
        }

        return result.data;

    } catch (error) {
        const errorMsg = error instanceof Error ? error.message : 'An error occurred';
        console.log(errorMsg);
        return [];
    }
}

const tours = await fetchData(url);
tours.map(
    (tour) => {
        console.log(tour.name);
    }
)

// Classes
class Book {
    // readonly modifier
    readonly title: string;
    author: string;

    // default property
    // checkedOut: boolean = false; <--- valid option
    checkedOut = false; // <--- also works

    constructor(title:string, author:string) {
        this.title = title;
        this.author = author;
    }
}

const deepWork = new Book('Deep Work', 'Cal Newport');
console.log(deepWork.checkedOut); // false
deepWork.title = "something else"; // error as title is readonly  
console.log(deepWork.title); // Deep Work
console.log(deepWork); // { title: 'Deep Work', author: 'Cal Newport' }


// public and private modifiers
class Books {
    public readonly title: string;
    public author: string;
    checkedOut: boolean = false;

    constructor(title:string, author:string) {
        this.title = title;
        this.author = author;
    }

    public checkout() {
        this.checkedOut = this.toggleCheckedOut();
    }

    public isCheckedOut() {
        return this.checkedOut;
    }

    public toggleCheckedOut() {
        return !this.checkedOut;
    }
}

const someBook = new Books('Some Book', 'Some Author');
someBook.checkout();
someBook.checkout();
console.log(someBook.isCheckedOut()); // false


// constructor shortcut
class Library {
    private checkedOut: boolean = false;
    constructor(readonly title:string, public author:string, private someValue:number) {
    }
    getSomeValue() {
        return this.someValue;
    }
}

const libraryBook = new Library('Some Book', 'Some Author', 200);
console.log(libraryBook.getSomeValue()); // 200