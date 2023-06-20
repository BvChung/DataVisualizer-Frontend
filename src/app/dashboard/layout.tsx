import SideNav from "@/components/nav/SideNav";
import Nav from "@/components/nav/Nav";
import Sidebar from "@/components/nav/SideBar";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="">
			<Nav />
			<div className="flex">
				{/* <SideNav /> */}
				<Sidebar />
				<div className="pl-64 flex flex-col w-full overflow-auto">
					{children}
				</div>
			</div>
		</main>
	);
}
