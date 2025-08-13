// tailwind.config.js
module.exports = {
	content: ["./**/*.html"],
	theme: {
		extend: {
			fontFamily: {
				dvn: ["DVN", "sans-serif"],
			},
			screens: {
				// Landscape
				landscape: { raw: "(orientation: landscape)" },
				// Portrait
				portrait: { raw: "(orientation: portrait)" },

				// Landscape + min-width
				"md-landscape": {
					raw: "(min-width: 768px) and (orientation: landscape)",
				},

				// Landscape + max-width
				"sm-landscape": {
					raw: "(max-width: 640px) and (orientation: landscape)",
				},
			},
		},
	},
	plugins: [],
};
