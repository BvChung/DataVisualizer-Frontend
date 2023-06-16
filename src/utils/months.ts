type Months = {
	[key: number]: string;
};

export const monthMap: Months = {
	1: "Jan",
	2: "Feb",
	3: "Mar",
	4: "Apr",
	5: "May",
	6: "Jun",
	7: "Jul",
	8: "Aug",
	9: "Sept",
	10: "Oct",
	11: "Nov",
	12: "Dec",
};

export function generateMonthLabel(data: number[]) {
	return Object.values(monthMap).slice(0, data.length);
}
