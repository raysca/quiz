---
topic: General React
---
# General React Questions

## The code below is an example of a React component. What type of react component is this?

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


## How would you describe the component named `withLogger` below?

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

## What is the purpose of the `useEffect` hook?

- [ ] To create a new component
- [ ] To update the state of a component
- [ ] To create a new component and update the state of a component
- [x] To perform side effects in a component

## What is the purpose of the `useRef` hook?

- [ ] To create a new component
- [x] To reference a DOM element
- [ ] To create a new component and reference a DOM element
- [ ] To perform side effects in a component

## Why is it generally a bad idea to use the `index` of an array as a `key` prop?

- [ ] It is not a bad idea to use the `index` of an array as a `key` prop
- [ ] It makes it difficult to find the element in the DOM
- [ ] It is a bad idea to use the `index` of an array as a `key` prop because it is not unique
- [x] It is a bad idea to use the `index` of an array as a `key` prop because it is not stable

<comment>
    The index of an array is not a stable value. If the array is sorted or filtered, the index of an element will change. This can cause React to re-render the entire list when it is not necessary.
</comment>

## Which of the following options are **valid** react lifecycle methods?

- [x] componentDidMount
- [x] componentDidUpdate
- [ ] componentDidNoMount
- [x] componentWillUnmount

<comment>
  **componentDidMount**, **componentDidUpdate**, and **componentWillUnmount** are all valid lifecycle methods. **componentDidNoMount** is not a valid lifecycle method.
</comment>

## React Rendering

What is the purpose of the `useEffect` hook in React?

- [x] `useEffect` is used to perform side effects in functional components, such as data fetching.
- [ ] `useEffect` is not a valid hook in React.
- [ ] `useEffect` is used for updating the DOM manually.
- [ ] `useEffect` is for tracking state changes in a component.


## What is the implication of using `useEffect` in the code below?

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
    The component will render infinitely because the `useEffect` hook does not have any dependencies. The `useEffect` hook will run after every render.
</comment>

## What is the purpose of returning a function from the `useEffect` hook in the component below?

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
  The function returned from the `useEffect` hook will run before the component is unmounted. This is useful for cleaning up any side effects that the component may have created.
</comment>

## React State

What does it mean to lift state up in React?

- [ ] To move state from a parent component to a child component
- [ ] To move state from a child component to a sibling component
- [x] To move state from a child component to a parent component
- [ ] To move state from a sibling component to a child component

<comment>
  Lifting state up in React means to move state from a child component to a parent component. This is useful when multiple components need to share the same state.
</comment>

## What Props vs State

What is the difference between **props** and **state** in React?

- [ ] **props** are used to store data in a component, while **state** is used to pass data to a component.
- [x] **props** are used to pass data to a component, while **state** is used to store data in a component.
- [ ] **props** is just another name for **state**.
- [ ] **props** are primarily used in functional components, while **state** is primarily used in class components.

<comment>
  **props** are used to pass data to a component, while **state** is used to store data in a component.
</comment>

## What is prop drilling in React?

- [x] Prop drilling is the process of passing props from a parent component to a child component.
- [ ] Prop drilling is the process of passing props from a child component to a parent component.
- [ ] Destrucuring props in a component.
- [ ] Sharing state between sibling components.

<comment>

  Prop drilling is the process of passing props from a parent component to a child component. This can be a problem when the child component is nested deep within the component tree.

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


### In the code below how would you describe the `Profile` component

```jsx
  import { memo, useState } from 'react';

  const Profile = memo(function Profile({ name }) {
    return <>
        <p>Name:{name}</p>
    </>;
  });

  export default function RegForm() {
    const [name, setName] = useState('John Doe');
    return (
      <>
        <label>
          Name: <input value={name} onChange={e => setName(e.target.value)} />
        </label>
        <EmployeeProfile name={name}/>
      </>
    );
  }
```

- [ ] A Higher Order Component
- [x] A Pure Component
- [ ] A normal component
- [ ] A reactified component

<comment>
  The `Profile` component is a pure component. It will only re-render when the `name` prop changes.
</comment>

## What statement best describes the react virtual DOM?

- [ ] The virtual DOM is a copy of the DOM that is stored in the browser.
- [ ] The virtual DOM is for looping over an array of data in react. 
- [x] The virtual DOM is a copy of the DOM that is stored in memory.
- [ ] The virtual DOM is for rendring child components.

<comment>
  The virtual DOM is a copy of the DOM that is stored in memory. React uses the virtual DOM to determine what changes need to be made to the DOM. see https://reactjs.org/docs/faq-internals.html
</comment>

## What is the purpose of the second argument in the `useState` hook?

- [ ] The second argument is used to set the initial state of the component.
- [ ] The second argument is used to update the state of the component.
- [ ] The second argument will run after the component is mounted.
- [x] The second argument will run after the state is updated.

<comment>
  The second argument is used to set the initial state of the component. The second argument is only used when the component is first mounted.

  ```jsx
      const [count, setCount] = useState(0, () => console.log('State updated'));
  ```
</comment>

## What are synthetic events in React?

- [ ] Synthetic events are events that are created by the browser.
- [x] Synthetic events are events that are created by React.
- [ ] Synthetic events are events that are created by the developer.
- [ ] Synthetic events are events with a `SyntheticEvent` type.

## What options are true about this react component?

```jsx
import React, { useState } from 'react';

const ExampleComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Input Value: {inputValue}</p>
    </div>
  );
};
```

- [x] A functional component.
- [ ] An uncontrolled component.
- [x] A controlled component.
- [ ] A class component.

## How would you describe the process of reconciliation in React?

- [x] Reconciliation is the process of updating the DOM.
- [ ] Reconciliation is the process of updating the virtual DOM.
- [ ] Reconciliation is the process of updating the state of a component.
- [ ] Reconciliation is the process of updating the props of a component.

## What problem does `React.context` solve?

- [x] `React.context` solves the problem of prop drilling.
- [ ] `React.context` solves the problem of state management.
- [ ] `React.context` solves the problem of component rendering.
- [ ] `React.context` solves the problem of component styling.

<comment>
  `React.context` solves the problem of prop drilling. Prop drilling is the process of passing props from a parent component to a child component. This can be a problem when the child component is nested deep within the component tree.
</comment>