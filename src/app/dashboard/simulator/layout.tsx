export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="">
			<div className="pl-20 flex flex-col w-full overflow-auto">{children}</div>
		</div>
	);
}
