// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function get() {
	return {
		status: 200,
		body: {
			data: {
				id: 1,
				title: 'Hello World',
				body: 'This is a post',
				created_at: new Date()
			}
		}
	};
}
