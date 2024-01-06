import "./App.css";
import useUsers from "./hooks/useUsers";
import apiClient, { CanceledError, AxiosError } from "./services/api-client";
import userService from "./services/user-service";

interface User {
	id: number;
	name: string;
}

function App() {
	const { users, error, isLoading, setUsers, setError } = useUsers();
	// delete user using Optimistic method
	const handleUser = (user: User) => {
		const originalUser = [...users];
		setUsers(users.filter((u) => u.id !== user.id));

		userService.delete(user.id).catch((err) => {
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

		userService
			.create(newUser)
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
