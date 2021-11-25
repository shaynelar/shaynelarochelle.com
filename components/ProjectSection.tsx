import React from "react";
import FlexContainer from "./FlexContainer";
import Heading from "./Heading";
import data from "../data.json";
import ProjectCard from "./ProjectCard";

function ProjectSection() {
	return (
		<FlexContainer
			as="section"
			className="flex flex-col min-h-screen bg-primary p-4"
		>
			<Heading className="text-5xl text-center  font-bold text-white my-8">
				Projects
			</Heading>
			<div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-4">
				{data.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</div>
		</FlexContainer>
	);
}

export default ProjectSection;
