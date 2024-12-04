function greeter(person: string) {
    return "Hello, " + person;
}

function greeterArray(people: string[]) {
  people.forEach(person => console.log(greeter(person)));
}

let user = ["Jane User", "John Smith"];

greeterArray(user); //Correct usage with array

console.log(greeter(user[0])); //Correct usage with single element from array