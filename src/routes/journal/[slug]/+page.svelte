<script>
	import { formatDate } from '$lib/utils';
	import { page } from '$app/state';

	let { data } = $props();

	const ogPath = data.meta.og
		? `${page.url.origin}/og/custom/${data.meta.og}`
		: `${page.url.origin}/og/${page.url.pathname.replace('/journal/', '')}.png`;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:image" content={ogPath} />
	<meta property="og:image:type" content="image/png" />
</svelte:head>

<article class="mt-16">
	<hgroup class="mb-8">
		<h1 class="mb-2 text-6xl">{data.meta.title}</h1>
		<p class="text-sm text-slate-500 italic">
			Published at {formatDate(data.meta.date)}
		</p>
	</hgroup>

	<div class="flex gap-4">
		<a href="/journal" class="cursor-cool">All Posts</a>
		{#each data.meta.categories as category}
			<span class="text-orange-400">&num;{category}</span>
		{/each}
	</div>

	<div class="prose-links prose prose-lg prose-slate dark:prose-invert pt-8">
		<data.content />
	</div>
</article>
