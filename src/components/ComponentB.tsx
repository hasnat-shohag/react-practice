import { useContext } from "react";
import { CounterContext } from "../App";

const ComponentB = () => {
	const counterContext = useContext(CounterContext);
	return (
		<div>
			ComponentB - {counterContext?.ContextState} <br />
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
		</div>
	);
};

export default ComponentB;
