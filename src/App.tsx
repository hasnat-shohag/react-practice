import React, { createContext, useCallback, useState } from "react";
import { useReducer } from "react";
import Counter from "./components/Counter";
import Title from "./components/Title";
import CounterOne from "./components/CounterOne";
import Button from "./components/Button";
import CounterTwo from "./components/CounterTwo";

const App = () => {
	const [count, setCount] = useState<number>(0);
	const [countTwo, setCountTwo] = useState<number>(0);
	const handleIncrement = useCallback(() => {
		setCount(count + 1);
	}, [count]);

	const handleIncrement2 = useCallback(() => {
		setCountTwo(countTwo + 1);
	}, [countTwo]);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
				backgroundColor: "#f0f0f0",
				padding: "20px",
				fontSize: "24px",
				boxSizing: "border-box",
			}}
		>
			<Title />
			<CounterOne count={count} />
			<Button handleClick={handleIncrement} text="increment first">
				Increment
			</Button>
			<CounterTwo count={countTwo} />
			<Button handleClick={handleIncrement2} text="increment second">
				Increment 2
			</Button>
		</div>
	);
};

export default App;
