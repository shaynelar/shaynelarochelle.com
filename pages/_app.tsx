import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { createContext, Dispatch, useReducer, useLayoutEffect } from "react";

interface ThemeContextType {
	state: ThemeState;
	dispatch: Dispatch<ActionType>;
}

type ThemeState = {
	isDark: boolean;
};

const initialTheme: ThemeContextType = {
	state: {
		isDark: true,
	},
	dispatch: () => null,
};

type ActionType =
	| { type: "TOGGLETHEME" }
	| { type: "INITIALIZE"; payload: boolean };

function themeReducer(state: ThemeState, action: ActionType): ThemeState {
	switch (action.type) {
		case "INITIALIZE":
			localStorage.setItem("isDark", JSON.stringify(action.payload));
			return { isDark: action.payload };

		case "TOGGLETHEME":
			const currentState = { isDark: !state.isDark };
			localStorage.setItem("isDark", JSON.stringify(currentState.isDark));
			return currentState;
	}
}

export const ThemeContext = createContext<ThemeContextType>(initialTheme);

function handleTheme(state: boolean) {
	localStorage.setItem("isDark", JSON.stringify(state));
}
function MyApp({ Component, pageProps }: AppProps) {
	// const [isDark, setIsDark] = useState(true);
	const [state, dispatch] = useReducer(themeReducer, initialTheme.state);

	useLayoutEffect(() => {
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
