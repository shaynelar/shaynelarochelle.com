import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import useTheme from "../utils/hooks/use-theme";

export default function ThemeToggle({ mobile = false }) {
	const [state, dispatch] = useTheme();
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
