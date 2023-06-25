import Nav from "@/components/nav/Nav";
import SideNav from "@/components/nav/SideNav";

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
				<div className="md:pl-72 flex flex-col w-full overflow-auto">
					{children}
				</div>
			</div>
		</main>
	);
}
