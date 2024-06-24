const names: string[] = ['Jack', 'Mandy', 'Peter'];


function checkName(name: string): Boolean {
    return names.includes(name);
}

const nameToCheck: string = 'Mandy';

if (checkName(nameToCheck)) {
    console.log(`${nameToCheck} is included`);
} else {
    console.log(`${nameToCheck} is not included`);
}