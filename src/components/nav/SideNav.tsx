"use client";

import {
	IconChartAreaLineFilled,
	IconReportAnalytics,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
	const pathName = usePathname();

	const paths = [
		{
			href: "/dashboard",
			name: "Dashboard",
			icon: <IconReportAnalytics className="h-6 w-6" />,
		},
		{
			href: "/dashboard/simulator",
			name: "Stock Simulator",
			icon: <IconChartAreaLineFilled className="h-6 w-6" />,
		},
	];

	return (
		<div className="dark:bg-dark9 border-r dark:border-r-gray2 fixed top-16 bottom-0 w-72 hidden md:block overflow-y-auto">
			<div className="flex flex-col flex-grow p-4 w-full mt-2">
				{paths.map((path, index) => {
					const activePath = pathName === path.href ? "dark:bg-gray2" : "";
					return (
						<Link
							key={index}
							href={path.href}
							className={`${activePath} flex items-center w-full hover:bg-gray4 bg-opacity-50 rounded-lg py-2 px-3 transition-all`}
						>
							{path.icon}
							<p className="ml-4 font-medium text-gray-900 dark:text-gray-200">
								{path.name}
							</p>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
