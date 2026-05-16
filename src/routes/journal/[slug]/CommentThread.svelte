<script lang="ts">
	import { formatCommentDate } from '$lib/comments';
	export let replies: any[] = [];
	export let depth = 0;
</script>

{#if replies.length > 0}
	<div class={`space-y-6 ${depth > 0 ? 'mt-4 border-l border-white/10 pl-4' : ''}`}>
		{#each replies as reply}
			<div class="rounded-2xl border border-white/10 bg-white/5 p-5">
				<p class="text-sm text-white/65">
					{reply.post?.author?.displayName ?? reply.post?.author?.handle ?? 'Bluesky'}
					<span class="ml-2 text-white/40">{formatCommentDate(reply.post?.indexedAt)}</span>
				</p>
				<p class="mt-2 text-lg text-white/90">{reply.post?.record?.text}</p>

				{#if reply.replies?.length}
					<svelte:self replies={reply.replies} depth={depth + 1} />
				{/if}
			</div>
		{/each}
	</div>
{/if}
