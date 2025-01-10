import { json } from '@sveltejs/kit';

function sortPosts(posts) {
	return posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);
}

async function getPosts() {
	let posts = [];

	// Use some Vite import magic to get all the posts
	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata;

			/** @type {import('$lib/types').Post} */
			const post = { ...metadata, slug };
			if (post.published) posts.push(post);
		}
	}

	/** @type {import('$lib/types').Posts */
	posts = sortPosts(posts);
	return posts;
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
