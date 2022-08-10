(() => {
	// Type Guard
	enum Role {
		ADMIN = 'admin',
		USER = 'user',
	}

	interface IUser {
		id: string;
		email: string;
		role: Role.USER;
		isPilotUser?: boolean;
	}

	interface IAdmin extends Omit<IUser, 'role'> {
		role: Role.ADMIN;
		updateDistrict(value: string | string[]): void;
	}

	const isIAdmin = (user: IUser | IAdmin): user is IAdmin => {
		return user.role === Role.ADMIN;
	};

	const isFullAccess = (user: IUser | IAdmin): boolean => {
		if (isIAdmin(user)) {
			return true;
		}

		return false;
	};
})();
