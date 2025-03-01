export type Categories = 'personal' | 'dev';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};

export type Posts = Post[];
