"use client";

import React, { useState, useEffect } from "react";
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
import {
	MonthlyData,
	generateLineData,
	generateNumLabel,
	getRandInteger,
} from "@/utils/generateData";

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
				color: "rgb(255, 255, 255, .5)",
			},
		},
		x: {
			grid: {
				display: false,
			},
		},
	},
	plugins: {
		legend: {
			position: "top" as const,
		},
		title: {
			display: true,
			text: "Chart.js Line Chart",
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
		ctx.fillStyle = "rgb(255, 255, 255, .2)";
		ctx.fillRect(left, top, width, height);
		ctx.restore();
	},
};

type LineChartProps = {
	labels: string[];
	datasets: {
		fill?: boolean;
		label: string;
		data: MonthlyData[];
		borderColor?: string;
		backgroundColor: string;
	}[];
};

export default function LineChart({ labels, datasets }: LineChartProps) {
	const [chartData, setChartData] = useState<LineChartProps>({
		labels,
		datasets,
	});
	console.log(chartData);

	const [netGain, setNetGain] = useState({
		initialValue: datasets[0].data[0].value,
		gain:
			datasets[0].data[datasets[0].data.length - 1].value -
			datasets[0].data[0].value,
	});

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		addData();
	// 	}, 2000);

	// 	return () => {
	// 		clearInterval(interval);
	// 	};
	// }, []);

	function addData() {
		const lastDataPointMonth =
			chartData.datasets[0].data[chartData.datasets[0].data.length - 1].month;
		const newDataPoint = {
			month: lastDataPointMonth === 12 ? 1 : lastDataPointMonth + 1,
			value: getRandInteger(300, 1000),
		};
		setChartData((prev) => {
			return {
				labels: [
					...prev.labels.slice(1, -1),
					`${+prev.labels[prev.labels.length - 1] + 1}`,
				],
				datasets: [
					{
						...prev.datasets[0],
						data: [...prev.datasets[0].data.slice(1, -1), newDataPoint],
					},
				],
			};
		});

		setNetGain((prev) => {
			return {
				...prev,
				gain: newDataPoint.value - prev.initialValue,
			};
		});
	}

	return (
		<div>
			<figure className="w-[800px] h-[400px] mb-8">
				<Line
					datasetIdKey="lineId"
					options={options}
					data={{
						labels: chartData.labels,
						datasets: chartData.datasets.map((set) => {
							return {
								...set,
								data: generateLineData(12, 400, 1000),
							};
						}),
					}}
					plugins={[chartBackgroundPlugin]}
				/>
			</figure>
			<div>Net Gain {netGain.gain}</div>
			<button
				onClick={addData}
				className="border-2 rounded-md border-gray-500 p-2"
			>
				Add
			</button>
		</div>
	);
}
