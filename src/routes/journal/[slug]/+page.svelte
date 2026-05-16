<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { page } from '$app/state';

	let {
		data
	}: {
		data: {
			content: import('svelte').SvelteComponent;
			meta: import('$lib/types').PostMetadata;
		};
	} = $props();

	const ogPath = $derived(
		data.meta.og ? `${page.url.origin}/og/${data.meta.og}` : `${page.url.origin}/og/default.png`
	);
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
		<h1 class="mb-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
			{data.meta.title}
		</h1>
		<p class="text-sm text-white/55">
			Published at {formatDate(data.meta.date)}
		</p>
	</hgroup>

	<div class="flex gap-4">
		<a href="/journal" class="text-sm text-white/80">All posts</a>
		{#each data.meta.categories as category}
			<span class="text-sm text-white/45">&num;{category}</span>
		{/each}
	</div>

	<div class="prose prose-invert prose-lg sm:prose-xl pt-10">
		<data.content />
	</div>
</article>
