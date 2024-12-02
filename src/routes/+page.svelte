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

<h1 class="mb-8 mt-16">
	Hi, I'm <span class="gradient-text">Roman</span>
</h1>

<div class="flex items-center gap-4">
	<img
		src={Profile}
		alt="It's a me, Roman!"
		class="size-20 cursor-grab rounded-full border border-teal-900 shadow-lg shadow-orange-400 transition-all
             duration-500 hover:shadow-teal-500"
	/>

	<p>
		I'm a part-time-nerd, merging product and engineering knowledge to build awesome stuff. There's
		a whole page
		<a href="/about">about myself</a> and why it's <em>awesome</em> to work with me.
	</p>
</div>

<div class="separator fill-orange-400"></div>

<h2 class="mt-8">You can find me here:</h2>

<ul>
	{#each socials as social}
		<li>
			{social.key}:
			<a href={social.href} target="_blank">
				{social.text}
				<IconExternal class="inline" />
			</a>
		</li>
	{/each}
</ul>

<h2 class="mb-4 mt-8">I also make some stuff:</h2>

<Card
	title="Managers Toolkit"
	link="https://romankuba.notion.site/The-Managers-Toolkit-a8b21cf95d424c06b4dfe3e54f2c6694"
>
	Free content, templates, tips and tricks for engineering & product Managers.
</Card>

<Card title="Snel" link="https://snel.space">
	Every page deserves a CMS. Snel is simple and great for developers.
</Card>
