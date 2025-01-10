/** @type {import('@sveltejs/kit').Load} */
export async function load({ fetch }) {
	const response = await fetch('api/posts');

	/** @type {import('$lib/types').Posts} */
	const posts = await response.json();
	return { posts };
}
