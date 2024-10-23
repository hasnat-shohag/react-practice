import React from "react";

const CounterOne = ({ count }: { count: number }) => {
	console.log("rendering counter one");
	return <div>{count}</div>;
};

export default React.memo(CounterOne);
