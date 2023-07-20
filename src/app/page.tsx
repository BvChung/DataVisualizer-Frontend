import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import {
	IconCurrencyDollar,
	IconUsers,
	IconCreditCard,
	IconActivity,
} from "@tabler/icons-react";
import { generateColor } from "@/utils/generateColor";
import { generateLineData } from "@/utils/generateData";
import { generateMonthLabel } from "@/utils/months";
import BarChart from "@/components/charts/BarChart";
import LineChart from "@/components/charts/LineChart";

export const metadata = {
	title: "Dashboard",
	description: "Dashboard data simulation",
};

export default function Home() {
	const data = [];

	return (
		<main className="py-10 md:px-6 xl:px-12">
			<h1 className="mb-10 text-2xl md:text-3xl text-zinc-950 dark:text-neutral-50 font-bold tracking-tight">
				Dashboard
			</h1>

			<div className="grid gap-4 w-full md:grid-cols-2 lg:grid-cols-4 mb-6">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-zinc-950 dark:text-neutral-50">
							Total Revenue
						</CardTitle>
						<IconCurrencyDollar className="h-[18px] w-[18px] text-zinc-950 dark:text-neutral-50" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-zinc-950 dark:text-neutral-50">
							$45,231.89
						</div>
						<p className="text-xs text-zinc-950 dark:text-gray-300">
							+20.1% from last month
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-zinc-950 dark:text-neutral-50">
							Subscriptions
						</CardTitle>
						<IconUsers className="h-[18px] w-[18px] text-zinc-950 dark:text-neutral-50" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-zinc-950 dark:text-neutral-50">
							+2350
						</div>
						<p className="text-xs text-zinc-950 dark:text-gray-300">
							+180.1% from last month
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-zinc-950 dark:text-neutral-50">
							Sales
						</CardTitle>
						<IconCreditCard className="h-[18px] w-[18px] text-zinc-950 dark:text-neutral-50" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-zinc-950 dark:text-neutral-50">
							+12,234
						</div>
						<p className="text-xs text-zinc-950 dark:text-gray-300">
							+19% from last month
						</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-zinc-950 dark:text-neutral-50">
							Active Now
						</CardTitle>
						<IconActivity className="h-[18px] w-[18px] text-zinc-950 dark:text-neutral-50" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-zinc-950 dark:text-neutral-50">
							+573
						</div>
						<p className="text-xs text-zinc-950 dark:text-gray-300">
							+201 since last hour
						</p>
					</CardContent>
				</Card>
			</div>

			<div className="flex flex-col gap-6 md:grid md:gap-4 md:grid-cols-2 lg:grid-cols-8">
				<Card className="col-span-4">
					<CardHeader>
						<CardTitle>Overview</CardTitle>
					</CardHeader>
					<CardContent className="px-6">
						{Array.from({ length: 1 }).map((_, index) => {
							const color = generateColor();
							const data = generateLineData(12, 1000, 3000);
							return (
								<BarChart
									key={index}
									labels={generateMonthLabel(data)}
									datasets={[
										{
											label: "Revenue",
											data: data,
											borderColor: `rgb(${color})`,
											backgroundColor: `rgb(${color}, .7)`,
										},
									]}
									monthTracker={data.length}
									year={2023}
								/>
							);
						})}
					</CardContent>
				</Card>

				<Card className="col-span-4">
					<CardHeader>
						<CardTitle>Monthly Subscriptions</CardTitle>
					</CardHeader>
					<CardContent>
						{Array.from({ length: 1 }).map((_, index) => {
							const color = generateColor();
							const data = generateLineData(12, 1000, 3000);
							return (
								<LineChart
									key={index}
									labels={generateMonthLabel(data)}
									datasets={[
										{
											label: "Subscriptions",
											data: data,
											borderColor: `rgb(${color})`,
											backgroundColor: `rgb(${color}, .7)`,
										},
									]}
									monthTracker={data.length}
									year={2023}
								/>
							);
						})}
					</CardContent>
				</Card>
			</div>
		</main>
	);
}
