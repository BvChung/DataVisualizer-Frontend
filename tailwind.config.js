/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
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
				primary: "#212534",
				secondary: "#2a2f44",
				gray0: "#212529",
				gray1: "#2F313A",
				gray2: "#33353F",
				gray3: "#363842",
				gray3: "#444653",
				gray4: "#444653",
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
				dark6: "#171719",
				dark7: "#19191B",
				dark8: "#1C1C1D",
				dark9: "#1e1e20",
				dark10: "#202124",
			},
		},
	},
	plugins: [],
};
