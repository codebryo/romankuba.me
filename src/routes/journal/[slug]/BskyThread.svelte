<script lang="ts">
	import { formatCommentDate } from '$lib/comments';
	import CommentThread from './CommentThread.svelte';

	export let thread: any = {};
	export let url = '';

	const rootPost = thread?.post;
	const comments = thread?.replies ?? [];
</script>

<section class="mt-16 border-t border-white/10 pt-10">
	<h2 class="text-2xl font-medium tracking-tight text-white">Comments</h2>
	<p class="mt-2 text-sm text-white/55">
		Join the conversation on Bluesky.
		<a class="ml-2" href={url} rel="noreferrer">Reply on Bluesky</a>
	</p>

	{#if rootPost}
		<div class="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
			<p class="text-sm text-white/65">
				{rootPost.author?.displayName ?? rootPost.author?.handle ?? 'Bluesky'}
				<span class="ml-2 text-white/40">{formatCommentDate(rootPost.indexedAt)}</span>
			</p>
			<p class="mt-3 text-lg text-white/90">{rootPost.record.text}</p>

			{#if comments.length > 0}
				<div class="mt-8">
					<CommentThread replies={comments} />
				</div>
			{:else}
				<p class="mt-6 text-sm text-white/55">No replies yet. Be the first to respond.</p>
			{/if}
		</div>
	{/if}
</section>
