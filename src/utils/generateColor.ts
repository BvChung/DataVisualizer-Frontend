import { getRandInteger } from "./generateData";
export function generateColor() {
	return `${getRandInteger(0, 255)}, ${getRandInteger(
		0,
		255
	)}, ${getRandInteger(0, 255)}`;
}
