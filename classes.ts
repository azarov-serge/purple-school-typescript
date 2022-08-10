(() => {
	// Classes
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

	class Admin implements IAdmin {
		public role: Role.ADMIN = Role.ADMIN;
		private districts: string[] = [];

		constructor(
			public id: string,
			public email: string,
			public isPilotUser?: boolean
		) {}

		public updateDistrict(value: string): void;
		public updateDistrict(value: string[]): void;
		public updateDistrict(value: string | string[]): void {
			if (Array.isArray(value)) {
				this.districts.concat(value);
			} else {
				this.districts.push(value);
			}
		}
	}

	const admin = new Admin('1', 'admin@test.com');
	admin.updateDistrict('main');
	admin.updateDistrict(['settings', 'users']);
})();
