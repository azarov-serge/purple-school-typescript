(() => {
	// keyof
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

	type TUserKey = keyof IUser;

	const getValue = <T, K extends keyof T>(obj: T, key: K) => {
		return obj[key];
	};

	const user = {
		id: '1',
		email: 'user@test.com',
		role: Role.USER,
	};

	const userEmail = getValue(user, 'email');

	// typeof
	const admin = {
		id: '1',
		email: 'user@test.com',
		role: Role.USER,
	};

	type TAdminKey = keyof typeof user;
})();
