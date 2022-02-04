import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeContext } from "../utils/theme-context";
import useTheme from "../utils/hooks/use-theme";
import NavBar from "../components/NavBar";
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }: AppProps) {
	const [state, dispatch] = useTheme();
	const Footer = dynamic(() => import("../components/Footer"));
	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			<NavBar />
			<Component {...pageProps} />
			<Footer />
		</ThemeContext.Provider>
	);
}

export default MyApp;
