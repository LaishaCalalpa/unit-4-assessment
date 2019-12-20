# Unit 4 Assessment - Object-Oriented JavaScript
## Short Response Section

### Directions
Answer each of the questions below clearly and concisely. Include code snippets when appropriate to illustrate your responses. Write your solutions directly in this markdown file.

**1. What is `this`?**
  `this` is a keyword in javascript that refers to the object that it is being executed. 

**2. What will the following code produce? Why?** 

  ```javascript
  let a = 10;
  let b = 10;
  let c = {
    a: -10,
    b: -10,
  };

  function add() {
    return this.a + b;
  }

  c.add = add;

  console.log(add());
  console.log(c.add());
  ```
  The code will return NaN for the first log because the `this` looks for the variable `a` within the function `add()` however is unable to find it since it does not exist. The second log will return 0 because the value `this.a` looks for the value within `c` for the value of `a` that being -10 and add that to the globally declared variable b which is 10.

**3. What is a closure? How does it allow us to create private data?**
  A closure is a function that creates an enclosed scope that can only be accessed by the function or object method that is returned by the function.

**4. What will the following code log to the console? Why?**

  ```javascript
  function createGreeting(greeting){
    return function(name){
      return `${greeting}, ${name}!`
    }
  }

  console.log( createGreeting("Hello") )
  console.log( createGreeting("Buona sera")("Reuben") )
  ```
  

**5. What is encapsulation? How do constructors and prototypes in JavaScript help us write encapsulated programs?**
  Encapsulation is the separation of interface from implementation. It is used in order to divide programs into sections that are either private or public. Objects enable encapsulation by storing functions and properties that are able to be leveraged. 


**6. What is the difference between an object's prototype and the prototype property of a function? What is the relationship between the two?**
  The `__proto__` is an accessor property that allows you to read and write to the `protoype` property. While `protoype` is the object that builds the `__proto__` when a new object is created with `new`.
**7. What is polymorphism? Illustrate using code.**
  Polymorphism is giving interface for objects of different types. When creating different objects, identically named methods can be made within them with different uses:
  ```javascript
    class Student {
      constructor(name, grade) {
        this.name = name;
        this.grade = grade; 
      }
      
      getInformation() {
        return `${this.name} is in grade ${this.grade}`;
      }
    }

    class Teacher {
      constructor(name, position) {
        this.name = name;
        this.position = position;
      }

      getInformation() {
        return `${this.name} is a ${this.position}`;
      }
    }

    let ted = new Student('Ted', '11');
    let graham = new Teacher('Mr. Graham', 'Bio Teacher');

    ted.getInformation(); //"Mr. Graham is a Bio Teacher"

    graham.getInformation(); //ted.getInformation();
  ```