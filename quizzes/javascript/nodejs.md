# Node.JS

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

## Node.js runs http requests in a single thread?

- [x] True
- [ ] False

---

Node.js runs http requests in a single thread. Node.js is single-threaded, but it uses an event loop to handle asynchronous operations.

## All I/O operations in Node.js are asynchronous?

- [x] True
- [ ] False

---

All I/O operations in Node.js are asynchronous. Node.js is single-threaded, but it uses an event loop to handle asynchronous operations.

## What is the purpose of the `process` object in Node.js?

- [ ] To get information about the current process
- [ ] To get information about the current module
- [ ] To get information about the current script
- [x] All of the above

## What is the best practice of gracefully shutting down a Node.js process?

- [ ] Using the `process.exit()` method
- [ ] Using the `process.kill()` method
- [x] Using the `process.on('SIGTERM')` event
- [ ] Using the `process.on('SIGINT')` event

---

Using the `process.on('SIGTERM')` event. The `SIGTERM` event is emitted when the process is terminated. It is a good practice to gracefully shut down a Node.js process by listening for this event and then calling `process.exit()`.

## What is the value of the `process.argv` property in Node.js?

- [ ] The arguments passed to the Node.js process
- [ ] The arguments passed to the Node.js script
- [x] All of the above

## How do you read environment variables in Node.js?

- [x] Using the `process.env` object
- [ ] Using the `process.env()` method
- [ ] Using the `process.getEnv()` method
- [ ] All of the above

## What is the purpose of the `Buffer` class in Node.js?

- [ ] To read and write files
- [ ] To handle HTTP requests
- [x] To handle binary data
- [ ] To handle errors

## Node.js is a single-threaded runtime environment?

- [x] True
- [ ] False

## Node.js Streams

What is the purpose of the `pipe` method in Node.js streams?

- [ ] To read data from a stream
- [ ] To write data to a stream
- [x] To read data from a readable stream and write it to a writable stream
- [ ] To close a stream

---

To read data from a readable stream and write it to a writable stream. The `pipe` method is used to read data from a readable stream and write it to a writable stream.

## Node.js Streams Types

Which of these are types of streams in Node.js?

- [x] Readable
- [x] Writable
- [ ] Functional
- [x] Transform

## When does `setTimeout` execute the callback function?

- [ ] After the specified number of milliseconds
- [ ] Before the specified number of milliseconds
- [x] After the specified number of milliseconds, but not exactly
- [ ] Before the specified number of milliseconds, but not exactly

---

`setTimeout` executes the callback function after the specified number of milliseconds, but because of the event loop, it is not guaranteed to be executed exactly after the specified number of milliseconds.

## What is the purpose of the `module.exports` object in Node.js?

- [ ] To import modules
- [ ] To define global variables
- [x] To export functions or objects from a module
- [ ] To handle HTTP requests

## Requiring modules

Here is module `foo.js`:

```js
consol.log('Hello from foo.js');
```

And here is module `index.js` requiring `foo.js`:

```js
require('./foo');
require('./foo');
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
