module.exports = {
	purge: {
		content: ["./pages/**/*.tsx", "./components/*.tsx"],
		safelist: ["bg-red-500", "bg-blue-500"], //These styles are not present in
		//html at bulid time so they must be safelisted
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#303030",
				dark: "#1F1F1F",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
