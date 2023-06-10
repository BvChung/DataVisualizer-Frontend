import { ScatterData } from "@/types/chart";

export function getRandInteger(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function demoFunction(lowerBound: number, upperBound: number) {
	const values: number[] = [];

	for (let i = lowerBound; i < upperBound + 1; i++) {
		values.push(Math.floor(Math.sin(i)));
	}

	return values;
}

export function generateLineData(dataSize: number, min: number, max: number) {
	const data: number[] = [];

	for (let i = 0; i < dataSize + 1; i++) {
		data.push(getRandInteger(min, max));
	}

	return data;
}

export function generateScatterData(
	dataSize: number,
	min: number,
	max: number
) {
	const data: ScatterData[] = [];

	for (let i = 0; i < dataSize; i++) {
		data.push({ x: getRandInteger(min, max), y: getRandInteger(min, max) });
	}

	return data;
}

export function generateNumLabel(lowerBound: number, upperBound: number) {
	const values: string[] = [];

	for (let i = lowerBound; i < upperBound + 1; i++) {
		values.push(String(i));
	}

	return values;
}
