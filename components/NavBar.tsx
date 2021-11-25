import {
	Menu,
	MenuButton,
	MenuPopover,
	useMenuButtonContext,
} from "@reach/menu-button";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { MobileMenuButton, NavButton } from "./Button";

function NavBar() {
	return (
		<header className="flex justify-between p-4 md:px-6 lg:px-10 items-center bg-primary">
			<h1 className="text-xl font-bold">Shayne LaRochelle</h1>
			<nav>
				<ul className="flex">
					<li className="hidden md:block m-2 ">
						<NavButton href="#">Home</NavButton>
					</li>
					<li className="hidden md:block m-2">
						<NavButton href="#">About</NavButton>
					</li>
					<li className="hidden md:block m-2">
						<NavButton href="#">Projects</NavButton>
					</li>
					<li className="hidden md:block m-2">
						<NavButton href="#">Blog</NavButton>
					</li>
					<li className="hidden md:block m-2">
						<NavButton href="#">Resume</NavButton>
					</li>
				</ul>
				<MobileMenu />
			</nav>
		</header>
	);
}
export default NavBar;

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

function MobileMenu() {
	return (
		<div className="md:hidden">
			<Menu>
				{({ isExpanded }) => {
					const state = isExpanded ? "open" : "closed";
					return (
						<>
							<MenuButton className="inline-flex items-center justify-center p-1 transition border-2 w-14 h-14 focus:outline-none rounded-full">
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

const MobileMenuList = () => {
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
						initial={{ x: -50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -50, opacity: 0 }}
						transition={{
							duration: 0.3,
							ease: "linear",
						}}
						className="flex flex-col h-full pb-12 border-t border-gray-200 w-screen z-10 bg-primary"
					>
						<ul className="flex flex-col z-10">
							<MobileMenuButton>Home</MobileMenuButton>
							<MobileMenuButton>About</MobileMenuButton>
							<MobileMenuButton>Projects</MobileMenuButton>
							<MobileMenuButton>Resume</MobileMenuButton>
						</ul>
					</motion.div>
				</MenuPopover>
			) : null}
		</AnimatePresence>
	);
};
