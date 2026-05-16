<script>
	import Profile from '$lib/assets/profile-2026-homepage.png';

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
		}
	];
</script>

<svelte:head>
	<title>Roman Kuba</title>
</svelte:head>

<section class="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
	<div>
		<p class="text-sm tracking-wide text-white/55">Product &amp; Engineering</p>
		<h1 class="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl">Roman Kuba</h1>
		<p class="mt-6 text-lg leading-relaxed text-white/70">
			I merge product thinking and engineering craft to build useful, resilient software. R&amp;D is
			what I live for. Exploring ideas and connecting the dots others don't see. I’m now building <a
				href="https://nerdwerk.com"
				target="_blank"
				rel="noreferrer">nerdwerk.com</a
			>, consulting with teams, and writing as a way to learn in public.
		</p>

		<div class="mt-8 flex flex-wrap gap-3">
			<a
				href="/journal"
				class="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white no-underline hover:bg-white/10"
			>
				Read the journal
			</a>
			<a
				href="https://nerdwerk.com"
				target="_blank"
				rel="noreferrer"
				class="rounded-full border border-white/15 bg-transparent px-4 py-2 text-sm text-white/85 no-underline hover:bg-white/5"
			>
				nerdwerk.com
			</a>
		</div>

		<dl class="mt-10 grid gap-3 text-sm text-white/65">
			{#each socials as social}
				<div class="flex items-center gap-3">
					<dt class="w-20 shrink-0 text-white/40">{social.key}</dt>
					<dd>
						<a href={social.href} target="_blank" rel="noreferrer">{social.text}</a>
					</dd>
				</div>
			{/each}
		</dl>
	</div>

	<div class="relative">
		<div
			aria-hidden="true"
			class="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-violet-500/20 via-sky-500/10 to-emerald-500/10 blur-2xl"
		></div>
		<img
			src={Profile}
			alt="Portrait of Roman Kuba"
			class="relative aspect-square w-full rounded-[2rem] border border-white/10 object-cover shadow-2xl"
			loading="eager"
		/>
	</div>
</section>

<section id="about" class="mt-24 border-t border-white/10 pt-16">
	<h2 class="text-lg font-medium text-white">About</h2>
	<p class="mt-4 max-w-2xl text-white/70">
		I like fast feedback loops, calm execution, and systems that stay understandable as they scale.
		Over the years I’ve worked with global companies and startups, coached teams, and spoken
		publicly about product and engineering practices.
	</p>
	<p class="mt-5 max-w-2xl text-white/70">
		This site is my personal home base: a place to publish notes, reflect on work, and keep a small
		portfolio of ideas.
	</p>
</section>

<section id="work" class="mt-20 border-t border-white/10 pt-16">
	<h2 class="text-lg font-medium text-white">Work</h2>
	<div class="mt-6 grid gap-4 sm:grid-cols-2">
		<div class="rounded-2xl border border-white/10 bg-white/5 p-6">
			<h3 class="text-base font-medium text-white">Product &amp; Engineering Leadership</h3>
			<p class="mt-2 text-sm leading-relaxed text-white/65">
				Strategy, discovery, execution, and healthy delivery habits that stick.
			</p>
		</div>
		<div class="rounded-2xl border border-white/10 bg-white/5 p-6">
			<h3 class="text-base font-medium text-white">Hands-on Building</h3>
			<p class="mt-2 text-sm leading-relaxed text-white/65">
				Svelte, web tooling, APIs, and pragmatic architecture for small teams.
			</p>
		</div>
		<div class="rounded-2xl border border-white/10 bg-white/5 p-6">
			<h3 class="text-base font-medium text-white">Consulting</h3>
			<p class="mt-2 text-sm leading-relaxed text-white/65">
				Product/engineering alignment, process improvements, and technical decision support.
			</p>
		</div>
		<div class="rounded-2xl border border-white/10 bg-white/5 p-6">
			<h3 class="text-base font-medium text-white">Speaking &amp; Teaching</h3>
			<p class="mt-2 text-sm leading-relaxed text-white/65">
				Talks, workshops, and mentoring around product and modern engineering.
			</p>
		</div>
	</div>
</section>

<section id="writing" class="mt-20 border-t border-white/10 pt-16">
	<h2 class="text-lg font-medium text-white">Writing</h2>
	<p class="mt-4 max-w-2xl text-white/70">
		I publish longer thoughts in the <a href="/journal">journal</a> and keep shorter notes on social.
	</p>
	<div class="mt-8 flex flex-wrap gap-3">
		<a
			href="/journal"
			class="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white no-underline hover:bg-white/10"
		>
			Open journal
		</a>
		<a
			href="https://bsky.app/profile/romankuba.me"
			target="_blank"
			rel="noreferrer"
			class="rounded-full border border-white/15 bg-transparent px-4 py-2 text-sm text-white/85 no-underline hover:bg-white/5"
		>
			Bluesky
		</a>
	</div>
</section>

<section id="contact" class="mt-20 border-t border-white/10 pt-16">
	<h2 class="text-lg font-medium text-white">Contact</h2>
	<p class="mt-4 max-w-2xl text-white/70">
		Best place to reach me is via LinkedIn or Bluesky. For code, I’m most active on GitHub.
	</p>
	<div class="mt-8 grid gap-3 text-sm">
		{#each socials as social}
			<a
				href={social.href}
				target="_blank"
				rel="noreferrer"
				class="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 no-underline hover:bg-white/10"
			>
				<span class="text-white">{social.key}</span>
				<span class="text-white/60">{social.text}</span>
			</a>
		{/each}
	</div>
</section>
