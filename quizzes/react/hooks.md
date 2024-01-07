# React Hooks

## What is the purpose of the `useState` hook?

- [ ] To create a new React component
- [ ] To create a new React hook
- [x] To create a new state variable
- [ ] None of the above

## Reactive State

Which react hooks can be used to make the variable `count` reactive?

```js
const SampleComponent = () => {
	const count = 0;

	const setCount = (newCount) => {
		count = newCount;
	};

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
};
```

- [x] `useState`
- [ ] `useEffect`
- [ ] `useContext`
- [ ] `useReducer`

## Managing Side Effects

In a scenario where you need to perform a cleanup operation when a component is unmounted, which hook would you use?

- [ ] `useState`
- [x] `useEffect`
- [ ] `useContext`
- [ ] `useReducer`

## React Context

Which hook would you use to access the context value in a component?

- [ ] `useState`
- [ ] `useEffect`
- [x] `useContext`
- [ ] `useReducer`

## Custom Hooks

Which of the following are true about custom hooks?

```javascript
const useFancyFunc = () => {
	const [count, setCount] = useState(0);
	const increment = () => setCount(count + 1);
	return [count, increment];
};
```

- [ ] Custom hooks must start with the word `use`
- [x] Custom hooks can be used to share logic between components
- [x] `useFancyFunc` is not a valid custom hook
- [ ] `useFancyFunc` is a pure function

## Which of these are valid React hooks?

- [x] `useId`
- [ ] `useElement`
- [x] `useContext`
- [ ] `useRender`

## Why use `useReducer` instead of `useState`?

- [ ] `useReducer` is faster than `useState`
- [x] `useReducer` is better for complex state
- [ ] `useReducer` is easier to use than `useState`
- [ ] `useReducer` is more popular than `useState`

## Which of the following are true about `useEffect`?

- [x] `useEffect` is used to manage side effects
- [x] `useEffect` is used to perform cleanup operations
- [ ] `useEffect` is used to create new state variables
- [x] `useEffect` is used to fetch data

## Which of the following are true about `useContext`?

- [x] `useContext` is used to access context values
- [ ] `useContext` is used to fetch data
- [x] `useContext` is used to share state between components
- [ ] `useContext` is used to create new state variables

## Which of the following are true about `useReducer`?

- [x] `useReducer` is used to manage complex state
- [ ] `useReducer` is used to fetch data
- [ ] `useReducer` is used to create new state variables
- [x] `useReducer` is only synchronous

## What React hook can be used to solve the `prop drilling` problem?

- [ ] `useState`
- [ ] `useEffect`
- [x] `useContext`
- [ ] `useReducer`

---

`prop drilling` is the process of passing props from a parent component to a child component, and then to another child component, and so on. This can be a problem when you have a deeply nested component tree.

Using `useContext` you can pass props to any component in the tree without having to pass them through all the intermediate components.

```js
const MyContext = React.createContext();

const ParentComponent = () => {
	const [count, setCount] = useState(0);
	return (
		<MyContext.Provider value={{ count, setCount }}>
			<ChildComponent />
		</MyContext.Provider>
	);
};

const ChildComponent = () => {
	return <GrandChildComponent />;
};

const GrandChildComponent = () => {
	const { count, setCount } = useContext(MyContext);
	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
};
```

## What problem does the `useCallback` hook solve?

- [ ] `useCallback` is used to manage side effects
- [ ] `useCallback` is used to perform cleanup operations
- [ ] `useCallback` is used to create new state variables
- [x] `useCallback` is used to prevent unnecessary re-renders

## What React hook can be used to solve unnecessary re-renders?

- [ ] `useState`
- [ ] `useEffect`
- [ ] `useContext`
- [x] `useCallback`

---

`useCallback` is used to prevent unnecessary re-renders. It is used to memoize functions so that they are only re-created when their dependencies change.

```js
const MyComponent = () => {
	const [count, setCount] = useState(0);
	const increment = useCallback(() => setCount(count + 1), [count]);
	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={increment}>Click me</button>
		</div>
	);
};
```
