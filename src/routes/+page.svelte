<script>
	import Profile from '$lib/assets/profile.jpeg';
	import IconExternal from '$lib/icons/external.svelte';
	import Card from '$lib/components/Card.svelte';

	const socials = [
		{
			key: 'Bluesky',
			href: 'https://bsky.app/profile/romankuba.me',
			text: 'bsky.app/profile/romankuba.me'
		},
		{
			key: 'LinkedIn',
			href: 'https://www.linkedin.com/in/romankuba/',
			text: 'in/romankuba'
		},
		{
			key: 'Github',
			href: 'https://github.com/codebryo',
			text: '@codebryo'
		}
	];
</script>

<svelte:head>
	<title>Hello @ romankuba.me</title>
</svelte:head>

<h1 class="my-16 text-8xl">
	Hi, I'm<span class="title pl-8 text-amber-100">Roman</span>
</h1>

<p>
	I'm a part-time-nerd, merging product and engineering knowledge to build awesome stuff. I'm
	building <a href="https://nerdwerk.com" target="_blank">nerdwerk.com</a> as professional brand. During
	my career I've had the opportunity to work with global companies, do quite some public speaking and
	teaching, and during my work in tech startups I was able to help raise millions. I offer consulting
	for product and engineering teams, and love to chat about processes and tech.
</p>
<p>
	This page here, is my personal one. I'll use it as outlet to write about personal stuff. Things
	for me to remembers, things I want to share with anyone who's interested. Also as a portfolio of
	sorts and memory box about bigger ambitions and goals.
</p>

<div class="separator"></div>

<div>
	<img src={Profile} alt="Picture of Roman KUBA" class="mx-auto size-44 rounded-full grayscale" />
</div>

<div class="separator"></div>

<p>Want to read some stuff? Check out my <a href="/journal">journal</a>.</p>
