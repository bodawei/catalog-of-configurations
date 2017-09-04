// From https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

/*
 * This includes an interface so that the line numbers of the TypeScript source
 * do not align with the compiled JavaScript
 */
interface Person {
    firstName: string;
    lastName: string;
}

function tsGreeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

const user = {
   firstName: "TypeScript",
   lastName: "User"
};

const ts = document.querySelector('.ts');
if (ts) {
   ts.innerHTML = tsGreeter(user);
}