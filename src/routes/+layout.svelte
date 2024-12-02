<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta
		name="description"
		content="Personal website of Roman Kuba, Engineering and Product Leader from Austria"
	/>
	<meta name="viewport" content="width=device-width" />
	<link rel="icon" type="image/png" href="/favicon.png" />

	<script
		defer
		src="https://cloud.umami.is/script.js"
		data-website-id="39b1b35a-e8c4-483a-ad25-263ac0a53e4d"
	></script>
</svelte:head>

<main>
	{@render children()}
</main>

<footer>
	<div class="separator"></div>
	<div class="flex content-evenly">
		<div class="w-1/6 grow-0 text-gray-500">No Cookies, no tracking!</div>
		<div class="grow text-center">
			Built with ❤️, <a href="https://svelte.dev" target="_blank">Svelte</a> and
			<a href="https://tailwindcss.com/" target="_blank">Tailwind</a>.
			<br />
			Hosted on <a href="https://www.netlify.com/" target="_blank">Netlify</a>
		</div>
		<div class="w-1/6 grow-0 text-right text-gray-500">&copy; 2024</div>
	</div>
</footer>
