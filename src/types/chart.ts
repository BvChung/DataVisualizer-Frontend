export type LineChartDisplay = {
	labels: string[];
	datasets: {
		fill?: boolean;
		label: string;
		data: number[];
		borderColor?: string;
		backgroundColor: string;
	}[];
};

export type ScatterChartDisplay = {
	datasets: {
		label: string;
		data: ScatterData[];
		backgroundColor: string;
	}[];
};

export type ScatterData = {
	x: number;
	y: number;
};
