"use client";

import { IconChartAreaLine, IconReportAnalytics } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
	const pathName = usePathname();

	const paths = [
		{
			href: "/",
			name: "Dashboard",
			icon: <IconReportAnalytics className="h-5 w-5" />,
		},
		{
			href: "/simulator",
			name: "Stock Simulator",
			icon: <IconChartAreaLine className="h-5 w-5" />,
		},
	];

	return (
		<aside className="dark:bg-dark9 sticky top-16 h-[calc(100vh-4rem)] min-w-[18rem] border-r py-4 px-6 dark:border-r-gray2 hidden xl:block overflow-y-auto">
			<div className="flex flex-col flex-grow w-full gap-2">
				{paths.map((path, index) => {
					const activePath = pathName === path.href ? "dark:bg-gray2" : "";
					return (
						<Link
							key={index}
							href={path.href}
							className={`${activePath} flex items-center w-full hover:bg-gray4 bg-opacity-50 rounded-lg py-2 px-3 transition-all`}
						>
							{path.icon}
							<p className="text-sm ml-3 font-medium text-gray-900 dark:text-gray-200">
								{path.name}
							</p>
						</Link>
					);
				})}
			</div>
		</aside>
	);
}
