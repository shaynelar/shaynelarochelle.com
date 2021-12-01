import "../styles/globals.scss";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";

interface Theme {
	isDark: boolean;
	handleTheme: () => void;
}
export const ThemeContext = createContext<Theme>({} as Theme);

function MyApp({ Component, pageProps }: AppProps) {
	const [isDark, setIsDark] = useState(true);
	//Refactor this later
	function handleTheme() {
		setIsDark((dark) => !dark);
		localStorage.setItem("isDark", JSON.stringify(isDark));
		const html = document.querySelector("html");
		html?.classList.toggle("dark");
	}

	return (
		<ThemeContext.Provider value={{ isDark, handleTheme }}>
			<Component {...pageProps} />
		</ThemeContext.Provider>
	);
}

export default MyApp;
