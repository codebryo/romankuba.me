import fs from 'fs';
import fm from 'front-matter';
import svg from './assets/svg.js';
import { Resvg } from '@resvg/resvg-js';

const wordwrap = (str, width = 75, brk = '\n', cut = false) => {
	if (!str) return str;

	const regex = `.{1,${width}}(\\s|$)${cut ? `|.{${width}}|.+$` : '|\\S+?(\\s|$)'}`;

	return str.match(new RegExp(regex, 'g')).join(brk);
};

fs.readdirSync('src/posts').forEach((file) => {
	if (file.endsWith('.md')) {
		fs.readFile(`src/posts/${file}`, 'utf8', function (err, data) {
			const attributes = fm(data).attributes;

			const lines = wordwrap(attributes.title, 20).split('\n');
			const ogSvg = svg(lines);

			const resvg = new Resvg(ogSvg, {
				fitTo: {
					mode: 'width',
					value: 1200
				}
			});

			const pngData = resvg.render();
			const pngBuffer = pngData.asPng();

			fs.writeFileSync(`static/og/${file}.png`, pngBuffer);
		});
	}
});
