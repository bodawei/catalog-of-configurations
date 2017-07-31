/*
 * This includes an interface so that the line numbers of the Flow source
 * do not directly align with the compiled JavaScript
 */
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}

export default greeter;
