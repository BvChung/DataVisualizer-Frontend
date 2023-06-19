import SideNav from "@/components/nav/SideNav";
import Nav from "@/components/nav/Nav";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="">
			<Nav />
			<div className="flex">
				<SideNav />
				<div className="pl-20 flex flex-col w-full overflow-auto">
					{children}
				</div>
			</div>
		</main>
	);
}
