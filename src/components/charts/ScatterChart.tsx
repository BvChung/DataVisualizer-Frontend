"use client";

import React, { useState } from "react";
import { generateScatterData } from "@/utils/generateData";
import {
	Chart as ChartJS,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import { ScatterChartDisplay } from "@/types/chart";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
	scales: {
		y: {
			beginAtZero: true,
		},
	},
};

export default function ScatterChart() {
	const [data, setData] = useState<ScatterChartDisplay>({
		datasets: [
			{
				label: "A dataset",
				data: generateScatterData(100, -100, 100),
				backgroundColor: "rgb(53, 162, 235)",
			},
		],
	});

	return (
		<figure className="w-[800px] h-[400px] mb-8">
			<Scatter options={options} data={data} />;
		</figure>
	);
}
