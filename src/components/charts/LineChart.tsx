"use client";

import React, { useState, useRef } from "react";
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
	generateLineData,
	generateNumLabel,
	getRandInteger,
} from "@/utils/generateInteger";
import { LineChartDisplay } from "@/types/chart";
import type { ChartData, ChartOptions } from "chart.js";

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

export const options = {
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
				color: "rgb(255, 255, 255, 0)",
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

const chartBackground = {
	id: "chartBackground",
	beforeDatasetsDraw(chart: any, args: any, pluginOptions: any) {
		const {
			ctx,
			chartArea: { top, left, width, height },
		} = chart;

		ctx.save();
		ctx.fillStyle = "rgb(255, 255, 255, .2)";
		ctx.fillRect(left, top, width, height);
	},
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export default function LineGraph() {
	const [chartData, setChartData] = useState<LineChartDisplay>({
		labels: generateNumLabel(0, 50),
		datasets: [
			{
				fill: true,
				label: "Dataset 1",
				data: generateLineData(50, 200, 1000),
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgb(255, 99, 132, .2)",
			},
			// {
			// 	label: "Dataset 2",
			// 	data: labels.map(() => getRandInteger(-1000, 1000)),
			// 	borderColor: "rgb(53, 162, 235)",
			// 	backgroundColor: "rgb(53, 162, 235)",
			// },
			// {
			// 	label: "Dataset 3",
			// 	data: labels.map(() => getRandInteger(-1000, 1000)),
			// 	borderColor: "rgb(75, 192, 192)",
			// 	backgroundColor: "rgb(75, 192, 192)",
			// },
		],
	});

	function addDataSet() {
		const pixelValue = `rgb(${getRandInteger(0, 255)},${getRandInteger(
			0,
			255
		)},${getRandInteger(0, 255)})`;

		const newData = {
			label: `Dataset ${chartData.datasets.length + 1}`,
			data: labels.map(() => getRandInteger(-1000, 1000)),
			borderColor: pixelValue,
			backgroundColor: pixelValue,
		};

		setChartData((prev) => {
			return { labels: prev.labels, datasets: [...prev.datasets, newData] };
		});
	}

	return (
		<div className="">
			<figure className="w-[800px] h-[400px] mb-8">
				<Line
					datasetIdKey="lineId"
					options={options}
					data={chartData}
					plugins={[chartBackground]}
				/>
			</figure>

			<button
				onClick={addDataSet}
				className="rounded-md w-fit p-2 border-[1px] border-gray-700"
			>
				Add dataset
			</button>
		</div>
	);
}
