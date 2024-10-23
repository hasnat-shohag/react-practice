import React from "react";
import { MouseEventHandler } from "react";

const Button = ({
	text,
	handleClick,
	children,
}: {
	text: string;
	handleClick: MouseEventHandler;
	children: React.ReactNode;
}) => {
	console.log("rendering button - ", text);
	return <button onClick={handleClick}>{children}</button>;
};

export default React.memo(Button);
