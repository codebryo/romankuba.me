import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import { fetchBskyThread, getBskyUrl } from '$lib/comments.js';

export const load: PageLoad = async ({ params, fetch }) => {
	try {
		const post = await import(`../../../posts/${params.slug}.md`);
		const meta = post.metadata ?? {};

		const thread = await fetchBskyThread(fetch, meta.bskyPost);
		const bskyUrl = getBskyUrl(meta.bskyPost);

		return {
			content: post.default,
			meta,
			bsky: meta.bskyPost ? { url: bskyUrl, thread } : {}
		};
	} catch (err) {
		error(404, `Could not find ${params.slug}`);
	}
};
