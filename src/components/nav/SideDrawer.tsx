"use client";

import { Transition } from "@headlessui/react";
import { IconX } from "@tabler/icons-react";

type SideDrawerProps = {
	sideDrawerDisplayed: boolean;
	closeSideDrawer(): void;
};

export default function SideDrawer({
	sideDrawerDisplayed,
	closeSideDrawer,
}: SideDrawerProps) {
	return (
		<>
			<Transition show={sideDrawerDisplayed}>
				<Transition.Child
					enter="transition-opacity ease-linear duration-100"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-opacity ease-linear duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 z-40">
						<div className="flex relative z-10 flex-col w-80 h-full bg-gray-50 dark:bg-dark7 border-r border-gray-200 dark:border-dark8 md:hidden">
							<button
								onClick={closeSideDrawer}
								className="transition-all hover:ring-1 hover:ring-gray-700 dark:hover:ring-gray-400 flex absolute top-2 right-2 justify-center items-center w-10 h-10 rounded-full active:outline-none active:ring-2 active:ring-gray-600"
								type="button"
								value="Close sidebar"
							>
								<IconX className="w-5 h-5" />
							</button>

							<div className="p-4 overflow-y-auto flex-1">
								<div className="mb-10">
									<h3 className="mx-6 mb-2 text-xs tracking-widest text-gray-400 uppercase">
										Main
									</h3>
								</div>
								<div className="mb-10">
									<h3 className="mx-6 mb-2 text-xs tracking-widest text-gray-400 uppercase">
										Library
									</h3>
								</div>
								<div className="mb-10">
									<h3 className="mx-6 mb-2 text-xs tracking-widest text-gray-400 uppercase">
										Following
									</h3>
								</div>
							</div>
						</div>

						<Transition.Child
							enter="transition-opacity ease-linear duration-100"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="transition-opacity ease-linear duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div
								onClick={closeSideDrawer}
								className="fixed inset-0 bg-black bg-opacity-80"
							></div>
						</Transition.Child>
					</div>
				</Transition.Child>
			</Transition>
		</>
	);
}
