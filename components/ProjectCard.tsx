import React from "react";
import Heading from "./Heading";
import { Icon } from "./TechBadge";
import Tag from "./Tag";
import Link from "next/link";
import { motion } from "framer-motion";
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

export default function ProjectCard({ project }: Props) {
	return (
		<Link href={project.url}>
			<a className="dark:project-card-dark project-card-light" href={project.url}>
				<motion.div
					id={`${project.title}-card`}
					className="p-8 md:p-12 rounded-2xl  dark:bg-dark bg-light shadow-lg shadow-xl max-w-2xl h-full"
					initial={{ opacity: 0, y: 150 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<Heading className="text-3xl font-semibold text-gray-100 my-8 lg:text-4xl ">
						{project.title}
					</Heading>
					<Tag label={project.type.title} color={project.type.color} />
					<p className="dark:text-gray-300 text-primary my-8 text-lg lg:text-xl">
						{project.about}
					</p>
					<div className="hidden sm:flex mb-4 p-4 py-6 dark:bg-primary bg-white rounded-lg flex-grow items-center justify-evenly shadow-lg">
						{project.svg.map((icon) => (
							<Icon key={icon} svg={icon} />
						))}
					</div>
				</motion.div>
			</a>
		</Link>
	);
}
