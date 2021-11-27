interface Project {
	about: {
		title: string;
		description: string;
		url: string;
		slug: string;
		tech: {
			client: string[];
			server: string[];
			deployment: string[];
		};
	};
	challenges: string[];
	learned: string[];
	different: string[];
}

export interface IProjects {
	content: Project;
}
