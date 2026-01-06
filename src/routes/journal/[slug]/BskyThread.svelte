<script>
	import { formatCommentDate } from '$lib/comments';
	import CommentThread from './CommentThread.svelte';
	// @type { post: {}, comments: []}
	export let thread = {};
	export let url = '';

	const rootPost = thread.post;
	const comments = thread.replies;
</script>

<section class="mt-16 border-t border-amber-100/30 pt-10">
	<h2 class="text-4xl text-amber-100">Comments</h2>
	<p class="mt-2 text-sm text-amber-100/80">
		Join the conversation on Bluesky.
		<a class="ml-2 underline" href={url} rel="noreferrer">Reply on Bluesky</a>
	</p>

	<div class="mt-8 rounded bg-white/10 p-6">
		<p class="text-sm text-amber-100/80">
			{rootPost.author?.displayName ?? rootPost.author?.handle ?? 'Bluesky'}
			<span class="ml-2 text-amber-100/50">{formatCommentDate(rootPost.indexedAt)}</span>
		</p>
		<p class="mt-3 text-xl">{rootPost.record.text}</p>

		{#if comments.length > 0}
			<div class="mt-8">
				<CommentThread replies={comments} />
			</div>
		{:else}
			<p class="mt-6 text-amber-100/70">No replies yet. Be the first to respond.</p>
		{/if}
	</div>
</section>
