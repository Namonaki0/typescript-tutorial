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