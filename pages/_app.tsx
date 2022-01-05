import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useEffect,
	useReducer,
	useState,
	useLayoutEffect,
} from "react";

interface Theme {
	state: {
		isDark: boolean;
	};

	setIsDark: Dispatch<ActionType>;
}

const initialTheme = {
	state: {
		isDark: false,
	},
	setIsDark: () => null,
};

type ActionType =
	| { type: "TOGGLETHEME" }
	| { type: "INITIALIZE"; payload: boolean };

function themeReducer(state: boolean, action: ActionType): boolean {
	switch (action.type) {
		case "INITIALIZE":
			localStorage.setItem("isDark", JSON.stringify(action.payload));
			return action.payload;

		case "TOGGLETHEME":
			const currentState = !state;
			localStorage.setItem("isDark", JSON.stringify(currentState));
			return currentState;
	}
}

export const ThemeContext = createContext<Theme>(initialTheme);

function handleTheme(state: boolean) {
	localStorage.setItem("isDark", JSON.stringify(state));
}
function MyApp({ Component, pageProps }: AppProps) {
	const [isDark, setIsDark] = useState(true);
	const [state, dispatch] = useReducer(themeReducer, false);

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
		isDark ? html?.classList.add("dark") : html?.classList.remove("dark");
	}, [isDark]);
	return (
		<ThemeContext.Provider value={{ state, disatch }}>
			<Component {...pageProps} />
		</ThemeContext.Provider>
	);
}

export default MyApp;
