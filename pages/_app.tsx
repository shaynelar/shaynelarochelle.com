import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { LazyMotion, domAnimation } from "framer-motion";
import { ThemeContext } from "../utils/theme-context";
import useTheme from "../utils/hooks/use-theme";

function MyApp({ Component, pageProps }: AppProps) {
	const [state, dispatch] = useTheme();

	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			<LazyMotion features={domAnimation}>
				<Component {...pageProps} />
			</LazyMotion>
		</ThemeContext.Provider>
	);
}

export default MyApp;
