import { createContext } from "react";

export const CounterContext = createContext<
	[number, React.Dispatch<React.SetStateAction<number>>] | undefined
>(undefined);
