<script module>
	import { img, a } from '$lib/components/custom';
	export { img, a };
</script>

<script>
	let { children } = $props();
</script>

{@render children?.()}
