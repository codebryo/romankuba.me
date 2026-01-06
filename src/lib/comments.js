// This site uses Bluesky for comments on journal posts
// The code here fetches the post thread from Bluesky's API

// cSpell: disable
const BSKY_THREAD_ENDPOINT = 'https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread';
const BSKY_DID = 'did:plc:sfeeyhzrtf5aiockz5unwrpd';
const BSKY_HANDLE = 'nerdwerk.com';
// cSpell: enable

/**
 * @param {string} postId
 * @returns {string}
 */
function toBskyUriFromPostId(postId) {
	const BSKY_POST_PATH = 'app.bsky.feed.post';
	return `at://${BSKY_DID}/${BSKY_POST_PATH}/${postId}`;
}

/**
 * @param {typeof fetch} fetch
 * @param {string} uri
 * @returns {Promise<unknown|null>}
 */
async function fetchFromBsky(fetch, uri) {
	const endpoint = `${BSKY_THREAD_ENDPOINT}?uri=${encodeURIComponent(uri)}`;
	const res = await fetch(endpoint);
	if (!res.ok) return null;
	return res.json();
}

/**
 * @param {string|null} postId
 * @returns {string|null}
 */
export function getBskyUrl(postId = null) {
	if (!postId) return null;

	return `https://bsky.app/profile/${BSKY_HANDLE}/post/${postId}`;
}

/**
 * @param {typeof fetch} fetch
 * @param {string|null} postId
 * @returns {Promise<unknown|null>}
 */
export async function fetchBskyThread(fetch, postId = null) {
	if (!postId) return null;

	const bskyUri = toBskyUriFromPostId(postId);

	const thread = await fetchFromBsky(fetch, bskyUri);
	return thread.thread;
}

/**
 * @param {string} value
 * @returns {string}
 */
export function formatCommentDate(value = '') {
	if (!value) return '';
	return new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'short',
		day: '2-digit'
	}).format(new Date(value));
}
