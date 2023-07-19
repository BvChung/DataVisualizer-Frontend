"use client";

import { useState } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useTheme } from "next-themes";
import { chartBackgroundPlugin } from "@/utils/chartPlugin";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

type BarChartProps = {
	labels: string[];
	datasets: {
		label: string;
		data: number[];
		borderColor?: string;
		backgroundColor: string;
	}[];
	monthTracker: number;
	year: number;
};

export default function BarChart({
	labels,
	datasets,
	monthTracker,
	year,
}: BarChartProps) {
	const { theme } = useTheme();

	const [chartData, setChartData] = useState<BarChartProps>({
		labels,
		datasets,
		monthTracker,
		year,
	});

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
				display: false,
			},
			title: {
				display: false,
			},
		},
	};

	return (
		<figure className="flex items-center justify-center w-full h-full sm:h-[275px] lg:h-[350px]">
			<Bar
				datasetIdKey="barId"
				options={options}
				data={{ labels: chartData.labels, datasets: chartData.datasets }}
				plugins={[chartBackgroundPlugin]}
			/>
		</figure>
	);
}
