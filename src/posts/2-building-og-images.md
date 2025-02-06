---
title: Generating Static OG Images with Node
description: Building my new blog, I wanted to generate dynamic OG images for my posts without having to rely on a third party service and unnecessary complexities.
date: '2025-2-6'
categories:
  - tech
  - tutorial
published: true
---

As I'm building me new Blog and site here, I decided to go with Svelte. So far I've been pretty bullish on the Vue ecosystem and still love it, but Svelte 5 just had me interested. A lot! Especially Sveltekit. So when diving into a new tech, you try to solve all the problems using it.

Building the blog was actually fun, and I followed the [Joy of Code](https://joyofcode.xyz/) article to learn how to best [build a blog using Sveltekit](https://joyofcode.xyz/sveltekit-markdown-blog#syntax-highlighting) for achieving this. And it worked.

The next magical thing was how easy it was to deploy it all to Netlify. There I was, after a few hours of coding and learning I had my blog running on the world wide web. I am in love with Svelte! On to the next challenge ...

# Failing with Svelte

... and here I was, attempting to dynamically build Open Graph images for each blog post using Svelte. And man, was I disappointed.
All the posts I found were doing something similar. They were aiming to build truly dynamic OG images based on user inputs and what not. And the worst ... they basically all used basically React to achieve this.

Yes, using React alongside Svelte. Leveraging Edge functions, and all that. I was a little disappointed. It sounded way to complicated and sophisticated for what I wanted to accomplish. I immediately thought about caching the images, and all that shananigans. Not a road I wanted to walk down. (Also, because I am not developing much these days, so I need to spend more time on getting up to speed on certain things.) But I was determined to find a solution. 💪🏼

# A Framework agnostic Solution

I did not want to build something that would require a lot of maintenance, and I did not want to rely on a third party service. I wanted to build something that would be easy to verify and test. Use as little dependencies as possible, and would go well with the build step that was running anyway to create those images on the fly. Eventually I could then easily use these on all the static pages.

## The Entry Point

First of all, I ended up creating a new `build` command in my `package.json` that would kick off a script.

```json
{
	"scripts": {
		"build:og": "node scripts/createOgImages.js"
	}
}
```

I could easily run this command locally using `yarn build:og` to verify it's all happening.

## The Script

The script itself should be super simple. I would use the `fs` module to read all the posts files, extract the front-matter of the files, and then use that data to render an image. My goal was to create a SVG file and convert that into a `.png` file eventually.

The first external package I would require is `front-matter`.

```sh
yarn add -D front-matter
```

Now, let's start with the script.

```js
import fs from 'fs';
import fm from 'front-matter';

fs.readdirSync('src/posts').forEach((file) => {
	if (file.endsWith('.md')) {
		fs.readFileSync(`src/posts/${file}`, 'utf8', function (err, data) {
			const attributes = fm(data).attributes;

			const title = attributes.title;

			//... rest of the implementation
		});
	}
});
```

Okay. So what we are doing here is reading all the files in the `src/posts` directory and then looping through them. I'm using the sync version of all operations, because time is not relevant, and I don't want to make the code more complicated than it really needs to be.

Eventually, in `attributes` I have access to all front-matter values, including the `title` which is the thing I want to get onto my SVG.

That brings me to my next challenge. How to create a dynamic SVG file?

## The SVG

I no super little about SVGs and how to create them. So I ended up designing something in [Penpot](https://penpot.app). I created a template and would aim to replace the title with the actual title of the post. For the rest of the post, I'll use a much simpler SVG file, but for complicated files, I can highly recommend [svgviewer.dev](https://www.svgviewer.dev/).

I used it to clean up my SVG, and try out various behaviors.

Let's say this is the SVG we want to use:

```html
<svg width="1200" xmlns="http://www.w3.org/2000/svg" height="628" fill="none">
	<text
		x="20"
		y="100"
		fill="#fff"
		font-size="80"
		font-family="Arial, Helvetica, sans-serif"
		font-weight="bold"
	>
		This is my Title
	</text>
</svg>
```

To make it dynamic, I would replace the `This is my Title` with a variable, and wrap the whole thing into a `.js` file.

```js
// scripts/assets/svg.js

export default function svg(title) {
	return `
<svg width="1200" xmlns="http://www.w3.org/2000/svg" height="628" fill="none">
	<text
		x="20"
		y="100"
		fill="#fff"
		font-size="80"
		font-family="Arial, Helvetica, sans-serif"
		font-weight="bold"
	>
		${title}
	</text>
</svg>
	`;
}
```

Now, I would be ready to import that into my script. Which means I would miss only one major component.

**That is, turning an SVG into a real image.**

For that I stumbled over the libray `Resvg`. So I added that one:

```sh
yarn add -D resvg-js
```

... and then I could import it into my script like so:

```js
import { Resvg } from '@resvg/resvg-js';
```

So, let's put it to use within our script.

```js
// Add import svg from './assets/svg.js' on top

const ogSvg = svg(title);

const resvg = new Resvg(ogSvg, {
	fitTo: {
		mode: 'width',
		value: 1200
	}
});

const pngData = resvg.render();
const pngBuffer = pngData.asPng();
const filename = file.replace('.md', '');

fs.writeFileSync(`static/og/${filename}.png`, pngBuffer);
```

And that's it. The heavy lifting is done by resvg and I just use the filname for convenience to turn `post-one.md` into `post-one.png` for the OG image.

The whole script together would look like this:

```js
import fs from 'fs';
import fm from 'front-matter';
import { Resvg } from '@resvg/resvg-js';
import svg from './assets/svg.js';

fs.readdirSync('src/posts').forEach((file) => {
	if (file.endsWith('.md')) {
		fs.readFileSync(`src/posts/${file}`, 'utf8', function (err, data) {
			const attributes = fm(data).attributes;

			const title = attributes.title;

			const ogSvg = svg(title);

			const resvg = new Resvg(ogSvg, {
				fitTo: {
					mode: 'width',
					value: 1200
				}
			});

			const pngData = resvg.render();
			const pngBuffer = pngData.asPng();
			const filename = file.replace('.md', '');

			fs.writeFileSync(`static/og/${filename}.png`, pngBuffer);
		});
	}
});
```

## Some gotchas

**Making the font bold**
While it looks kind of straight forward now, I had some challenges along the way.
The first one was font related. As the SVG is dynamic, the font needs to be available everywhere. So I did not want to use fancy things I would not be able to get working easily.

The thing is, when I did not explicitly set a font on the SVG as I did here: `font-family="Arial, Helvetica, sans-serif"` I would not get it working to render a bold font. There's some infos in how to set a font for `resvg` but that all did not work for me.
Defining it on the svg file, and using `bold` did the trick.

**Getting Multiline Text**
Getting text to appear on multiple lines in an SVG is not as straight forward as I thought.
I ended up writting a wrapper function that would split the text into multiple lines and then render them one by one.
The best implementation I found was in an PHP forum, and turned that into JS.

```js
const wordwrap = (str, width = 75, brk = '\n', cut = false) => {
	if (!str) return str;

	const regex = `.{1,${width}}(\\s|$)${cut ? `|.{${width}}|.+$` : '|\\S+?(\\s|$)'}`;

	return str.match(new RegExp(regex, 'g')).join(brk);
};
```

It would be a lie, if I said I would be able to write all of that Regex by my own. But it basically looks for spaces within the given character limit, and then splits the text into multiple lines. Afterwards these are joined together using `\n`.

All I needed to do then, is split the text into an array, and wrap it into dynamic `<tspan>` tags.

```js
const lines = wordwrap(title, 20).split('\n'); // split after 20 characters

const multiLineTitle = lines
	.map((line, index) => {
		return `<tspan x="20" y="200" dy="${index * 100}">${line}</tspan>`;
	})
	.join('');
```

# Conclusion

This was all much more challenging than I anticipated. But I ended up with a solution, that works for my case quite well and is technically pretty independent from any underlying framework. I hope you found this article useful. I would love to hear your thoughts on this. If you have any questions, feel free to reach out to me on [Bluesky](https://bsky.app/profile/romankuba.me').
