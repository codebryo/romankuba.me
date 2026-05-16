<script>
	import { formatDate } from '$lib/utils';

	/** @type {{ data: { posts: import('$lib/types').Posts } }} */
	let { data } = $props();
	const posts = data.posts;
</script>

<header class="mb-10">
	<p class="text-sm tracking-wide text-white/55">Writing</p>
	<h1 class="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Journal</h1>
	<p class="mt-4 max-w-2xl text-white/70">
		Notes, essays, and experiments. A small archive of what I’m thinking about — and what I’m
		learning.
	</p>
</header>

<p class="mb-10 rounded-2xl border border-white/10 bg-white/5 p-8 text-white/70">
	A fresh start. I’ve written across many tools before, but keeping things consistent never really
	stuck. This journal is deliberately simple so I can keep publishing without friction.
</p>

{#snippet article(/** @type {import('$lib/types').Post} */ post)}
	<article
		class="mb-6 rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/10"
	>
		<h2 class="text-2xl font-medium tracking-tight text-white">{post.title}</h2>
		<p class="mt-2 text-sm text-white/50">{formatDate(post.date)}</p>
		<p class="mt-4 text-white/70">{post.description}</p>
		<a href="/journal/{post.slug}" class="mt-5 inline-block text-sm text-white/85">
			Read article
		</a>
	</article>
{/snippet}

{#each posts as post}
	{@render article(post)}
{/each}
