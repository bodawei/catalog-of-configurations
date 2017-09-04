function jsGreeter(person) {
   return "Hello, " + person.firstName + " " + person.lastName;
}

const jsUser = {
  firstName: "JavaScript",
  lastName: "User"
};

const js = document.querySelector('.js');
if (js) {
   js.innerHTML = jsGreeter(jsUser);
}
