(() => {
	interface IUser {
		name: string;
		email: string;
		age?: number;
	}

	// Be carifull for use
	type TPartiaUser = Partial<IUser>;

	type TReadonlyUser = Readonly<IUser>;
	type TRequiredUser = Required<IUser>;

	type TPartial<T> = {
		[P in keyof T]?: T[P];
	};

	type TReadonly<T> = {
		readonly [P in keyof T]: T[P];
	};

	type TRequired <T> = {
        [P in keyof T]-?: T[P];
    };
})();
