# React Ecosystem

These are general questions about the React ecosystem. The ecosystem consists of libraries and tools that are used with React but are not part of React itself.

## What is the purpose of the `create-react-app` package?

- [x] To create a new React application
- [ ] To create a new React component
- [ ] To create a new React hook
- [ ] None of the above

---

The `create-react-app` package is a command-line tool that sets up a new React application with a basic project structure, build configuration, and development server. It provides a convenient way to start a new React project without having to manually configure the build process.

## What is the purpose of the `react-router-dom` package?

- [ ] To create a new React application
- [ ] To create a new React component
- [ ] To create a new React hook
- [x] To create a new router for a React application

---

The `react-router-dom` package is a popular routing library for React applications. It allows you to define routes and navigate between different pages or views within your application. It provides a declarative way to handle client-side routing and manage the application's navigation.

## What is the purpose of the `redux` package?

- [ ] To style a React application
- [x] To create a new state management system for a React application
- [ ] To create a new React component
- [ ] To create a new React hook

---

The `redux` package is a predictable state container for JavaScript applications, including React. It provides a centralized store to manage the application's state and allows you to dispatch actions to modify the state. Redux follows the principles of immutability and unidirectional data flow, making it easier to reason about and test your application's state changes.

## An example of a styled component is:

- [ ] `styled.div`
- [ ] `styled.h1`
- [ ] `styled.p`
- [x] All of them

---

Styled components are a popular way to style React components using CSS-in-JS. With styled components, you can define reusable styled elements by combining React components with CSS styles. Examples of styled components include `styled.div`, `styled.h1`, and `styled.p`. You can style any HTML element or custom React component using styled components.

## Which of the following statements are true about server-side rendering?

- [x] Server-side rendering is the process of rendering a web page on the server and sending the HTML to the client
- [x] Server-side rendering is better for SEO
- [ ] Server-side rendering is not supported by React
- [x] Server-side rendering is faster than client-side rendering

---

Server-side rendering (SSR) is a technique where the initial rendering of a web page is done on the server and the resulting HTML is sent to the client. This approach has several benefits, including improved SEO as search engines can easily crawl and index the content, faster initial page load times, and better performance on low-powered devices. React supports server-side rendering through libraries like Next.js.

## What does SSR stand for?

- [x] Server-side rendering
- [ ] Server-side routing
- [ ] State-side rendering
- [ ] State-side routing

---

SSR stands for server-side rendering. It refers to the process of rendering a web page on the server and sending the pre-rendered HTML to the client. This approach allows search engines and social media crawlers to easily access and index the content, improving SEO and initial page load times.

## Which of these are state management systems?

- [x] Redux
- [x] Signals
- [ ] React Context
- [x] MobX
- [ ] React Router

---

State management systems are libraries or patterns that help manage the state of an application. Redux, Signals, and MobX are examples of state management systems commonly used with React. They provide a way to centralize and manage the application's state, making it easier to share data between components and handle complex state changes.

## What are the use cases for `Next.js`?

- [x] Server-side rendering
- [x] Static site generation
- [ ] Built-in state management
- [x] Built-in routing

---

Next.js is a popular framework for building React applications. It provides several features, including server-side rendering (SSR), static site generation (SSG), built-in routing, and more. Next.js is commonly used for projects that require SEO-friendly pages, improved performance, and advanced routing capabilities.

## Define the `flux` pattern.

- [x] A uni directional pattern for managing state in React applications
- [ ] A pattern for managing routing in React applications
- [ ] A pattern for managing data in React applications
- [ ] A pattern for managing forms in React applications

## What are the principles of the `flux` pattern?

- [x] Single source of truth
- [ ] Single source of data
- [x] State is read-only
- [ ] Single source of action
- [x] State is changed using pure functions

## What do you understand by the term "single source of truth"?

- [x] The state of an application is stored in a single object
- [ ] The state of an application is stored in a single component
- [ ] The state of an application is stored in a single function
- [ ] The state of an application is stored in a single file

---

Single source of truth means that the state of an application is stored in a single object. This object is often referred to as the "store" or "state tree".

![Single source of truth](/single-source-of-truth.png)

## What is the purpose of the `redux-thunk` package?

- [ ] To create a new state in a Redux application
- [x] To perform asynchronous operations in a Redux application
- [ ] To debug a Redux application
- [ ] None of the options

## What is a `Provider` component in a Redux application?

- [ ] A component that provides data to other components
- [ ] A component that helps to debug a Redux application
- [ ] A component that creates a new state in a Redux application
- [x] A component that provides the redux store to other components

## Redux

What is the purpose of the `connect` function in this code below?

```js
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
	data: state.data
});

const mapDispatchToProps = (dispatch) => ({
	fetchData: () => dispatch(fetchDataAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
```

- [x] To connect `MyComponent` to the Redux store
- [ ] To connect `MyComponent` to the React Context
- [ ] To connect `MyComponent` to the pure functions
- [ ] To compose `MyComponent` with other components
