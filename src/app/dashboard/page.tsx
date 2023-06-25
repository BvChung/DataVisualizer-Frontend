import AreaChart from "@/components/charts/AreaChart";
import { generateMonthLabel } from "@/utils/months";
import { generateLineData } from "@/utils/generateData";
import { generateColor } from "@/utils/generateColor";

export default function Page() {
	const data = generateLineData(12, 300, 2000);
	return <div className="h-full">Dashboard</div>;
}
