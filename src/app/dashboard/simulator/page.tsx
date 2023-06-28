import AreaChart from "@/components/charts/AreaChart";
import { generateMonthLabel } from "@/utils/months";
import { generateLineData } from "@/utils/generateData";
import { generateColor } from "@/utils/generateColor";

export default function Page() {
	const data = generateLineData(12, 300, 2000);
	return (
		<div className="h-full">
			<div className="my-10 flex flex-col justify-center items-center gap-4 mx-4 lg:mx-0">
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
									label: `Market ${index + 1}`,
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
