<script>
	import { formatCommentDate } from '$lib/comments';
	export let replies = [];
	export let depth = 0;
</script>

{#if replies.length > 0}
	<div class={`space-y-6 ${depth > 0 ? 'mt-4 border-l border-amber-100/10 pl-4' : ''}`}>
		{#each replies as reply}
			<div class="rounded-2xl border border-amber-100/10 bg-black/20 p-5">
				<p class="text-sm text-amber-100/80">
					{reply.post?.author?.displayName ?? reply.post?.author?.handle ?? 'Bluesky'}
					<span class="ml-2 text-amber-100/50">{formatCommentDate(reply.post?.indexedAt)}</span>
				</p>
				<p class="mt-2 text-lg text-white">{reply.post?.record?.text}</p>

				{#if reply.replies?.length}
					<svelte:self replies={reply.replies} depth={depth + 1} />
				{/if}
			</div>
		{/each}
	</div>
{/if}
