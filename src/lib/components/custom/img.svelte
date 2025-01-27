<script>
	/** @type {{ data: {src: string, alt: string} }} */
	let { src, alt } = $props();
</script>

<img {src} {alt} loading="lazy" class="mx-auto my-16 block rounded-xl ring-8 ring-orange-400" />
