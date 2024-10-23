import Counter from "./components/Counter";

const App = () => {
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
			<Counter />
		</div>
	);
};

export default App;
