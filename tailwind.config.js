const colors = require("tailwindcss/colors");
module.exports = {
	purge: {
		content: ["./pages/**/*.tsx", "./components/*.tsx"],
		safelist: ["bg-red-600", "bg-blue-500", "bg-green-600"], //These styles are not present in
		//html at bulid time so they must be safelisted
	},
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				dark: "#303030",
				primary: "#1a1a1a",
				light: "#F4F4F4",
				orange: colors.orange,
				fuchsia: colors.fuchsia,
				lime: colors.lime,
			},
		},
	},
	i8variants: {
		extend: {},
	},
	plugins: [],
};
