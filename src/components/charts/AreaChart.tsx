"use client";

import React, { useState, useEffect, useCallback } from "react";
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

const chartBackgroundPlugin = {
	id: "chartBackgroundColor",
	beforeDatasetsDraw(chart: any, args: any, options: any) {
		const {
			ctx,
			chartArea: { top, left, width, height },
		} = chart;

		ctx.save();
		ctx.fillStyle = "rgb(255, 255, 255, 0)";
		ctx.fillRect(left, top, width, height);
		ctx.restore();
	},
};

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

	const themeColor =
		theme === "dark" ? "rgb(255, 255, 255, .6)" : "rgb(31, 41, 55, .7)";

	const options = {
		responsive: true,
		scales: {
			y: {
				beginAtZero: true,

				grid: {
					color: themeColor,
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
					},
					color: themeColor,
				},
			},
			title: {
				display: true,
				text: "Stock Market Simulator",
				color: themeColor,
				font: {
					size: 16,
				},
			},
		},
	};

	return (
		<div className="flex flex-col lg:flex-row items-center justify-center rounded-lg bg-gray-100 dark:bg-gray2 w-full max-w-5xl p-4">
			<figure className="flex items-center justify-center w-full h-fit mb-5 lg:mb-0 lg:h-[320px]">
				<Line
					datasetIdKey="lineId"
					options={options}
					data={{ labels: chartData.labels, datasets: chartData.datasets }}
					plugins={[chartBackgroundPlugin]}
				/>
			</figure>

			<div className="w-full lg:w-fit lg:ml-2 lg:border-l border-gray-400 lg:px-4">
				<div className="grid grid-cols-3 lg:flex lg:flex-col justify-center lg:justify-normal gap-x-2 lg:gap-4 h-16 lg:h-80 lg:w-56 text-gray-800 dark:text-gray-200 text-xs sm:text-sm lg:text-base font-medium">
					<div className="flex justify-between items-center w-full border-r pr-2 dark:border-gray-400 lg:border-0 lg:pr-0">
						<p>Year</p>
						<p>{chartData.year}</p>
					</div>

					<div className="flex justify-between items-center w-full border-r pr-2 dark:border-gray-400 lg:border-0 lg:pr-0">
						<p>Value</p>
						<p>{dataStatistics.currentValue}</p>
					</div>

					<div className="flex items-center justify-between w-full">
						<p>Performance</p>

						<div
							className={`${
								dataStatistics.performance > 0
									? "text-green-600"
									: "text-red-600"
							} flex items-center`}
						>
							<p className="hidden lg:block">
								{dataStatistics.performance > 0 ? (
									<IconArrowNarrowUp />
								) : (
									<IconArrowNarrowDown />
								)}
							</p>
							<p>{dataStatistics.performance}</p>
						</div>
					</div>

					<div className="flex justify-between items-center w-full border-r pr-2 dark:border-gray-400 lg:border-0 lg:pr-0">
						<p>Open</p>
						<p>{dataStatistics.initialValue}</p>
					</div>

					<div className="flex justify-between items-center w-full border-r pr-2 dark:border-gray-400 lg:border-0 lg:pr-0">
						<p>High</p>
						<p>{dataStatistics.maxValue}</p>
					</div>

					<div className="flex justify-between items-center w-full ">
						<p>Low</p>
						<p>{dataStatistics.minValue}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
