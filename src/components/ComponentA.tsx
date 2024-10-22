import { useContext } from "react";
import { CounterContext } from "../App";
import ComponentB from "./ComponentB";

const ComponentA = () => {
	const counterContext = useContext(CounterContext);
	return (
		<div>
			ComponentA - {counterContext?.ContextState} <br />
			<button
				onClick={() => counterContext?.ContextDispatch({ type: "increment" })}
			>
				Increment
			</button>
			<button
				onClick={() => counterContext?.ContextDispatch({ type: "decrement" })}
			>
				Decrement
			</button>
			<button
				onClick={() => counterContext?.ContextDispatch({ type: "reset" })}
			>
				Reset
			</button>
			<ComponentB />
		</div>
	);
};

export default ComponentA;
