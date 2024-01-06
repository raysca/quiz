# Typescript

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


## Type Inference

Which statements are true about TypeScript's type inference?

- [x] TypeScript can infer the type of a variable based on its initial value
- [x] Type inference helps reduce the need for explicit type annotations
- [ ] TypeScript cannot infer the type of function return values
- [ ] Type inference only works for primitive types

---

## Type Guards

Which statements are true about TypeScript's type guards?

- [x] Type guards are used to narrow down the type of a variable
- [ ] Type guards are used to widen the type of a function argument
- [x] Type guards are used to narrow down the type of a function argument
- [ ] Type guards are used to widen the type of a variable

## Unknown Type

Is the following code valid TypeScript?

```javascript

const fancyValue: unknown = 'Hello World';
const newValue: string = fancyValue;

```

- [ ] Yes
- [x] No

---

The `unknown` type is used to represent values that are not known at compile time. It is similar to the `any` type, but it is safer because it cannot be assigned to other types without first checking its type.

## Any Type

Is the following code valid TypeScript?

```javascript

const fancyValue: any = 'Hello World';
const newValue: string = fancyValue;

```

- [x] Yes
- [ ] No

---

The `any` type is used to represent values that are not known at compile time. It is similar to the `unknown` type, but it is less safe because it can be assigned to other types without first checking its type.

## Never Type

Is the following code valid TypeScript?

```javascript

const sayHello = (): never => {
  throw new Error('Something went wrong');
}

```

- [x] Yes
- [ ] No

---

The `never` type is used to represent values that will never occur. It is used to indicate that a function will never return a value.

## Void Type

Is the following code valid TypeScript?

```javascript

const sayHello = (): void => {
  return 'Hello World';
}

```

- [ ] Yes
- [x] No

---

The function `sayHello` returns a value of type `void`, which means it does not return anything.

## Tuple Type

Is the following code valid TypeScript?

```javascript
const person: [string, number] = ['John Doe', 30];
```

- [x] Yes
- [ ] No

---

The `Tuple` type is used to represent an array with a fixed number of elements of different types.

## Pick Type

What is the `Pick` type used for?

- [ ] To pick a random element from an array
- [x] To pick properties from an object
- [ ] To pick a random number
- [ ] To pick a random string

---

The `Pick` type is used to pick properties from an object. It is similar to the `Omit` type, but it picks properties instead of omitting them.

```javascript

interface Person {
  name: string;
  age: number;
  address: string;
}

const person: Pick<Person, 'name' | 'age'> = {
  name: 'John Doe',
  age: 30,
};

```

## Omit Type

What is the purpose of the `Omit` type in this code?

```javascript

interface Person {
  name: string;
  age: number;
  address: string;
}

const person: Omit<Person, 'address'> = {
  name: 'John Doe',
  age: 30,
};

```

- [ ] To fix the `address` property of an object
- [x] To omit the `address` property from an object
- [ ] To omit the `name` property from an object

## Partial Type

What is the purpose of the `Partial` type in this code?

```javascript

interface Person {
  name: string;
  age: number;
  address: string;
}

const person: Partial<Person> = {
  name: 'John Doe',
  age: 30,
};

```

- [x] To make all properties of the `Person` type optional
- [ ] To fix the `address` property of an object
- [ ] To omit the `address` property from an object

## Readonly Type

What is the purpose of the `Readonly` type in this code?

```javascript

interface Person {
  name: string;
  age: number;
  address: string;
}

const person: Readonly<Person> = {
  name: 'John Doe',
  age: 30,
  address: '123 Main St',
};

```

- [ ] To fix the `address` property of an object
- [ ] To omit the `address` property from an object
- [x] To make all properties of the `Person` type readonly

## What type is best suited to define `person`?

```javascript

const person = {
  name: 'John Doe',
  age: 30,
};

```

- [ ] `object`
- [x] `{ name: string; age: number }`
- [ ] `Record<string, unknown>`

## `Record` Type is used to define what?

- [ ] A record
- [x] An object
- [ ] A tuple
- [ ] A union

## Union Type

How would you describe the `Individual` type?

```javascript

type Person = {
  name: string;
  age: number;
};

type Employee = {
  salary: number;
};

type Individual = Person | Employee;

```

- [ ] A person and employee
- [x] A person or an employee

## Intersection Type

How would you describe the `Individual` type?

```javascript

type Person = {
  name: string;
  age: number;
};

type Employee = {
  salary: number;
};

type Individual = Person & Employee;

```

- [x] A person and employee
- [ ] A person or an employee

## What is the purpose of the `as` keyword in TypeScript?

- [ ] To cast a value to a different type
- [x] To tell TypeScript that a value is of a certain type
- [ ] To tell TypeScript that a value is not of a certain type
- [ ] To cast a value to a different type
