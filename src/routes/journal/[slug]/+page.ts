import { error } from '@sveltejs/kit';
import type { ComponentType } from 'svelte';
import type { PageLoad } from './$types';

export const prerender = true;

type PostModule = {
	default: ComponentType;
	metadata?: import('$lib/types').PostMetadata;
};

const postModules = import.meta.glob('../../../posts/*.md') as Record<
	string,
	() => Promise<PostModule>
>;

const postsBySlug = new Map<string, () => Promise<PostModule>>();

for (const [path, importer] of Object.entries(postModules)) {
	const slug = path.split('/').at(-1)?.replace('.md', '');
	if (!slug) continue;
	postsBySlug.set(slug, importer);
}

export const entries = async () => {
	const eagerPosts = import.meta.glob('../../../posts/*.md', { eager: true }) as Record<
		string,
		{ metadata?: import('$lib/types').PostMetadata }
	>;

	return Object.entries(eagerPosts)
		.map(([path, file]) => {
			if (!file || typeof file !== 'object' || !('metadata' in file)) return null;

			const meta = file.metadata as { published?: boolean } | undefined;
			if (!meta?.published) return null;

			const slug = path.split('/').at(-1)?.replace('.md', '');
			if (!slug) return null;

			return { slug };
		})
		.filter((entry): entry is { slug: string } => entry !== null);
};

export const load: PageLoad = async ({ params }) => {
	const importer = postsBySlug.get(params.slug);
	if (!importer) {
		throw error(404, `Could not find ${params.slug}`);
	}

	const post = await importer();
	const meta = (post.metadata ?? {}) as import('$lib/types').PostMetadata;

	return {
		content: post.default,
		meta
	};
};
