import React from "react";
import Link from "next/link";
import LineChart from "@/components/charts/LineChart";
import ScatterChart from "@/components/charts/ScatterChart";

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
	// const data = await getInfo();

	return (
		<div className="w-full bg-slate-800">
			<div className="justify-items-center items-center gap-4 flex flex-col">
				<LineChart />
				<ScatterChart />
			</div>
		</div>
	);
}
