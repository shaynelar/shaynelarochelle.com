import { ThemeState, ActionType } from "./types";

export default function themeReducer(
	state: ThemeState,
	action: ActionType
): ThemeState {
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
