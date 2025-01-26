<script>
	/** @type {{ data: {src: string, alt: string} }} */
	let { src, alt } = $props();
</script>

<img {src} {alt} loading="lazy" />
