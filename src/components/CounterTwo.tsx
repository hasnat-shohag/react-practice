import React from "react";

const CounterTwo = ({ count }: { count: number }) => {
	console.log("rendering counter two");
	return <div>{count}</div>;
};

export default React.memo(CounterTwo);
