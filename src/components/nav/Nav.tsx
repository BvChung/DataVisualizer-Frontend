"use client";

import { useTheme } from "next-themes";
import { IconSun } from "@tabler/icons-react";

export default function Nav() {
	const { theme, setTheme } = useTheme();
	return (
		<nav className="bg-white dark:bg-dark3 border-b dark:border-b-dark7 sticky w-full top-0 flex justify-between items-center h-14 p-4 z-20">
			Nav
			<button
				onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
			>
				<IconSun />
			</button>
		</nav>
	);
}
