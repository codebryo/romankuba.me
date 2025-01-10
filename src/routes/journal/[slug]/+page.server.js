// src/routes/blog/[slug]/+page.js
export async function load({ params }) {
	console.log(params);
	const post = await import(`../${params.slug}.md`);
	console.log(post);
	const { title, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date
	};
}
