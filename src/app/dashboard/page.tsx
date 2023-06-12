import React from "react";
import Link from "next/link";
import LineChart from "@/components/charts/LineChart";
import ScatterChart from "@/components/charts/ScatterChart";
import { monthMap } from "@/utils/months";
import { generateMonthlyLineData } from "@/utils/generateData";

type Data = {
	userId: Number;
	id?: Number;
	title: String;
	body: String;
};

const getInfo = async () => {
	const res = await fetch(`${process.env.REACT_APP_API}posts/`);

	if (!res.ok) {
		throw new Error("Unable to fetch data");
	}

	return res.json();
};

export default async function Page() {
	return (
		<div className="bg-slate-800">
			<div className="justify-items-center items-center gap-4 flex flex-col">
				<LineChart
					labels={Object.values(monthMap)}
					datasets={[
						{
							fill: true,
							label: "Dataset 1",
							data: generateMonthlyLineData(300, 1000),
							borderColor: "rgb(75, 192, 192)",
							backgroundColor: "rgb(75, 192, 192, .2)",
						},
					]}
				/>
				<ScatterChart />
			</div>
		</div>
	);
}
