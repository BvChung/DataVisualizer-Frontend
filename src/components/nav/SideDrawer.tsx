"use client";

import { Transition } from "@headlessui/react";
import {
	IconX,
	IconChartAreaLine,
	IconReportAnalytics,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type SideDrawerProps = {
	sideDrawerDisplayed: boolean;
	closeSideDrawer(): void;
};

export default function SideDrawer({
	sideDrawerDisplayed,
	closeSideDrawer,
}: SideDrawerProps) {
	const pathName = usePathname();

	const paths = [
		{
			href: "/",
			name: "Dashboard",
			icon: <IconReportAnalytics className="h-6 w-6" />,
		},
		{
			href: "/simulator",
			name: "Stock Simulator",
			icon: <IconChartAreaLine className="h-6 w-6" />,
		},
	];

	return (
		<>
			<Transition show={sideDrawerDisplayed}>
				<Transition.Child
					enter="transition-opacity ease-linear duration-100"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-opacity ease-linear duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 z-40">
						<div className="flex relative z-10 flex-col w-80 h-full bg-gray-50 dark:bg-dark7 border-r border-gray-200 dark:border-dark8 lg:hidden">
							<button
								onClick={closeSideDrawer}
								className="transition-all hover:ring-1 hover:ring-gray-700 dark:hover:ring-gray-400 flex absolute top-2 right-2 justify-center items-center w-9 h-9 rounded-full active:outline-none active:ring-2 active:ring-gray-600"
								type="button"
								value="Close sidebar"
							>
								<IconX className="w-5 h-5" />
							</button>

							<div className="p-4 overflow-y-auto flex-1 mt-8">
								{paths.map((path, index) => {
									const activePath =
										pathName === path.href
											? "dark:bg-gray2 font-semibold"
											: "font-normal";
									return (
										<Link
											key={index}
											href={path.href}
											className={`${activePath} flex items-center w-full hover:bg-gray4 bg-opacity-50 rounded-lg py-2 px-3 transition-all`}
										>
											{path.icon}
											<p className="ml-4 text-sm text-gray-800 dark:text-gray-200">
												{path.name}
											</p>
										</Link>
									);
								})}
							</div>
						</div>

						<Transition.Child
							enter="transition-opacity ease-linear duration-100"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity ease-linear duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div
								onClick={closeSideDrawer}
								className="fixed inset-0 bg-black bg-opacity-80"
							></div>
						</Transition.Child>
					</div>
				</Transition.Child>
			</Transition>
		</>
	);
}
