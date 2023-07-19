"use client";

import { useState, useEffect, useCallback } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getRandInteger } from "@/utils/generateData";
import { monthMap } from "@/utils/months";
import { IconArrowNarrowUp, IconArrowNarrowDown } from "@tabler/icons-react";
import { useTheme as useNextThemes } from "next-themes";
import { chartBackgroundPlugin } from "@/utils/chartPlugin";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

type AreaChartProps = {
	labels: string[];
	datasets: {
		fill?: boolean;
		label: string;
		data: number[];
		borderColor?: string;
		backgroundColor: string;
	}[];
	monthTracker: number;
	year: number;
};

export default function AreaChart({
	labels,
	datasets,
	monthTracker,
	year,
}: AreaChartProps) {
	const { theme } = useNextThemes();
	const [chartData, setChartData] = useState<AreaChartProps>({
		labels,
		datasets,
		monthTracker,
		year,
	});

	const [dataStatistics, setdataStatistics] = useState({
		initialValue: datasets[0].data[0],
		currentValue: datasets[0].data[0],
		maxValue: datasets[0].data[0],
		minValue: datasets[0].data[0],
		performance:
			datasets[0].data[datasets[0].data.length - 1] - datasets[0].data[0],
	});

	const addData = useCallback(() => {
		const newDataPoint = getRandInteger(300, 2000);
		setChartData((prev) => {
			const newMonth = prev.monthTracker === 12 ? 1 : prev.monthTracker + 1;
			return {
				labels: [...prev.labels.slice(1), monthMap[newMonth]],
				datasets: [
					{
						...prev.datasets[0],
						data: [...prev.datasets[0].data.slice(1), newDataPoint],
					},
				],
				monthTracker: newMonth,
				year: prev.monthTracker === 12 ? prev.year + 1 : prev.year,
			};
		});

		setdataStatistics((prev) => {
			return {
				...prev,
				currentValue: newDataPoint,
				maxValue: Math.max(prev.maxValue, newDataPoint),
				minValue: Math.min(prev.minValue, newDataPoint),
				performance: newDataPoint - prev.initialValue,
			};
		});
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			addData();
		}, 2000);

		return () => {
			clearInterval(interval);
		};
	}, [addData]);

	const themeColor = theme === "dark" ? "#d4d4d8" : "#09090b";

	const options = {
		responsive: true,
		scales: {
			y: {
				beginAtZero: true,

				grid: {
					color: theme === "dark" ? "#d4d4d8" : "#a3a3a3",
				},
				ticks: {
					color: themeColor,
				},
			},
			x: {
				grid: {
					display: false,
				},
				ticks: {
					color: themeColor,
				},
			},
		},
		plugins: {
			legend: {
				position: "top" as const,
				labels: {
					font: {
						size: 14,
						weight: "normal",
					},

					color: themeColor,
				},
			},
			title: {
				display: false,
			},
		},
	};

	return (
		<div className="flex flex-col xl:flex-row items-center justify-center rounded-lg border-[1px] border-gray-300 dark:border-gray2 shadow w-full p-4 md:p-8">
			<figure className="flex items-center justify-center w-full sm:w-3/4 mb-5 xl:mb-0 h-full md:h-[275px] lg:h-[350px]">
				<Line
					datasetIdKey="areaId"
					options={options}
					data={{ labels: chartData.labels, datasets: chartData.datasets }}
					plugins={[chartBackgroundPlugin]}
				/>
			</figure>

			<div className="w-full xl:w-1/4 xl:border-l border-gray-300 dark:border-gray2 md:max-w-3xl xl:px-0 xl:pl-8">
				<div className="grid grid-cols-3 xl:flex xl:flex-col justify-center xl:justify-normal gap-x-2 xl:gap-4 h-16 xl:h-80 text-zinc-950 dark:text-neutral-50 text-xs sm:text-sm xl:text-base">
					<div className="flex justify-between items-center w-full border-r pr-2 border-gray-300 dark:border-gray2 xl:border-0 xl:pr-0">
						<p className="font-medium">Date</p>
						<p>{`${monthMap[chartData.monthTracker]}, ${chartData.year}`}</p>
					</div>

					<div className="flex justify-between items-center w-full border-r pr-2 border-gray-300 dark:border-gray2 xl:border-0 xl:pr-0">
						<p className="font-medium">Value</p>
						<p>{dataStatistics.currentValue.toFixed(2)}</p>
					</div>

					<div className="flex items-center justify-between w-full">
						<p className="font-medium">Performance</p>

						<div
							className={`${
								dataStatistics.performance > 0
									? "text-green-600"
									: "text-red-600"
							} flex items-center font-semibold`}
						>
							<span className="hidden xl:block">
								{dataStatistics.performance > 0 ? (
									<IconArrowNarrowUp />
								) : (
									<IconArrowNarrowDown />
								)}
							</span>
							<p>{dataStatistics.performance.toFixed(2)}</p>
						</div>
					</div>

					<div className="flex justify-between items-center w-full border-r pr-2 border-gray-300 dark:border-gray2 xl:border-0 xl:pr-0">
						<p className="font-medium">Open</p>
						<p>{dataStatistics.initialValue.toFixed(2)}</p>
					</div>

					<div className="flex justify-between items-center w-full border-r pr-2 border-gray-300 dark:border-gray2 xl:border-0 xl:pr-0">
						<p className="font-medium">High</p>
						<p>{dataStatistics.maxValue.toFixed(2)}</p>
					</div>

					<div className="flex justify-between items-center w-full ">
						<p className="font-medium">Low</p>
						<p>{dataStatistics.minValue.toFixed(2)}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
