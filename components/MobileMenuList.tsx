import { MenuPopover, useMenuButtonContext } from "@reach/menu-button";
import { AnimatePresence, m as motion } from "framer-motion";
import MobileMenuButton from "./MobileMenuButton";
import ThemeToggle from "./ThemeToggle";
import lockBody from "../utils/helpers/lockBody";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

export default function MobileMenuList() {
	const { isExpanded } = useMenuButtonContext();

	return (
		<AnimatePresence>
			{isExpanded && (
				<MenuPopover
					position={(buttonPos) => ({
						top: `calc(${
							Number(buttonPos?.top) + Number(buttonPos?.height)
						}px + 1rem)`,
						left: 0,
						bottom: 0,
						right: 0,
					})}
					style={{ display: "block" }}
					className="z-50"
				>
					<div
						key="menu"
						className="flex flex-col h-full z-10 dark:bg-primary bg-white"
					>
						<motion.ul
							variants={container}
							initial="hidden"
							animate="show"
							className="flex flex-col z-10"
						>
							<MobileMenuButton onClick={lockBody} href="/#nav">
								Home
							</MobileMenuButton>
							<MobileMenuButton onClick={lockBody} href="/#about">
								About
							</MobileMenuButton>
							<MobileMenuButton onClick={lockBody} href="/#projects">
								Projects
							</MobileMenuButton>
							<ThemeToggle mobile />
						</motion.ul>
					</div>
				</MenuPopover>
			)}
		</AnimatePresence>
	);
}
