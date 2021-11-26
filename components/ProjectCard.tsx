import React from "react";
import { SiTypescript } from "react-icons/si";
import { ActionButton, NavButton } from "./Button";
import Heading from "./Heading";
import TechBadge, { Icon } from "./TechBadge";
import dynamic from "next/dynamic";
import Tag from "./Tag";

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
	};
}

function ProjectCard({ project }: Props) {
	return (
		<div
			id={`${project.title}-card`}
			className="p-8 md:p-12 rounded-2xl bg-dark shadow-2xl shadow-xl max-w-2xl"
		>
			{/* <img className="object-contain absolute top-0" src={image} /> */}

			<Heading className="text-3xl font-semibold text-gray-100 my-8 lg:text-4xl ">
				<a
					className="transition duration-150 ease-in-out hover:underline"
					href="#"
				>
					{project.title}
				</a>
			</Heading>
			<Tag label={project.type.title} color={project.type.color} />
			<p className="text-gray-200 my-8 lg:text-xl">{project.about}</p>
			<div className="hidden sm:flex mb-4 p-4 bg-primary rounded-lg flex-grow items-center justify-evenly shadow-2xl">
				{project.svg.map((icon) => (
					<Icon key={icon} svg={icon} />
				))}
			</div>
		</div>
	);
}

export default ProjectCard;
