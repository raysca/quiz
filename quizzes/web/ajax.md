# AJAX & Fetch API

## Fetch Promises

In the code below, what is the return value of calling the `fetch` function?

```javascript
const response = fetch('https://example.com').then((response) => {
	return response.json();
});
```

- [ ] undefined
- [x] A Promise containing the response
- [ ] The response body
- [ ] The response headers

## In what situation would you use a service worker?

- [ ] To cache static assets
- [ ] To cache dynamic assets
- [ ] To cache API responses
- [x] All of the above

## How do you cancel a fetch request?

- [ ] You can't
- [ ] Ignore the response and close the connection
- [x] Use an `AbortController`'s `abort` method of the `AbortSignal`
- [ ] Use the `cancel` method of the `AbortSignal`

---

You can use an `AbortController` to cancel a fetch request. Th example below shows how to do this.

```javascript
const controller = new AbortController();
const signal = controller.signal;

fetch('https://example.com', { signal })
	.then((response) => {
		return response.json();
	})
	.catch((error) => {
		if (error.name === 'AbortError') {
			console.log('Fetch aborted');
		}
	});

// This will abort the fetch request
controller.abort();
```

## What is the purpose of the `AbortController`?

- [x] To cancel a fetch request
- [ ] To cancel a service worker
- [ ] To cancel a promise
- [ ] To cancel a web worker

## What does the `Fetch API` credentials option do?

- [ ] Attaches special credentials to the request
- [x] Includes cookie credentials in the request
- [ ] Includes and receives HTTP headers in the request
- [ ] All of the above

## Error Handling

In the code below, assume that the remote server is down. What will be logged to the console?

```javascript
// Assume the remote server returns a 500 error
fetch('https://example.com')
	.then(async (response) => {
		const json = await response.json();
		console.log(json);
	})
	.catch((error) => {
		console.log(error);
	});
```

- [ ] undefined
- [ ] An empty object
- [ ] Logs the error object
- [x] Logs the json message from the server

---

The fetch API does not throw an error if the server returns a 500 error. Instead, it will return a response object with a status code of 500. To handle this, you can check the status code of the response object and throw an error if it is not 200.

```javascript
fetch('https://example.com')
	.then(async (response) => {
		if (response.status !== 200) {
			throw new Error('Server error');
		}
		const json = await response.json();
		console.log(json);
	})
	.catch((error) => {
		console.log(error);
	});
```

## The `Fetch API` will automatically retry a request if it fails

- [ ] True
- [x] False

---

The `Fetch API` will not automatically retry a request if it fails. You will need to handle this yourself.

## How would you read the response body of a fetch request if it is not JSON?

- [ ] Use the `response.data()` method
- [x] Use the `response.blob()` method
- [x] Use the `response.arrayBuffer()` method
- [ ] Use the `response.binary()` method

## CORS Rquest

When a `CORS` request is made using the `FETCH API`, what type of request is made first?

- [ ] A `HEAD` request
- [ ] A `PUT` request
- [ ] A `PATCH` request
- [x] A `OPTIONS` request

---

The browser will make a `OPTIONS` request first to determine what methods are allowed. If the method is allowed, then the browser will make the actual request.

## How can you send authentication credentials with a fetch request?

- [x] Use the `credentials` option
- [ ] Use the `credentials` header
- [ ] Use the `credentials` property
- [ ] Use the `credentials` method

---

The `credentials` option allows you to send and receive authentication credentials with a fetch request. The `credentials` option can be set to one of the following values:

- `omit` - Don't send or receive credentials
- `same-origin` - Only send and receive credentials if the request is on the same domain
- `include` - Always send and receive credentials
- `none` - Never send or receive credentials
