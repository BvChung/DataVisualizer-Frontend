"use client";

import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
	IconX,
	IconMenu,
	IconSearch,
	IconHome,
	IconExplicit,
	IconNote,
	IconBook,
	IconMusic,
	IconMovie,
} from "@tabler/icons-react";

const navigation = [
	{ name: "Home", href: "#", current: true },
	{ name: "About", href: "#", current: false },
	{ name: "Contact", href: "#", current: false },
];

function classNames(...classes: any) {
	return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
	const [sidebarOpened, setSidebarOpened] = useState(true);

	return (
		<div className="dark:bg-dark9 border-r dark:border-r-gray2 fixed top-16 w-64 h-screen hidden md:block overflow-y-auto">
			<div className="mb-10">
				<h3 className="mx-6 mb-2 text-gray-400">Main</h3>
			</div>
			<div className="mb-10">
				<h3 className="mx-6 mb-2 text-gray-400">Library</h3>
			</div>
			<div className="mb-10">
				<h3 className="mx-6 mb-2 text-gray-400">Following</h3>
			</div>
			<div className="mb-10">
				<h3 className="mx-6 mb-2 text-gray-400">Main</h3>
			</div>
			<div className="mb-10">
				<h3 className="mx-6 mb-2 text-gray-400">Library</h3>
			</div>
			<div className="mb-10">
				<h3 className="mx-6 mb-2 text-gray-400">Following</h3>
			</div>
			<div className="mb-10">
				<h3 className="mx-6 mb-2 text-gray-400">Main</h3>
			</div>
			<div className="mb-10">
				<h3 className="mx-6 mb-2 text-gray-400">Library</h3>
			</div>
		</div>
	);
}
