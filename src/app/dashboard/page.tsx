import React from "react";
import Link from "next/link";
import AreaChart from "@/components/charts/AreaChart";
import ScatterChart from "@/components/charts/ScatterChart";
import { generateMonthLabel, monthMap } from "@/utils/months";
import {
	generateLineData,
	generateMonthlyLineData,
} from "@/utils/generateData";
import { generateColor } from "@/utils/generateColor";

export default async function Page() {
	const data = generateLineData(12, 300, 2000);
	return (
		<div className="bg-dark5 h-full">
			<div className="ml-5 my-5 flex flex-col gap-4">
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
