(() => {
	interface IUser {
		id: number;
		name: string;
	}

	const users: IUser[] = [
		{ id: 1, name: 'John' },
		{ id: 3, name: 'Ann' },
		{ id: 2, name: 'Bill' },
		{ id: 4, name: 'Mary' },
	];

	interface IId {
		id: number;
	}

	type TSortType = 'asc' | 'desc';

	const sortById = <T extends IId>(
		data: T[],
		sortType: TSortType = 'asc'
	): T[] => {
		return data.sort((a, b) => {
			switch (sortType) {
				case 'asc': {
					return a.id - b.id;
				}
				case 'desc': {
					return b.id - a.id;
				}
				default: {
					const _: never = sortType;

					return a.id - b.id;
				}
			}
		});
	};

	console.log(sortById(users));
	console.log(sortById(users, 'desc'));
})();
