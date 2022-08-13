(() => {
	interface IUser {
		name: string;
		email: string;
		age?: number;
	}

    type TUserKeys = keyof IUser;

	type TPickUser = Pick<IUser, 'age'>;
	type TOmitUser = Omit<IUser, 'age'>;
	type TExtractUser = Extract<TUserKeys, 'age' | 'name'>;
    type TExcludeUser  = Exclude<TUserKeys, 'age'>;

	type TPick<T, K extends keyof T> = {
		[P in K]: T[P];
	};

	type TRecord<K extends keyof any, T> = {
        [P in K]: T;
    };
    
    type TExclude<T, U> = T extends U ? never : T;
    
    type TExtract<T, U> = T extends U ? T : never;
    
    type TOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
})();
