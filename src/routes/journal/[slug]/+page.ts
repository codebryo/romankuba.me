import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../../posts/${params.slug}.md`);
		const meta = post.metadata ?? {};

		return {
			content: post.default,
			meta
		};
	} catch (err) {
		error(404, `Could not find ${params.slug}`);
	}
};
