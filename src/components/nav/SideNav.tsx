"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import {
	Navbar,
	Center,
	Tooltip,
	UnstyledButton,
	createStyles,
	Stack,
	rem,
} from "@mantine/core";
import {
	IconHome2,
	IconGauge,
	IconDeviceDesktopAnalytics,
	IconFingerprint,
	IconCalendarStats,
	IconUser,
	IconSettings,
	IconLogout,
	IconSwitchHorizontal,
	IconBrandAmongUs,
	IconSun,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
	link: {
		width: rem(40),
		height: rem(40),
		borderRadius: theme.radius.md,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color:
			theme.colorScheme === "dark"
				? theme.colors.dark[0]
				: theme.colors.gray[7],

		"&:hover": {
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[5]
					: theme.colors.gray[0],
		},
	},

	active: {
		"&, &:hover": {
			backgroundColor: theme.fn.variant({
				variant: "light",
				color: theme.primaryColor,
			}).background,
			color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
				.color,
		},
	},
}));

type NavbarLinkProps = {
	icon: React.FC<any>;
	label: string;
	active?: boolean;
	onClick?(): void;
};

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
	const { classes, cx } = useStyles();
	return (
		<Tooltip
			label={label}
			withArrow
			position="right"
			transitionProps={{ duration: 0 }}
		>
			<UnstyledButton
				onClick={onClick}
				className={cx(classes.link, { [classes.active]: active })}
			>
				<Icon size="1.4rem" stroke={1.5} />
			</UnstyledButton>
		</Tooltip>
	);
}

const mockdata = [
	{ icon: IconHome2, label: "Home" },
	{ icon: IconGauge, label: "Dashboard" },
	{ icon: IconDeviceDesktopAnalytics, label: "Analytics" },
	{ icon: IconCalendarStats, label: "Releases" },
	{ icon: IconUser, label: "Account" },
	{ icon: IconFingerprint, label: "Security" },
	{ icon: IconSettings, label: "Settings" },
];

export default function SideNav() {
	const [active, setActive] = useState(2);
	const { theme, setTheme } = useTheme();

	const links = mockdata.map((link, index) => (
		<NavbarLink
			{...link}
			key={link.label}
			active={index === active}
			onClick={() => setActive(index)}
		/>
	));

	return (
		<Navbar
			p="md"
			className="dark:bg-dark4 border-0 fixed top-14 w-16 h-screen z-10 hidden md:block"
		>
			<Center>
				<IconBrandAmongUs
					size={30}
					className="text-gray-800 dark:text-gray-300"
				/>
			</Center>
			<Navbar.Section grow mt={50}>
				<Stack justify="center" spacing={0} className="gap-2 items-center">
					{links}
				</Stack>
			</Navbar.Section>
		</Navbar>
	);
}
