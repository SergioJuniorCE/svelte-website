/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { supabase } from '$lib/database';

export async function get() {
	const { data } = await supabase.from('posts').select('*').limit(3);
	return {
		status: 200,
		body: {
			posts: data
		}
	};
}
