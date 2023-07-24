"use client";

import { useState, useEffect } from "react";
import { IconMenu2 } from "@tabler/icons-react";
import ThemeSwitch from "../theme/ThemeSwitch";
import SideDrawer from "./SideDrawer";

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 1280 && isOpen) {
				setIsOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [isOpen]);

	return (
		<header className="bg-white dark:bg-dark8 border-b dark:border-b-gray2 shadow-sm sticky w-full top-0 h-16 py-3 px-4 z-20">
			<nav className="flex h-full justify-between xl:justify-end items-center">
				<button
					className="xl:hidden text-zinc-950 dark:text-gray-300 transition-all hover:ring-1 hover:ring-gray-700 dark:hover:ring-gray-400 p-1 rounded-md active:outline-none active:ring-2 active:ring-gray-600"
					onClick={() => {
						setIsOpen(true);
					}}
				>
					<IconMenu2 />
				</button>
				<ThemeSwitch />
			</nav>

			<SideDrawer isOpen={isOpen} setOpen={setIsOpen} />
		</header>
	);
}
