# General

General JavaScript questions related to core language features.

## Coding

What is the value of `newCars` when the following code is run?

```javascript
const cars = ['BMW', 'Mercedes', 'Audi', 'BMW', 'Volkswagen', 'Audi'];
const newCars = [...new Set(cars)];
```

- [ ] `['BMW', 'Mercedes', 'Audi', 'BMW', 'Volkswagen', 'Audi']`
- [x] `['BMW', 'Mercedes', 'Audi', 'Volkswagen']`
- [ ] `['BMW', 'Mercedes', 'Audi']`
- [ ] `['BMW', 'Mercedes', 'Audi', 'BMW', 'Volkswagen']`

---

The `Set` object as used in this code removes duplicate values from the cars array.

## Why use a `Map`?

What is the purpose of the `Map` object in JavaScript?

- [ ] To store key-value pairs
- [ ] To store values in a specific order
- [ ] To store values in a specific order and remove duplicate values
- [x] To store key-value pairs in a specific order

---

The `Map` object is used to store key-value pairs in a specific order. It is similar to the `Set` object, but it stores key-value pairs instead of values.

## `Map` vs `Object`

What is the difference between a `Map` and an `Object` in JavaScript?

- [ ] A `Map` is used to store key-value pairs, while an `Object` is used to store values
- [ ] A `Map` is used to store values, while an `Object` is used to store key-value pairs
- [x] A `Map` is used to store key-value pairs in a specific order, while an `Object` is used to store key-value pairs in an arbitrary order
- [ ] A `Map` is used to store key-value pairs in an arbitrary order, while an `Object` is used to store key-value pairs in a specific order

## `Set` vs `Array`

What is the difference between a `Set` and an `Array` in JavaScript?

- [x] A `Set` is used to store unique values, while an `Array` is used to store values
- [ ] A `Set` is used to store values, while an `Array` is used to store key-value pairs
- [ ] A `Set` is used to store key-value pairs, while an `Array` is used to store values

## Coding Test

What is the result of the following code

```javascript
null == undefined;
```

- [x] `true`
- [ ] `false`

---

The `==` operator in JavaScript performs type coercion. In this case, `null` is coerced to `undefined`, so the result is `true`.

## Typeof

What is the result of the following code

```javascript
typeof null;
```

- [ ] `null`
- [ ] `undefined`
- [x] `object`
- [ ] `number`

## NaN Test

```javascript
isNaN(NaN);
```

- [x] `true`
- [ ] `false`

---

The `isNaN` function returns `true` if the argument is `NaN`, and `false` otherwise.

## NaN Test 2

```javascript
isNaN('');
```

- [ ] `true`
- [x] `false`

---

The `isNaN` function returns `false` because the empty string is converted to the number `0` before the test is performed.

## NaN Test 3

```javascript
isNaN(null);
```

- [ ] `true`
- [x] `false`

---

The `isNaN` function returns `false` because `null` is converted to the number `0` before the test is performed.

## console.time

```javascript
console.time('timer');
doSomething();
console.timeEnd('timer');
```

What is the code above used for?

- [x] To measure the time it takes to execute the `doSomething` function
- [ ] To measure the time it takes to execute the `console.time` function
- [ ] To log timer twice to the console

---

The `console.time` and `console.timeEnd` methods are used to measure the time it takes to execute a block of code.

## What `Console` method can be use to log a stack trace?

- [ ] `console.debug`
- [ ] `console.stack`
- [x] `console.trace`
- [ ] `console.stackTrace`

## What is the purpose of the `console.assert` method?

- [ ] To log a stack trace
- [ ] To log a warning message
- [x] To log an error message if the assertion is false
- [ ] To log an error message if the assertion is true

## String Detection

```javascript
const str = new String('Hello World');
console.log(typeof str);
```

What is the output of the code above?

- [ ] `string`
- [x] `object`
- [ ] `String`
- [ ] `String('Hello World')`

## String Detection 2

```javascript
const str = 'Hello World';
console.log(typeof str);
```

What is the output of the code above?

- [x] `string`
- [ ] `object`
- [ ] `String`
- [ ] `String('Hello World')`
