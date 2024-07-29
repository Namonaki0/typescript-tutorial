export function sayHello(name: string):void {
    console.log(`Hello ${name}`);
}

export const personName = 'Marge';

export type Student = {
    name: string,
    age: number
} 

const newStudentName: Student = {
    name: 'Peter',
    age: 24
}

export default newStudentName;

