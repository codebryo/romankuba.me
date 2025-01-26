<script module>
	import { img, a } from '$lib/components/custom';
	export { img, a };
</script>

<script>
	let props = $props();
</script>

{@render props.children?.()}
