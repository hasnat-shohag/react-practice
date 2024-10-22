import React, { createContext } from "react";
import { useReducer } from "react";
import ComponentA from "./components/ComponentA";

type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };
const initialState = 0;
const reducer = (state: number, action: Action): number => {
	switch (action.type) {
		case "increment":
			return state + 1;
		case "decrement":
			return state - 1;
		case "reset":
			return initialState;
		default:
			return state;
	}
};

interface CounterContextProps {
	ContextState: number;
	ContextDispatch: React.Dispatch<Action>;
}

export const CounterContext = createContext<CounterContextProps | undefined>(
	undefined
);

const App = () => {
	const [count, dispatch] = useReducer(reducer, initialState);
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
			<CounterContext.Provider
				value={{ ContextState: count, ContextDispatch: dispatch }}
			>
				<div>Count - {count}</div>
				<ComponentA />
			</CounterContext.Provider>
		</div>
	);
};

export default App;
