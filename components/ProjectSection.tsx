import data from "../data/project-card-data.json";
import Layout from "./Layout";
import Heading from "./Heading";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
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
