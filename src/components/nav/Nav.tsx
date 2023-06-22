"use client";

import { useState, useEffect } from "react";
import { IconMenu2 } from "@tabler/icons-react";
import ThemeSwitch from "./ThemeSwitch";
import SideDrawer from "./SideDrawer";

export default function Nav() {
	const [sideDrawerDisplayed, setSideDrawerDisplayed] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 768 && sideDrawerDisplayed) {
				closeSideDrawer();
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [sideDrawerDisplayed]);

	function showSideDrawer() {
		setSideDrawerDisplayed(true);

		if (typeof window !== "undefined" && window.document) {
			document.body.style.overflow = "hidden";
		}
	}

	function closeSideDrawer() {
		setSideDrawerDisplayed(false);

		document.body.style.overflow = "unset";
	}
	return (
		<nav className="bg-white dark:bg-dark8 border-b dark:border-b-gray2 sticky w-full top-0 h-16 py-3 px-4 z-20">
			<div className="flex justify-between md:justify-end items-center">
				<button
					className="md:hidden transition-all hover:ring-1 hover:ring-gray-700 dark:hover:ring-gray-400 p-2 rounded-full active:outline-none active:ring-2 active:ring-gray-600"
					onClick={showSideDrawer}
				>
					<IconMenu2 />
				</button>
				<ThemeSwitch />
			</div>

			{sideDrawerDisplayed && (
				<SideDrawer
					sideDrawerDisplayed={sideDrawerDisplayed}
					closeSideDrawer={closeSideDrawer}
				/>
			)}
		</nav>
	);
}
