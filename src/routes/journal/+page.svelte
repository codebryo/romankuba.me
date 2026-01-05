<script>
	import { formatDate } from '$lib/utils';
	import Header from '$lib/components/Header.svelte';

	/** @type {{ data: { posts: import('$lib/types').Posts } }} */
	let { data } = $props();
	const posts = data.posts;
</script>

<Header><span class="title text-amber-100">Roman's</span> Journal</Header>

<p
	class="mb-8 rounded-xl border border-amber-100
  p-8"
>
	A new beginning ✨ ... I did write more content in the past. Had it across many different tools.
	But I always struggled with these tools to keep up with my individual requirements. (And my
	consistency 🙈)<br /><br />
	<em>Now I'll give it a fresh shot, with a self rolled blog. 🚀</em> <br /><br />If I bring back
	old content, it should bring along a updated perspective. So please enjoy all new content starting
	with 2025. 🙇🏼‍♂️
</p>

{#snippet article(/** @type {import('$lib/types').Post} */ post)}
	<article
		class="mb-8 cursor-help rounded-xl border border-white/10 p-8 shadow transition-shadow
				hover:bg-white/10 hover:shadow-2xl"
	>
		<h2>{post.title}</h2>
		<p class="text-sm text-amber-100 italic">{formatDate(post.date)}</p>
		<p>{post.description}</p>
		<a href="/journal/{post.slug}">Read the article</a>
	</article>
{/snippet}

{#each posts as post}
	{@render article(post)}
{/each}
