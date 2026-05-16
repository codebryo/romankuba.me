<script lang="ts">
	let { children } = $props();
	import '../app.css';
	import { dev } from '$app/environment';
</script>

<svelte:head>
	{#if !dev}
		<script
			defer
			src="https://cloud.umami.is/script.js"
			data-website-id="39b1b35a-e8c4-483a-ad25-263ac0a53e4d"
		></script>
	{/if}
</svelte:head>

<div class="min-h-screen">
	<header
		class="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30"
	>
		<div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
			<a href="/" class="text-sm font-medium tracking-wide text-white">Roman Kuba</a>
			<nav class="flex items-center gap-5 text-sm text-white/70">
				<a href="/#about" class="hover:text-white">About</a>
				<a href="/#work" class="hover:text-white">Work</a>
				<a href="/#writing" class="hover:text-white">Writing</a>
				<!-- <a href="/#contact" class="hover:text-white">Contact</a> -->
				<!-- <a href="/journal" class="hover:text-white">Journal</a> -->
			</nav>
		</div>
	</header>

	<main class="mx-auto max-w-5xl px-6 py-16">
		{@render children()}
	</main>

	<footer class="border-t border-white/10">
		<div
			class="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between"
		>
			<div>&copy; 2026 Roman Kuba</div>
			<div>
				No cookies. Privacy-friendly analytics.
				<span class="mx-2 text-white/30">·</span>
				Built with <a href="https://svelte.dev" target="_blank" rel="noreferrer">Svelte</a> and
				<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind</a>.
			</div>
		</div>
	</footer>
</div>
