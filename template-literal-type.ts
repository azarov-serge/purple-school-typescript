(() => {
	type TPermission = 'read' | 'write';
	type TBulk = 'bulk' | '';

	// Uppercase<>, Lowercase<>
	type TAccess = `can${Capitalize<TPermission>}${Capitalize<TBulk>}`;

    type TBalcPermissionType <T> = T extends `can${infer R}` ? R : never;
    type TBalcPermission = Uncapitalize<TBalcPermissionType<TAccess>>;

    type TResponseType = 'success' | 'error';
    interface IResponse {
        result: `http${Capitalize<TResponseType>}`
    }
})();
