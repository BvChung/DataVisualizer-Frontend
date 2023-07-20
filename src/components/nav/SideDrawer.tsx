import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
	IconChartAreaLine,
	IconReportAnalytics,
	IconX,
} from "@tabler/icons-react";
import Path from "../path/Path";

type SideDrawerProps = {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SideDrawer({ isOpen, setOpen }: SideDrawerProps) {
	const paths = [
		{
			href: "/",
			name: "Dashboard",
			icon: <IconReportAnalytics className="h-6 w-6" />,
		},
		{
			href: "/simulator",
			name: "Stock Simulator",
			icon: <IconChartAreaLine className="h-6 w-6" />,
		},
	];

	return (
		<Transition.Root show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-50" onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter="ease-in-out duration-500"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in-out duration-500"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-neutral-900 bg-opacity-80 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="-translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="-translate-x-full"
							>
								<Dialog.Panel className="pointer-events-auto relative w-screen max-w-xs sm:max-w-sm">
									<Transition.Child
										as={Fragment}
										enter="ease-in-out duration-500"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="ease-in-out duration-500"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<div className="absolute right-0 top-0 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
											<button
												type="button"
												className="text-zinc-950 dark:text-gray-300 transition-all hover:ring-1 hover:ring-gray-700 dark:hover:ring-gray-400 p-1 rounded-md active:outline-none active:ring-2 active:ring-gray-600"
												onClick={() => setOpen(false)}
											>
												<span className="sr-only">Close panel</span>
												<IconX className="h-6 w-6" aria-hidden="true" />
											</button>
										</div>
									</Transition.Child>
									<div className="flex h-full flex-col overflow-y-scroll bg-gray-50 dark:bg-dark7 py-6 shadow-xl">
										<div className="px-4 sm:px-6">
											<Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
												Panel title
											</Dialog.Title>
										</div>
										<div className="relative mt-6 flex-1 px-4 sm:px-6">
											<Path
												className="flex flex-col overflow-y-auto flex-1 gap-2"
												paths={paths}
											/>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
