module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			// // primary colors
			// "midnight-blue": "#2C3E50",
			// "Soft-gray (": "#ECF0F1",
			// // Accent colors
			// teal: "#1ABC9C",
			// "electric-blue": "#3498DB",
			// // neutral colors
			// charcoal: "#34495E",
			// "off-white": "#F7F9F9",
			// // typography
			// "soft-gray": "#95A5A6",
			deepTeal: "#008080", // Primary Accent
			teal: "#14b8a6",
			richNavyBlue: "#1C1C28", // Primary Background
			softWhite: "#F9F9F9", // Text Background
			lightGray: "#F3F4F6", // Secondary Background
			charcoalGray: "#333333", // Primary Text
			coolGray: "#6B7280", // Muted Text
			warmOrange: "#FF6A3D", // Accent
			skyBlue: "#00A3E0", // Secondary Accent
		},
		extend: {
			transitionProperty: {
				height: "height",
			},
			gridTemplateColumns: {
				custom: "repeat(auto-fill, minmax(450px,1fr))",
			},
		},
	},
	plugins: [],
};
