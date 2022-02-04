import { MenuPopover, useMenuButtonContext } from "@reach/menu-button";
import { AnimatePresence, motion } from "framer-motion";
import MobileMenuButton from "./MobileMenuButton";
import ThemeToggle from "./ThemeToggle";
import lockBody from "../utils/helpers/lockBody";

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
					<motion.div
						key="menu"
						initial={{ y: -50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -50, opacity: 0 }}
						transition={{
							duration: 0.3,
							ease: "linear",
						}}
						className="flex flex-col h-full z-10 dark:bg-primary bg-white"
					>
						<ul className="flex flex-col z-10">
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
						</ul>
					</motion.div>
				</MenuPopover>
			)}
		</AnimatePresence>
	);
}