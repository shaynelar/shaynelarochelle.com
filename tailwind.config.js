const colors = require("tailwindcss/colors");
module.exports = {
	purge: false,
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#303030",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
