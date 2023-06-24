import React from "react";
import AreaChart from "@/components/charts/AreaChart";
import ScatterChart from "@/components/charts/ScatterChart";
import { generateMonthLabel } from "@/utils/months";
import { generateLineData } from "@/utils/generateData";
import { generateColor } from "@/utils/generateColor";

export default function Page() {
	const data = generateLineData(12, 300, 2000);
	return (
		<div className="h-full">
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
									borderColor: color,
									backgroundColor: color,
								},
							]}
							monthTracker={data.length}
							year={2023}
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
							borderColor: "75, 192, 192",
							backgroundColor: "75, 192, 192",
						},
					]}
					monthTracker={data.length}
					year={2022}
				/>
			</div>
		</div>
	);
}
