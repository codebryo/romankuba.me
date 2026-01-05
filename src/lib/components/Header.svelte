<script>
	import { page } from '$app/state';

	let { children } = $props();

	/** @param {string} route */
	function isActiveRoute(route) {
		return route === page.route.id;
	}
</script>

{#snippet link(route, text)}
	<li><a href={route} class={{ 'text-slate-500': isActiveRoute(route) }}>{text}</a></li>
{/snippet}

<a href="/" class="absolute top-10 left-10">&lt; Home</a>

<header class="mt-16 mb-8">
	<h1 class="text-8xl">
		{@render children()}
	</h1>
</header>
