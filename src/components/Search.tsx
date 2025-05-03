// implement debouncing for search input
import { useEffect, useState } from "react";
import { demoItems } from "../utils";

const DebouncingSearch = () => {
	const [searchValue, setSearchValue] = useState<string>("");
	const [items, setItems] = useState<string[]>([]);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchValue(value);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchValue) {
				console.log(searchValue);
				const filteredItems = demoItems?.filter((item) =>
					item.toLowerCase().includes(searchValue.toLowerCase())
				);
				setItems(filteredItems);
			}
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, [searchValue]);

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				marginTop: "50px",
			}}
		>
			<h1>Debouncing Search</h1>
			<input
				style={{ width: 300, padding: 10, fontSize: 16 }}
				type="text"
				placeholder="Search Here"
				onChange={handleOnChange}
				value={searchValue}
			/>
			{searchValue && (
				<div
					style={{
						maxHeight: 600,
						width: 300,
						borderWidth: 1,
						borderColor: "black",
						borderStyle: "solid",
						overflowY: "scroll",
						padding: 10,
					}}
				>
					<ul style={{ listStyle: "none", padding: 0 }}>
						{items?.map((item, index) => (
							<li
								key={index}
								style={{
									paddingTop: 10,
									paddingBottom: 10,
									transition: "background-color 0.3s",
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.backgroundColor = "#e0e0e0";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.backgroundColor = "white";
								}}
								onClick={() => {
									setSearchValue(item);
								}}
							>
								{item}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default DebouncingSearch;
