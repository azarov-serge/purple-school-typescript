(() => {
	// Tuples
	const arr: [number, string, ...boolean[]] = [1, 'string', false, true];

	// Readonly
	const skills: readonly string[] = ['Dev', 'DevOps'];
	const devSkills: ReadonlyArray<string> = ['Git', 'TS', 'JS'];

	// Never
	// Check argument type
	type TProcessAction = 'refund' | 'checkout';

	const processAction = (action: TProcessAction): void => {
		switch (action) {
			case 'refund': {
				// ...
				break;
			}

			case 'checkout': {
				// ...
				break;
			}

			default: {
				const _: never = action;

				throw new Error(`Unknown action ${action}`);
			}
		}
	};

	// Check return type
	const generateError = (message: string): never => {
		throw new Error(message);
	};

	const isString = (value: number | string): boolean => {
		if (typeof value === 'number') {
			return false;
		}

		if (typeof value === 'string') {
			return true;
		}

		return generateError('Error in function isString');
	};
})();
