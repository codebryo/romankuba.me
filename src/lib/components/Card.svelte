<script>
	import ArrowRight from '$lib/icons/arrow-right.svelte';
	const { title, link = '', children } = $props();
</script>

<div style="perspective: 1000px">
	<div
		class="group w-full transform-gpu rounded-sm bg-none p-0.5 transition duration-200 ease-linear hover:bg-teal-400"
	>
		<div
			class="cursor-default rounded-sm bg-black p-4 text-gray-500 hover:bg-gray-900 group-hover:text-white"
		>
			<div>
				<span class="block pb-2 text-xl font-bold">{title}</span>
				<p class="text-sm italic">
					{@render children()}
				</p>

				<a
					class="group/link text-inherit no-underline underline-offset-4 group-hover:text-teal-500 group-hover:underline"
					href={link}
					target="_blank"
					><ArrowRight class="mr-2 inline-block transition-all group-hover/link:mr-1" />Show me
				</a>
			</div>
		</div>
	</div>
</div>
