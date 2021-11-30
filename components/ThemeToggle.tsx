import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";

export default function ThemeToggle() {
	const [isOn, setIsOn] = useState(true);
	function handleTheme() {
		const html = document.querySelector("html");
		html?.classList.toggle("dark");
	}
	return (
		<div
			className={`hidden md:block rounded-full text-center p-4 cursor-pointer ml-1 ${
				isOn ? "bg-dark" : "bg-light"
			}`}
			onClick={() => {
				setIsOn((on) => !on);
				localStorage.setItem("theme", JSON.stringify(isOn));
				handleTheme();
			}}
		>
			{isOn ? (
				<AnimatePresence>
					<span role="img">
						<RiSunLine className="text-white" />
					</span>
				</AnimatePresence>
			) : (
				<span role="img">
					<RiMoonClearLine className="text-bg-primary" />
				</span>
			)}
		</div>
	);
}
