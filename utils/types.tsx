import { Dispatch } from "react";
import { IconType } from "react-icons";

interface IStack {
	name: string;
	icon: keyof IconType;
}

export interface Project {
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

export interface ProjectCardData {
	data: {
		title: string;
		about: string;
		image: string | null;
		video: string | null;
		type: {
			title: string;
			color: string;
		};
		svg: string[];
		blog: string | null;
		live: string | null;
		github: string | null;
	}[];
}

export interface BlogData {
	blogData: {
		title: string;
		tags: string[];
		url: string;
	}[];
}
export type IndexStaticResponse = ProjectCardData & BlogData;
export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
	Required<{ href: string }>;
