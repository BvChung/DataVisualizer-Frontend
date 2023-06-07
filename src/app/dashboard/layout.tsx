import React from "react";
import { NavbarMinimal } from "@/components/Nav";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex ">
			<NavbarMinimal />
			<div className="flex flex-col">
				<h1>DashboardLayout</h1>
				{children}
			</div>
		</div>
	);
}
