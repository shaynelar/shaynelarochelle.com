import {
	Menu,
	MenuButton,
	MenuPopover,
	useMenuButtonContext,
} from "@reach/menu-button";
import { AnimatePresence, motion } from "framer-motion";
import { MobileMenuButton } from "./Button";

const topVariants = {
	open: { rotate: 45, y: 7 },
	closed: { rotate: 0, y: 0 },
};

const centerVariants = {
	open: { opacity: 0 },
	closed: { opacity: 1 },
};

const bottomVariants = {
	open: { rotate: -45, y: -5 },
	closed: { rotate: 0, y: 0 },
};
function lockBody() {
	const body = document.getElementsByTagName("BODY")[0];
	body.classList.toggle("lock-screen");
}
export default function MobileMenu() {
	function lockBody() {
		const body = document.getElementsByTagName("BODY")[0];
		body.classList.toggle("lock-screen");
	}
	return (
		<div className="md:hidden">
			<Menu>
				{({ isExpanded }) => {
					const state = isExpanded ? "open" : "closed";
					return (
						<>
							<MenuButton
								className="inline-flex items-center justify-center p-1 transition bg-dark text-gray-100 w-14 h-14 focus:outline-none rounded-full "
								onClick={() => {
									lockBody();
								}}
							>
								<svg
									width="32"
									height="32"
									viewBox="0 0 32 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<motion.rect
										animate={state}
										variants={topVariants}
										x="6"
										y="9"
										width="20"
										height="2"
										rx="1"
										fill="currentColor"
									/>
									<motion.rect
										animate={state}
										variants={centerVariants}
										x="6"
										y="15"
										width="20"
										height="2"
										rx="1"
										fill="currentColor"
									/>
									<motion.rect
										animate={state}
										variants={bottomVariants}
										x="6"
										y="21"
										width="20"
										height="2"
										rx="1"
										fill="currentColor"
									/>
								</svg>
							</MenuButton>
							<MobileMenuList />
						</>
					);
				}}
			</Menu>
		</div>
	);
}

function MobileMenuList() {
	const { isExpanded } = useMenuButtonContext();

	return (
		<AnimatePresence>
			{isExpanded ? (
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
						className="flex flex-col h-full z-10 bg-primary"
					>
						<ul className="flex flex-col z-10">
							<MobileMenuButton
								onClick={() => {
									lockBody();
								}}
								href="/#nav"
							>
								Home
							</MobileMenuButton>
							<MobileMenuButton
								onClick={() => {
									lockBody();
								}}
								href="/#about"
							>
								About
							</MobileMenuButton>
							<MobileMenuButton
								onClick={() => {
									lockBody();
								}}
								href="/#projects"
							>
								Projects
							</MobileMenuButton>
							<MobileMenuButton
								onClick={() => {
									lockBody();
								}}
							>
								Resume
							</MobileMenuButton>
						</ul>
					</motion.div>
				</MenuPopover>
			) : null}
		</AnimatePresence>
	);
}
