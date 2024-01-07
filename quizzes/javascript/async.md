# Asynchronous

## Which of these are valid ways to create a Promise?

- [ ] `new Promise()`
- [x] `Promise.resolve()`
- [ ] `Promise()`
- [x] `Promise.reject()`
- [x] `new Promise((resolve, reject) => {})`

## Promise Rejection

In the code below, what would happen when `doSomethingAsync()` is called?

```js
function doSomethingAsync() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject('error');
		}, 1000);
	});
}

doSomethingAsync();
```

- [ ] The promise will resolve with the value `'error'`
- [ ] The promise will reject with the value `'error'`
- [x] An error will be thrown

---

A promise that rejects will throw an error if not handled properly.

## What is the purpose of `Promise.all()`?

- [ ] To create a new promise
- [ ] To create a promise that will resolve when all promises passed to it have resolved
- [x] To create a promise that will resolve when all promises passed to it have resolved or reject if any of the promises passed to it reject
- [ ] To create a promise that will resolve when any of the promises passed to it have resolved

---

Promise.all() takes an array of promises and returns a new promise that will resolve when all of the promises in the array have resolved or reject if any of the promises in the array reject.

```js
Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]).then((values) => {
	console.log(values); // [1, 2, 3]
});
```

## When is the `finally` method called on a promise?

- [ ] When the promise resolves
- [ ] When the promise rejects
- [x] When the promise resolves or rejects
- [ ] When the promise is created

---

The `finally` method is called when the promise resolves or rejects. It is useful
for performing cleanup operations that should be done regardless of whether the promise resolves or rejects.

```js
Promise.resolve(1)
	.finally(() => {
		console.log('finally');
	})
	.then((value) => {
		console.log(value);
	});
```

## Async Value

What will be logged to the console when the following code is run?

```js
async function doSomethingAsync() {
	return 1;
}

console.log(doSomethingAsync());
```

- [ ] `1`
- [ ] `Promise { 1 }`
- [x] `Promise { <pending> }`
- [ ] `Promise { <resolved>: 1 }`

## Async/Await

What is the purpose of the `await` keyword?

- [ ] To create a new promise
- [ ] To create a promise that will resolve when all promises passed to it have resolved
- [ ] To stop the promise from rejecting
- [x] To wait for a promise to resolve before continuing execution

## Error Handling in Promises

What is the purpose of the `catch` method in promises?

- [ ] To create a new promise
- [ ] To create a promise that will resolve when all promises passed to it have resolved
- [x] To handle errors that occur during the execution of a promise
- [ ] To stop the promise from rejecting

---

The `catch` method is used to handle errors that occur during the execution of a promise. It allows you to specify a callback function that will be called if the promise rejects.

## Async/Await Error Handling

What is the purpose of the `try`/`catch` statement when executing async functions?

- [ ] To create a new promise
- [ ] To create a promise that will resolve when all promises passed to it have resolved
- [ ] To stop the promise from rejecting
- [x] To handle errors that occur during the execution of an async function

## Asynchronous Iteration

What is the purpose of the `for await...of` statement?

- [ ] To create a new promise
- [x] To iterate over the values of an async iterable
- [ ] To create a promise that will resolve when all promises passed to it have resolved
- [ ] To handle errors that occur during the execution of an async function

---

The `for await...of` statement is used to iterate over the values of an async iterable. It is similar to the `for...of` statement, but it can be used with async iterables.

```js
async function* asyncGenerator() {
	yield 1;
	yield 2;
	yield 3;
}

(async () => {
	for await (const value of asyncGenerator()) {
		console.log(value);
	}
})();
```

## Async Iterables

What is an async iterable?

- [x] An object that can be iterated over asynchronously and returns a promise for each value
- [ ] An object that can be iterated over
- [ ] An object that can be iterated over asynchronously
- [ ] An object that can be iterated over synchronously

---

An async iterable is an object that can be iterated over asynchronously and returns a promise for each value.

## Async Iteration

Which of these code snippets will log the numbers 1, 2, 3 to the console?

```js
async function* asyncGenerator() {
	yield 1;
	yield 2;
	yield 3;
}
```

- [x] `for await (const value of asyncGenerator()) { console.log(value); }`
- [ ] `for (const value of asyncGenerator()) { console.log(value); }`
- [ ] `for await (const value of asyncGenerator()) { console.log(await value); }`
- [ ] `for (const value of asyncGenerator()) { console.log(await value); }`

---

The `for await...of` statement is used to iterate over the values of an async iterable. It is similar to the `for...of` statement, but it can be used with async iterables.

## Iterating Async

What will be the value of `newValues` when the following code is run?

```js
const values = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

const newValues = values.map(async (value) => {
	return value + 1;
});
```

- [ ] `[2, 3, 4]`
- [ ] `[Promise { <pending> }, Promise { <pending> }, Promise { <pending> }]`
- [ ] `[Promise { <resolved>: 2 }, Promise { <resolved>: 3 }, Promise { <resolved>: 4 }]`
- [x] `[Promise { 2 }, Promise { 3 }, Promise { 4 }]`

## What is `Promise.race` used for?

- [ ] To create a new promise
- [ ] To create a promise that will resolve when all promises passed to it have resolved
- [ ] To create a promise that will resolve when all promises passed to it have resolved or reject if any of the promises passed to it reject
- [x] To create a promise that will resolve when any of the promises passed to it have resolved

## What is the difference between `Promise.all` and `Promise.race`?

- [ ] `Promise.all` will resolve when any of the promises passed to it have resolved, while `Promise.race` will resolve when all of the promises passed to it have resolved
- [x] `Promise.race` will resolve when any of the promises passed to it have resolved, while `Promise.all` will resolve when all of the promises passed to it have resolved
- [ ] They behave the same way

## `Promise.allSettled` is useful for which of the following scenario?

- [ ] To run multiple promises in parallel and return the result of the first one that resolves
- [ ] To run multiple promises in parallel and return the result of the last one that resolves
- [x] To run multiple promises in parallel and return the result of all of them
- [ ] To run multiple promises in parallel and return the result of the first one that rejects
