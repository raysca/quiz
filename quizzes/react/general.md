# General React Questions

## React Components

The code below is an example of a React component. What type of react component is this?

```jsx
import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};
```

- [ ] Class Component
- [x] Functional Component
- [ ] Higher Order Component
- [ ] None of the above


## React Components

How would you describe the component named `withLogger` below?

```jsx
const withLogger = (WrappedComponent) => {
  return class WithLogger extends Component {
    
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} is mounted`);
    }
    
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

class MyComponent extends Component {
  render() {
    return <div>My Component</div>;
  }
}

const EnhancedComponent = withLogger(MyComponent);
```

- [x] A Higher Order Component
- [ ] A Functional Component
- [ ] A Class Component
- [ ] None of the above


## React Hooks

What is the purpose of the `useEffect` hook?

- [ ] To create a new component
- [ ] To update the state of a component
- [ ] To create a new component and update the state of a component
- [x] To perform side effects in a component


## React Hooks

What is the purpose of the `useRef` hook?

- [ ] To create a new component
- [x] To reference a DOM element
- [ ] To create a new component and reference a DOM element
- [ ] To perform side effects in a component

## React Rendering

Why is it generally a bad idea to use the `index` of an array as a `key` prop?

- [ ] It is not a bad idea to use the `index` of an array as a `key` prop
- [ ] It makes it difficult to find the element in the DOM
- [ ] It is a bad idea to use the `index` of an array as a `key` prop because it is not unique
- [x] It is a bad idea to use the `index` of an array as a `key` prop because it is not stable

<comment>
    <p>
        The index of an array is not a stable value. If the array is sorted or filtered, the index of an element will change. This can cause React to re-render the entire list when it is not necessary.
    </p>
</comment>

## React Rendering

Which of the following options are **valid** react lifecycle methods?

- [x] componentDidMount
- [x] componentDidUpdate
- [ ] componentDidNoMount
- [x] componentWillUnmount

<comment>
    <p>
        **componentDidMount**, **componentDidUpdate**, and **componentWillUnmount** are all valid lifecycle methods. **componentDidNoMount** is not a valid lifecycle method.
    </p>
</comment>

## React Rendering

What is the purpose of the `useEffect` hook in React?

- [x] `useEffect` is used to perform side effects in functional components, such as data fetching.
- [ ] `useEffect` is not a valid hook in React.
- [ ] `useEffect` is used for updating the DOM manually.
- [ ] `useEffect` is for tracking state changes in a component.


## React Rendering

What is the implication of using `useEffect` in the code below?

```jsx
import {useEffect} from 'react';

const MyComponent = () => {
  useEffect(() => {
    console.log('Hello World!');
  });
  
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};
```

- [ ] The component will not render.
- [x] The component will render infinitely.
- [ ] The component will render once.
- [ ] The component will render twice.

<comment>
    <p>
        The component will render infinitely because the `useEffect` hook does not have any dependencies. The `useEffect` hook will run after every render.
    </p>
</comment>

## React Rendering

What is the purpose of returning a function from the `useEffect` hook in the component below?

```jsx
import { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    console.log('Hello World!');
    
    return () => {
      console.log('Goodbye World!');
    };
  }, []);
  
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};
```

- [x] The function returned from the `useEffect` hook will run before the component is unmounted.
- [ ] The function returned from the `useEffect` hook will run after the component is unmounted.
- [ ] The returned function has no effect at all on the component.
- [ ] The function has no use at all

<comment>
    <p>
        The function returned from the `useEffect` hook will run before the component is unmounted. This is useful for cleaning up any side effects that the component may have created.
    </p>
</comment>

## React State

What does it mean to lift state up in React?

- [ ] To move state from a parent component to a child component
- [ ] To move state from a child component to a sibling component
- [x] To move state from a child component to a parent component
- [ ] To move state from a sibling component to a child component

<comment>
    <p>
        Lifting state up in React means to move state from a child component to a parent component. This is useful when multiple components need to share the same state.
    </p>
</comment>

## What Props vs State

What is the difference between **props** and **state** in React?

- [ ] **props** are used to store data in a component, while **state** is used to pass data to a component.
- [x] **props** are used to pass data to a component, while **state** is used to store data in a component.
- [ ] **props** is just another name for **state**.
- [ ] **props** are primarily used in functional components, while **state** is primarily used in class components.

<comment>
    <p>
        **props** are used to pass data to a component, while **state** is used to store data in a component.
    </p>
</comment>

## React State

What is prop drilling in React?

- [x] Prop drilling is the process of passing props from a parent component to a child component.
- [ ] Prop drilling is the process of passing props from a child component to a parent component.
- [ ] Destrucuring props in a component.
- [ ] Sharing state between sibling components.

<comment>
    <p>
        Prop drilling is the process of passing props from a parent component to a child component. This can be a problem when the child component is nested deep within the component tree.
    </p>

    ```jsx
        const ParentComponent = ({count}) => {      
            return (
                <div>
                <ChildComponent count={count} />
                </div>
            );
        };
    ```
</comment>
