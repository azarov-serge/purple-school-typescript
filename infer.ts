(() => {
	// Infer
	type TGetFirstArgs<T> = T extends (first: infer First, ...args: any[]) => any
		? First
		: never;

	const runTransaction = (transaction: { fromTo: [string, string] }): void => {
		console.log(transaction);
	};

	const transaction: TGetFirstArgs<typeof runTransaction> = {
		fromTo: ['1', '2'],
	};

	runTransaction(transaction);
})();
