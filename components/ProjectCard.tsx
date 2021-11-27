import React from "react";
import Heading from "./Heading";
import { Icon } from "./TechBadge";
import Tag from "./Tag";
import Link from "next/link";

interface Props {
	project: {
		title: string;
		about: string;
		image: string;
		type: {
			title: string;
			color: string;
		};
		svg: string[];
		url: string;
	};
}

function ProjectCard({ project }: Props) {
	return (
		<div
			id={`${project.title}-card`}
			className="p-8 md:p-12 rounded-2xl bg-dark shadow-2xl shadow-xl max-w-2xl"
		>
			<Heading className="text-3xl font-semibold text-gray-100 my-8 lg:text-4xl ">
				<Link href={project.url}>
					<a
						className="transition duration-150 ease-in-out hover:underline"
						href={project.url}
					>
						{project.title}
					</a>
				</Link>
			</Heading>
			<Tag label={project.type.title} color={project.type.color} />
			<p className="text-gray-200 my-8 text-lg lg:text-xl">{project.about}</p>
			<div className="hidden sm:flex mb-4 p-4 bg-primary rounded-lg flex-grow items-center justify-evenly shadow-2xl">
				{project.svg.map((icon) => (
					<Icon key={icon} svg={icon} />
				))}
			</div>
		</div>
	);
}

export default ProjectCard;
