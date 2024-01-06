import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { AxiosError, CanceledError } from "../services/api-client";

const useUsers = () => {
	const [error, setError] = useState("");
	const [users, setUsers] = useState<User[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		const { request, cancel } = userService.getAll<User>();
		request
			.then((res) => {
				setUsers(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError((err as AxiosError).message);
				setIsLoading(false);
			});

		return () => cancel();
	}, []);
	return { users, error, isLoading, setUsers, setError, setIsLoading };
};

export default useUsers;
