import "./App.css";
import { useEffect, useState } from "react";
import apiClient, { CanceledError, AxiosError } from "./services/api-client";

interface User {
	id: number;
	name: string;
}

function App() {
	const [error, setError] = useState("");
	const [users, setUsers] = useState<User[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		setIsLoading(true);

		const Response = async () => {
			try {
				const res = await apiClient.get("/users", {
					signal: controller.signal,
				});
				setUsers(res.data);
				setIsLoading(false);
			} catch (err) {
				if (err instanceof CanceledError) return;
				setError((err as AxiosError).message);
				setIsLoading(false);
			}
		};
		Response();

		return () => controller.abort();
	}, []);
	// delete user using Optimistic method
	const handleUser = (user: User) => {
		const originalUser = [...users];
		setUsers(users.filter((u) => u.id !== user.id));

		apiClient.delete("/users/" + user.id).catch((err) => {
			setError((err as AxiosError).message);
			setUsers(originalUser);
		});
	};
	const newUser = {
		id: 0,
		name: "Hayat",
	};
	// add user using Optimistic method
	const handleAdd = () => {
		const originalUser = [...users];
		setUsers([newUser, ...users]);

		apiClient
			.post("/users", newUser)
			.then((response) => {
				setUsers([response.data, ...users]);
			})
			.catch((err) => {
				setError((err as AxiosError).message);
				setUsers(originalUser);
			});
	};
	// update user using Optimistic method
	const handleUpdate = (user: User) => {
		const originalUser = [...users];
		const userUpdated = { ...user, name: user.name + "!" };
		setUsers(users.map((u) => (u.id === user.id ? userUpdated : u)));

		apiClient.patch("/users/" + user.id, userUpdated).catch((err) => {
			setError((err as AxiosError).message);
			setUsers(originalUser);
		});
	};
	return (
		<>
			{isLoading && (
				<p className="text-center ml-10 text-green-600">Loading...</p>
			)}
			{error && <p className="text-red-600 text">{error}</p>}

			<ul>
				<button onClick={handleAdd}>Add</button>
				{users.map((user) => (
					<li
						key={user.id}
						style={{
							display: "flex",
							justifyContent: "space-between",
							paddingBottom: "5px",
						}}
					>
						{user.name}
						<div>
							<button
								style={{ marginRight: "5px" }}
								onClick={() => handleUpdate(user)}
							>
								Update
							</button>
							<button
								style={{ marginRight: "5px" }}
								onClick={() => handleUser(user)}
							>
								Delete
							</button>
						</div>
					</li>
				))}
			</ul>
		</>
	);
}

export default App;
