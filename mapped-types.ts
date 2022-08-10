(() => {
	// Mapped Types
	// Example# 1
	type TModifier = 'read' | 'update' | 'create';

	type TUserRoles = {
		customers?: TModifier;
		projects?: TModifier;
		admins?: TModifier;
	};

	type TModifierToAccess<Type> = {
		[property in keyof Type]: boolean;

		// All readonly and required
		// +readonly [property in keyof Type] -?: boolean;

		// All not required
		// [property in keyof Type] +?: boolean;

		// All required
		// [property in keyof Type] -?: boolean;
	};

	type TUserAccess = TModifierToAccess<TUserRoles>;

	const userAccsess: TUserAccess = {
		customers: false,
	};

	// Example# 2
	interface IForm {
		login: string;
		password: string;
	}

	type TValidation<T> = {
		[K in keyof T]:
			| {
					isValid: true;
			  }
			| {
					isValid: false;
					message: string;
			  };
	};

	const form: IForm = {
		login: 'John',
		password: '12345678',
	};

	const formValidation: TValidation<IForm> = {
		login: { isValid: true },
		password: {
			isValid: false,
			message: 'Password must contain numbers and symbols',
		},
	};
})();
