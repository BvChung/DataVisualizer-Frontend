/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				gray1: "#212529",
				gray2: "#424242",
				gray3: "#616161",
				gray4: "#D9D9D9",
				gray5: "#bdbdbd",
				gray6: "#ECECEC",
				gray7: "#EBEBEB",
				gray8: "#f5f5f5",
				offwhite: "#f9fafb",
				offwhite2: "#F5F5F5",
				offwhite3: "#f3f3f4",
				menu: "#0e0e10",
				dark1: "#111111",
				dark2: "#121212",
				dark3: "#141414",
				dark4: "#18181b",
				dark5: "#1c1c1c",
				dark7: "#343434",
			},
		},
	},
	plugins: [],
};
