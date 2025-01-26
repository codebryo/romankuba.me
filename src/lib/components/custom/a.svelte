<script>
	/** @type {{ href: string, children: import('svelte').Snippet }} */
	let { href, children } = $props();

	const isExternal = href.startsWith('http');
</script>

<a
	{href}
	target={isExternal ? '_blank' : ''}
	rel={isExternal ? 'noopener noreferrer nofollow' : ''}
>
	{@render children()}
</a>
