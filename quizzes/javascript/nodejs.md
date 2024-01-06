# NodeJS

## What is Node.js?

- [ ] A web browser
- [x] A server-side JavaScript runtime environment
- [ ] A programming language
- [ ] A database management system

## Which command is used to install Node.js globally?

- [ ] `npm install node`
- [x] `npm install -g node`
- [ ] `npm install -global node`
- [ ] `npm install --globally node`

## Which of these are package managers for Node.js?

- [x] npm
- [ ] pip
- [ ] composer
- [x] yarn

## How can you include external modules in Node.js?

- [ ] Using the `add` statement
- [x] Using the `require` function
- [ ] Using the `include` directive
- [x] Using the `import` directive

## Which module is used to create a web server in Node.js?

- [x] http
- [ ] fs
- [ ] path
- [ ] url

## What is the purpose of the `package.json` file in a Node.js project?

- [ ] To store project documentation
- [x] To manage project dependencies
- [ ] To define project routes
- [ ] To configure the web server

## How can you handle asynchronous operations in Node.js?

- [ ] Using callbacks
- [ ] Using promises
- [ ] Using async/await
- [x] All of the above

## Which module is used for file system operations in Node.js?

- [ ] http
- [x] fs
- [ ] path
- [ ] url

## What is the default package manager for Node.js?

- [x] npm
- [ ] yarn
- [ ] pip
- [ ] composer

## What is the purpose of the `exports` object in Node.js?

- [ ] To import modules
- [x] To export functions or objects from a module
- [ ] To define global variables
- [ ] To handle HTTP requests

## How can you handle errors in Node.js?

- [x] Using try/catch blocks
- [ ] Using error handling middleware
- [ ] Using the `throw` statement
- [ ] All of the options

## What is the purpose of the `__dirname` variable in Node.js?

- [ ] To get the current working directory
- [x] To get the directory name of the current module
- [ ] To get the directory name of the main script
- [ ] To get the directory name of the parent module

---

To get the directory name of the current module. `__dirname` is a global variable that contains the directory name of the current module.

## How can you install a specific version of a package using npm?

- [x] `npm install package-name@version`
- [ ] `npm install package-name --version`
- [ ] `npm install package-name -v version`
- [ ] `npm install package-name --v version`

---

`npm install package-name@version`


## What is the purpose of the `module.exports` object in Node.js?

- [ ] To import modules
- [ ] To define global variables
- [x] To export functions or objects from a module
- [ ] To handle HTTP requests

## Requiring modules

Here is module `foo.js`:

```js
consol.log('Hello from foo.js')
```

And here is module `index.js` requiring `foo.js`:

```js
require('./foo')
require('./foo')
```

What will be the output of `node index.js`?

- [x] `Hello from foo.js`
- [ ] `Hello from foo.js` `Hello from foo.js`
- [ ] Nothing is printed to the console

---

Node.js caches modules on first require. So the output will be `Hello from foo.js` only once.

## When is `child_process.exec()` preferable to `child_process.spawn()`?

- [ ] When you want to execute a command in a new process
- [ ] When you want to execute a command in a new thread
- [x] When you want to execute a command in a shell
- [ ] When you want to execute a command in a new terminal


## Error handling

Why is the following code not a good practice in error handling?

```js

process.on('uncaughtException', (err) => {
  console.log('Caught exception: ' + err);
});

```

- [ ] Because it will catch all exceptions
- [x] Because it will catch all unhandled exceptions but the process will continue to run
- [ ] Because it will catch all unhandled exceptions and the process will exit
- [ ] Because it will catch all unhandled exceptions and the process will restart

---

`process.on('uncaughtException')` is used to catch unhandled exceptions. However, the process will continue to run after the exception is caught. This is not a good practice because the process may be in an inconsistent state.

## Errors and promises

What is the output of the following code?

```js
const p = new Promise(function (resolve, reject) { 
    reject(new Error('Oops'));
});

p.catch(function (err) {
    console.log(err.message);
});
```

- [ ] `Error: Oops`
- [x] `Oops`
- [ ] `Error`
- [ ] `undefined`
