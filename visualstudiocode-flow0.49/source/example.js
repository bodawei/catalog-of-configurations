// @flow
/*
 * This includes an interface so that the line numbers of the Flow source
 * do not directly align with the compiled JavaScript
 */
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person): number {
    return "Hello, " + person.firstName + " " + person.lastName;
}

const user = {
   firstName: "Jane",
   lastName: "User"
};

const bodyElement = document.querySelector('body') || {};
bodyElement.innerHTML = greeter(user);
