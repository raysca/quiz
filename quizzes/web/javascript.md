---
topic: JavaScript
description: These questions include JavaScript concepts and features. e.g async/await, closures, and prototype chain e.t.c
---

# JavaScript

## What is the purpose of the `async` keyword?

- [ ] To make a function asynchronous
- [x] To make a function return a Promise that resolves to the return value of
      the function
- [ ] To make a function synchronous
- [ ] To make a function return a Promise

## What is the purpose of the `await` keyword?

- [ ] To make a function asynchronous
- [ ] To make a function return a Promise that resolves to the return value of
      the function
- [x] To make a function wait for a Promise to resolve
- [ ] To make a function return a Promise

## What is difference between `setTimeout` and `setInterval`?

- [ ] `setTimeout` executes a function once after a specified delay.
      `setInterval` executes a function repeatedly with a fixed time delay
      between each call to that function.
- [ ] `setTimeout` executes a function repeatedly with a fixed time delay
      between each call to that function. `setInterval` executes a function once
      after a specified delay.
- [x] `setTimeout` executes a function once after a specified delay.
      `setInterval` executes a function repeatedly with a fixed time delay
      between each call to that function.
- [ ] `setTimeout` executes a function once after a specified delay.
      `setInterval` executes a function once after a specified delay.

## What is the difference between `==` and `===`?

- [ ] They are the same.
- [ ] `==` checks for equality of value and type. `===` checks for.
- [x] `==` checks for equality of value. `===` checks for equality of value and
      type.
- [ ] Just a stylistic difference.

## What is the difference between `null` and `undefined`?

- [ ] They are the same.
- [ ] `null` can be assigned but `undefined` can not be assigned.
- [x] `null` is a primitive value. `undefined` is a primitive value.

## What is the difference between `let` and `const`?

- [ ] Just a stylistic difference.
- [x] `let` can be reassigned. `const` can not be reassigned.
- [ ] `let` is a primitive value. `const` is a primitive value.

## What is the difference between `var` and `let`?

- [ ] Just a stylistic difference.
- [x] `var` is function scoped. `let` is block scoped.
- [ ] `var` can be reassigned. `let` can not be reassigned.

<comment>
`var` is function scoped. `let` is block scoped. see [var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) and [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) for more information.

```javascript
function foo() {
  var x = 0;
  if (true) {
    var x = 1;
  }
  console.log(x); // 1
}

function bar() {
  let x = 0;
  if (true) {
    let x = 1;
  }
  console.log(x); // 0
}
```

</comment>

## What is the value of `x` after the following code is executed?

```javascript
let x = 0;
x++;
```

- [x] 1
- [ ] 0
- [ ] 2

## What is a closure in JavaScript, and what is it used for?

- [ ] A closure is a function that returns a function.
- [ ] A closure is a function that returns an object.
- [x] A closure is a function that has access to the variables in the outer
      function.
- [ ] A closure is a function that has access to the variables in the inner
      function.

<comment>
<p>
A closure is a function that has access to the variables in the outer function. see [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) for more information.

```javascript
function outer() {
  const x = 0;
  function inner() {
    console.log(x);
  }
  return inner;
}
```

</p>
</comment>

## What is the difference between a function declaration and a function expression?

- [ ] A function declaration is a function that is assigned to a variable. A
      function expression is a function that is not assigned to a variable.
- [ ] A function declaration is a function that is not assigned to a variable. A
      function expression is a function that is assigned to a variable.
- [x] A function declaration is a function that is hoisted. A function
      expression is a function that is not hoisted.
- [ ] A function declaration is a function that is not hoisted. A function
      expression is a function that is hoisted.

<comment>
A function declaration is a function that is hoisted. A function expression is a function that is not hoisted. see [Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting) for more information.

```javascript
// Function declaration
function foo() {
  return "foo";
}

// Function expression
const bar = function () {
  return "bar";
};
```

</comment>

## What is event bubbling?

- [ ] Event bubbling is the process of capturing an event in the innermost
      element and then propagating it to the outermost element.
- [ ] Event bubbling is the process of capturing an event in the outermost
      element and then propagating it to the innermost element.
- [x] Event bubbling is the process of capturing an event in the innermost
      element and then propagating it to the outermost element.
- [ ] Event bubbling is the process of capturing an event in the outermost
      element and then propagating it to the innermost element.

## What is event capturing?

- [ ] Event capturing is the process of capturing an event in the innermost
      element and then propagating it to the outermost element.
- [ ] Event capturing is the process of capturing an event in the outermost
      element and then propagating it to the innermost element.
- [ ] Event capturing is the process of capturing an event in the innermost
      element and then propagating it to the outermost element.
- [x] Event capturing is the process of capturing an event in the outermost
      element and then propagating it to the innermost element.

## What is event delegation?

- [ ] Event delegation is the process of capturing an event in the innermost
      element and then propagating it to the outermost element.
- [ ] Event delegation is the process of capturing an event in the outermost
      element and then propagating it to the innermost element.
- [x] Event delegation is the process of capturing an event in the outermost
      element and then propagating it to the innermost element.
- [ ] Event delegation is the process of capturing an event in the innermost
      element and then propagating it to the outermost element.

## What is the difference between `event.target` and `event.currentTarget`?

- [ ] `event.target` is the element that triggered the event.
      `event.currentTarget` is the element that the event listener is attached
      to.
- [ ] `event.target` is the element that the event listener is attached to.
      `event.currentTarget` is the element that triggered the event.
- [x] `event.target` is the element that triggered the event.
      `event.currentTarget` is the element that the event listener is attached
      to.

## What is the difference between `event.preventDefault()` and `event.stopPropagation()`?

- [ ] `event.preventDefault()` prevents the default behavior of the event.
      `event.stopPropagation()` stops the propagation of the event.
- [ ] `event.preventDefault()` stops the propagation of the event.
      `event.stopPropagation()` prevents the default behavior of the event.
- [x] `event.preventDefault()` prevents the default behavior of the event.
      `event.stopPropagation()` stops the propagation of the event.

<comment>
`event.preventDefault()` prevents the default behavior of the event. `event.stopPropagation()` stops the propagation of the event. see [Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) and [Event.stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation) for more information.
</comment>

## What is the difference between `event.preventDefault()` and `return false`?

- [ ] `event.preventDefault()` prevents the default behavior of the event.
      `return false` stops the propagation of the event.
- [x] `event.preventDefault()` prevents the default behavior of the event.
      `return false` stops the propagation of the event.
- [ ] `event.preventDefault()` stops the propagation of the event.
      `return false` prevents the default behavior of the event.

<comment>
`event.preventDefault()` prevents the default behavior of the event. `return false` stops the propagation of the event. see [Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) and [Event.stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation) for more information.
</comment>

## What is the difference between `event.preventDefault()` and `event.stopImmediatePropagation()`?

- [ ] `event.preventDefault()` prevents the default behavior of the event.
      `event.stopImmediatePropagation()` stops the propagation of the event.
- [ ] `event.preventDefault()` stops the propagation of the event.
      `event.stopImmediatePropagation()` prevents the default behavior of the
      event.
- [x] `event.preventDefault()` prevents the default behavior of the event.
      `event.

<comment>
`event.preventDefault()` prevents the default behavior of the event. `event.stopImmediatePropagation()` stops the propagation of the event. see [Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) and [Event.stopImmediatePropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopImmediatePropagation) for more information.
</comment>

## What is the purpose of the `this` keyword?

- [ ] To refer to the parent object.
- [x] To refer to the current object.
- [ ] To refer to the child object.

## What is the purpose of the `new` keyword?

- [ ] To create a new object.
- [x] To create a new instance of a constructor function.
- [ ] To create a new instance of a class.

## What is the prototype chain?

- [x] The prototype chain is the chain of objects that are linked together by
      their prototype objects.
- [ ] The prototype chain is how copy properties from one object to children.

<comment>
The prototype chain is the chain of objects that are linked together by their prototype objects. see [Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) for more information.
</comment>

## What is the difference between `__proto__` and `prototype`?

- [x] `__proto__` is a property of an object. `prototype` is a property of a
      function.
- [ ] `__proto__` is a property of a function. `prototype` is a property of an
      object.

<comment>
`__proto__` is a property of an object. `prototype` is a property of a function. see [Object.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype) and [Function.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) for more information.
</comment>

## What is the difference between `__proto__` and `Object.getPrototypeOf()`?

- [x] `__proto__` is a property of an object. `Object.getPrototypeOf()` is a
      method of an object.
- [ ] `__proto__` is a property of an object. `Object.getPrototypeOf()` is a
      method of an object.

## How would do describe the following code?

```javascript
function foo() {
  setTimeout(function () {
    console.log("foo");
    setTimeout(function () {
      console.log("bar");
      setTimeout(function () {
        console.log("baz");
      }, 1000);
    }, 1000);
  }, 1000);
}
```

- [x] Callback hell
- [ ] Tail recursion
- [ ] Event loop

## What is a `finally` block?

- [ ] A `finally` can be used to catch errors.
- [ ] `finally` is a keyword that is used to define a function.
- [x] A `finally` block is a block of code that is executed after a `try` block
      and a `catch` block.
- [ ] `finally` does not exist in JavaScript.

<comment>
```javascript
try {
  throw new Error("foo");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("bar");
}
```
</comment>
