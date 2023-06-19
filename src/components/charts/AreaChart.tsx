"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
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
};

export default function AreaChart({
	labels,
	datasets,
	monthTracker,
}: AreaChartProps) {
	const { theme } = useNextThemes();
	const [chartData, setChartData] = useState<AreaChartProps>({
		labels,
		datasets,
		monthTracker,
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
				color: "red",
				grid: {
					display: false,
				},
				ticks: {
					color: themeColor,
					// font: {
					// 	size: 14,
					// },
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
		<div className="flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray2 w-fit p-4">
			<figure className="flex items-center justify-center w-[700px] h-[320px] mb-8">
				<Line
					datasetIdKey="lineId"
					options={options}
					data={{ labels: chartData.labels, datasets: chartData.datasets }}
					plugins={[chartBackgroundPlugin]}
				/>
			</figure>

			<div className="ml-2 border-l border-gray-400 px-4">
				<div className="flex flex-col gap-4 h-80 w-56 text-gray-800 dark:text-gray-300">
					<div className="flex justify-between items-center w-full">
						<p className="font-medium">Value</p>
						<p className="font-medium">
							{dataStatistics.currentValue.toFixed(2)}
						</p>
					</div>
					<div className="flex justify-between w-full">
						<p className="font-medium">Performance</p>

						<div
							className={`${
								dataStatistics.performance > 0
									? "text-green-600"
									: "text-red-600"
							} flex`}
						>
							{dataStatistics.performance > 0 ? (
								<IconArrowNarrowUp />
							) : (
								<IconArrowNarrowDown />
							)}
							{dataStatistics.performance.toFixed(2)}
						</div>
					</div>

					<div className="flex justify-between w-full">
						<p className="font-medium">Open</p>
						<p>{dataStatistics.initialValue.toFixed(2)}</p>
					</div>

					<div className="flex justify-between w-full">
						<p className="font-medium">High</p>
						<p>{dataStatistics.maxValue.toFixed(2)}</p>
					</div>

					<div className="flex justify-between w-full">
						<p className="font-medium">Low</p>
						<p>{dataStatistics.minValue.toFixed(2)}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
