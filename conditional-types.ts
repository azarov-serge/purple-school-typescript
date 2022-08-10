(() => {
	// Conditional Types
	interface IHTTPResponse<T extends 'success' | 'failed', D> {
		code: number;
		data?: T extends 'success' ? D : undefined;
		error?: T extends 'failed' ? D : undefined;
	}

	const successResponse: IHTTPResponse<'success', string> = {
		code: 200,
		data: 'Ok',
	};

	const failedResponse: IHTTPResponse<'failed', string> = {
		code: 500,
		error: 'Server error',
	};
})();
