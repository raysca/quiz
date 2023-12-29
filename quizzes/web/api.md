---
topic: Web API
description: These are questions include Web API methods and concepts. e.g localStorage, sessionStorage, and cookies e.t.c
---

# Web API

## When is a local storage used?

- [x] When you want to store data on the web browser.
- [ ] When you want to store data on the web server.

## What is the difference between a session cookie and a persistent cookie?

- [ ] A session cookie is stored on the web server. A persistent cookie is stored on the web server.
- [ ] A session cookie is marked as `HttpOnly`. A persistent cookie is not marked as `HttpOnly`.
- [x] A session cookie is a temporary cookie that is stored on the web browser until the browser is closed. A persistent cookie persists between browser sessions.
- [ ] No difference.

---
A session cookie is stored on the web browser until the browser is closed. A persistent cookie is stored on the web browser. see [HTTP cookie](https://en.wikipedia.org/wiki/HTTP_cookie) for more information.

---

## What is the difference between a cookie and a local storage?

- [x] Data stored in a cookie is sent to the server with every request. Data stored in a local storage is not sent to the server.
- [ ] Local storage is used to store data on the web browser. Cookies are used to store data on the web server.
- [ ] Data stored in a cookie is sent to the server with every request. Data stored in a local storage is sent to the server only when the user logs in.
- [ ] None of the above.

---
Only cookies are sent to the server with every request. see [HTTP cookie](https://en.wikipedia.org/wiki/HTTP_cookie) for more information.

---

## What API can help to track the user's location?

- [x] `navigator.geolocation`
- [ ] `navigator.location`
- [ ] `navigator.position`
- [ ] `navigator.coords`
  
## How can you validate a user's email address on the client side?

- [ ] Use a regular expression
- [ ] Use the `email` input type
- [ ] Use the `email` input type and a regular expression
- [x] Use the `email` input type and the `required` attribute

---
The `email` input type will validate the email address. The `required` attribute will ensure that the input is not empty. see [HTML input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) for more information.

---


## HTML Images

What is the purpose of the `alt` attribute on an image tag below?

```html
<img src="https://example.com/image.png" alt="some-text">
```

- [ ] It is used to describe the image
- [ ] It is used to provide a fallback image
- [x] It is used to provide a fallback text
- [ ] It is used to provide a fallback text and image


<!-- ## HTML Src Sets

What is the purpose of the `srcset` attribute on an image tag below?

```html
<img src="https://example.com/image.png" srcset="https://example.com/image.png 1x, https://example.com/image@2x 2x">
```

- [ ] It is used to describe the image
- [ ] Provide responsive images
- [x] It is used to provide a fallback image
- [ ] It is used to provide a fallback text -->


## HTML Images

What is the purpose of the `sizes` attribute on an image tag below?

```html
<img src="https://example.com/image.png" sizes="(max-width: 600px) 200px, 50vw">
```

- [ ] It is used to describe the image
- [x] Provide responsive images
- [ ] It is used to provide a fallback image
- [ ] It is used to provide a fallback text


## Progressive Web Apps

What is the purpose of the `manifest.json` file?

- [ ] It is used to describe the web app
- [ ] It is used to provide a fallback text
- [ ] Describes the web app
- [ ] Provide caching for the web page

___
The `manifest.json` file is used to describe the web app. see [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) for more information.

---

## Progressive Web Apps

What is the purpose of the `service worker`?

- [ ] It is used to describe the web app
- [ ] It caches the assets of the web app
- [ ] It is used to provide a fallback text
- [ ] It is used to provide a fallback image

## For a web app to be considered a progressive web app, it must have the following:

- [x] A `manifest.json` file
- [ ] A `service worker` must be included in the code
- [x] The web app must be served over HTTPS
- [ ] It must have a `favicon.ico` file

