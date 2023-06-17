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

const options = {
	responsive: true,
	scales: {
		y: {
			beginAtZero: true,

			grid: {
				color: "rgb(255, 255, 255, .6)",
			},
			ticks: {
				color: "rgb(255, 255, 255, .6)",
			},
		},
		x: {
			color: "red",
			grid: {
				display: false,
			},
			ticks: {
				color: "rgb(255, 255, 255, .6)",
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
				color: "rgb(255, 255, 255, .6)",
			},
		},
		title: {
			display: true,
			text: "Stock Simulator",
			color: "rgb(255, 255, 255, .6)",
		},
	},
};

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
	const chartRef = useRef<ChartJS<"line">>();
	const [chartData, setChartData] = useState<AreaChartProps>({
		labels,
		datasets,
		monthTracker,
	});

	const [netGain, setNetGain] = useState({
		initialValue: datasets[0].data[0],
		gain: datasets[0].data[datasets[0].data.length - 1] - datasets[0].data[0],
	});

	const addData = useCallback(() => {
		const newDataPoint = getRandInteger(300, 1000);
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

		setNetGain((prev) => {
			return {
				...prev,
				gain: newDataPoint - prev.initialValue,
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

	return (
		<div className="flex items-center justify-center rounded-lg bg-gray2 w-fit p-4">
			<figure className="w-[800px] h-[400px] mb-8">
				<Line
					datasetIdKey="lineId"
					options={options}
					data={{ labels: chartData.labels, datasets: chartData.datasets }}
					plugins={[chartBackgroundPlugin]}
				/>
			</figure>

			<div className="bg-gray2 ml-4 border-l border-gray-400 p-4">
				<div className="h-80 w-44 text-white">Net Gain {netGain.gain}</div>
				<button
					onClick={addData}
					className="border-2 rounded-md border-gray-500 p-2"
				>
					Add
				</button>
			</div>
		</div>
	);
}
