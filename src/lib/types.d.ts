export type PostMetadata = {
	title: string;
	description: string;
	date: string;
	categories: string[];
	published: boolean;
	og?: string;
};

export type Post = PostMetadata & {
	slug: string;
};

export type Posts = Post[];
