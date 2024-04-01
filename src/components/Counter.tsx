import React, { useContext } from "react";
import { CounterContext } from "../UserContext";

const Counter: React.FC = () => {
	const context = useContext(CounterContext);

	if (!context) {
		throw new Error("Counter must be used within a CounterProvider");
	}

	const [count, setCount] = context;

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
};

export default Counter;
