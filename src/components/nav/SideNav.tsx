"use client";

import { IconChartAreaLine, IconReportAnalytics } from "@tabler/icons-react";
import Path from "../path/Path";

export default function SideNav() {
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
		<aside className="sticky top-16 h-[calc(100vh-4rem)] min-w-[18rem] pt-10 px-6 hidden xl:block overflow-y-auto">
			<Path className="flex flex-col flex-grow w-full gap-2" paths={paths} />
		</aside>
	);
}
