export default function svg(lines) {
	const title = lines
		.map((line, index) => {
			return `<tspan x="20" y="200" dy="${index * 100}">${line}</tspan>`;
		})
		.join('');

	return `
    <svg width="1200" xmlns="http://www.w3.org/2000/svg" height="628" fill="none">
        <defs>
            <linearGradient id="a" x1=".003" y1=".438" x2=".996" y2=".427">
                <stop offset="0" stop-color="#06222d"/>
                <stop offset="1" stop-color="#31f2ff"/>
            </linearGradient>
            <clipPath id="b" class="frame-clip frame-clip-def">
                <rect rx="0" ry="0" width="1200" height="628"/>
            </clipPath>
            <pattern patternUnits="userSpaceOnUse" x="0" y="0" width="1200" height="628" id="c">
                <path style="fill:url(#a)" d="M0 0h1200v628H0z"/>
            </pattern>
        </defs>
        <g clip-path="url(#b)">
            <g class="fills">
                <rect width="1200" height="628" class="frame-background" ry="0" fill="url(#c)" rx="0"/>
            </g>
            <g class="frame-children">
                <text x="20" y="100" fill="#fff" font-size="80" font-family="Arial, Helvetica, sans-serif" font-weight="bold">${title}</text>
                <text x="40" y="600" font-size="40" fill="#ff8904"  font-family="Arial, Helvetica, sans-serif" font-weight="bold">romankuba.me</text>
                <defs>
                    <pattern patternUnits="userSpaceOnUse" x="725.122" y="-57.271" width="523" height="736" id="d">
                    <image href="scripts/assets/sloth.png" preserveAspectRatio="xMidYMid slice" width="523" height="736"/>
                    </pattern>
                </defs>
                <rect rx="0" ry="0" x="725.122" y="-57.271" transform="rotate(-8.254 986.62 310.731)" width="523" height="736" fill="url(#d)" class="fills"/>
                <path d="m664.516-21.351 17.825-2.505 97.143 691.207-17.825 2.505zm97.143 691.207" style="fill:#fff;fill-opacity:1" class="fills"/>
            </g>
        </g>
    </svg>`;
}
