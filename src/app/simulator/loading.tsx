export default function Loading() {
	return (
		<div className={`flex justify-center items-center w-full h-screen`}>
			<svg
				className="animate-spin h-12 w-12 text-black "
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth="3"
			>
				<circle
					className="opacity-20 stroke-gray-500"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					strokeWidth="4"
				></circle>

				<path
					className="opacity-70"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				></path>
			</svg>
		</div>
	);
}
