"use client";

import React, { useState } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getRandInteger } from "@/utils/generateInteger";
import { ChartData } from "@/types/chart";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
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

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
	labels: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
	],
	datasets: [
		{
			label: "Dataset 1",
			data: labels.map(() => getRandInteger(-1000, 1000)),
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "Dataset 2",
			data: labels.map(() => getRandInteger(-1000, 1000)),
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
		{
			label: "Dataset 3",
			data: labels.map(() => getRandInteger(-1000, 1000)),
			borderColor: "rgb(75, 192, 192)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	],
};

export default function LineGraph() {
	const [chartData, setChartData] = useState<ChartData>({
		labels: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
		],
		datasets: [
			{
				label: "Dataset 1",
				data: labels.map(() => getRandInteger(-1000, 1000)),
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgb(255, 99, 132)",
			},
			{
				label: "Dataset 2",
				data: labels.map(() => getRandInteger(-1000, 1000)),
				borderColor: "rgb(53, 162, 235)",
				backgroundColor: "rgb(53, 162, 235)",
			},
			{
				label: "Dataset 3",
				data: labels.map(() => getRandInteger(-1000, 1000)),
				borderColor: "rgb(75, 192, 192)",
				backgroundColor: "rgb(75, 192, 192)",
			},
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
				<Line datasetIdKey="lineId" options={options} data={chartData} />
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
