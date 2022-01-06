import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useReducer, useEffect } from "react";
import { initialTheme, ThemeContext } from "../utils/theme-context";
import themeReducer from "../utils/theme-reducer";

function MyApp({ Component, pageProps }: AppProps) {
	const [state, dispatch] = useReducer(themeReducer, initialTheme.state);

	useEffect(() => {
		if (localStorage.getItem("isDark")) {
			dispatch({
				type: "INITIALIZE",
				payload: JSON.parse(
					localStorage.getItem("isDark") as string
				) as boolean,
			});
		}
		const html = document.querySelector("html");
		state.isDark ? html?.classList.add("dark") : html?.classList.remove("dark");
	}, [state.isDark]);
	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			<Component {...pageProps} />
		</ThemeContext.Provider>
	);
}

export default MyApp;
