"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
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
import { chartBackgroundPlugin } from "@/utils/chartPlugin";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

type LineChartProps = {
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

export default function LineChart({
	labels,
	datasets,
	monthTracker,
	year,
}: LineChartProps) {
	const { theme } = useTheme();

	const [chartData, setChartData] = useState<LineChartProps>({
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
			<Line
				datasetIdKey="lineId"
				options={options}
				data={{ labels: chartData.labels, datasets: chartData.datasets }}
				plugins={[chartBackgroundPlugin]}
			/>
		</figure>
	);
}
