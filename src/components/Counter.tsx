import React, { useMemo, useState } from "react";

const Counter = () => {
	const [countOne, setCountOne] = useState<number>(0);
	const [countTwo, setCountTwo] = useState<number>(0);

	const handleIncrementOne = () => {
		setCountOne(countOne + 1);
	};

	const handleIncrementTwo = () => {
		setCountTwo(countTwo + 1);
	};

	const isEven = useMemo(() => {
		let i = 0;
		while (i < 2000000000) i++;

		return countOne % 2 === 0;
	}, [countOne]);

	return (
		<div>
			<button onClick={handleIncrementOne}>Count One - {countOne}</button>{" "}
			{isEven ? "Even" : "Odd"}
			<button onClick={handleIncrementTwo}>Count Two - {countTwo}</button>
		</div>
	);
};

export default Counter;
