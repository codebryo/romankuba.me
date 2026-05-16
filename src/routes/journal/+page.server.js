export const prerender = true;

/** @param {import('$lib/types').Posts} posts */
function sortPosts(posts) {
	return posts.sort(
		/** @param {import('$lib/types').Post} first @param {import('$lib/types').Post} second */
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);
}

async function getPosts() {
	let posts = [];

	const paths = import.meta.glob('../../posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = /** @type {import('$lib/types').PostMetadata} */ (file.metadata);

			/** @type {import('$lib/types').Post} */
			const post = { ...metadata, slug };
			if (post.published) posts.push(post);
		}
	}

	/** @type {import('$lib/types').Posts} */
	posts = sortPosts(posts);
	return posts;
}

/** @type {import('@sveltejs/kit').Load} */
export async function load() {
	const posts = await getPosts();
	return { posts };
}
