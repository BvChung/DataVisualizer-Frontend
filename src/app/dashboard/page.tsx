import React from "react";
import Link from "next/link";
import LineGraph from "@/components/LineGraph";

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
		<div className="w-full">
			<div className="justify-items-center items-center gap-4 flex">
				<LineGraph />
				{/* {data.map((el: Data) => {
					return (
						<Link
							href={`/${el.id}`}
							className="flex flex-col items-center w-96 rounded-md border-white border-[1px]"
							key={el.id as React.Key}
						>
							<h3 className="text-xl font-medium mb-4">{el.title}</h3>
							<p>{el.body}</p>
						</Link>
					);
				})} */}
			</div>
		</div>
	);
}
