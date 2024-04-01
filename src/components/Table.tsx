// Table.js
import React from "react";

const Table = () => {
	return (
		<table className="table-auto w-full">
			<thead className="bg-gray-400 rounded-tl-2xl rounded-tr-2xl">
				<tr className="bg-gray-400">
					<th className="py-2 px-4">Header 1</th>
					<th className="py-2 px-4">Header 2</th>
					<th className="py-2 px-4">Header 3</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="py-2 px-4">Data 1</td>
					<td className="py-2 px-4">Data 2</td>
					<td className="py-2 px-4">Data 3</td>
				</tr>
				{/* Add more rows as needed */}
			</tbody>
		</table>
	);
};

export default Table;
