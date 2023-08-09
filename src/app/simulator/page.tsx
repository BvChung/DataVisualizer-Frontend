import AreaChart from "@/components/charts/AreaChart";
import { generateMonthLabel } from "@/utils/months";
import { generateLineData } from "@/utils/generateData";
import { generateColor } from "@/utils/generateColor";

export const metadata = {
	title: "Stocks",
	description: "Stock Simulator Generator",
};

export default function Page() {
	return (
		<div className="py-10 md:px-6 xl:px-12">
			<h1 className="mb-10 text-2xl md:text-3xl text-zinc-950 dark:text-neutral-50 font-bold tracking-tight">
				Stock Simulator
			</h1>

			<div className="flex flex-col justify-center items-center gap-6">
				{Array.from({ length: 4 }).map((_, index) => {
					const color = generateColor();
					const data = generateLineData(12, 1000, 3000);
					return (
						<AreaChart
							key={index}
							labels={generateMonthLabel(data)}
							datasets={[
								{
									fill: true,
									label: `Stock ${index + 1}`,
									data: data,
									borderColor: `rgb(${color})`,
									backgroundColor: `rgb(${color}, .4)`,
								},
							]}
							monthTracker={data.length}
							year={2023}
						/>
					);
				})}
			</div>
		</div>
	);
}
