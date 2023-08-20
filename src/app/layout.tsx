import "./globals.css";
import { Inter } from "next/font/google";
import ThemeProvider from "../components/theme/Provider";
import Nav from "@/components/nav/Nav";
import SideNav from "@/components/nav/SideNav";

const inter = Inter({ subsets: ["latin"], preload: true });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider>
					<Nav />
					<main className="px-6 md:px-4 xl:px-0 mx-auto flex">
						<SideNav />
						<div className="w-full">{children}</div>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
