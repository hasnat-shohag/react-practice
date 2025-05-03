import React, { useEffect, useRef } from "react";

const NativeDelegation = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (e.target instanceof Element && e.target.matches("button[data-id]")) {
				alert(
					`Native click on item ${(e.target as HTMLButtonElement).dataset.id}`
				);
			}
		};

		const container = containerRef.current;
		if (container) {
			container.addEventListener("click", handleClick);

			// Cleanup on unmount
			return () => {
				container.removeEventListener("click", handleClick);
			};
		}
	}, []);

	const addNewItem = () => {
		const newButton = document.createElement("button");
		newButton.textContent = `New Item`;
		newButton.setAttribute(
			"data-id",
			Math.floor(Math.random() * 1000).toString()
		);
		newButton.style.margin = "10px";
		if (containerRef.current) {
			containerRef.current.appendChild(newButton);
		}
	};

	return (
		<div>
			<div ref={containerRef}>
				<button data-id="1">Item 1</button>
				<button data-id="2">Item 2</button>
			</div>
			<button onClick={addNewItem} style={{ marginTop: "20px" }}>
				Add New Item
			</button>
		</div>
	);
};

export default NativeDelegation;
