import { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import { ThemeContext } from "../utils/theme-context";

export default function ThemeToggle() {
	const { state, dispatch } = useContext(ThemeContext);
	const { isDark }: { isDark: boolean } = state;
	return (
		<div
			className={`hidden md:block rounded-full text-center p-4 cursor-pointer ml-1 ${
				isDark ? "bg-dark" : "bg-light"
			}`}
			onClick={() =>
				dispatch({
					type: "TOGGLETHEME",
				})
			}
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
