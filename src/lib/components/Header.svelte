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

<header class="mt-16 mb-8">
	<h1 class="text-6xl">
		{@render children()}
	</h1>
	<nav class="flex list-none gap-4 pt-4">
		{@render link('/', 'Home')}
		{@render link('/about', 'About')}
		{@render link('/journal', 'Journal')}
	</nav>
</header>
