import { IconType } from "react-icons";

interface IStack {
    name: string;
    icon: keyof IconType;
}

interface Project {
	about: {
		title: string;
		description: string;
		url: string;
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

export interface IProjects {
	content: Project[];
}
