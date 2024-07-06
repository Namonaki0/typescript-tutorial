const names: string[] = ['Jack', 'Mandy', 'Peter'];


function checkName(name: string): Boolean {
    return names.includes(name);
}

///////////////////

const nameToCheck: string = 'Mandy';

if (checkName(nameToCheck)) {
    console.log(`${nameToCheck} is included`);
} else {
    console.log(`${nameToCheck} is not included`);
}

///////////////////

function processData(input: string | number, config: {reverse: boolean} = {reverse: false}):string | number {
    if (typeof input === "number") {
        return Math.sqrt(input);
    } else {
        return config.reverse 
        ? input.split("").reverse().join("").toUpperCase()
        : input.toUpperCase();
    }
}

console.log(processData(12, {reverse: false}));
console.log(processData(12, {reverse: true}));
console.log(processData('sentence', {reverse: false}));
console.log(processData('sentence', {reverse: true}));


///////////////////

type Employee = {id:number; name:string; department:string};
type Manager = {id:number; name:string; employees:Employee[]};

type Staff = Employee | Manager;

function printStaffDetails(staff:Staff):void {
    if ('employees' in staff) {
        console.log(`${staff.name} is a manager for ${staff.employees.length} employees`);
    } else {
        console.log(`${staff.name} is an employee in the ${staff.department} department`);
    }
}

const alice:Employee = {id: 1, name: 'Alice', department: 'Sales'};
const morgan:Employee = {id: 2, name: 'Morgan', department: 'HR'};

const jeff:Manager = {id: 212, name: 'Jeff', employees:[alice, morgan]};

printStaffDetails(morgan);
printStaffDetails(alice);
printStaffDetails(jeff);


///////////////////

interface Computer {
    readonly id: number;
    brand: string;
    ram: number;
    storage?: number;
    upgradeRam(storage: number): number;
}

const computer: Computer = {
    id: 1234,
    brand: 'Apple',
    ram: 200,
    upgradeRam(storage) {
        return `RAM updates to ${storage}GB`
    }
}

const ramUpdate = computer.upgradeRam(300);
console.log(ramUpdate);
console.log(computer);


// ///////////////////


function getEmployee() {
    const random =  Math.random();
    if (random < 0.33) {
        return {
            name: "John"
        }
    } else if (random < 0.66) {
        return {
            name: "Sarah",
            dogName: "Rex"
        }
    } else {
        return {
            name: "Bob",
            managePeople() {
                console.log('Managing people...');
            },
            delegateTasks() {
                console.log('Delegating tasks...');
            }
        }
    }
}

interface Person {
    name: string
}

interface DogOwner extends Person {
    dogName: string
}

interface Managers extends Person {
 managePeople(): void;
 delegateTasks(): void;
}

const employee: Person | DogOwner | Managers = getEmployee();


function isManager(obj: Person | DogOwner | Managers): obj is Managers {
    return 'managePeople' in obj;
}

if (isManager(employee)) {
    employee.managePeople();
}