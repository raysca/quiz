# Typescript Questions

## What is the difference between `interface` and `type`?

- [x] `interface` is used for objects, `type` is used for primitives
- [ ] `interface` is used for primitives, `type` is used for objects
- [ ] `interface` is used for objects, `type` is used for objects and primitives
- [ ] They are the same

---

`interface` is used for objects, `type` is used for objects and primitives

## Which of these are valid types in Typescript?

- [x] `string`
- [x] `number`
- [x] `boolean`
- [ ] `null`
- [ ] `undefined`

---

`string`, `number`, `boolean`

## Types

Which statements are true about the code below

```javascript

const sayHello = async (name: string): Promise<string> => {
  const answer = await fetch(`https://example.com/${name}`).then((res) => res.text());
  return `Hello ${answer}`;
}

```

- [ ] The function `sayHello` returns a string
- [x] The function `sayHello` returns a promise wrapping a string
- [ ] The function is not valid Typescript
- [ ] The will only accept a string as an argument

## Types Union

Which statements are true about the code below

```javascript

const sayHello = (name: string | number): string => {
  if (typeof name === 'string') {
    return `Hello ${name}`;
  }
  return `Hello ${name.toString()}`;
}

```

- [x] The function `sayHello` returns a string
- [ ] The function `sayHello` returns a promise wrapping a string
- [x] The function can accept a string or a number as an argument
- [ ] The function will only accept a string as an argument

## Types Intersection

Which statements are true about the code below

```javascript

interface Person {
  name: string;
  age: number;
}

interface Employee {
  salary: number;
}

const sayHello = (person: Person & Employee): string => {
  return `Hello ${person.name}`;
}

```

- [x] The function `sayHello` returns a string
- [ ] The function will accept any object as an argument
- [ ] The function will only accept an object with the properties `name` and `age`
- [x] The function will only accept an object with the properties `name`, `age` and `salary`

## Types Generics

Which statements are true about the code below

```javascript

const sayHello = <T>(name: T): string => {
  return name.toString();
}

```

- [x] The function `sayHello` returns a string
- [ ] The function will accept any object as an argument
- [x] The `name` argument can be of any type
- [x] The `T` is the generic type


## Abstract Classes

```javascript

abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log("roaming the earth...");
  }
}

console.log(new Animal().move());

```

What will the code above print?

- [x] The code will throw an error
- [ ] The code will print `roaming the earth...`
- [ ] The code will print `undefined`
- [ ] The code will print `null`

---

Abstract classes cannot be instantiated, they can only extended therefore the code will throw an error.

## Inheritance

```javascript

class Animal {
  move(): void {
    console.log("roaming the earth...");
  }
}

class Dog extends Animal {
  move(): void {
    super.move();
    console.log("...and running away");
  }
}

conzsole.log(new Dog().move());

```

What will the code above print?

- [ ] The code will throw an error
- [ ] The code will print `roaming the earth...`
- [ ] The code will print `...and running away`
- [x] The code will print `roaming the earth... and running away`


## Constructor

Examine the code below

```javascript

class Animal {
  constructor(public name: string) {}

  move(): void {
    console.log(`${this.name} is roaming the earth...`);
  }
}

console.log(new Animal('Dog').move());
```

What will the code above print?

- [ ] The code will throw an error because name is not initialized
- [x] The code will print `Dog is roaming the earth...`
- [ ] The cod will print `undefined is roaming the earth...`
- [ ] The code will print `null is roaming the earth...`

---

The constructor initializes the `name` property of the class, therefore the code will print `Dog is roaming the earth...`

## Interfaces
  
  ```javascript

interface Animal {
  name: string;
  move(): void;
}

class Dog {
  constructor(public name: string) {}

  move(): void {
    console.log(`${this.name} is roaming the earth...`);
  }
}

const dog: Animal = new Dog('Dog');
```

Will the code above compile?

- [x] Yes
- [ ] No

---

The class `Dog` implicitly implements the interface `Animal` therefore the code will compile.


## Code Check

Will the code below compile?

```javascript

function getLength(obj: string | string[]) {
  return obj.length;
}

console.log(getLength(null));

```

- [ ] Yes
- [x] No

---

The code will not compile because `null` is not a valid argument for the function `getLength`


## The `!` operator

In the code below, what does the `!` operator do?

```javascript

const name: string | undefined = undefined;

console.log(name!.length);

```

- [ ] It will throw an error
- [ ] It will print `undefined`
- [ ] It will print `null`
- [x] Nothing

---

The `!` operator tells the compiler to check that the variable is not `null` or `undefined` before accessing its properties. Therefore the code will not throw an error.
