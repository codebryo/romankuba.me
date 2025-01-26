<script>
	import { formatDate } from '$lib/utils';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="mt-16">
	<hgroup class="mb-8">
		<h1>{data.meta.title}</h1>
		<p
			class="text-sm italic text-slate-500
		"
		>
			Published at {formatDate(data.meta.date)}
		</p>
	</hgroup>

	<div class="flex gap-4">
		<a href="/journal" class="cursor-cool">All Posts</a>
		{#each data.meta.categories as category}
			<span class="text-orange-400">&num;{category}</span>
		{/each}
	</div>

	<div class="prose-links prose prose-lg prose-slate pt-8 dark:prose-invert">
		<data.content />
	</div>
</article>
