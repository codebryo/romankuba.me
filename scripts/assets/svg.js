export default function svg(lines) {
	const title = lines
		.map((line, index) => {
			return `<tspan x="70" y="300" dy="${index * 100}">${line}</tspan>`;
		})
		.join('');

	return `<svg width="1200" xmlns="http://www.w3.org/2000/svg" height="628" fill="none">
	<defs>
		<clipPath id="a" class="frame-clip frame-clip-def">
			<rect rx="0" ry="0" width="1200" height="628" />
		</clipPath>
	</defs>
	<g clip-path="url(#a)">
		<g class="fills">
			<rect
				width="1200"
				height="628"
				class="frame-background"
				style="fill:#06222d;fill-opacity:1"
				ry="0"
				rx="0"
			/>
		</g>
		<g class="frame-children">
            <text x="70" y="300" fill="#fff" font-size="90px" style="font-weight: bold;">
                ${title}
            </text>
            <g class="text-container">
				<text
					x="10"
					y="623"
					dominant-baseline="ideographic"
					textLength="278.93"
					lengthAdjust="spacingAndGlyphs"
					style="text-transform:none;letter-spacing:normal;font-style:normal;font-weight:400;white-space:pre;font-size:48px;text-decoration:none solid #fff317;direction:ltr;fill:#fff317;fill-opacity:1"
					class="fills"
				>romankuba.me</text>
			</g>
		</g>
	</g>
</svg>`;
}
