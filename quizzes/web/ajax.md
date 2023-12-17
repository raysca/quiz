# Ajax

## In the code below, what is the return value of calling the  `fetch` function?

```javascript
const response = fetch("https://example.com").then((response) => {
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
