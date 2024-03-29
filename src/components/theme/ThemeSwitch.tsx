import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IconSun, IconMoon } from "@tabler/icons-react";

export default function ThemeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<button
			className="text-zinc-950 dark:text-gray-300 transition-all hover:ring-1 hover:ring-gray-700 dark:hover:ring-gray-400 p-1 rounded-md active:outline-none active:ring-2 active:ring-gray-600"
			onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
		>
			{theme === "dark" ? <IconSun /> : <IconMoon />}
		</button>
	);
}
