import { Dispatch } from "react";
import { IconType } from "react-icons";

interface IStack {
	name: string;
	icon: keyof IconType;
}

interface Project {
	about: {
		title: string;
		description: string;
		live: string | null;
		blog: string | null;
		github: string | null;
		slug: string;
		tech: {
			client: IStack[];
			server: IStack[];
			deployment: IStack[];
		};
	};
	challenges: string[];
	learned: string[];
	different: string[];
}

export type ActionType =
	| { type: "TOGGLETHEME" }
	| { type: "INITIALIZE"; payload: boolean };

export interface ThemeContextType {
	state: ThemeState;
	dispatch: Dispatch<ActionType>;
}

export interface ThemeState {
	isDark: boolean;
}

export interface IProjects {
	content: Project[];
}

export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
	Required<{ href: string }>;
