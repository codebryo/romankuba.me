/** @type {import('@sveltejs/kit').Load} */
export async function load({ fetch }) {
	const response = await fetch('api/posts');

	/** @type {Array<import('$lib/types').Post>} */
	const posts = await response.json();
	return { posts };
}
