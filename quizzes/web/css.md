---
topic: Cascading Style Sheets (CSS)
description: Topics covered in this category are Flexbox, Grid, and CSS Selectors e.t.c
---

# Cascading Style Sheets (CSS)

## What is the difference between `display: none` and `visibility: hidden`?

- [x] `display: none` removes the element from the page, while `visibility: hidden` hides the element from the page, but the element still takes up space.
- [ ] `display: none` hides the element from the page, but the element still takes up space, while `visibility: hidden` removes the element from the page.
- [ ] `display: none` removes the element from the page, while `visibility: hidden` hides the element from the page, but the element still takes up space.
- [ ] None of the above.

## What are the different ways to layout elements in CSS?

- [x] Floats
- [x] Flexbox
- [x] Grid
- [ ] Position

## What are the main css selectors?

- [ ] Class
- [ ] ID
- [ ] Tag
- [x] All of the above

## How can you select an element with a class of `container`?

- [ ] `container`
- [ ] `#container`
- [x] `.container`
- [ ] `container`

## How can you select an element with an ID of `container`?

- [ ] `container`
- [x] `#container`
- [ ] `.container`
- [ ] `container`


## How would you apply a hover effect to an element with a class of `container`?

- [x] `.container:hover`
- [ ] `#container:hover`
- [ ] `container:hover`
- [ ] `container:hover`

## What is the difference between `em` and `rem`?

- [ ] `em` is relative to the root element, while `rem` is relative to the parent element.
- [ ] `em` and `rem` are the same.
- [ ] `em` is in pixels, while `rem` is in ems.
- [x] `em` is relative to the parent element, while `rem` is relative to the root element.


## What is the difference between `justify-content` and `align-items`?

- [x] `justify-content` is used to aligns flex items along the main axis of the flex container, while `align-items` is used to aligns flex items along the cross axis of the flex container.
- [ ] `justify-content` is used to aligns flex items along the cross axis of the flex container, while `align-items` is used to aligns flex items along the main axis of the flex container.

---

```css
.container {
  display: flex;
  justify-content: center; /* Center items along the main axis */
  align-items: center; /* Center items along the cross axis */
}
```

---

## Which CSS property is used for adding spacing between HTML elements?

- [ ] `padding`
- [ ] `border`
- [ ] `spacing`
- [x] `margin`

## What is the difference between `margin` and `padding`?

- [x] `margin` is used for adding spacing between HTML elements, while `padding` is used for adding spacing between the content and the border.
- [ ] `margin` is used for adding spacing between the content and the border, while `padding` is used for adding spacing between HTML elements.
- [ ] `margin` and `padding` are the same.
- [ ] `margin` includes the border, while `padding` does not include the border.

## What is the purpose of the CSS property display: none;?

- [ ] To hide an element from the page, but the element still takes up space.
- [x] Removes the element from the document flow.
- [ ] To hide an element from the page, but the element still takes up space.
- [ ] To remove spacing between elements.
