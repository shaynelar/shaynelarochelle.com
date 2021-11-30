import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import { ThemeContext } from "../pages/_app";

export default function ThemeToggle() {
	const { isDark, useHandleTheme } = useContext(ThemeContext);
	const handleTheme = useHandleTheme
	useEffect(() => {
		const theme = localStorage.getItem("isDark");
	}, []);
	return (
		<div
			className={`hidden md:block rounded-full text-center p-4 cursor-pointer ml-1 ${
				isDark ? "bg-dark" : "bg-light"
			}`}
			onClick={() => {
				handleTheme()
			}}
		>
			{isDark ? (
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
