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
