import { useReducer, useEffect, Dispatch } from "react";
import themeReducer from "../theme-reducer";
import { initialTheme } from "../theme-context";
import { ThemeState, ActionType } from "../types";

export default function useTheme(): [ThemeState, Dispatch<ActionType>] {
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
	return [state, dispatch];
}
