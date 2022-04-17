interface AddFn {
  // the function will an anonymous function
  // which will be treated as function type when implementing it
  (a: number, b: number): number
}

let add: AddFn = (num1: number, num2: number): number => {
  return num1 + num2
}

/*
- Here we can define how a person object should look like
- it not a blueprint however, just act as a custom type
*/

interface Named {
  readonly name: string

  // optional property can be added in typescript with a question mark
  outPutName?: string

  // you can also add opitonal method
  myMethod?(num1: number, num2: number): number
}

interface Greetable extends Named {
  /* in methods we will write just the describle, not actual body
    method name, arguments and there type, return type */
  greet(phase: string): void
}

/* 
- interface is implemented with 'implements' keyword 
- multiple interface can be implemented by adding ','
*/
class Person implements Greetable {
  // should have interface properties and methods
  name: string
  outPutName?: string

  // can have other properties and method
  age: number = 31

  constructor(n: string, tempName?: string) {
    this.name = n
    if (tempName) {
      this.outPutName = tempName
    }
  }

  greet(phase: string) {
    if (this.outPutName) {
      console.log(phase + " " + this.outPutName)
    } else {
      console.log(phase + " " + this.name)
    }
  }
}

/*  
- both Person and Greetable work as Person implements Greetable
- and Greetable is been implemented by Person.
*/
// let user1: Person
// changin this to person as with Person you can change name
// even if it's read only
let user1: Greetable

user1 = new Person("Knight", "Luff")
// Cannot assign to 'name' because it is a read-only property.
// user1.name = "luff"

user1.greet("Hi i am, ")
