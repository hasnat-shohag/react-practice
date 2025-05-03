import { useEffect } from "react";

// Custom throttle function
function throttle(func: (...args: any[]) => void, delay: number) {
	let lastCall = 0;

	return (...args: any[]) => {
		const now = Date.now();
		if (now - lastCall >= delay) {
			lastCall = now;
			func(...args);
		}
	};
}

const ThrottledScroll = () => {
	useEffect(() => {
		const handleScroll = throttle(() => {
			console.log("Scroll position:", window.scrollY);
		}, 1000); // Throttle: once per second

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div style={{ height: "200vh", padding: "2rem" }}>
			<h2>Scroll down and check the console (logs once every 1s)</h2>
		</div>
	);
};

export default ThrottledScroll;
