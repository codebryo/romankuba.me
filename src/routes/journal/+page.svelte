<script>
	import formatDate from '$lib/formatDate';

	/** @type {{ data: { posts: import('$lib/types').Posts } }} */
	let { data } = $props();
	const posts = data.posts;
</script>

<h1>Journal</h1>

<p>List all the posts</p>

{#snippet article(/** @type {import('$lib/types').Post} */ post)}
	<article>
		<h2>{post.title}</h2>
		<p>{formatDate(post.date)}</p>
		<p>{post.description}</p>
		<a href="/journal/{post.slug}">Read more</a>
	</article>
{/snippet}

{#each posts as post}
	{@render article(post)}
{/each}
