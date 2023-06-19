import React from "react";
import Link from "next/link";
import AreaChart from "@/components/charts/AreaChart";
import ScatterChart from "@/components/charts/ScatterChart";
import { generateMonthLabel } from "@/utils/months";
import { generateLineData } from "@/utils/generateData";
import { generateColor } from "@/utils/generateColor";

export default function Page() {
	const data = generateLineData(12, 300, 2000);
	return (
		<div className="h-full">
			<Link href="/dashboard/simulator">sim</Link>
			<div className="my-10 flex flex-col justify-center items-center gap-4">
				{Array.from({ length: 2 }).map((_, index) => {
					const color = generateColor();
					const data = generateLineData(12, 1000, 3000);
					return (
						<AreaChart
							key={index}
							labels={generateMonthLabel(data)}
							datasets={[
								{
									fill: true,
									label: `Market ${index + 1}`,
									data: data,
									borderColor: `rgb(${color})`,
									backgroundColor: `rgb(${color}, .2)`,
								},
							]}
							monthTracker={data.length}
						/>
					);
				})}
				<AreaChart
					labels={generateMonthLabel(data)}
					datasets={[
						{
							fill: true,
							label: "Market 1",
							data: data,
							borderColor: "rgb(75, 192, 192)",
							backgroundColor: "rgb(75, 192, 192, .2)",
						},
					]}
					monthTracker={data.length}
				/>
			</div>
		</div>
	);
}
