"use client";

import {
	IconChartAreaLineFilled,
	IconReportAnalytics,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
	const pathName = usePathname();
	console.log(pathName);

	return (
		<div className="dark:bg-dark9 border-r dark:border-r-gray2 fixed top-16 w-72 pr-2 h-screen hidden md:block overflow-y-auto">
			<div className="flex flex-col p-4 w-full">
				<Link
					href="/dashboard"
					className="flex items-center w-full hover:bg-gray-500 rounded-lg py-2 px-3 transition-all"
				>
					<IconReportAnalytics className="h-6 w-6" />
					<p className="ml-4 font-medium">Dashboard</p>
				</Link>
				<Link
					href="/dashboard/simulator"
					className="flex items-center w-full hover:bg-gray-500 rounded-lg py-2 px-3 transition-all"
				>
					<IconChartAreaLineFilled className="h-6 w-6" />
					<p className="ml-4 font-medium">Stock Simulator</p>
				</Link>
			</div>
		</div>
	);
}
