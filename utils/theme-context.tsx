import { createContext } from "react";
import { ThemeContextType } from "./types";

export const initialTheme: ThemeContextType = {
	state: {
		isDark: true,
	},
	dispatch: () => null,
};
export const ThemeContext = createContext<ThemeContextType>(initialTheme);