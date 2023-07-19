export const chartBackgroundPlugin = {
	id: "chartBackgroundColor",
	beforeDatasetsDraw(chart: any, args: any, options: any) {
		const {
			ctx,
			chartArea: { top, left, width, height },
		} = chart;

		ctx.save();
		ctx.fillStyle = "rgb(255, 255, 255, 0)";
		ctx.fillRect(left, top, width, height);
		ctx.restore();
	},
};
