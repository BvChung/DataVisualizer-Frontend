import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type PathProps = {
	className: string;
	paths: {
		href: string;
		name: string;
		icon: JSX.Element;
	}[];
};

export default function Path({ className, paths }: PathProps) {
	const pathName = usePathname();

	return (
		<div className={className}>
			{paths.map((path, index) => {
				const activePath =
					pathName === path.href
						? "bg-gray-300 dark:bg-gray2 font-semibold"
						: "font-normal hover:bg-gray-200 dark:hover:bg-gray4";
				return (
					<Link
						key={index}
						href={path.href}
						className={`${activePath} flex items-center w-full bg-opacity-50 rounded-lg py-2 px-3 transition-all`}
					>
						{path.icon}
						<p className="ml-4 text-sm text-zinc-950 dark:text-neutral-50">
							{path.name}
						</p>
					</Link>
				);
			})}
		</div>
	);
}
