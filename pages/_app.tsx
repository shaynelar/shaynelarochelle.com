import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useEffect,
	useState,
	useLayoutEffect
} from "react";

interface Theme {
	isDark: boolean;
	setIsDark: Dispatch<SetStateAction<boolean>>;
}

const initialTheme = {
	isDark: false,
	setIsDark: () => null as unknown as Dispatch<SetStateAction<boolean>>,
};
export const ThemeContext = createContext<Theme>(initialTheme);

function handleTheme(state: boolean) {
	localStorage.setItem("isDark", JSON.stringify(state));
}
function MyApp({ Component, pageProps }: AppProps) {
	const [isDark, setIsDark] = useState(true);

	useLayoutEffect(() => {
		if (localStorage.getItem("isDark")) {
			setIsDark(JSON.parse(localStorage.getItem("isDark") as string));
		}

		const html = document.querySelector("html");
		isDark ? html?.classList.add("dark") : html?.classList.remove("dark");
	}, [isDark]);
	return (
		<ThemeContext.Provider value={{ isDark, setIsDark }}>
			<Component {...pageProps} />
		</ThemeContext.Provider>
	);
}

export default MyApp;
