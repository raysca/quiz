___
topic: Accessibility
description: These are questions include accessibility methods and concepts. e.g ARIA, semantic HTML, and screen readers e.t.c
---

# Accessibility

## What does ARIA stand for?

- [x] Accessible Rich Internet Applications
- [ ] Accessible Responsive Internet Applications
- [ ] Accessible Responsive Internet Architecture
- [ ] Accessible Rich Internet Architecture

## What is the purpose of the `aria-label` attribute?

- [x] To provide a label for an element
- [ ] To provide a description for an element
- [ ] To provide a label for an input
- [ ] To provide a description for an input

---

See the example below:

```html
<button aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
```

The `aria-label` attribute is used to provide a label for an element. The `aria-hidden` attribute is used to hide an element from the accessibility tree. see [ARIA labels and relationships](https://web.dev/aria-labels-and-relationships/) for more information.

![](https://web.dev/static/articles/aria-labels-and-relationships/image/using-aria-label-identif-89ed5dcc8c595_1920.jpg)

---

## What is the purpose of the `aria-labelledby` attribute?

- [ ] To provide a label for an element
- [x] Allows us to specify the ID of another element in the DOM as an element's label
- [ ] To provide a label for an input
- [ ] To provide a description for an input

---

![Labelled By](https://web.dev/static/articles/aria-labels-and-relationships/image/using-aria-labelledby-id-d5f1d7bae3169_1920.jpg)

---

## What is the purpose of the `aria-describedby` attribute?

- [ ] To provide a label for an element
- [x] To provide a description for an element
- [ ] To provide a label for an input
- [ ] To provide a description for an input

---

See [ARIA labels and relationships](https://web.dev/aria-labels-and-relationships/) for more information.

![Described By](https://web.dev/static/articles/aria-labels-and-relationships/image/using-aria-describedby-e-95333568609f3_1920.jpg)

---

## What is the purpose of the `aria-hidden` attribute?

- [x] To hide an element from the accessibility tree
- [ ] To hide an element from the DOM
- [ ] To hide an element from the browser
- [ ] To hide an element from the user

---

See the example below:

```html
<button aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
```

The `aria-hidden` attribute is used to hide an element from the accessibility tree. see [ARIA labels and relationships](https://web.dev/aria-labels-and-relationships/) for more information.

---

## Why use a role attribute?

- [ ] It provides css styling
- [ ] It allows us to specify the ID of another element in the DOM as an element's label
- [x] It enhances the semantic meaning of HTML elements, making the code more meaningful and maintainable
- [ ] It provides a description for an element

## What is the purpose of the `tabindex` attribute?

- [ ] It provides css styling
- [x] It controls the order in which elements are focused when a user navigates through a web page using the Tab key
- [ ] It enhances the semantic meaning of HTML elements, making the code more meaningful and maintainable
- [ ] It provides a description for an element

## What is the importance of Web Accessibility?

- [x] It is important for people with disabilities
- [ ] It is important for people without disabilities
- [ ] It is important for search engines
- [x] It is important for screen readers
