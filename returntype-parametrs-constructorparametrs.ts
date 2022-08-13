(() => {
	const pow = (num: number): number => num * num;

	type TReturnPow = ReturnType<typeof pow>;
	type TArgPow = Parameters<typeof pow>;
	type TFirstArgs = TArgPow[0];

	class User {
		constructor(public id: string, public name: string) {}
	}

	type TUserParametrs = ConstructorParameters<typeof User>;
	type TId = TUserParametrs[0];
})();
