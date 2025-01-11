<script>
	import { formatDate } from '$lib/utils';
	import Header from '$lib/components/Header.svelte';

	/** @type {{ data: { posts: import('$lib/types').Posts } }} */
	let { data } = $props();
	const posts = data.posts;
</script>

<Header>Roman's <span class="gradient-text">Journal</span></Header>

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
