import { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import { ThemeContext } from "../utils/theme-context";

export default function ThemeToggle({ mobile = false }) {
	const { state, dispatch } = useContext(ThemeContext);
	const { isDark }: { isDark: boolean } = state;
	return (
		<div
			className={`${
				mobile ? "block flex m-12" : "hidden md:block ml-1"
			} rounded-full text-center p-4 cursor-pointer  ${
				isDark ? "bg-dark" : "bg-light"
			}`}
			onClick={() =>
				dispatch({
					type: "TOGGLETHEME",
				})
			}
		>
			{isDark ? (
				<span role="img" className={`${mobile && "text-xl flex items-center"}`}>
					<RiSunLine className="text-white" />
				</span>
			) : (
				<span role="img" className={`${mobile && "text-xl flex items-center"}`}>
					<RiMoonClearLine className="text-bg-primary" />
				</span>
			)}
		</div>
	);
}
