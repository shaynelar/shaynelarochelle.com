import Layout from "./Layout";
import Heading from "./Heading";
// import ProjectCard from "./ProjectCard";
import { ProjectCardData } from "../utils/types";
import dynamic from "next/dynamic";

export default function ProjectSection({ data }: ProjectCardData) {
	const ProjectCard = dynamic(() => import("./ProjectCard"), {
		loading: () => <div>Loading...</div>,
	});
	return (
		<Layout
			id="projects"
			as="section"
			className="flex flex-col min-h-screen p-4"
		>
			<Heading className="text-5xl lg:text-6xl text-white font-semibold mb-8 lg:my-12">
				Projects
			</Heading>
			<div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-4 lg:gap-6">
				{data.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</div>
		</Layout>
	);
}
