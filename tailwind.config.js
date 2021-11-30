const colors = require("tailwindcss/colors");
module.exports = {
	purge: {
		purge: true,
		content: ["./pages/**/*.tsx", "./components/*.tsx"],
		safelist: ["bg-red-500", "bg-blue-500"], //These styles are not present in
		//html at bulid time so they must be safelisted
	},
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				dark: "#303030",
				primary: "#1F1F1F",
				light: "#F4F4F4",
				orange: colors.orange,
				fuchsia: colors.fuchsia,
				lime: colors.lime,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
