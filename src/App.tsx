import { useState } from "react";
import Counter from "./components/Counter";
import { CounterContext } from "./UserContext";

const App = () => {
	const [count, setCount] = useState<number>(0);
	return (
		<div>
			<CounterContext.Provider value={[count, setCount]}>
				<Counter />
			</CounterContext.Provider>
		</div>
	);
};

export default App;
