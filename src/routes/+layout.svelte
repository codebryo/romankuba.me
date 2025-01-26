<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

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
		<div class="w-1/6 grow-0 text-right text-gray-500">&copy; 2025</div>
	</div>
</footer>
