import React from "react";
import Link from "next/link";
import AreaChart from "@/components/charts/AreaChart";
import ScatterChart from "@/components/charts/ScatterChart";
import { generateMonthLabel, monthMap } from "@/utils/months";
import {
	generateLineData,
	generateMonthlyLineData,
} from "@/utils/generateData";

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
	const data = generateLineData(12, 300, 2000);
	return (
		<div className="bg-dark5">
			<div className="justify-items-center items-center gap-4 flex flex-col">
				<AreaChart
					labels={generateMonthLabel(data)}
					datasets={[
						{
							fill: true,
							label: "Dataset 1",
							data: data,
							borderColor: "rgb(75, 192, 192)",
							backgroundColor: "rgb(75, 192, 192, .2)",
						},
					]}
					monthTracker={data.length}
				/>
				<ScatterChart />
			</div>
		</div>
	);
}
